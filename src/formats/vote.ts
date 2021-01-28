import Quill from 'quill'

const Embed = Quill.import('blots/block/embed')

class VoteEmbed extends Embed {
    static blotName = 'rql-vote'
    static tagName = 'rql-vote'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute(
            'style',
            'display: block; height: 308px; width:548px;margin:10px auto;border: 1px solid #ddd;'
        )

        return node
    }
}

Quill.register(VoteEmbed)

export default VoteEmbed
