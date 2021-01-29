import Quill from 'quill'
const Embed = Quill.import('blots/embed')

class ImageEmbed extends Embed {
    static blotName = 'image'
    static tagName = 'img'

    static create(value: any) {
        const node = super.create()
        node.setAttribute('data-init', value)
        node.src = value.src
        node.setAttribute('style', 'display: block; margin: 10px auto; max-width: 100%;')
        return node
    }

    static value(domNode: any) {
        return domNode.getAttribute('data-init')
    }
}

Quill.register(ImageEmbed)

export default ImageEmbed
