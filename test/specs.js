var assert = chai.assert;
var expect = chai.expect;

describe('Saffy', function() {
  var microm;
  var dummy = {
    foo: 1,
    user: {
      name: {
        firstName: 'hector',
        lastName: 'zarco'
      }
    }
  };
  
  describe('Get', function() {
    it('Should exist', function() {
      expect(saffy.get).to.be.a('function');
    });
  });

  describe('Set', function() {
    it('Should exist', function() {
      expect(saffy.set).to.be.a('function');
    });
  });
});