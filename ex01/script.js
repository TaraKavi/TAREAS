import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

//object (needs mesh, material and geometry)
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//camera (theoretical point of view for rendering)
const sizes = {
    width: 800,
    height: 600
}
// 75 muy amplio
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
 
//renderer from camera's pov
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
