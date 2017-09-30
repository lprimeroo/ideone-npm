var Compile = require('../index.js')

compile = Compile('b11bf50b8a391d4e8560e97fd9d63460')

//Source Code to be compiled remotely
var sourceCode = 'print 3*20' 

//Programming Language Selection
var language = 'Python' 

//Input for the program
var testCases = ''

//'Run' routine compiles the code and return the answer object
compile.Run(sourceCode,language,testCases).then(function(answer){
	console.log(answer.langId)
	console.log(answer.langName)
	console.log(answer.output)
	console.log(answer.source)
});

// Languages Supported by the API
compile.languageSupport().then(function(languages) {
	console.log(languages)
});