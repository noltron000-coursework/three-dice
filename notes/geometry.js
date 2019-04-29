/* eslint-disable */

const φ = ( 1 + Math.sqrt(5)) / 2
const ψ = (-1 + Math.sqrt(5)) / 2
const π = Math.PI

class Shape {
	constructor() {
		// metrics
		this.radius    = 0  // distance from vertex to origin
		this.volume    = 0  //
		this.faceArea  = 0  // surface area of a single face
		this.surfArea  = 0  // surface area covering object
		// counters
		this.vertCount = 0  // number of vertices
		this.edgeCount = 0  //
		this.faceCount = 0  //
		// arrays
		this.cartesian = [] // cartesian product
		this.vertices  = [] // vertices
		this.edges     = [] //
		this.faces     = [] //
	}
}


class RegularTetrahedron extends Shape {
	constructor() {
		super()
		this.cartesian = [
			[[1, -1], [0], [-1 / Math.sqrt(2)]],
			[[0], [1, -1], [ 1 / Math.sqrt(2)]]
		]
	}
}


class RegularHexahedron extends Shape {
	constructor() {
		super()
		this.cartesian = [
			[[1, -1], [1, -1], [1, -1]]
		]
	}
}


class RegularOctahedron extends Shape {
	constructor() {
		super()
		this.cartesian = [
			[[1, -1], [0], [0]],
			[[0], [1, -1], [0]],
			[[0], [0], [1, -1]]
		]
	}
}


class RegularDodecahedron extends Shape {
	constructor() {
		super()
		this.cartesian = [
			[[0], [(1 + ψ), -(1 + ψ)], [(1 - ψ**2), -(1 - ψ**2)]],
			[[(1 + ψ), -(1 + ψ)], [(1 - ψ**2), -(1 - ψ**2)], [0]],
			[[(1 - ψ**2), -(1 - ψ**2)], [0], [(1 + ψ), -(1 + ψ)]],
			[[1, -1], [1, -1], [1, -1]]
		]
	}
}


class RegularIcosahedron extends Shape {
	constructor() {
		super()
		this.cartesian = [
			[[0], [1, -1], [φ, -φ]],
			[[1, -1], [φ, -φ], [0]],
			[[φ, -φ], [0], [1, -1]]
		]
	}
}
