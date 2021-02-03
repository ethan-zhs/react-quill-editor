import React from 'react'
import classNames from 'classnames'
import Tooltips from '@components/Tooltips'

import styles from './index.less'

import getToolItem from './mapping'
import getLocales from '@src/locale'

class ToolBars extends React.Component<any, any> {
    private toolbarRef: any
    private _isMounted: boolean
    private toolbars = [
        'undo',
        'redo',
        'clean',
        'brush',
        'fontsize',
        'bold',
        'italic',
        'underline',
        'strike',
        'header',
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
        'codeblock',
        'emotion',
        'audio',
        'video',
        'image',
        'vote',
        'link',
        'more'
    ]

    constructor(props: any) {
        super(props)

        this.state = {
            toolList: [],
            moreToolbars: []
        }

        this.toolbarRef = React.createRef()
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

        window.addEventListener('resize', () => {
            const { toolbars = this.toolbars } = this.props
            toolbars.length * 30
            console.log(toolbars.length * 30)
        })
    }

    componentWillUnmount() {
        // 防止卸载了组件后, componentDidMount执行setState
        this._isMounted = false
    }

    render() {
        const { toolList, moreToolbars } = this.state

        const ToolItem = this.renderToolItem
        const tools = toolList.filter((t: any) => ![...moreToolbars, 'more'].includes(t.key))
        const more = toolList.find((t: any) => t.key === 'more')
        const moreTools = toolList.filter((t: any) => moreToolbars.includes(t.key))

        return (
            <div className={styles['toolbars']} ref={this.toolbarRef}>
                {tools.map((tool: string, index: number) => (
                    <ToolItem key={index} tool={tool} {...this.props} />
                ))}

                {more && moreTools.length > 0 && (
                    <ToolItem
                        tool={more}
                        moreTools={moreTools.map((tool: string, index: number) => (
                            <ToolItem key={index} tool={tool} {...this.props} />
                        ))}
                    />
                )}
            </div>
        )
    }

    loadToolBarItems = async () => {
        const { toolbars = this.toolbars } = this.props
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

        if (this._isMounted) {
            await this.setState({
                toolList
            })
        }

        const toolbarElem = this.toolbarRef.current
        console.log(toolbarElem.offsetWidth, toolbarElem.parentNode.offsetWidth)
    }

    renderToolItem = (props: any) => {
        const { key, ToolItem } = props.tool
        return <ToolItem ToolWrapper={this.toolWrapper(key)} {...props} />
    }

    /**
     * 包裹tool组件
     * 实现通用的disable, tooltips, active,不需要在每个组件都实现一次
     */
    toolWrapper = (key: string) => {
        const locale = getLocales('zh-CN')

        return function (props: any) {
            return (
                <div
                    className={classNames({
                        [styles['tool-wrapper']]: true,
                        [styles['disabled']]: props.disabled,
                        [styles['actived']]: props.active
                    })}
                >
                    {props.children}
                    <Tooltips value={locale.tooltips[key]} />
                </div>
            )
        }
    }
}

export default ToolBars
