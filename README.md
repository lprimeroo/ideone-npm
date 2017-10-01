# ideone-npm

[![](https://nodei.co/npm/ideone-npm.png?downloads=true)](https://nodei.co/npm/ideone-npm/)
[![Build Status](https://travis-ci.org/saru95/ideone-npm.svg?branch=master)](https://travis-ci.org/saru95/ideone-npm)

## Installation
```
$ sudo npm install ideone-npm
```

## Usage

```js
var Compile = require('ideone-npm')

compile = Compile('API_TOKEN')

//Source Code to be compiled remotely
var sourceCode = 'print 3*20' 

//Programming Language Selection
var language = 'Python' 

//Input for the program
var testCases = ''

//'Run' routine compiles the code and return the answer object
compile.Run(sourceCode,language,testCases).then(function(answer) {
	// returns compiled answer object	
}) 

// Languages Supported by the API
compile.languageSupport().then(function(languages) {
	console.log(languages)
});

```

## Fields supported by answer object

```
{ 
	  error: 'OK',
	  langId: 4,
	  langName: 'Python',
	  langVersion: '2.7.10',
	  time: 0.02,
	  date: '2015-12-06 09:58:58',
	  status: 0,
	  result: 15,
	  memory: 9016,
	  signal: 0,
	  public: false,
	  source: 'print 3*20',
	  input: '',
	  output_encoded: '',
	  output: '60\n',
	  stderr: '',
	  cmpinfo: '' 
}

```

## Output
![](http://i57.tinypic.com/331oscw.jpg)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
