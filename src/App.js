import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="titre" id="aboutMe">
      <h1 className="titreHead">Delon Frédéric</h1>
      <h3 className="titreHead2"> Courtois, Rigoureux, Intuitif.</h3>
      

      </div>
      <div className="App-header">
      <div className="ui five item menu" id="stickyBar">
      <a className="item" href="#aboutLink">À propos</a>
      <a className="item" href="#exp">Compétences</a>
      <a className="item" href="#formation">Formations</a>
      <a className="item">Expérience professionelle</a>
      <a className="item" href="#contactMail">Contacts</a>
      </div>
      
      </div>
      </div>
      );
    }
  }

  export default App;
