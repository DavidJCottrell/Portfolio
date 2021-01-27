import "./index.css";
import { Component } from 'react';
import * as React from 'react'
import ReactDOM from "react-dom";

import profileImg from './assets/images/me.jpeg';

import Wave from './Wave';

import Body from "./Body";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";


class App extends Component {
    
	render(){
		return (
			<React.Fragment>
				
				<header>
					{/* <img src={ profileImg } alt="" id="profileImg" /> */}
					<h1>David Cottrell</h1>
					<p>Student at Birmingham City University</p>
				</header>
				
				<Wave />

				<br/>

				<Body

					projects = {<Projects />}
					about = {<About />}
					skills = { <Skills /> }
				
				/>

				<br/><br/><br/><br/><br/>
			</React.Fragment>
		);
	};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);