// credits to craftz.dog

import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'ThreeModel'
        obj.position.y = 7
        obj.position.x = 0
        obj.position.z = -2
        obj.rotateX(0.5)
        obj.rotateY(180)
        obj.rotateZ(0.3)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child:any) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}