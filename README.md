Elevate user experience with seamless cursor interactions using hover-cursor, a powerful JS library. Create captivating web interfaces by dynamically crafting bespoke hover cursors that you can style however you need.

<div align="center">
    <img align="center" width="230" src="https://i.imgur.com/bt5ZC7l.png" />
    <br />
    <br />
    <div>Elevate user experience with seamless cursor interactions</div>
    <h1>🚧 THIS PROJECT IS WORK IN PROGRESS 🚧</h1>
    <a href="https://www.npmjs.com/package/hover-cursor"><img src="https://badgen.net/npm/v/hover-cursor?color=blue" alt="npm version"></a> <a href="https://github.com/rps-code/hover-cursor"><img src="https://img.shields.io/github/last-commit/rps-code/hover-cursor" alt="lastest commit"></a>
</div>

## ⭐️ Features

-   Custom cursor on hover of a target element
-   Small in size
-   Written purely in Typescript
-   Basic and really simple to use
-   Works everywhere, anytime
-   Options for custom functionality
-   Functionality only, no styling limitations

## 📦 Getting Started

### NPM

```
npm i hover-cursor
```

### Yarn

```
yarn add hover-cursor
```

In your project, import the HoverCursor class like so:

```js
import { HoverCursor } from 'hover-cursor'
```

Usage:

> **Note**: If the element does not load, make sure you are initialising your HoverCursor after `DOMContentLoaded`!

```js
new HoverCursor({
    containerQuery: '.floating-video',
    snapPosition: 'R'
})
```

## 🙋‍♂️ Example

The following code produces the behaviour displayed in the GIF. Icon does get toggled but just changed the classes in this demo. By putting in a FontAwesome class such as `fa-solid fa-volume-high` it will show the icon and toggle it.

![](https://github.com/rps-code/hover-cursor/blob/master/demo.gif)

```js
import { HoverCursor } from 'hover-cursor'

document.addEventListener('DOMContentLoaded', () => {
    function toggleCursor() {
        console.log('Function called when element is clicked')
    }

    new HoverCursor({
        containerQuery: '.floating-video',
        snapPosition: 'R',
        customClass: 'my-custom-class',
        title: 'Sound On',
        toggledTitle: 'Sound Off',
        icon: 'ICON 1',
        toggledIcon: 'ICON 2',
        toggledFunction: toggleCursor
    })
})
```

```css
div.hover-cursor {
    position: absolute;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background: black;
    pointer-events: none;
    z-index: 10;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 🚀 Documentation & Properties

> Documentation is still being made as the libary is still being worked on, but a brief list is below,

`containerQuery`: Query to locate the target element(s) (the element[s] that we are watching to be hovered)
<br />
`snapPosition`: **L**, **M** or **R** to define the snap position as left, middle or right
<br />
`customClass`: Adds a custom class to the cursor
<br />
`title`: The title to display in the markup
<br />
`toggledTitle`: The title to toggle to after the target element (class) is clicked
<br />
`icon`: The icon to display in the markup (e.g. `fa-solid fa-volume-high`)
<br />
`toggledIcon`: The icon to toggle to after the target element (class) is clicked
<br />
`toggledFunction`: A callback function after the user clicked for custom functionality on click

## 💎 Contribution

I extend a warm invitation to developers and enthusiasts to contribute to `hover-cursor. Your insights, expertise, and fresh perspectives are invaluable assets that can help me refine and enhance my work.

To get started, please review my guidelines for contributing, which can be found in the `CONTRIBUTING.md` file. If you encounter any issues, have questions, or need clarification, don't hesitate to reach out.
