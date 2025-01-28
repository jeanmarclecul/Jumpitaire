import * as THREE from 'three'

class Cube {
    type
    mesh
    life
    jump
    speed
    size
    dash

    constructor({ type, x, y, z, sizex, sizey, sizez, color, map }) {
        const geometry = new THREE.BoxGeometry(sizex, sizey, sizez)
        const material = map ? new THREE.MeshPhongMaterial({ map: map }) : new THREE.MeshPhongMaterial({ color: color });
        // const material = new THREE.MeshPhongMaterial({ color: color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = x
        this.mesh.position.z = y
        this.mesh.position.z = z
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.mesh.position.z -= 0.1;
                break;
            case 'down':
                this.mesh.position.z += 0.1;
                break;
            case 'left':
                this.mesh.position.x -= 0.1;
                break;
            case 'right':
                this.mesh.position.x += 0.1;
                break;
        }
    }

    animate() {
        this.mesh.rotation.y += 0.05;
        this.mesh.rotation.z += 0.02;
    }
}

export default Cube
