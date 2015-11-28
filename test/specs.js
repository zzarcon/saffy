var assert = chai.assert;
var expect = chai.expect;

describe('Saffy', function() {
  var microm;
  var dummy = {
    foo: 1,
    user: {
      city: 'Valencia',
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

    it('Returns value of the passed property', function() {
      expect(saffy.get(dummy, 'foo')).to.equal(dummy.foo);
      expect(saffy.get(dummy, 'user.city')).to.equal(dummy.user.city);
      expect(saffy.get(dummy, 'user.name.firstName')).to.equal(dummy.user.name.firstName);
    });

    it("Returns undefined if the property doesn't exist", function() {
      expect(saffy.get(dummy, 'bar')).to.be.undefined;
      expect(saffy.get(dummy, 'user.country')).to.be.undefined;
      expect(saffy.get(dummy, 'bar.country')).to.be.undefined;
    });
  });

  describe('Set', function() {
    it('Should exist', function() {
      expect(saffy.set).to.be.a('function');
    });
  });
});