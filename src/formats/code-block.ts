import Quill from 'quill'
const Parchment = Quill.import('parchment')
const Block = Quill.import('blots/block')
const Container = Quill.import('blots/container')

class CodeBlockItem extends Block {
    static blotName = 'code-block-item'
    static tagName = 'code'

    static create(value: any) {
        const node = super.create(value)
        return node
    }

    static formats(domNode: any) {
        return domNode.tagName === this.tagName ? void 0 : super.formats(domNode)
    }

    format(name: any, value: any) {
        if (name === CodeBlock.blotName && !value) {
            this.replaceWith(Parchment.create(this.statics.scope), {})
        } else {
            super.format(name, value)
        }
    }

    remove() {
        if (this.prev == null && this.next == null && this.parent.blotName) {
            super.format(this.parent.blotName, false)
            this.parent.remove()
        } else {
            super.remove()
        }
    }

    replaceWith(name: any, value?: any) {
        const offset = this.offset(this.parent)
        const length = this.length()
        this.parent.isolate(offset, length)
        if (name === this.parent.statics.blotName) {
            this.parent.replaceWith(name, value)
            return this
        } else {
            this.parent.unwrap()
            return super.replaceWith(name, value)
        }
    }
}

class CodeBlock extends Container {
    static blotName = 'code-block'
    static tagName = 'pre'
    static defaultChild = 'code-block-item'
    static scope = Parchment.Scope.BLOCK_BLOT
    static allowedChildren = [CodeBlockItem]

    static create(tagName: any) {
        const node = super.create(tagName)
        node.setAttribute('tabindex', 0)
        return node
    }

    static formats() {
        return 'pre'
    }

    constructor(domNode: any) {
        super(domNode)
    }

    format(name: any, value: any) {
        if (this.children.length > 0) {
            this.children.tail.format(name, value)
        }
    }

    formats() {
        // We don't inherit from FormatBlot
        return { [this.statics.blotName]: this.statics.formats(this.domNode) }
    }

    insertBefore(blot: any, ref: any) {
        if (blot instanceof CodeBlockItem) {
            super.insertBefore(blot, ref)
        } else {
            const index = ref == null ? this.length() : ref.offset(this)
            const after = this.split(index)
            after.parent.insertBefore(blot, after)
        }
    }

    optimize(context: any) {
        super.optimize(context)
        const next = this.next
        if (
            next != null &&
            next.prev === this &&
            next.statics.blotName === this.statics.blotName &&
            next.domNode.tagName === this.domNode.tagName
        ) {
            next.moveChildren(this)
            next.remove()
        }
    }

    replace(target: any) {
        if (target.statics.blotName !== this.statics.blotName) {
            const item = Parchment.create(this.statics.defaultChild)
            target.moveChildren(item)
            this.appendChild(item)
        }
        super.replace(target)
    }
}

Quill.register(
    {
        'formats/code-block/item': CodeBlockItem,
        'formats/code-block': CodeBlock
    },
    true
)

export { CodeBlockItem, CodeBlock as default }
