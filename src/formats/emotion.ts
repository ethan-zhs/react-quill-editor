import Quill from 'quill'
const Inline = Quill.import('blots/embed')

class EmotionEmbed extends Inline {
    static blotName = 'emotion'
    static tagName = 'img'

    static create(value: any) {
        const node = super.create()
        node.src = value
        node.setAttribute('style', 'display:inline-block;width:20px;vertical-align:text-bottom;')

        return node
    }

    static value(domNode: any) {
        return domNode.getAttribute('src')
    }
}

Quill.register({ 'formats/emotion': EmotionEmbed }, true)

export default EmotionEmbed
