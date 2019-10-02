# requestAnimationFrame.js
A more robust browser polyfill for requestAnimationFrame()

## What is this about?
***

### _What is requestAnimationFrame?_
The `requestAnimationFrame()` method of a browser's `window` object is used for setting up an update to an animation, asking the browser to call the passed-in callback function to draw the next frame when it is time to repaint the screen. It is useful for effective JavaScript-based animation. See reference documentation [here (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) and [here (W3C)](https://www.w3.org/TR/animation-timing/) for more info.

### _Why a requestAnimationFrame polyfill?_
Why any polyfill? Because the function didn't always exist, and old browsers therefore don't support it. [Is it supported by a browser my users need to use?](http://caniuse.com/requestanimationframe)

### _Why this particular requestAnimationFrame polyfill?_
Because most (all?) of the other ones have a hidden flaw: they can't handle multiple, simultaneous animations. See a fuller explanation [on this blog post.](http://www.trajanmcgill.com/stronglytyped/post/2013/03/23/A-More-Robust-requestAnimationFrame-Polyfill)

## How do I get it?
***

### _Plain code download (just the source code):_
[requestAnimationFrame.js](https://github.com/trajanmcgill/requestAnimationFrame.js/releases/download/v1.0.0/requestAnimationFrame.js) (full version)  
[requestAnimationFrame.min.js](https://github.com/trajanmcgill/requestAnimationFrame.js/releases/download/v1.0.0/requestAnimationFrame.min.js) (minified version)

### _With npm: (for use as a dependency inside another npm-based project)_
```
npm install @trajanmcgill/requestanimationframe
```

### _For development or local building of requestAnimationFrame.js itself:_
- Prerequisites:
	1. [git](https://git-scm.com/)
	2. [npm](https://www.npmjs.com/)
- Setup:
	1. First, clone from GitHub:
		```
		git clone https://github.com/trajanmcgill/requestAnimationFrame.js.git
		```
	2. Next, get the linting and build tools and run them. Move inside the newly created project directory and run:
		```
		npm install
		```
		The `npm install` will automatically run the build process. Source files can be found in the `src` directory; distributable files will be deposited in `dist`.
- Rebuilding: In the project directory:
	```
	npm run prepare
	```
	This will kick off a [Grunt](https://gruntjs.com/) script that will:
	1. Clean out the dist folder.
	2. Run [JSHint](https://jshint.com/) against the source.
	3. Copy the full source and a minified version (created with [UglifyJS](https://github.com/mishoo/UglifyJS2)) to the dist folder.


## How do I use it?
***
Simply include the polyfill code in your HTML, either as a separate script file or by pasting it into one of your own, and then just call `window.requestAnimationFrame()` exactly as you would on the native browser version. (Note: This shim code will leave the browser-native version alone if one is present; it only adds the function if it is not already defined.)
***
***

## Authors
* **Trajan McGill**

## License
This project is licensed under the Unlicense, which means it is more or less public domain and free to use in any form anywhere. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
Thanks to Paul Irish, Erik Möller, Joel Fillmore, and Tino Zijdel for their earlier polyfill suggestions which inspired this version.
