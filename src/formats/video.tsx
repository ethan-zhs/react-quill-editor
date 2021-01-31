import Quill from 'quill'
import React from 'react'
import ReactDOM from 'react-dom'
import RqlVideo from '@components/EditorComs/RqlVideo'

const Embed = Quill.import('blots/block/embed')

class VideoEmbed extends Embed {
    static blotName = 'rql-video'
    static tagName = 'rql-video'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute('style', 'display: block; margin:10px 0;')
        node.setAttribute('data-poster', value.poster)
        node.setAttribute('data-url', value.url)

        ReactDOM.render(<RqlVideo {...value} />, node)

        return node
    }
}

Quill.register({ 'formats/rql-video': VideoEmbed }, true)

export default VideoEmbed
