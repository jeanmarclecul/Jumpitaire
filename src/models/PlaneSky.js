import * as THREE from 'three'

class PlaneSky {
    mesh
    // Create the sky plane
    constructor() {
        const skyGeometry = new THREE.PlaneGeometry(2000, 1000); // Large size for the sky plane
        const skyTexture = new THREE.TextureLoader().load('Texturelabs_Sky_172S.jpg'); // Replace with your sky texture
        const skyMaterial = new THREE.MeshBasicMaterial({ map: skyTexture, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(skyGeometry, skyMaterial);

        // Position the sky plane far back and parallel to the Y-axis
        this.mesh.position.z = -1000; // Move it far back along the Z-axis
        // skyPlane.rotation.y = Math.PI / 2; // Rotate to make it parallel to the Y-axis
    }
}

export default PlaneSky;