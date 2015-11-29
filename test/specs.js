var assert = chai.assert;
var expect = chai.expect;

describe('Saffy', function() {
  var microm;
  var value = 'foo';
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

    it('Check arguments correctness', function() {

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

    it("Returns a default value if the property doesn't exist", function() {
      var defaultValue = value;

      expect(saffy.get(dummy, 'bar', defaultValue)).to.be.equal(defaultValue);
      expect(saffy.get(dummy, 'user.country', defaultValue)).to.be.equal(defaultValue);
      expect(saffy.get(dummy, 'bar.country', defaultValue)).to.be.equal(defaultValue);
    });
  });

  describe('Set', function() {
    it('Should exist', function() {
      expect(saffy.set).to.be.a('function');
    });

    it('Check arguments correctness', function() {

    });

    it('Sets the value on the passed path', function() {
      saffy.set(dummy, 'bar', value);
      expect(dummy.bar).to.be.equal(value);

      saffy.set(dummy, 'user.country', value);
      expect(dummy.user.country).to.be.equal(value);
    });

    it("Only set the value if the keyName it's an object", function() {
      saffy.set(dummy, 'foo.country', value);
      expect(dummy.foo.country).to.be.equal(undefined);
    });

    it('Returns the value of the setted property', function() {
      expect(saffy.set(dummy, 'foo.country', value)).to.be.equal(value);
    });
  });
});