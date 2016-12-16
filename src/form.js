import React, { Component } from 'react';
import './form.css';

class Formulaire extends Component {
  render() {
    return (

      <div className="formulaire" id="contactMail">
      <h2 className="titleContact"> Contacts </h2>

      <div className="ui input" id="nameInput">
              <label>Nom</label>
              <input placeholder="Jean" type="text" className="inputInfos"/>
      </div>
            
            <div className="ui input" id="lastInput">
              <label>Prénom</label>
              <input placeholder="Dupont" type="text" className="inputInfos"/>
            </div>

            <div className="ui input" id="mailInput">
             <label>Mail</label>
             <input placeholder="dupont@gmail.com" type="text"/>
            </div>
              <div className="area">
              <label>message</label>
              <textarea></textarea>
          
                <button className="ui primary button">Envoyer mail</button>
           
      </div>
      <div className="footerIcones">
      <a href="#"><i className="facebook icon huge"></i></a>
      <a href="#"><i className="github icon huge"></i></a>
      <a href="#"><i className="twitter icon huge"></i></a>
      <a href="#"><i className="linkedin icon huge"></i></a>
      </div>


      </div>
      );
    }
  }

  export default Formulaire;











