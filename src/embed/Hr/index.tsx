import Quill from 'quill'
const Block = Quill.import('blots/block/embed')

class hrBlot extends Block {
    static blotName = 'hr'
    static tagName = 'hr'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute(
            'style',
            'border-style: solid;border-width: 1px 0 0;border-color: rgba(0,0,0,0.1);-webkit-transform-origin: 0 0;-webkit-transform: scale(1, 0.5);transform-origin: 0 0;transform: scale(1, 0.5);margin: 5px 0;'
        )
        return node
    }

    static formats(): boolean {
        return true
    }
}

Quill.register(hrBlot)
