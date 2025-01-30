import * as THREE from 'three'

class Cube {
    type
    mesh
    life
    jump = false
    fall = false
    speed
    size
    dash
    velocity = { y: 0 }
    fallControl = 5

    constructor({ type, x, y, z, sizex, sizey, sizez, color, map, fallControl }) {
        const geometry = new THREE.BoxGeometry(sizex, sizey, sizez)
        const material = map ? new THREE.MeshPhongMaterial({ map: map }) : new THREE.MeshPhongMaterial({ color: color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = x
        this.mesh.position.z = y
        this.mesh.position.z = z
        // this.fallControl = fallControl || 0;
        console.log(this.fallControl)
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
            case 'jump':
                if (!this.jump) {
                    this.jump = true;
                    this.velocity.y = 0.2;
                }
                break;
        }
    }

    animate() {
        this.mesh.rotation.y += 0.05;
        this.mesh.rotation.z += 0.02;

        if (this.jump) {
            this.mesh.position.y += this.velocity.y;
            this.velocity.y -= 0.01;

            // Apply fall control movement in the last direction
            if (this.fallControl > 0) {
                const controlFactor = this.fallControl / 10;
                switch (this.lastDirection) {
                    case 'up':
                        this.mesh.position.z -= 0.1 * controlFactor;
                        break;
                    case 'down':
                        this.mesh.position.z += 0.1 * controlFactor;
                        break;
                    case 'left':
                        this.mesh.position.x -= 0.1 * controlFactor;
                        break;
                    case 'right':
                        this.mesh.position.x += 0.1 * controlFactor;
                        break;
                }
            }

            if (this.mesh.position.y <= 0) {
                this.mesh.position.y = 0;
                this.jump = false;
                this.velocity.y = 0;
            }
        }
    }
}

export default Cube
