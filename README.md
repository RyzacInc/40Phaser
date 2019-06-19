# 40Phaser

[![CircleCI](https://circleci.com/gh/Codecademy/40Phaser.svg?style=svg)](https://circleci.com/gh/Codecademy/40Phaser)

<!--
[![Circle CI](https://circleci.com/gh/Codecademy/40Phaser.svg?style=svg)](https://circleci.com/gh/Codecademy/40Phaser)
[![NPM version](https://img.shields.io/npm/v/40Phaser.svg)](https://npmjs.org/package/40Phaser)
[![Downloads](http://img.shields.io/npm/dm/40Phaser.svg)](https://npmjs.org/package/40Phaser)
![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-14cc21.svg)
-->

Codecademy's new 404 page.
WIP.

## Usage

Install the `40phaser` package on npm:

```
npm i 40phaser
```

In a webpage that already has [Phaser](https://phaser.io) available under `window.Phaser`, import and call the `launch40Phaser` function to start the game:

```js
import { launch40Phaser } from '40phaser';

window.onload = () => {
    launch40Phaser();
};
```

Alternately, if Phaser isn't available globally, you may pass it to the game as `phaser`:

```js
import { launch40Phaser } from '40phaser';
import phaser from 'phaser'

window.onload = () => {
    launch40Phaser({ phaser });
};
```

## Development

See [Development.md](./docs/Development.md)! ✨

### Contribution Guidelines

We'd love to have you contribute!
Check the [issue tracker](https://github.com/Codecademy/40Phaser/issues) for issues labeled [Accepting PRs](https://github.com/Codecademy/40Phaser/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22Accepting+PRs%22) to find bug fixes and feature requests the community can work on.
If this is your first time working with this code, the [Good First issue](https://github.com/Codecademy/guidelines/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22Good+First+Issue%22+) label indicates good introductory issues.

Please note that this project is released with a [Contributor Covenant](https://www.contributor-covenant.org).
By participating in this project you agree to abide by its terms.
See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
