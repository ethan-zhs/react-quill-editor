import Quill from 'quill'
const Parchment = Quill.import('parchment')
const Block = Quill.import('blots/block')
const Container = Quill.import('blots/container')

class BlockquoteItem extends Block {
    static blotName = 'blockquote-item'
    static tagName = 'p'

    static formats(domNode: any) {
        return domNode.tagName === this.tagName ? void 0 : super.formats(domNode)
    }

    format(name: any, value: any) {
        if (name === Blockquote.blotName && !value) {
            this.replaceWith(Parchment.create(this.statics.scope))
        } else {
            super.format(name, value)
        }
    }

    remove() {
        if (this.prev == null && this.next == null) {
            this.parent.remove()
        } else {
            super.remove()
        }
    }

    replaceWith(name: any, value?: any) {
        const offset = this.offset(this.parent)
        const length = this.length()
        // this.parent.isolate(offset, length)
        if (name === this.parent.statics.blotName) {
            this.parent.replaceWith(name, value)
            return this
        } else {
            this.parent.unwrap()
            return super.replaceWith(name, value)
        }
    }
}

class Blockquote extends Container {
    static blotName = 'blockquote'
    static tagName = 'blockquote'
    static defaultChild = 'blockquote-item'
    static scope = Parchment.Scope.BLOCK_BLOT
    static allowedChildren = [BlockquoteItem]

    static create() {
        const tagName = 'blockquote'
        const node = super.create(tagName)
        return node
    }

    static formats() {
        return 'blockquote'
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
        if (blot instanceof BlockquoteItem) {
            super.insertBefore(blot, ref)
        } else {
            const index = ref == null ? this.length() : ref.offset(this)
            const after = this.split(index) || this.next

            if (after) {
                after.parent.insertBefore(blot, after)
            } else {
                this.parent.appendChild(blot)
            }
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
        'formats/blockquote/item': BlockquoteItem,
        'formats/blockquote': Blockquote
    },
    true
)

export { BlockquoteItem, Blockquote as default }
