## ForestVPN Cloud API Client

ForestVPN Cloud - it's a Google Cloud but for VPN apps. Ready to use VPN Cloud Platform minimizes efforts to build fast,
secure, and modern VPN apps.

For more information, please visit [https://forestvpn.com/](https://forestvpn.com/)


Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save

## Author

ForestVPN <support@forestvpn.com>

## Credits

- ForestVPN.com [Free VPN](https://forestvpn.com) for all
- SpaceV.net [VPN for teams](https://spacev.net)