import "./index.css";
import { Component } from 'react';
import * as React from 'react'
import ReactDOM from "react-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import Wave from './Wave';

import Body from "./Body";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";


class App extends Component {
    
	render(){
		return (
			<React.Fragment>
				
				<header>
					
					<ScrollAnimation animateIn='fadeIn' duration={1} >
						<h1>David Cottrell</h1>
					</ScrollAnimation>

					<ScrollAnimation animateIn='fadeInUp' duration={1} delay={750}>
						<p >Student at Birmingham City University</p>
					</ScrollAnimation>

				</header>
				
				<Wave />

				<br/>

				<Body

					projects = {<Projects />}
					about = {<About />}
                    skills = { <Skills /> }
                    
                    footer = { <Footer /> }
				
				/>

			</React.Fragment>
		);
	};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);