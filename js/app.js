const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const texture = new THREE.TextureLoader().load('./img/s31urju-a-rocky-shore-next-to-a-body-of-water.jpeg');
const material = new THREE.MeshBasicMaterial( {
  map: texture,
  side: THREE.DoubleSide

} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 1, 0, 0 );
controls.update();

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
animate();
