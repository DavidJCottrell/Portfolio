import "./Styles/General.css";
import "./Styles/Header.css";
import "./Styles/Content.css";
import { Component } from 'react';
import * as React from 'react'
import ReactDOM from "react-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import Wave from './Components/Wave';

import Body from "./Body";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";


class App extends Component {

    componentDidMount(){
		setTimeout(()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 250);
	}


    
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