import React from 'react'
import styles from './index.less'

import getToolItem from './mapping'

class ToolBars extends React.Component<any, any> {
    private _isMounted: boolean

    constructor(props: any) {
        super(props)

        this.state = {
            toolList: [],
            toolbars: [
                'undo',
                'redo',
                'clean',
                'brush',
                'fontsize',
                'bold',
                'italic',
                'underline',
                'strike',
                'color',
                'background',
                'align',
                'indent',
                'indentbothend',
                'frontdistance',
                'enddistance',
                'lineheight',
                'letterspacing',
                'sequence',
                'table',
                'blockquote',
                'line',
                'code'
            ]
        }
    }

    componentDidMount() {
        this._isMounted = true

        this.loadToolBarItems()
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.quill !== this.props.quill) {
            this._isMounted = true
            this.loadToolBarItems()
        }
    }

    componentWillUnmount() {
        // 防止卸载了组件后, componentDidMount执行setState
        this._isMounted = false
    }

    render() {
        const { toolList } = this.state
        return (
            <div className={styles['toolbars']}>
                {toolList.map((tool: string) => {
                    return this.renderToolItem(tool)
                })}
            </div>
        )
    }

    loadToolBarItems = async () => {
        const { toolbars } = this.state
        const toolList: any = []

        if (toolbars.length) {
            for (const key of toolbars) {
                const ToolItem = await getToolItem(key)
                toolList.push({
                    ToolItem,
                    key
                })
            }
        }

        this._isMounted &&
            this.setState({
                toolList
            })
    }

    renderToolItem = (tool: any) => {
        const { key, ToolItem } = tool
        return <ToolItem key={key} {...this.props} />
    }
}

export default ToolBars
