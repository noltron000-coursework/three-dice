# 3D Mesh Maker
The ultimate purpose of this file is to output 3D meshes to be used with `THREE.js`.

A 3D mesh can be abstracted to several levels; this application is meant to handle each of these.  
- Given a matrix of faces or edges, a 3D mesh can be generated.
- Given a matrix of vertices, a matrix of faces or edges can be determined, 
- Given a cartesian product, a matrix of vertices can be determined.

With these notes in mind, our goal can be fulfilled given any of these four values as an input.

## TODO
- [ ] Generate a matrix of vertices from a cartesian product
- Faces:
	- [ ] Generate a matrix of faces from a matrix of vertices
	- [ ] Generate a matrix of faces from a matrix of edges
	- [ ] Generate a 3D mesh from a matrix of faces
- Edges:
	- [ ] Generate a matrix of edges from a matrix of vertices
	- [ ] Generate a matrix of edges from a matrix of faces
	- [ ] Generate a 3D mesh from a matrix of edges

## Vocabulary
- **Matrix:** A list of one or more lists.
- **Cartesian Product:** A geometric structure deeply embedded in linear algebra.
- **Vertex:** A sharp point on a 3D object where three or more edges intersect.
- **Edge:** A line segment connecting two vertices, at which two adjacent faces pivot on a 3D object.
- **Face:** A flat side on a 3D object, enclosed by vertices and edges.
- **Mesh:** A mesh is a collection of vertices, edges, and faces that describe the shape of a 3D object.

### Cartesian Product vs. Matrix of Vertices
A row in a cartesian product represents a group of similar vertices.  
A row in a matrix of vertices represents a single, unique vertex.

Cartesian Products can use the plus-minus symbol (`±`) to represent multiple unique vertices, whereas the vertices themselves are always strictly positive or negative.

## Constants
When dealing with 3D geometry, there are some important constants that we have to work with, outlined in this code snippit:

~~~js
/*-------
CONSTANTS
-------*/

// It is helpful to know the names of the greek letters that we'll be using.
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

// Pi is naturally very important for 3D geometry.
// π = circumference / diamter

// Pi can be expressed in other ways, if you are interested.
// π = 4∫x=(0,1) {√(1-x²)dx}

const φ = ( 1 + Math.sqrt(5)) / 2
const ψ = (-1 + Math.sqrt(5)) / 2
const π = Math.PI

~~~

## Matrix of Vertices
Vertices are a core concept within this application. Without understanding them you will be lost.

~~~js
/*------
VERTICES
------*/

// A single vertex can be mapped as a point on a 3D plane.
// We know where this point is given an X, Y, and Z coordinate.
//
// |  x |  y |  z |
// |----|----|----|
// | -1 |  0 |  0 |




// Vertices are easy to represent as an array with three values.
// We arbitrarily set the 0th 1st and 2nd index as X Y and Z, respectively.
// 
[1,0,0]

// Throughout this program, several vertices will be paired together in a single matrix.
// Don't be alarmed; if you understand how one vertex works, you can get how groups work.
// A group of vertices are simply graphed onto the same 3D plane at the same time.
//
// | x  | y  | z  |
// |----|----|----|
// | -1 |  0 |  0 |
// |  0 | -1 |  0 |
// |  0 |  0 | -1 |

// To represent grouped vertices, just nest them in another array.
//
[
	[-1, 0, 0],
	[ 0,-1, 0],
	[ 0, 0,-1]
]

// EXERCISE: Flex your 3D visualization muscles
// imagine drawing an line between each pair of vertices in this instance!

~~~

## Cartesian Product
A cartesian product maps vertices onto a 3D plane, where each pair of values represents its X, Y, and Z coordinates. In this respect, a cartesian product can be very similar to a matrix of vertices.

The only difference is that cartesian products accept and emphasize instances where a value could be either positive or negative.

~~~js
/*---------------
CARTESIAN PRODUCT
---------------*/

// A cartesian product can represent a complex object in just a few lines.
// They aren't necessary to build this application, but they are very helpful.
// These matrices might seem intimidating at first, so lets step through them.

// Often, the value of a cartesian product is one of two numbers, for example ±1.
// A matrix of vertices cannot represent this duality in one line.
// It really is the only difference between a matrix of vertices and a cartesian product.
//
// | x  | y  | z  |
// |----|----|----|
// | ±1 |  0 |  0 |
// |  0 | ±1 |  0 |
// |  0 |  0 | ±1 |

// Even so, javascript cannot represent two numbers with a single float value.
// We must abstract it with some sort of structure, like another array.
//
// | x      | y      | z      |
// |--------|--------|--------|
// | [1,-1] |    [0] |    [0] |
// |    [0] | [1,-1] |    [0] |
// |    [0] |    [0] | [1,-1] |

// In javascript, such a construct can be represented by a three-dimensional array.
// Notice that the order only matters when distinguishing between X, Y, and Z coordinates.
// The order of vertices and the order of multi-value points does not make a difference.
//
[
	// vertex group 1
	[
		// X coordinate
		[1,-1],
		// Y coordinate
		[0],
		// Z coordinate
		[0]
	],
	// vertex group 2
	[
		// X coordinate
		[0],
		// Y coordinate
		[1,-1],
		// Z coordinate
		[0]
	],
	// vertex group 3
	[
		// X coordinate
		[0],
		// Y coordinate
		[0],
		// Z coordinate
		[1,-1]
	]
]

// Such arrays will henceforth be written with fewer lines of code.
//
[
	[[1,-1],[0],[0]],
	[[0],[1,-1],[0]],
	[[0],[0],[1,-1]]
]

// If we were to deconstruct this into an array of vertices, it would expand:
//
[
	[ 1, 0, 0],
	[-1, 0, 0],
	[ 0, 1, 0],
	[ 0,-1, 0],
	[ 0, 0, 1],
	[ 0, 0,-1]
]

// Notice how the number of entries doubled. This is because there was one ± per line.
// If there were multiple, it could quadruple or octuple the number of entries.

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
# HERE ON IS TODO TERRITORY

## Face Matrices
A matrix of faces relies on knowing a 3D object's vertices.

TODO: How do we find exclusively the faces that can be viewed from the outside?


~~~js
// We can take the matrix of vertices from the previous example.
//
[
	[ 1, 0, 0],
	[-1, 0, 0],
	[ 0, 1, 0],
	[ 0,-1, 0],
	[ 0, 0, 1],
	[ 0, 0,-1]
]

// Each item in this new array represents a group of vertices from the example.
[
	[0,2,4],
	[0,2,5],
	[0,3,4],
	[0,3,5],
	[1,2,4],
	[1,2,5],
	[1,3,4],
	[1,3,5]
]

// Expanded, it would look like this
// Because there are three vertices per group, the faces are triangles
[
	[[ 1, 0, 0],[ 0, 1, 0],[ 0, 0, 1]],
	[[ 1, 0, 0],[ 0, 1, 0],[ 0, 0,-1]],
	[[ 1, 0, 0],[ 0,-1, 0],[ 0, 0, 1]],
	[[ 1, 0, 0],[ 0,-1, 0],[ 0, 0,-1]],
	[[-1, 0, 0],[ 0, 1, 0],[ 0, 0, 1]],
	[[-1, 0, 0],[ 0, 1, 0],[ 0, 0,-1]],
	[[-1, 0, 0],[ 0,-1, 0],[ 0, 0, 1]],
	[[-1, 0, 0],[ 0,-1, 0],[ 0, 0,-1]]
]

~~~

## Edge Matrices

~~~js
// placeholder
~~~


## Vertex Matrices
A cartesian product defines a geometric object in a raw form, but it isn't quite useable in its state. The difference between a cartesian product and matrix of vertices lies in what each row represents.

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

~~~ -->

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
