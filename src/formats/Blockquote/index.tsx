import Quill from 'quill'

const Parchment = Quill.import('parchment')
const Block = Quill.import('blots/block')
const Container = Quill.import('blots/container')

class BlockquoteItem extends Block {
    static blotName = 'blockquote-item'
    static tagName = 'span'

    static create(value: any) {
        const node = super.create(value)
        return node
    }

    // static formats(domNode: any) {
    //     return domNode.tagName === this.tagName ? void 0 : super.formats(domNode)
    // }

    // format(name: any, value: any) {
    //     if (name === Blockquote.blotName && !value) {
    //         this.replaceWith(Parchment.create(this.statics.scope))
    //     } else {
    //         super.format(name, value)
    //     }
    // }

    // remove() {
    //     // 删除及删除父元素
    //     if (this.prev == null && this.next == null) {
    //         this.parent.remove()
    //     } else {
    //         super.remove()
    //     }
    // }

    // replaceWith(name: any, value?: any) {
    //     const offset = this.offset(this.parent)
    //     const length = this.length()
    //     this.parent.isolate(offset, length)
    //     if (name === this.parent.statics.blotName) {
    //         this.parent.replaceWith(name, value)
    //         return this
    //     } else {
    //         this.parent.unwrap()
    //         return super.replaceWith(name, value)
    //     }
    // }
}

class Blockquote extends Container {
    static blotName = 'blockquote1'
    static tagName = 'blockquote'
    // static scope = Parchment.Scope.BLOCK_BLOT
    // static defaultChild = 'blockquote-item'
    // static allowedChildren = [BlockquoteItem]

    static create(value: any) {
        const node = super.create(value)
        return node
    }

    // static formats() {
    //     return 'blockquote'
    // }

    // constructor(domNode: any) {
    //     super(domNode)
    //     const listEventHandler = (e: any) => {
    //         if (e.target.parentNode !== domNode) return
    //         const format = this.statics.formats(domNode)
    //         const blot = Parchment.find(e.target)
    //         if (format === 'checked') {
    //             blot.format('list', 'unchecked')
    //         } else if (format === 'unchecked') {
    //             blot.format('list', 'checked')
    //         }
    //     }

    //     domNode.addEventListener('touchstart', listEventHandler)
    //     domNode.addEventListener('mousedown', listEventHandler)
    // }

    // formats() {
    //     return { [this.statics.blotName]: this.statics.formats(this.domNode) }
    // }

    // insertBefore(blot: any, ref: any) {
    //     if (blot instanceof BlockquoteItem) {
    //         super.insertBefore(blot, ref)
    //     } else {
    //         const index = ref == null ? this.length() : ref.offset(this)
    //         const after = this.split(index)
    //         after.parent.insertBefore(blot, after)
    //     }
    // }

    // optimize(context: any) {
    //     super.optimize(context)
    //     const next = this.next
    //     if (
    //         next != null &&
    //         next.prev === this &&
    //         next.statics.blotName === this.statics.blotName &&
    //         next.domNode.tagName === this.domNode.tagName &&
    //         next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')
    //     ) {
    //         next.moveChildren(this)
    //         next.remove()
    //     }
    // }

    // replace(target: any) {
    //     if (target.statics.blotName !== this.statics.blotName) {
    //         const item = Parchment.create(this.statics.defaultChild)
    //         target.moveChildren(item)
    //         this.appendChild(item)
    //     }
    //     super.replace(target)
    // }
}

// Quill.register(BlockquoteItem)
Quill.register(Blockquote)
