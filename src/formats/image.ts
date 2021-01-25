import Quill from 'quill'
const Embed = Quill.import('blots/block/embed')

class ImageEmbed extends Embed {
    static blotName = 'rql-image'
    static tagName = 'rql-image'

    static create(value: any) {
        const node = super.create()
        node.setAttribute('contenteditable', false)
        node.setAttribute('data-init', value)
        node.setAttribute('style', 'display: block; margin-bottom: 10px;')
        return node
    }

    static value(domNode: any) {
        return domNode.getAttribute('data-init')
    }
}

Quill.register(ImageEmbed)

export default ImageEmbed
