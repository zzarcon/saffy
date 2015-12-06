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
    },
    getValue: function() {
      return value;
    },
    sum: function(num) {
      return value + num;
    },
    getHash: function() {
      return {
        a: value
      };
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

    it.skip('Check property name correctness', function() {
      expect(get(dummy, 'food.')).to.be.undefined;
      expect(get(dummy, 'food..')).to.be.undefined;
      expect(get(dummy, 'food.[')).to.be.undefined;
      expect(get(dummy, 'food.]')).to.be.undefined;
      expect(get(dummy, 'food.[]')).to.be.undefined;
      expect(get(dummy, 'food[]')).to.be.undefined;
      expect(get(dummy, 'food[][]')).to.be.undefined;
      expect(get(dummy, 'food[].[]')).to.be.undefined;
      expect(get(dummy, 'food[')).to.be.undefined;
      expect(get(dummy, 'food]')).to.be.undefined;
      expect(get(dummy, 'food[.')).to.be.undefined;
      expect(get(dummy, 'food].')).to.be.undefined;
      expect(get(dummy, 'food[.]')).to.be.undefined;
      expect(get(dummy, 'food[a')).to.be.undefined;
      expect(get(dummy, 'food]a]')).to.be.undefined;
      expect(get(dummy, 'food[a]')).to.be.undefined;
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

    it('Getting Array property', function() {
      var cars = dummy.cars;

      expect(get(dummy, 'cars')).to.be.equal(cars);
    });

    it('Invoking methods', function() {
      var num = 1;

      expect(get(dummy, 'getValue()')).to.be.equal(value);
      expect(get(dummy, 'sum(' + num + ')')).to.be.equal(value + num);
      expect(get(dummy, 'getHash().a')).to.be.equal(value);
    });

    it('#firstObject', function() {
      var car = dummy.cars[0];
      var meal = dummy.food[0][0];

      expect(get(dummy, 'cars.firstObject')).to.be.equal(car);
      expect(get(dummy, 'cars.firstObject.firstObject')).to.be.undefined;
      expect(get(dummy, 'food.firstObject.firstObject')).to.be.equal(meal);
    });

    it('#lastObject', function() {
      var car = dummy.cars[2];
      var meal = dummy.food[1][1];

      expect(get(dummy, 'cars.lastObject')).to.be.equal(car);
      expect(get(dummy, 'cars.lastObject.lastObject')).to.be.undefined;
      expect(get(dummy, 'food.lastObject.lastObject')).to.be.equal(meal);
    });

    it('#length', function() {
      var len = dummy.cars.length;

      expect(get(dummy, 'cars.length')).to.be.equal(len);
      expect(get(dummy, 'foo.length')).to.be.undefined;
    });

    it('Return specific Array item', function() {
      var car = dummy.cars[2];
      var meal = dummy.food[1][1];

      expect(get(dummy, 'cars[2]')).to.be.equal(car);
      expect(get(dummy, 'food[1][1]')).to.be.equal(meal);
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