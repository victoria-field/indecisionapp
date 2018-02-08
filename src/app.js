// yarn run build
// yarn run server
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor(){
//     this.name = 'Mike';
//   }
// }
//
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
//
//
// class NewSyntax {
//   name = "hen";
// }
//
// const newSyntax = new NewSyntax();
// console.log(newSyntax);
