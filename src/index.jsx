import "./index.css";
import { Component } from 'react';
import * as React from 'react'
import ReactDOM from "react-dom";

import Projects from "./Projects";
import Body from "./Body";

const THREE = window.THREE;

class App extends Component {
    
  	componentDidMount() {
	  	const SEPARATION = 75, AMOUNTX = 100, AMOUNTY = 100;
    	let camera, scene, renderer;
    	let particles, particle, count = 0;
    	let offsetX = 0, offsetY = -500;

		function init() {
			camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 2000 );
			camera.position.z = 1000; // Good var to change
			scene = new THREE.Scene();
			particles = new Array();
			var PI2 = Math.PI * 2;
			var geometry = new THREE.Geometry();
			var material = new THREE.SpriteCanvasMaterial({
				color: 0xffffff,
				program: function ( context ) {
					context.beginPath();
					context.arc( 0, 0, 0.4, 0, PI2, true );
					context.fill();
				}
			});

			var i = 0;
			for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
				for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
					particle = particles[ i ++ ] = new THREE.Sprite( material );
					particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
					particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
					scene.add(particle);
					if (i > 0) {
						geometry.vertices.push( particle.position );
					}
				}
			}
			renderer = new THREE.CanvasRenderer();

			renderer.setSize(window.innerWidth, window.innerHeight);

			if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				window.addEventListener( 'resize', onWindowResize, false );
			}
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

		function animate() {
			requestAnimationFrame( animate );
			render();
		}
		
		function render() {
			renderer.setClearColor( 0x000000, 1); //0x07074e
			camera.position.x += ( offsetX - camera.position.x ) * .05;
			camera.position.y += ( - offsetY - camera.position.y ) * .05;
			camera.lookAt( scene.position );
			var i = 0;
			for (var ix = 0; ix < AMOUNTX; ix++) {
				for (var iy = 0; iy < AMOUNTY; iy++) {
					particle = particles[i++];
					particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
					particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
				}
			}
			renderer.render(scene, camera);
			count += 0.07;
		}

		init();
		this.mount.appendChild( renderer.domElement );
		animate();
  	}


	render(){
		return (
			<React.Fragment>
				<header>
					<h1>David Cottrell</h1>
					<br/>
					<p>Student at Birmingham City University</p>
				</header>
				<div ref={ref => (this.mount = ref)} />

				<Body

					projects={<Projects />}
				
				/>


			</React.Fragment>
		);
	};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);