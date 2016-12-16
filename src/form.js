import React, { Component } from 'react';
import './form.css';

class Formulaire extends Component {
  render() {
    return (

      <div className="formulaire" id="contactMail">
        <h2 className="titleContact "> Contacts </h2>
        <div className="ui centered ">
            <div className="ui equal width form ">
              <div className="fields" id="nameInput">
              <div className="field">
                      <label><h4>Nom</h4></label>

                      <input placeholder="Jean" type="text" className="inputInfos"/>
                      <label><h4>Prénom</h4></label>

                      <input placeholder="Dupont" type="text" className="inputInfos"/>
                      <label><h4>Mail</h4></label>

                      <input placeholder="dupont@gmail.com" type="text"/>
              </div>
              <div className="field">
                      <label>Text</label>
                      <textarea></textarea>
                      <button className="ui teal button">Envoyer mail</button>
                      </div>
              </div>
            </div>
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











