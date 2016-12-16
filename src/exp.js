import React, { Component } from 'react';
import './exp.css';

class Exp extends Component {
	render() {
		return (
			<div className="exp" id="exp">
			<h2 className="skills" >Compétences</h2>
			<h6 className="skillSousTitre">test soustitres </h6>
			<p>Diagnostiquer des dysfonctionements , Assuer une maintenance informatique, prendre des appels, </p>
			<div className="skill1"> HTML / CSS
			</div>
			<div className="skill2"> Bootstrap 
			</div>
			<div className="skill3"> Javascript
			</div>
			<div className="skill4"> <img src="favicon.ico" alt="react"/>
			</div>
			<div className="skill5"> Semantic
			</div>
			<div className="skill6"> NodeJS 
			</div>
			<div className="skill7"> Frameworks
			</div>
			<div className="skill8"> Linux Debian
			</div>


			</div>
			);
	}
}

export default Exp;

