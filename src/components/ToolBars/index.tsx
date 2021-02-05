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
        'link'
    ]

    constructor(props: any) {
        super(props)

        this.state = {
            toolList: [],
            toolbarLength: 100,
            toolbarWidth: 0
        }

        this.toolbarRef = React.createRef()
    }

    componentDidMount() {
        this._isMounted = true

        this.loadToolBarItems().then(() => {
            this.setState(
                {
                    toolbarWidth: this.toolbarRef.current.offsetWidth
                },
                () => {
                    this.calculateToolbarWidth()
                }
            )

            window.addEventListener('resize', () => {
                this.calculateToolbarWidth()
            })
        })
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
        const { toolList, toolbarLength = 100 } = this.state

        const ToolItem = this.renderToolItem
        const tools = toolList.filter((t: any) => t.key !== 'more')
        const more = toolList.find((t: any) => t.key === 'more')
        const restTools = tools.filter((t: any, index: number) => index < toolbarLength)
        const moreTools = tools.filter((t: any, index: number) => index >= toolbarLength && t.key != 'split')

        return (
            <div className={styles['toolbars-container']}>
                <div className={styles['toolbars']} ref={this.toolbarRef}>
                    {restTools.map((tool: any, index: number) => {
                        if (index >= restTools.length - 1 && tool.key === 'split') {
                            return null
                        } else {
                            return <ToolItem key={index} tool={tool} {...this.props} />
                        }
                    })}

                    {more && moreTools.length > 0 && this._isMounted && (
                        <ToolItem
                            tool={more}
                            moreTools={moreTools.map((tool: any, index: number) => (
                                <ToolItem key={index} tool={tool} {...this.props} />
                            ))}
                        />
                    )}
                </div>
            </div>
        )
    }

    loadToolBarItems = async () => {
        let { toolbars = this.toolbars } = this.props
        const toolList: any = []

        toolbars = [...this.dealWithGroups(toolbars), 'more']

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
    }

    dealWithGroups = (toolbars: any) => {
        let _toolbars: any = []

        for (const key of toolbars) {
            if (Array.isArray(key)) {
                _toolbars = [..._toolbars, ...key]
                _toolbars.push('split')
            } else {
                _toolbars.push(key)
            }
        }

        return _toolbars
    }

    calculateToolbarWidth = () => {
        const { toolList } = this.state
        const { toolbarWidth } = this.state

        const toolbarElem = this.toolbarRef.current

        const parentWidth = toolbarElem.parentNode.offsetWidth
        const toolbarLength = Math.round((parentWidth / toolbarWidth) * toolList.length)

        this.setState({ toolbarLength: toolbarLength - 4 })
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
