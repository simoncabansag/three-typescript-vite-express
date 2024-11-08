import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js"
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js"
import { Scene } from "three/src/scenes/Scene.js"
import { BoxGeometry } from "three/src/geometries/BoxGeometry.js"
import { Mesh } from "three/src/objects/Mesh.js"
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial.js"

const scene = new Scene()
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: 0x00ff00 })
const cube = new Mesh(geometry, material)
scene.add(cube)

function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)

camera.position.z = 5
