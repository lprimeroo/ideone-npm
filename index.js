var curl = require('curlrequest') ;

module.exports = function (access_token) {
	var access_token_2 = access_token ;
	var compileUrl = 'http://api.compilers.sphere-engine.com/api/v3/submissions?access_token=' + access_token ;
	var ID = '' ;
	var languages = {
		'Ada': 7,
		'Nasm': 13,
		'Gawk':	104,
		'Mawk':	105,
		'Bash':	28,
		'Brainfuck': 12,
		'C': 11,
		'CSharp': 27,
		'Cpp': 1,
		'Cpp14': 44,
		'CLIPS': 14,
		'Clojure': 111,
		'COBOL': 118,
		'CommonLisp': 32,
		'Erlang': 36,
		'FSharp': 124,
		'Factor': 123,
		'Falcon': 125,
		'Forth'	: 107,
		'Fortran': 5,
		'Go': 114,
		'Groovy': 121,
		'Haskell': 21,
		'Icon': 16,
		'Intercal': 9,
		'Java': 10,
		'Java7': 55,
		'Lua': 26,
		'Nemerle': 30,
		'Nice': 25,
		'Nimrod': 122,
		'Nodejs': 56,
		'ObjectiveC': 43,
		'Ocaml': 8,
		'Octave': 127,
		'Oz': 119,
		'Pascalfpc': 22,
		'Pascalgpc': 2,
		'Perl': 3,
		'Pike': 19,
		'Prolog': 108,
		'Python': 4,
		'Python3': 116,
		'R': 117,
		'Ruby': 17,
		'Scala': 39,
		'SchemeChicken': 128,
		'SchemeGuile': 33,
		'Smalltalk': 23,
		'SQL': 40,
		'Tcl': 38,
		'Unlambda': 115,
		'VB.NET': 101
	} ;

	var methods = {
		Run: function (code,lang,inp) {
			var infoRun = {
				'sourceCode': code,
				'language': languages[lang],
				'input': inp
			} ;	
			var optionsRun = {
				method: 'POST',
				url: compileUrl,
				data: infoRun
			} ;

			curl.request(optionsRun, function (error, response) {
				console.log(response);
			}) ;

		},
		showDetails: function () {
			var showUrl = 'http://api.compilers.sphere-engine.com/api/v3/submissions/'+ID+'?access_token='+access_token_2 ;

			var infoShow = {
				'id': ID,
				'withSource': true,
				'withInput': true,
				'withOutput': true,
				'withStderr': true,
				'withCmpinfo': true 
			} ;
			var optionsShow = {
				method: 'GET',
				url: showUrl,
				data: infoShow
			} ;

			curl.request(optionsShow, function (error2,response2) {
				console.log(response2) ;
			}) ;
		}
	} ;

	return methods ;
}