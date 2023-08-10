import { gsap } from 'gsap'

interface HoverCursorOptions {
    containerQuery: string
    snapPosition: 'L' | 'M' | 'R'
    customClass: string
    title: string
    toggledTitle: string
    icon: string
    toggledIcon: string
    toggledFunction: () => void
}

export class HoverCursor {
    private mothers: NodeListOf<HTMLElement>
    private snapPosition: HoverCursorOptions['snapPosition']
    private callbackFunction: HoverCursorOptions['toggledFunction']
    private activeTitle: string
    private activeIcon: string

    constructor(options: HoverCursorOptions) {
        this.mothers = document.querySelectorAll(options.containerQuery)
        this.snapPosition = options.snapPosition
        this.callbackFunction = options.toggledFunction
        this.activeTitle = options.title
        this.activeIcon = options.icon

        this.mothers.forEach(mother => {
            const cursorElement = this.registerCustomCursor(options.customClass)
            mother.appendChild(cursorElement) // <- Add cursor to mother
            this.snapCustomCursor(cursorElement) // <- Snap cursor to initial position

            mother.addEventListener('mouseenter', () => {
                mother.style.cursor = 'none' // <- Hide default cursor
            })

            mother.addEventListener('mouseleave', () => {
                this.snapCustomCursor(cursorElement) // <- Snap cursor to snapPosition (snap mode)
            })

            mother.addEventListener('mousemove', (event: MouseEvent) => {
                this.updateCursorPosition(cursorElement, event, mother) // <- Update cursor position on mousemove (dog mode)
            })

            mother.addEventListener('click', () => {
                this.activeTitle = this.activeTitle === options.title ? options.toggledTitle : options.title
                this.activeIcon = this.activeIcon === options.icon ? options.toggledIcon : options.icon

                this.toggleCustomCursorContent(mother) // <- Toggle cursor on click
                this.callbackFunction() // <- Function to be called on click specified in options
            })
        })
    }

    private updateCursorPosition(cursorElement: HTMLElement, event: MouseEvent, mother: HTMLElement) {
        const { clientX: x, clientY: y } = event // <- Get mouse position from MouseEvent
        const containerRect = mother.getBoundingClientRect() // <- Get container position and size
        const containerScaleX = gsap.getProperty(mother, 'scaleX') as number
        const containerScaleY = gsap.getProperty(mother, 'scaleY') as number
        const containerTransformX = gsap.getProperty(mother, 'x') as number
        const containerTransformY = gsap.getProperty(mother, 'y') as number

        // Calculate the actual position within the scaled and transformed container
        const containerX = (x - containerRect.left - containerTransformX) / containerScaleX // <- Calculate cursor X position within container
        const containerY = (y - containerRect.top - containerTransformY) / containerScaleY // <- Calculate cursor Y position within container

        // cursorElement.style.left = `${containerX}px` // <- Set cursor X position
        // cursorElement.style.top = `${containerY}px` // <- Set cursor Y position
        gsap.to(cursorElement, { left: `${containerX}px`, top: `${containerY}px`, duration: 0.2 }) // <- Animate cursor to cursor position. NOTE: This may cause performance issues on slower devices! Use the commented lines above instead if this is the case. :)
    }

    private snapCustomCursor(cursorElement: HTMLElement) {
        // Snap cursor to snapPosition (snap mode) - note we do not use right or bottom here as we do not want to override the transform origin or any previously calculated transform values
        switch (this.snapPosition) {
            case 'L':
                gsap.to(cursorElement, { left: '10%', top: '50%', duration: 0.2 })
                break
            case 'M':
                gsap.to(cursorElement, { left: '50%', top: '50%', duration: 0.2 })
                break
            case 'R':
                gsap.to(cursorElement, { left: '90%', top: '50%', duration: 0.2 })
                break
        }
    }

    private registerCustomCursor(customClass: string) {
        // Create elements
        const cursor = document.createElement('div')
        const cursorTitle = document.createElement('p')
        const cursorIcon = document.createElement('i')

        const iconClassArray = this.activeIcon.split(' ')

        // Add classes
        cursor.classList.add(`hover-cursor`, customClass)
        cursorTitle.classList.add(`hover-cursor--title`)
        cursorIcon.classList.add('hover-cursor--icon', ...iconClassArray)

        // Add content
        cursorTitle.innerHTML = this.activeTitle

        // Append elements
        cursor.appendChild(cursorTitle)
        cursor.appendChild(cursorIcon)

        return cursor
    }

    private toggleCustomCursorContent(mother: HTMLElement) {
        // Get cursor elements
        const cursor = mother.querySelector('div[class*="hover-cursor--"]')

        if (cursor === null) return // <- If cursor is not found, return (this should never happen)

        const cursorTitle = cursor.querySelector('p[class*="hover-cursor--title"]')
        const cursorIcon = cursor.querySelector('i[class*="hover-cursor--icon"]')

        if (cursorTitle === null || cursorIcon === null) return // <- If cursorTitle or cursorIcon is not found, return (this should never happen)

        // Update cursor content to active states
        cursorTitle.innerHTML = this.activeTitle

        // Manage the icon class list
        const iconClassArray = this.activeIcon.split(' ')
        cursorIcon.className = ''
        cursorIcon.classList.add('hover-cursor--icon', ...iconClassArray)
    }
}
