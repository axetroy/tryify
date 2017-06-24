# tryify
[![Build Status](https://travis-ci.org/axetroy/tryify.svg?branch=master)](https://travis-ci.org/axetroy/tryify)
[![Dependency](https://david-dm.org/axetroy/tryify.svg)](https://david-dm.org/axetroy/tryify)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/tryify.svg)](https://badge.fury.io/js/tryify)

Run the JavaScript code in the try{}catch(){} block

## Installation
```bash
npm install tryify
```

## Usage

```javascript
import tryify from 'tryify';

tryify(function login(name,pwd){
  // ...your code run in try catch block
})
.catch(function(err){
  // if error, will catch error object in this block
})
.run('axetroy','111111');
```

## Contributing

```bash
git clone https://github.com/axetroy/tryify.git
cd ./tryify
yarn
```

You can flow [Contribute Guide](https://github.com/axetroy/tryify/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/tryify/blob/master/LICENSE)