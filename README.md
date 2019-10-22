<h1 align="center">Atom-Spinner-Loader</h1>
<p align="center">
<a href="https://www.npmjs.com/package/atom-spinner-loader"><img src="https://i.pinimg.com/originals/0d/59/22/0d5922d05bf2866c850a470f3ee84c0b.png" height="30"/></a>
</p>
<br/>

* Atom-shaped, animated loading screen,
* Beautiful and elegant design!
* Easy to switch it on and off!
* Styling can be easily customized!

<img src="https://user-images.githubusercontent.com/38051431/67297126-c0c1e280-f4e9-11e9-8758-5763d4feed33.gif">

## ➤ Table of Contents
* [➤ Description](#-description)
* [➤ 0. Installation](#-0-installation)
* [➤ 1. Switch it on and off](#-1-switch-it-on-and-off)
* [➤ 2. Customize styling](#-2-customize-styling)
* [➤ License](#-license)

## ➤ Description
Atom spinner loader is a simple loading screen. You can implement it on your website to improve user's waiting time for response from the server.
	
## ➤ 0. Installation
Install the component...
```javascript
npm install atom-spinner-loader
```
...and import it afterwards
```javascript
 <script type="module" src="lib/index.js">
        </script>
```
...after that you can use it as an HTML tag
```HTML
 <atom-spinner-loader id="loader"></atom-spinner-loader>
```
## ➤ 1. Switch it on and off

Atom spinner loader has a property "visible", which is a boolean. When it's true, the loader is visible, when it's false, it's not.
Simply toggle it after you have fetched the needed data.

```javascript
document.querySelector.getElementById("loader").visible = false;
```

## ➤ 2. Customize styling
The color of spinning atom can be easily changed. In order to implement your own styling, all you need is to define the css variable mentioned in the example code below.
```css
:host{
--atom-spinner-loader-color: pink;
}
```

If you decide not to apply any styling, the module will fallback to the default styling, as in the demo.

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
