import Quill from 'quill'

const Embed = Quill.import('blots/embed')

class ImageEmbed extends Embed {
    static blotName = 'image'
    static tagName = 'img'

    static create(value: any) {
        const node = super.create()
        node.setAttribute('_src', value.src)
        node.setAttribute('style', 'display: block; margin: 10px auto;')
        node.src = value.src

        const img: any = new Image()
        img.src = value.src

        img.onload = function () {
            node.setAttribute('data-size', `${this.width},${this.height}`)
        }

        return node
    }
}

Quill.register({ 'formats/image': ImageEmbed }, true)

export default ImageEmbed
