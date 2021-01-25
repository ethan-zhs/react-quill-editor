import Quill from 'quill'
const Inline = Quill.import('blots/inline')

class LinkInline extends Inline {
    static blotName = 'link'
    static tagName = 'a'

    static create(value: any) {
        const { type = 'outlink', target = '_blank', href = '', text = '' } = value
        const node = super.create()

        node.setAttribute('tab', type)
        node.setAttribute('target', target)
        node.setAttribute('href', href)
        node.innerText = text

        return node
    }

    static value(domNode: any) {
        return domNode.getAttribute('href')
    }
}

Quill.register({ 'formats/link': LinkInline }, true)

export default LinkInline
