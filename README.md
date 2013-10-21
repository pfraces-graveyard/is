# isit

simple type detection

# Usage

```js
var is = require('isit');

console.log(is().nil); // true

var isit = is([]);

console.log(isit.nil); // false
console.log(isit.array); // true
```

# Install

```sh
npm install isit
```

# Motivation

Straightforward type detection
