import Quill from 'quill'
import React from 'react'
import ReactDOM from 'react-dom'

const Embed = Quill.import('blots/block/embed')

function Aaa() {
    return (
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    )
}

class TableEmbed extends Embed {
    static blotName = 'table'
    static tagName = 'table'

    static create(value: any) {
        const node = super.create(value)
        ReactDOM.render(<Aaa />, node)
        return node
    }

    static formats() {
        return 'table'
    }

    format(format: any, value: any) {
        console.log(format, value)
    }
}

Quill.register(TableEmbed)

export default TableEmbed
