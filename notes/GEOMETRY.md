
### Constants
When dealing with 3D geometry, there are some important constants that we have to work with, outlined in this code snippit:

~~~js
// It is helpful to know the names of the greek letters that we'll be using
// π is named 'pi'
// φ is named 'phi'
// ψ is named 'psi'

// The golden ratio is an important constant for 3D geometry.
// Classically, this ratio is denoted by 'phi'.
// φ = ( 1 + √5) / 2

// The golden ratio's inverse has some interesting properties.
// 1/φ = 2 / ( 1 + √5)
// 1/φ = (-1 + √5) / 2
// φ-1 = (-1 + √5) / 2

// Let's set another variable for its inverse; it will also be useful.
// We can arbitrarily denote this ratio with 'psi'.
// ψ = (-1 + √5) / 2

// Pi is naturally very important for 3D geometry
// π = circumference / diamter

// Pi can be expressed in other ways, if you are interested
// π = 4∫x=(0,1) {√(1-x²)dx}

const φ = ( 1 + Math.sqrt(5)) / 2
const ψ = (-1 + Math.sqrt(5)) / 2
const π = Math.PI

~~~

### Cartesian Product
A *Cartesian Product*, or *Cross Product*, is a geometric structure deeply embedded in linear algebra. These products will denote the location of an array of vertices in 3D space with X, Y, and Z coordinates. A *Vertex* is a point on a 3D body where two or more edges collide into a corner.

These cartesian products are further explored in the code snippit below:

~~~js
// A cartesian product is a two-dimensional matrix of numbers.
// Each row represents a group of similar vertices.
// Each column represents a series of coordinates.

// Often, the value of a cartesian product is one of two numbers, for example ±1.
//
// | x  | y  | z  |
// |----|----|----|
// | -1 | ±1 |  1 |
// |  1 | -1 | ±1 |
// | ±1 |  1 | -1 |

// In these cases, javascript cannot represent two numbers with a single float value.
// Instead we must use some sort of structure, like another array.
//
// | x      | y      | z      |
// |--------|--------|--------|
// |   [-1] | [1,-1] |    [1] |
// |    [1] |   [-1] | [1,-1] |
// | [1,-1] |    [1] |   [-1] |

// In javascript, such a construct can be represented by a three-dimensional array.
// Notice that the order only matters when distinguishing between X, Y, and Z coordinates.
// The order of vertices and the order of multi-value points does not make a difference.

[
	// vertex group 1
	[
		// X coordinate
		[-1],
		// Y coordinate
		[1,-1],
		// Z coordinate
		[1]
	],
	// vertex group 2
	[
		// X coordinate
		[1],
		// Y coordinate
		[-1],
		// Z coordinate
		[1,-1]
	],
	// vertex group 3
	[
		// X coordinate
		[1,-1],
		// Y coordinate
		[1],
		// Z coordinate
		[-1]
	]
]

// Such arrays will henceforth be written with fewer lines of code.

[
	[[-1],[1,-1],[1]],
	[[1],[-1],[1,-1]],
	[[1,-1],[1],[-1]]
]

~~~

### Vertex Matrices
A cartesian product defines a geometric body in a raw form, but it isn't quite useable in its state. The difference between a cartesian product and matrix of vertices lies in what each row represents.
- A row in a cartesian product represents a group of similar vertices.
- A row in a matrix of vertices represents a single, unique vertex.

A matrix of vertices must be extracted from a cartesian product to be useable in the program. A method will be created for this purpose.

These notes are further explored within the code snippit below:

~~~js
// placeholder

// input
[
	[[-1],[1,-1],[1]],
	[[1],[-1],[1,-1]],
	[[1,-1],[1],[-1]]
]

// expected output
[
	[-1, 1, 1],
	[-1,-1, 1],
	[ 1,-1, 1],
	[ 1,-1,-1],
	[ 1, 1,-1],
	[-1, 1,-1]
]

~~~

### Face Matrices
Ultimately, this program needs to render each face which a 3D body has. A *Face* is a flat side on a 3D body. A face is often defined by a number of vertices that define its endpoints.

In turn, a matrix of faces is needed to generate the final shape, often called a *Mesh*.

A matrix of faces can be extracted from a matrix of vertices. A method will be created in the program for this purpose.

The function and these notes are explained below in detail:

~~~js
// placeholder
~~~

## Sample Cartesian Products
Here are some samples of cartesian products, which represent different shapes.


~~~js
// Regular Tetrahedron
// 4-sided figure

// | x  | y  | z     |
// |----|----|-------|
// | ±1 |  0 | -1/√2 |
// |  0 | ±1 |  1/√2 |

[
	[[1,-1],[0],[-1/Math.sqrt(2)]
	[[0],[1,-1],[ 1/Math.sqrt(2)]
]
~~~

~~~js
// Regular Hexahedron (AKA Cube)
// 6-sided figure

// | x  | y  | z  |
// |----|----|----|
// | ±1 | ±1 | ±1 |

[
	[[1,-1],[1,-1],[1,-1]]
]
~~~

~~~js
// Regular Octohedron
// 8-sided figure

// | x  | y  | z  |
// |----|----|----|
// | ±1 |  0 |  0 |
// |  0 | ±1 |  0 |
// |  0 |  0 | ±1 |

[
	[[1,-1],[0],[0]],
	[[0],[1,-1],[0]],
	[[0],[0],[1,-1]]
]
~~~

~~~js
// Regular Dodecahedron
// 12-sided figure

// | x          | y          | z          |
// |------------|------------|------------|
// |        0   | ±( 1 + ψ ) | ±( 1 - ψ²) |
// | ±( 1 + ψ ) | ±( 1 − ψ²) |        0   |
// | ±( 1 - ψ²) |        0   | ±( 1 + ψ ) |
// |       ±1   |       ±1   |       ±1   |

[
	[[0],[(1 + ψ),-(1 + ψ)],[(1 - Math.pow(ψ,2)),-(1 - Math.pow(ψ,2))]],
	[[(1 + ψ),-(1 + ψ)],[(1 - Math.pow(ψ,2)),-(1 - Math.pow(ψ,2))],[0]],
	[[(1 - Math.pow(ψ,2)),-(1 - Math.pow(ψ,2))],[0],[(1 + ψ),-(1 + ψ)]],
	[[1,-1],[1,-1],[1,-1]]
]
~~~

~~~js
// Regular Icosahedron
// 20-sided figure

// | x  | y  | z  |
// |----|----|----|
// |  0 | ±1 | ±φ |
// | ±1 | ±φ |  0 |
// | ±φ |  0 | ±1 |

[
	[[0],[1,-1],[φ,-φ]],
	[[1,-1],[φ,-φ],[0]],
	[[φ,-φ],[0],[1,-1]]
]
~~~

<!--
## More Info
**twenty sides information:**
~~~js
// cartesian product
[ 0, ±1, ±φ]
[±1, ±φ,  0]
[±φ,  0, ±1]

const d20_vertices = [
		[-1,  φ,  0],
		[ 1,  φ,  0],
		[-1, -φ,  0],
		[ 1, -φ,  0],
		[ 0, -1,  φ],
		[ 0,  1,  φ],
		[ 0, -1, -φ],
		[ 0,  1, -φ],
		[ φ,  0, -1],
		[ φ,  0,  1],
		[-φ,  0, -1],
		[-φ,  0,  1]
	];

// coordinates equate to
// pt1 pt2 pt3 num
// the pts can be found in vertices
// the pts are a reference to the index of the vertices array
// the num is literally just the resulting number on the face
const d20_faces = [
	[ 0, 11,  5,  1],
	[ 0,  5,  1,  2],
	[ 0,  1,  7,  3],
	[ 0,  7, 10,  4],
	[ 0, 10, 11,  5],
	[ 1,  5,  9,  6],
	[ 5, 11,  4,  7],
	[11, 10,  2,  8],
	[10,  7,  6,  9],
	[ 7,  1,  8, 10],
	[ 3,  9,  4, 11],
	[ 3,  4,  2, 12],
	[ 3,  2,  6, 13],
	[ 3,  6,  8, 14],
	[ 3,  8,  9, 15],
	[ 4,  9,  5, 16],
	[ 2,  4, 11, 17],
	[ 6,  2, 10, 18],
	[ 8,  6,  7, 19],
	[ 9,  8,  1, 20]
]
~~~ -->
