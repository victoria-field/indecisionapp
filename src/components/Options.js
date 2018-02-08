import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div >
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--btn"
          onClick={props.handleDeleteOptions}>Remove ALL</button>
      </div>

      {props.options.length === 0 && <p className="widget__message">please add a option to get started</p>}
      <ol>
        {props.options.map((option, index) =>
          <Option
            key={option}
            optionText={option}
            count = {index + 1}
            handleDeleteOption ={props.handleDeleteOption}/>)
        }
      </ol>
    </div>
  );


export default Options;
