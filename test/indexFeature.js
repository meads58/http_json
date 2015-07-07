var chai = require('chai');
var expect = chai.expect;

describe('index', function() {

  it('type in email and press submit', function() {
    browser
      .url('http://localhost:3000')
      .sendValue('#inputEmail', 'testing@here')
      .element('body > div > form > button').then(click())
  })

})
