# @valtech-commerce/stylelint-loader

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]


> stylelint YAML configuration loader

Reads and parses an stylelint YAML [extendable config](https://stylelint.io/user-guide/configuration/#extends) file.


## Install

```
$ npm install @valtech-commerce/stylelint-loader
```


## Usage

Expects a `extendable-config.yaml` file in the root of your package.

```js
import loader from '@valtech-commerce/stylelint-loader';

module.exports = loader(__dirname);
```


## Related

- [Opiniated configs](https://github.com/valtech-commerce/stylelint-config)


## Documentation

View [documentation](https://valtech-commerce.github.io/stylelint-config/loader)


## License
[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)




[npm-badge]:          https://img.shields.io/npm/v/@valtech-commerce/stylelint-loader?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/stylelint-config?path=packages/loader&style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/valtech-commerce/stylelint-config/tests/main?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40valtech-commerce%2Fstylelint-loader.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@valtech-commerce/stylelint-loader
[dependencies-url]: https://david-dm.org/valtech-commerce/stylelint-config?path=packages/loader
[tests-url]:        https://github.com/valtech-commerce/stylelint-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]:         https://npms.io/search?q=%40valtech-commerce%2Fstylelint-loader
[license-url]:      https://opensource.org/licenses/MIT
