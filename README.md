# Random Essentials
Common random generator functions used for my projects.

# Installation
```shell
$ npm i @rizzzi/random-essentials
```

# Usage

# Functions
  **`randomInt(max, options)`**: Generate a random integer up to a specified maximum range. Based on `crypto.randomInt()`.

  **`randomBytes(length, options)`**: Generate a random buffer.

  **`randomHex(length, options)`**: Generate a random hex string.

  **`randomAlphanumeric(length, options)`**: Generate a random base 36 string.

  **`randomNetPort(min, max)`**: Get an open port within a specified range.
# Options
  **`checker`**: 
  This can be used to make sure uniqueness.
  If false is returned, the output is declined and will generate a new one.
  If true is returned, the output is accepted.
