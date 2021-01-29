import React from 'react'
import Modal from '@components/Modal/ModalWrapper'
import Form from '@components/Form'

class InsertImage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            fieldValue: {}
        }
    }

    render() {
        const { content } = this.props

        return (
            <Modal title="插入图片" style={{ width: 700 }} onOk={this.handleOk} content={content}>
                <Form
                    onChange={this.handleFieldChange}
                    config={[
                        {
                            label: '图片地址',
                            type: 'input',
                            fieldName: 'url',
                            placeholder: '输入图片地址',
                            value: 'https://img2-cloud.itouchtv.cn/news/e1fcb5925356f06d1e8b3092e757903f.png'
                        }
                    ]}
                />
            </Modal>
        )
    }

    handleFieldChange = (fieldValue: any = {}) => {
        this.setState({
            fieldValue
        })
    }

    handleOk = () => {
        const { onOk } = this.props
        const { fieldValue } = this.state
        onOk && onOk(fieldValue)
    }
}

export default InsertImage
