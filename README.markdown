# ideone-npm

[![](https://nodei.co/npm/ideone-npm.png?downloads=true)](https://nodei.co/npm/ideone-npm/)
## Installation

Global:
`npm install -g ideone-npm`

Local:
`npm install ideone-npm`

## Usage

```js
var Compile = require('ideone-npm') ;

//In goes your API access token
compile = Compile('b11bf50b8a391d4e8560e97fd9d63460') ;

//Source Code to be compiled remotely
var sourceCode = 'print 3*20' ;

//Programming Language Selection
var language = 'Python' ;

//Input for the program
var testCases = ''

//'Run' routine compiles the code and allots a unique 'id' to its details
compile.Run(sourceCode,language,testCases) ;

//'showDetails' routine show the details provided by the Sphere Engine API 
compile.showDetails() ;

//Module also returns an object `answerObject` which contains the information regarding the answer
//and can be later utilised in the program .

//Module also has a 6 second-safety fetching time period .

```

## Output
![](http://i57.tinypic.com/331oscw.jpg)
