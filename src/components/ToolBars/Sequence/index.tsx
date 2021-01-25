import React from 'react'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import styles from './index.less'

class Sequence extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const listArr = [
            { name: '○ 大圆圈', value: 'circle', type: 'bullet' },
            { name: '● 小黑点', value: 'disc', type: 'bullet' },
            { name: '■ 小方块 ', value: 'square', type: 'bullet' },
            { name: '1,2,3...', value: 'decimal', type: 'ordered' },
            { name: 'a,b,c...', value: 'lower-alpha', type: 'ordered' },
            { name: 'i,ii,iii...', value: 'lower-roman', type: 'ordered' },
            { name: 'A,B,C...', value: 'upper-alpha', type: 'ordered' },
            { name: 'I,II,III...', value: 'upper-roman', type: 'ordered' }
        ]

        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['indent-both-end-list']}>
                        {listArr.map((item: any) => (
                            <div
                                key={item.value}
                                onClick={() => this.handleSequence(item.value, item.type)}
                                className={styles['indent-both-end-item']}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                }
            >
                <Icon type="sequence" />
            </Dropdown>
        )
    }

    handleSequence = (listStyleType: string, type: string) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        quill.format('list', type)
        quill.format('listStyleType', listStyleType)
    }
}

export default Sequence
