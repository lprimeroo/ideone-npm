import test from 'ava'
import Compile from '../index'

const compile = Compile('b11bf50b8a391d4e8560e97fd9d63460')

test('should support 53 languages', t => {
  compile.languageSupport().then(function (languages) {
    const totalLanguages = Object.keys(languages).length
    t.is(totalLanguages, 53)
    t.pass()
  })
})

test.cb('compile and run sample code NodeJS and Python', t => {
  t.plan(2)

  const output = '60\n'
  const languages = [{
    lang: 'Python',
    code: 'print 3*20'
  }, {
    lang: 'Nodejs',
    code: 'console.log(3*20)'
  }
  ]
  languages.forEach(({
    code,
    lang
  }) => {
    compile.Run(code, lang, '').then(function (answer) {
      t.is(answer.output, output)

      t.pass()
      t.end()
    })
  })
})
