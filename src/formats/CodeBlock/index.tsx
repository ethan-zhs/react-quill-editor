import Quill from 'quill'
const BlockEmbed = Quill.import('blots/block/embed')

class CustomCode extends BlockEmbed {
    static create(value: any) {
        const { content } = value
        const node = super.create(value)
        // const code = document.createElement('code')
        // code.textContent = content
        // node.appendChild(code)
        return node
    }

    static value(node: any) {
        return {
            content: node.firstChild.innerText
        }
    }

    static formats(domNode: any) {
        return domNode.tagName === this.tagName ? void 0 : super.formats(domNode)
    }
}
CustomCode.blotName = 'codeblock'
CustomCode.tagName = 'pre'

Quill.register(CustomCode)
