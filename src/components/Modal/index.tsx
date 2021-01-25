import React from 'react'
import ReactDOM from 'react-dom'
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
    }

    render() {
        const { content } = this.props

        return (
            <React.Fragment>
                {React.cloneElement(content, { onClick: this.handleOk })}
                {this.renderModal()}
            </React.Fragment>
        )
    }

    renderModal = () => {
        const { style = {}, children } = this.props

        return ReactDOM.createPortal(
            <div className={styles['rql-modal']}>
                <div className={styles['rql-modal-container']} style={style}>
                    <div className={styles['rql-modal-header']}>
                        <span className={styles['rql-modal-title']}>弹窗标题</span>
                        <button className={styles['rql-modal-close-btn']}>
                            <Icon type="close" width={23} height={23} />
                        </button>
                    </div>
                    <div className={styles['rql-modal-content']}>{children}</div>
                    <div className={styles['rql-modal-footer']}>
                        <button className={styles['primary-btn']} onClick={this.handleOk}>
                            确认
                        </button>
                        <button className={styles['rql-modal-close-btn']} onClick={this.handleCancel}>
                            取消
                        </button>
                    </div>
                </div>
            </div>,
            this.el
        )
    }

    handleOk = () => {
        console.log(11111111111)
    }

    handleCancel = () => {
        console.log(11111)
    }
}

export default Modal
