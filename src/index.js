import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Exp from './exp';
import Formation from './formation';
import Formulaire from './form';
import Aboutme from './aboutMe';
import './index.css';

ReactDOM.render(
	<div>
	<App />
	<Aboutme />
	<Exp />
	<Formation />
	<Formulaire />
	</div>
	,document.getElementById('root')
	);
