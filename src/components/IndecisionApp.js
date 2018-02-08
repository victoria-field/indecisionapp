import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    // title: 'Indecision App',
    subtitle: 'If you cant make a decision Let this program make it for you',
    options: [],
    selectedOption: undefined

  };

  handleDeleteOptions = () => {
      this.setState(()=>({
        options:[]
      }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));

  }

  handleAddOption = (option) =>{
    if(!option){
      return 'enter valid value to add item'
    }else if (this.state.options.indexOf(option) > -1){
      return "this option already exists"
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  handleModalClose = () => {
    this.setState(() =>({
      selectedOption: undefined
    }))

  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({selectedOption: option}))
  }

  componentDidMount = () => {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(()=> ({options: options}));
      }

    }catch(e){


    }
}
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
        console.log("saving data");
    }

  }


  render() {
    // const title = 'Indecision App';
    // const subtitle = 'If you cant make a decision Let this program make it for you';


    return(
      <div>
        <Header subtitle={this.state.subtitle}/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <div className="widget-box">
            <Options options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}/>
            <AddOption
              handleAddOption={this.handleAddOption}/>
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleModalClose={this.handleModalClose}/>
        </div>
        </div>
        );
  }
}
