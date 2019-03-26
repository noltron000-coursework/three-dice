# Three Dice
*Generate 3D dice rolls*

Three Dice aims to ease 3D dice rolling in the web. It will render a 'dice tray' scene, and throw inputted 3D dice into it. The resulting numbers can be random or pregenerated.

## Usage
The module utilizes classes to simplify your web dice needs.
```js
// this is psuedocode at the moment
import * as ThreeDice from 'three-dice'
const Scene = new ThreeDice.Tray
Scene.roll('1d6')
```

## Dependancies

### Three.js
> Three.js is a lightweight cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser. Three.js scripts may be used in conjunction with the HTML5 canvas element, SVG or WebGL.

We use `three.js` to handle all our 3D models and scenes.

### Cannon.js
> Inspired by three.js and ammo.js, and driven by the fact that the web lacks a physics engine, here comes cannon.js. The rigid body physics engine includes simple collision detection, various body shapes, contacts, friction and constraints.

We use `cannon.js` to handle our collisions and gravity.

# Credits
This project is attempting to become a successor to [`threejs-dice`](https://www.npmjs.com/package/threejs-dice) with better documentation and support. Our goal is being able to recreate the [Teal Dice](http://a.teall.info/dice/) website easily with our npm module.

Without either of those projects, it is likely that this repository would never have been initialized.
