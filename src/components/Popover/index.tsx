import * as React from 'react'
import classNames from 'classnames'
import window from '../../global/window'
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
        document.addEventListener('click', this.handleDocumentClick)
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.visible !== this.props.visible) {
            if (this.props.visible) {
                const { left, width } = this.popoverRef.current.getBoundingClientRect()
                const winWidth = window.innerWidth || document.body.clientHeight

                if (winWidth - left < width) {
                    this.popoverRef.current.style.left = 'inherit'
                    this.popoverRef.current.style.right = '0px'
                }
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick)
    }

    render() {
        const { children, content, visible } = this.props

        return (
            <div className={styles['popover']}>
                {children}
                <div
                    className={classNames({
                        [styles['popover-mark']]: true,
                        [styles['popover-hide']]: !visible
                    })}
                    ref={this.popoverRef}
                >
                    <div className={styles['popover-panel']}>{content}</div>
                </div>
            </div>
        )
    }

    onVisibleChange = (visible: boolean) => {
        const { onVisibleChange } = this.props
        onVisibleChange && onVisibleChange(visible)
    }

    handleDocumentClick = (e: any) => {
        e.stopPropagation()
        const parentElem = this.popoverRef.current
        if (!parentElem || !parentElem.contains(e.target)) {
            this.onVisibleChange(false)
        }
    }
}

export default Popover
