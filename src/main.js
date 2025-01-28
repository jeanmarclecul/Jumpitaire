import * as THREE from 'three'
import Cube from './models/Cube'
import PlaneFloor from './models/PlaneFloor'
import PlaneSky from './models/PlaneSky'


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, iw / ih)
const light = new THREE.PointLight(0xeeeeee)

scene.add(new PlaneFloor().mesh);
scene.add(new PlaneSky().mesh)

// add cubes
let cubes = []
for (let i = 1; i < 3; i += 0.5) {
  cubes.push(new Cube({ type: "E" + i * 2, x: i * 1.5, y: i / 2, z: i / 2, sizex: 0.5, sizey: 0.5, sizez: 0.5, map: new THREE.TextureLoader().load('Texturelabs_InkPaint_392S.jpg') }))
}

let player1 = new Cube({ type: "P1", x: -1, y: -1, z: 0.5, sizex: 0.5, sizey: 0.5, sizez: 0.5, map: new THREE.TextureLoader().load('Texturelabs_Wood_120S.jpg') })
scene.add(player1.mesh)
cubes.forEach(cube => scene.add(cube.mesh))
scene.add(light)

// adjust camera angle and position
camera.position.set(0, 1, 10)
camera.lookAt(0, -0.5, -6)
light.position.set(0, 0, 10)
const renderer = new THREE.WebGLRenderer({ canvas })

//// controls
const keysPressed = new Set();
function onKeyPress(event) {
  keysPressed.add(event.code);
}
function onKeyRelease(event) {
  keysPressed.delete(event.code);
}
window.addEventListener('keydown', onKeyPress);
window.addEventListener('keyup', onKeyRelease);
function updatePlayerMovement() {
  if (keysPressed.has('KeyW')) player1.move('up');
  if (keysPressed.has('KeyS')) player1.move('down');
  if (keysPressed.has('KeyA')) player1.move('left');
  if (keysPressed.has('KeyD')) player1.move('right');
}

loop()

function loop() {
  requestAnimationFrame(loop)
  updatePlayerMovement()
  player1.animate()
  cubes.forEach(cube => cube.animate())
  renderer.render(scene, camera)
}


