import * as React from 'react'
import styles from './index.less'

interface IProps {
    visible?: boolean
    content: React.ReactElement | string
    children: React.ReactElement
    onVisibleChange?: (visible: boolean, type?: string) => void
}

class Popover extends React.Component<IProps, any> {
    private popoverRef: any

    constructor(props: IProps) {
        super(props)
        this.state = {
            visible: false
        }

        this.popoverRef = React.createRef()
    }

    componentDidMount() {
        this.handleDocumentClick()
    }

    render() {
        const { children, content, visible } = this.props

        return (
            <div className={styles['popover']}>
                {children}
                {visible && (
                    <div className={styles['popover-mark']} ref={this.popoverRef}>
                        <div className={styles['popover-panel']}>{content}</div>
                    </div>
                )}
            </div>
        )
    }

    onVisibleChange = (visible: boolean) => {
        const { onVisibleChange } = this.props
        onVisibleChange && onVisibleChange(visible)
    }

    handleDocumentClick = () => {
        document.addEventListener('click', (e: any) => {
            e.stopPropagation()
            const parentElem = this.popoverRef.current
            if (!parentElem || !parentElem.contains(e.target)) {
                this.onVisibleChange(false)
            }
        })
    }
}

export default Popover
