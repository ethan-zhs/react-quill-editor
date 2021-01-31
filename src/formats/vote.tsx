import Quill from 'quill'
import React from 'react'
import ReactDOM from 'react-dom'
import RqlVote from '@components/EditorComs/RqlVote'

const Embed = Quill.import('blots/block/embed')

class VoteEmbed extends Embed {
    static blotName = 'rql-vote'
    static tagName = 'rql-vote'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute('style', 'display: block; margin:10px auto;')

        ReactDOM.render(<RqlVote {...value} />, node)

        return node
    }
}

Quill.register({ 'formats/rql-vote': VoteEmbed }, true)

export default VoteEmbed
