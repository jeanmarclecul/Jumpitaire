import * as THREE from 'three'
import Cube from './models/Cube'


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, iw / ih)
const light = new THREE.PointLight(0xeeeeee)

let cubes = []
for (let i = 1; i < 3; i += 0.5) {
  cubes.push(new Cube({ type: "E" + i * 2, x: i / 2, y: i / 2, z: 0, sizex: 0.5, sizey: 0.5, sizez: 0.5, color: `#0${i * 2}${i * 2}000` }))
}
let player1 = new Cube({ type: "P1", x: -1, y: -1, z: 0.5, sizex: 0.5, sizey: 0.5, sizez: 0.5, color: '#0000ff' })
scene.add(player1.mesh)
cubes.forEach(cube => scene.add(cube.mesh))
scene.add(light)

camera.position.set(0, 0, 3)
light.position.set(0, 0, 3)
const renderer = new THREE.WebGLRenderer({ canvas })

function onKeyPress(event) {
  switch (event.code) {
    case 'KeyW':
      player1.move('up')
      break;
    case 'KeyS':
      player1.move('down')
      break;
    case 'KeyA':
      player1.move('left')
      break;
    case 'KeyD':
      player1.move('right')
      break;
  }
}

window.addEventListener('keydown', onKeyPress)

loop()

function loop() {
  requestAnimationFrame(loop)
  player1.animate()
  cubes.forEach(cube => cube.animate())
  renderer.render(scene, camera)
}


