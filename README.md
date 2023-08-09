<div align="center">
    <img align="center" width="230" src="https://i.imgur.com/bt5ZC7l.png" />
    <br />
    <br />
    <div>Elevate user experience with seamless cursor interactions</div>
    <br />
    <h1><strong>🚧 THIS PROJECT IS WORK IN PROGRESS 🚧</strong></h1>
 
 <a href="https://www.npmjs.com/package/hover-cursor"><img src="https://badgen.net/npm/v/hover-cursor?color=blue" alt="npm version"></a> <a href="https://github.com/rps-code/hover-cursor"><img src="https://img.shields.io/github/last-commit/rps-code/hover-cursor" alt="lastest commit"></a> <a href="https://github.com/rps-code/hover-cursor/actions"><img alt="Build Status" src="https://github.com/rps-code/hover-cursor/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/rps-code/hover-cursor/actions"> <img alt="Publish Status" src="https://github.com/rps-code/hover-cursor/workflows/Publish/badge.svg?color=green" /></a>
</div>

## ⭐️ Features

-   Custom cursor on hover of a target element
-   Tiny in size
-   Basic, simple options
-   Works everywhere

## 📦 Getting Started

```
npm i hover-cursor
```

If importing, then do:

```js
import { HoverCursor } from 'hover-cursor'
```

Usage:

```js
new HoverCursor({
    class: 'floating-video',
    snapPosition: 'R'
})
```

## 🚀 Documentation & Properties

> Documentation is still being made as the libary is still being worked on, but a brief list is below,

`class`: The target element (the element that we are watching to be hovered)
<br />
`snapPosition`: **L**, **M** or **R** to define the snap position as left, middle or right
<br />
`style`: Amends the end number of the class. E.g. `absolute-cursor--${style}`
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
