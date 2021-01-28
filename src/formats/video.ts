import Quill from 'quill'

const Embed = Quill.import('blots/block/embed')

class VideoEmbed extends Embed {
    static blotName = 'rql-video'
    static tagName = 'rql-video'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute('style', 'display: block; height: 308px; width:548px;margin:10px auto;background-color: #000')

        return node
    }
}

Quill.register(VideoEmbed)

export default VideoEmbed
