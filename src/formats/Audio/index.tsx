import Quill from 'quill'

const Block = Quill.import('blots/block')
const Container = Quill.import('blots/container')

class ListContainer extends Container {}
ListContainer.blotName = 'list-container'
ListContainer.tagName = 'OL'

class ListItem extends Block {
    static create(value: any) {
        const node = super.create()
        node.setAttribute('data-list', value)
        return node
    }

    static formats(domNode: any) {
        return domNode.getAttribute('data-list') || undefined
    }

    static register() {
        Quill.register(ListContainer)
    }

    constructor(scroll: any, domNode: any) {
        super(scroll, domNode)
        console.log(1111)
        // const ui = domNode.ownerDocument.createElement('span')
        // const listEventHandler = (e: any) => {
        //     if (!scroll.isEnabled()) return
        //     const format = this.statics.formats(domNode, scroll)
        //     if (format === 'checked') {
        //         this.format('list', 'unchecked')
        //         e.preventDefault()
        //     } else if (format === 'unchecked') {
        //         this.format('list', 'checked')
        //         e.preventDefault()
        //     }
        // }
        // ui.addEventListener('mousedown', listEventHandler)
        // ui.addEventListener('touchstart', listEventHandler)
        // this.attachUI(ui)
    }

    format(name: any, value: any) {
        if (name === this.statics.blotName && value) {
            this.domNode.setAttribute('data-list', value)
        } else {
            super.format(name, value)
        }
    }
}
ListItem.blotName = 'blockquote1'
ListItem.tagName = 'blockquote'

ListContainer.allowedChildren = [ListItem]
ListItem.requiredContainer = ListContainer

export { ListContainer, ListItem as default }
