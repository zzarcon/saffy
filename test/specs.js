var assert = chai.assert;
var expect = chai.expect;

describe('Saffy', function() {
  var microm;
  var value = 'foo';
  var dummy = {
    cars: ['mercedes', 'bmw', 'audi'],
    food: [['paella', 'bravas'], ['pizza', 'spaghetti']],
    foo: 1,
    user: {
      city: 'Valencia',
      name: {
        firstName: 'hector',
        lastName: 'zarco'
      }
    }
  };
  var get = saffy.get;
  var set = saffy.set;

  describe('Get', function() {
    it('Should exist', function() {
      expect(get).to.be.a('function');
    });

    it('Check arguments correctness', function() {

    });

    it('Returns value of the passed property', function() {
      expect(get(dummy, 'foo')).to.equal(dummy.foo);
      expect(get(dummy, 'user.city')).to.equal(dummy.user.city);
      expect(get(dummy, 'user.name.firstName')).to.equal(dummy.user.name.firstName);
    });

    it("Returns undefined if the property doesn't exist", function() {
      expect(get(dummy, 'bar')).to.be.undefined;
      expect(get(dummy, 'user.country')).to.be.undefined;
      expect(get(dummy, 'bar.country')).to.be.undefined;
    });

    it("Returns a default value if the property doesn't exist", function() {
      var defaultValue = value;

      expect(get(dummy, 'bar', defaultValue)).to.be.equal(defaultValue);
      expect(get(dummy, 'user.country', defaultValue)).to.be.equal(defaultValue);
      expect(get(dummy, 'bar.country', defaultValue)).to.be.equal(defaultValue);
    });

    it('#firstObject', function() {
      var car = dummy.cars[0];
      var meal = dummy.food[0][0];

      expect(get(dummy, 'cars.firstObject')).to.be.equal(car);
      expect(get(dummy, 'cars.firstObject.firstObject')).to.be.undefined;
      expect(get(dummy, 'food.firstObject.firstObject')).to.be.equal(meal);
    });

    it('#lastObject', function() {

    });
  });

  describe('Set', function() {
    it('Should exist', function() {
      expect(set).to.be.a('function');
    });

    it('Check arguments correctness', function() {

    });

    it('Sets the value on the passed path', function() {
      set(dummy, 'bar', value);
      expect(dummy.bar).to.be.equal(value);

      set(dummy, 'user.country', value);
      expect(dummy.user.country).to.be.equal(value);
    });

    it("Only set the value if the keyName it's an object", function() {
      set(dummy, 'foo.country', value);
      expect(dummy.foo.country).to.be.equal(undefined);

      var nully = {a: null};
      set(nully, 'a.b', 23);

      expect(nully.a).to.be.null;
    });

    it('Returns the value of the setted property', function() {
      expect(set(dummy, 'foo.country', value)).to.be.equal(value);
    });
  });
});