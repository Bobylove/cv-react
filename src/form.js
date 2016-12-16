import React, { Component } from 'react';
import './form.css';

class Formulaire extends Component {
  render() {
    return (

      <div className="formulaire" id="contactMail">
        <div className="ui normal form">
          <div className="two fields">
            <div className="field inputInf">
              <label>Nom</label>
                <input placeholder="Jean" type="text" className="inputInfos"/>
            <label>Mail</label>
            <input placeholder="dupont@gmail.com" type="text"/>
            </div>
          <div className="field inputInf">
              <label>Prénom</label>
              <input placeholder="Dupont" type="text" className="inputInfos"/>
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
             <div className="footerIcones">
             <a href="#"><i className="facebook icon huge"></i></a>
             <i className="github icon huge"></i>
             <i className="twitter icon huge"></i>
             <i className="linkedin icon huge"></i>
             </div>

          </div>
      );
  }
}

export default Formulaire;











