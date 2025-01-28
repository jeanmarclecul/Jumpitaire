import * as THREE from 'three'

class PlaneFloor {
    mesh

    constructor() {
        const floorGeometry = new THREE.PlaneGeometry(40, 30);
        const floorTexture = new THREE.TextureLoader().load('Poliigon_MetalRust_7642_BaseColor.jpg')
        const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
        this.mesh = new THREE.Mesh(floorGeometry, floorMaterial);
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.position.y = -1;
    }
}

export default PlaneFloor;

