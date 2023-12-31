Elevate user experience with seamless cursor interactions using hover-cursor, a powerful JS library. Create captivating web interfaces by dynamically crafting bespoke hover cursors that you can style however you need.

<div align="center">
    <img align="center" width="230" src="https://i.imgur.com/bt5ZC7l.png" />
    <br />
    <br />
    <div>Elevate user experience with seamless cursor interactions. This project is still in active development, please open any issues on https://github.com/rps-code/hover-cursor/issues ❤️</div>
    <br />
    <a href="https://www.npmjs.com/package/hover-cursor"><img src="https://badgen.net/npm/v/hover-cursor" alt="npm version"></a> <a href="https://github.com/rps-code/hover-cursor"><img src="https://img.shields.io/github/last-commit/rps-code/hover-cursor" alt="lastest commit"></a>
</div>

## ⭐️ Features

-   Custom cursor on hover of a target element
-   Small in size
-   Written purely in Typescript
-   Basic and really simple to use
-   Works everywhere, anytime
-   Options for custom functionality
-   Functionality styles, no styling limitations

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

The following code produces the behaviour displayed in the GIF.

![](https://github.com/rps-code/hover-cursor/blob/main/demo.gif)

```js
import { HoverCursor } from 'hover-cursor'

document.addEventListener('DOMContentLoaded', () => {
    function toggleCursor() {
        console.log('Function called when element is clicked')
    }

    new HoverCursor({
        containerQuery: '.floating-video',
        snapPosition: 'R',
        title: 'Sound On',
        toggledTitle: 'Sound Off',
        toggledFunction: toggleCursor
    })
})
```

```css
div.hover-cursor {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background: orange;
}
```

## 🚀 Documentation & Properties

> Documentation is still being made as the libary is still being worked on, but a brief list is below,

| Parameter           | Description                                                                               | Default | Required? |
| ------------------- | ----------------------------------------------------------------------------------------- | ------- | --------- |
| **containerQuery**  | Query to locate the target element(s) (the element[s] that we are watching to be hovered) |         | ✅        |
| **snapPosition**    | **L**, **M** or **R** to define the snap position as left, middle or right                | 'M'     | ❌        |
| **customClass**     | Adds a custom class to the cursor                                                         | ''      | ❌        |
| **title**           | The title to display in the markup                                                        | ''      | ❌        |
| **toggledTitle**    | The title to toggle to after the target element (class) is clicked                        | ''      | ❌        |
| **icon**            | The icon src to display in the markup (e.g. `./images/right-arrow.svg`)                   | ''      | ❌        |
| **toggledIcon**     | The icon to src toggle to after the target element is clicked                             | ''      | ❌        |
| **toggledFunction** | A callback function after the user clicked for custom functionality on click              | null    | ❌        |

## 🛣️ Roadmap (TODO)

-   Add in option to change the vertical snap position as well as horizontal
-   Optimise build process & update build tools
-   Add option to change the speed of transitions through parameters

## 💎 Contribution

I extend a warm invitation to developers and enthusiasts to contribute to `hover-cursor`. Your insights, expertise, and fresh perspectives are invaluable assets that can help me refine and enhance my work.

To get started, please review my guidelines for contributing, which can be found in the `CONTRIBUTING.md` file. If you encounter any issues, have questions, or need clarification, don't hesitate to reach out.
