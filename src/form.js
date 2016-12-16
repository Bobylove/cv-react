

import React, { Component } from 'react';
import './form.css';

class Formulaire extends Component {
  render() {
    return (

      <div className="formulaire" id="contactMail">
        <div className="ui big form">
          <div className="two fields">
            <div className="field">
              <label>Nom</label>
                <input placeholder="Jean" type="text"/>
            <label>Mail</label>
            <input placeholder="dupont@gmail.com" type="text"/>
            </div>
          <div className="field">
              <label>Prénom</label>
              <input placeholder="Dupont" type="text"/>
        </div>
       </div>
      </div>
      <div className="ui form">
          <div className="field">
             <label>message</label>
              <textarea></textarea>
                </div>
              <div className="ui submit button">Envoyer</div>
             </div>
          </div>
      );
  }
}

export default Formulaire;











