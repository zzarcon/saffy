[![Build Status](https://travis-ci.org/zzarcon/saffy.svg)](https://travis-ci.org/zzarcon/saffy)
[![npm version](https://badge.fury.io/js/saffy.svg)](https://badge.fury.io/js/saffy)
[![Bower version](https://badge.fury.io/bo/saffy.svg)](http://badge.fury.io/bo/saffy)

# saffy
  > Safest way to get and set properties in Javascript

# Installation

`$ npm i saffy`

or

`$ bower i saffy`

# Usage

Having the following object

```javascript
var obj = {
  user: {
    id: 1234,
    city: 'Springfield',
    info: {
      name: {
        firstName: 'Homer'
      }
    } 
  }
};
```

You want to set `obj.user.info.name.lastName = "Simpson"`. Easy right? But wait... this is Javascript, so, maybe you end having something like this :\

```javascript
if (obj && obj.user && obj.user.info && obj.user.info.name) {
  obj.user.info.name.lastName = 'Simpson';
}
```

Ok, now let's see how looks using **Saffy**

```javascript
import {set} from 'saffy';

set(obj, 'user.info.name.lastName', 'Simpson');

```

And same thing with **get**

```javascript
import {get, set} from 'saffy';

get(obj, 'user.info.name.firstName');

```

# Others goodies

```javascript
import {get} from 'saffy';

let obj = {
  cars: ['mercedes', 'bmw', 'audi'],
  food: [['paella', 'bravas'], ['pizza', 'spaghetti']]
}

get(obj, 'cars.firstObject') === 'mercedes';
get(obj, 'cars.lastObject') === 'audi';
get(obj, 'cars[1]') === 'bmw';
get(obj, 'food[1].lastObject') === 'spaghetti';
get(obj, 'food[0][1]') === 'bravas';

```