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
        const { style = {}, children, title = '弹窗标题' } = this.props

        const footerArr = this.renderFooter()

        return ReactDOM.createPortal(
            <div
                className={styles['rql-modal']}
                // onClick={this.handleCancel}
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
                    <div className={styles['rql-modal-footer']}>{footerArr.map(com => com)}</div>
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

    renderFooter = () => {
        const { footer = {}, isWaiting } = this.props
        const { cancel = {}, ok = {} } = footer

        const canclBtn = (
            <button
                key="cancel-btn"
                onClick={this.handleCancel}
                className={styles['rql-modal-cancel-btn']}
                disabled={isWaiting}
            >
                {cancel.text ?? '取消'}
            </button>
        )

        const okBtn = (
            <button
                key="ok-btn"
                onClick={this.handleOk}
                disabled={ok.disabled}
                className={classNames({
                    [styles['rql-modal-ok-btn']]: true,
                    [styles['disabled']]: ok.disabled
                })}
            >
                {ok.text ?? '确认'}
            </button>
        )

        let footerArr = []

        if (!this.props.footer) {
            footerArr = [okBtn, canclBtn]
        } else {
            footer.ok && footerArr.push(okBtn)
            footer.cancel && footerArr.push(canclBtn)
        }

        return footerArr
    }
}

export default Modal
