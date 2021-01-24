import Quill from 'quill'
const Embed = Quill.import('blots/block/embed')

class EmotionEmbed extends Embed {
    static blotName = 'emotion'
    static tagName = 'img'

    static create(value: any) {
        const node = super.create(value)
        const p = document.createElement('p')
        node.src = value
        node.setAttribute('style', 'display:inline-block;width:20px;vertical-align:text-bottom;')
        p.appendChild(node)

        return p
    }
}

Quill.register(EmotionEmbed)

export default EmotionEmbed
