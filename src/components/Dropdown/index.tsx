import React from 'react'
import styles from './index.less'

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { children } = this.props
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button className={styles['dropdown']}>
                {children}
                <span>
                    <svg viewBox="0 0 1877 1024" width="12" height="12">
                        <path d="M952.5662596 696.50144616L1272.87530623 376.19239952a33.50865592 33.50865592 0 0 0-23.46254029-57.61933278H607.49839951a33.50865592 33.50865592 0 0 0-23.4625403 57.68414625l320.30904665 320.24423317a34.15679249 34.15679249 0 0 0 48.22135374 0z"></path>
                    </svg>
                </span>
            </button>
        )
    }
}

export default Dropdown
