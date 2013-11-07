# Tof

Simple type detection

# Usage

```js
var tof = require('tof');

console.log(tof().nil()); // true
console.log(tof(2).nil()); // false
console.log(tof(2).number()); // true
```

Alternative API

```js
console.log(tof.nil()); // true
console.log(tof.nil(2)); // false
console.log(tof.number(2)); // true
```

# Install

```sh
npm install isit
```

# Motivation

Straightforward type detection

# References

*   [T.J. Crowder's post about types][1]

[1]: http://blog.niftysnippets.org/2010/09/say-what.html
