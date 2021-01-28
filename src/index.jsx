import "./index.css";
import { Component } from 'react';
import * as React from 'react'
import ReactDOM from "react-dom";
import anime from 'animejs/lib/anime.es.js';

import Wave from './Wave';

import Body from "./Body";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";


class App extends Component {

	componentDidMount(){
		// Wrap every letter in a span
		var textWrapper = document.querySelector('.ml11 .letters');
		textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

		anime.timeline({loop: false})
		.add({
			targets: '.ml11 .line',
			scaleY: [0,1],
			opacity: [0.5,1],
			easing: "easeOutExpo",
			duration: 700
		})
		.add({
			targets: '.ml11 .line',
			translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 50],
			easing: "easeOutExpo",
			duration: 700,
			delay: 100
		}).add({
			targets: '.ml11 .letter',
			opacity: [0,1],
			easing: "easeOutExpo",
			duration: 600,
			offset: '-=775',
			delay: (el, i) => 34 * (i+1)
		}).add({
			targets: '.line',
			opacity: 0,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 50
		})
	}
    
	render(){
		return (
			<React.Fragment>
				
				<header>
					<h1 class="ml11">
						<span class="text-wrapper">
							<span class="line line1"></span>
							<span class="letters">David Cottrell</span>
						</span>
					</h1>
					<p>Student at Birmingham City University</p>
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