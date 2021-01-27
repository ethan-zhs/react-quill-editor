import React from 'react'
import Modal from '@components/Modal'

// import styles from './index.less'

class ModalWrapper extends React.Component<any, any> {
    private el: any
    constructor(props: any) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        const { visible } = this.state
        const { content } = this.props

        return (
            <React.Fragment>
                {React.cloneElement(content, { onClick: () => this.toggleModalVisible(true) })}

                {visible && (
                    <Modal visible={visible} {...this.props} onOk={this.handleOk} onCancel={this.handleCancel} />
                )}
            </React.Fragment>
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

        this.toggleModalVisible(false)
    }

    handleCancel = () => {
        const { onCancel } = this.props
        onCancel && onCancel()

        this.toggleModalVisible(false)
    }
}

export default ModalWrapper
