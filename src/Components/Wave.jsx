import React, { Component } from 'react';

const THREE = window.THREE;

class Wave extends Component {

    componentDidMount() {
        const SEPARATION = 60, AMOUNTX = 115, AMOUNTY = 70; //80 115 100
        let camera, scene, renderer;
        let particles, particle, count = 0;
        let offsetX = 0, offsetY = -400; //-500
        let windowOffset = 0;
        // let windowHalfX = window.innerWidth / 2;
        // let windowHalfY = window.innerHeight / 2;
      
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.addEventListener( 'resize', onWindowResize, false );
            windowOffset = 20;
        }

        this.init = () => {
            camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 2000 );
            camera.position.z = 1800; //1000
            scene = new THREE.Scene();
            particles = [];
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

            document.addEventListener( 'scroll', onScroll );
            
            window.addEventListener("orientationchange", onOrientationChange);

            if(this.props.sizeX == null || this.props.sizeY == null){
                renderer.setSize(window.innerWidth - windowOffset, window.innerHeight);
            }else{
                renderer.setSize(this.props.sizeX, this.props.sizeY);
            }
        }

        function onOrientationChange(){
            //Landscape
            if(window.innerHeight > window.innerWidth){
                //Bad bug with IOS and Chrome browser with orientation changes
                window.location.reload();
            }else{
                window.location.reload();
            }
        }

        function onScroll(){
            if(window.scrollY < 1000){
                offsetY = -(window.scrollY + 500);
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth - windowOffset, window.innerHeight );
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

        this.init();
        this.mount.appendChild( renderer.domElement );
        animate();

    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        );
    }
}

export default Wave;