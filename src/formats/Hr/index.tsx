import Quill from 'quill'
const Embed = Quill.import('blots/block/embed')

class HrEmbed extends Embed {
    static blotName = 'hr'
    static tagName = 'hr'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute(
            'style',
            'border-style: solid;border-width: 1px 0 0;border-color: rgba(0,0,0,0.1);margin: 5px 0;'
        )
        return node
    }
}

Quill.register(HrEmbed)

export default HrEmbed
