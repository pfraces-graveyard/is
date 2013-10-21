# is

simple type detection

# Usage

```js
var is = require('is');

console.log(is().nil); // true

var type = is([]);

console.log(type.nil); // false
console.log(type.array); // true
```

# Install

```sh
npm install is
```

# Motivation

Wrap simple type detections in a tiny, performant library
