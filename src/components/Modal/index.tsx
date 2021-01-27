import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Icon from '@components/Icon'

import styles from './index.less'

class Modal extends React.Component<any, any> {
    private el: any
    constructor(props: any) {
        super(props)
        this.el = document.createElement('div')
        this.el.setAttribute('class', styles['rql-modal-wrapper'])

        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        document.body.appendChild(this.el)
        this.toggleModalVisible(this.props.visible)
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.visible !== this.props.visible) {
            this.toggleModalVisible(this.props.visible)
        }
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
        this.el = null
    }

    render() {
        const { visible = false } = this.state
        const { style = {}, children, title = '弹窗标题', okBtnProps = {} } = this.props

        return ReactDOM.createPortal(
            <div
                className={styles['rql-modal']}
                onClick={this.handleCancel}
                style={{ display: visible ? 'flex' : 'none' }}
            >
                <div
                    className={styles['rql-modal-container']}
                    style={style}
                    onClick={e => {
                        e.stopPropagation()
                    }}
                >
                    <div className={styles['rql-modal-header']}>
                        <span className={styles['rql-modal-title']}>{title}</span>
                        <button className={styles['rql-modal-close-btn']} onClick={this.handleCancel}>
                            <Icon type="close" width={23} height={23} />
                        </button>
                    </div>
                    <div className={styles['rql-modal-content']}>{children}</div>
                    <div className={styles['rql-modal-footer']}>
                        <button
                            className={classNames({
                                [styles['rql-modal-ok-btn']]: true,
                                [styles['disabled']]: okBtnProps.disabled
                            })}
                            onClick={this.handleOk}
                            disabled={okBtnProps.disabled}
                        >
                            确认
                        </button>
                        <button className={styles['rql-modal-cancel-btn']} onClick={this.handleCancel}>
                            取消
                        </button>
                    </div>
                </div>
            </div>,
            this.el
        )
    }

    toggleModalVisible = (visible = false) => {
        this.setState({
            visible
        })
    }

    handleOk = () => {
        const { onOk } = this.props
        onOk && onOk()
    }

    handleCancel = () => {
        const { onCancel } = this.props
        onCancel && onCancel()

        this.toggleModalVisible(false)
    }
}

export default Modal
