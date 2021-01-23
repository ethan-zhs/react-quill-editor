import Quill from 'quill'
const Embed = Quill.import('blots/block/embed')

class EmotionEmbed extends Embed {
    static blotName = 'emotion'
    static tagName = 'img'

    static create(value: any) {
        const node = super.create(value)
        node.src = `https://sitecdn.itouchtv.cn/sitecdn/assets/images/emotions/${value.index}.png`
        node.setAttribute('style', 'display:inline-block;width:20px;vertical-align:text-bottom;')
        return node
    }
}

Quill.register(EmotionEmbed)

export default EmotionEmbed
