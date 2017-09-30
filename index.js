var curl = require('curlrequest')

module.exports = function (accessToken) {
  var compileUrl = 'http://api.compilers.sphere-engine.com/api/v3/submissions?access_token=' + accessToken
  var languages = {
    'Ada': 7,
    'Nasm': 13,
    'Gawk': 104,
    'Mawk': 105,
    'Bash': 28,
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
    'Forth': 107,
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
  }

  var subRoutines = {
    Run: function (code, lang, inp) {
      var infoRun = {
        'sourceCode': code,
        'language': languages[lang],
        'input': inp
      }
      var optionsRun = {
        method: 'POST',
        url: compileUrl,
        data: infoRun
      }

      return new Promise((resolve, reject) => {
        curl.request(optionsRun, function (error, response) {
          if (error) {
            reject(error)
            return
          }

          var ID = JSON.parse(response).id
          var reqUrl1 = 'http://api.compilers.sphere-engine.com/api/v3/submissions/'.concat(ID)
          var reqUrl2 = '?access_token='.concat(accessToken)
          var reqUrl12 = reqUrl1.concat(reqUrl2)

          var reqUrl = reqUrl12 + '&withSource=1&withInput=1&withOutput=1&withStderr=1&withCmpinfo=1'

          var optionsRecv = {
            method: 'GET',
            url: reqUrl12
          }

          var optionsRecv2 = {
            method: 'GET',
            url: reqUrl
          }

          var requestProcessCallback = function (error, response) {
            if (error) {
              reject(error)
              return
            }
            resolve(JSON.parse(response))
          }

          curl.request(optionsRecv, function (error2, response2) {
            if (error2) {
              reject(error)
            }

            var statuscheck = JSON.parse(response2)
            if (statuscheck.status === 0) {
              curl.request(optionsRecv2, requestProcessCallback)
            } else {
              setTimeout(function () {
                curl.request(optionsRecv, function (error2, response2) {
                  if (error2) {
                    reject(error2)
                    return
                  }

                  var statuscheck = JSON.parse(response2)
                  if (statuscheck.status === 0) {
                    curl.request(optionsRecv2, requestProcessCallback)
                  }
                })
              }, 4500)
            }
          })
        })
      })
    },

    languageSupport: function () {
      return Promise.resolve(languages)
    }
  }

  return subRoutines
}
