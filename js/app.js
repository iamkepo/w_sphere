const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const texture1 = new THREE.TextureLoader().load('./img/s31urju-a-rocky-shore-next-to-a-body-of-water.jpeg');
const texture2 = new THREE.TextureLoader().load('./img/4.jpg');
const material = new THREE.MeshBasicMaterial( {
  map: texture1,
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

// Ajoute un bouton au DOM
const button = document.createElement("button");
button.textContent = "Changer la texture";
document.body.appendChild(button);

// Ajoute un gestionnaire d'événement pour le clic sur le bouton
button.addEventListener("click", function() {
  // Change la texture en fonction de l'état actuel
  if (material.map === texture1) {
    material.map = texture2;
  } else {
    material.map = texture1;
  }
  // Met à jour la texture du matériau
  material.needsUpdate = true;
});

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

animate();
