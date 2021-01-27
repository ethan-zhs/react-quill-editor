import React from 'react'
import Modal from '@components/Modal/ModalWrapper'
import Form from '@components/Form'

class InsertLink extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            fieldValue: {}
        }
    }

    render() {
        const { content, focusLink } = this.props

        return (
            <Modal title="插入链接" style={{ width: 700 }} onOk={this.handleOk} content={content}>
                <Form
                    onChange={this.handleFieldChange}
                    config={[
                        {
                            label: '链接标题',
                            type: 'input',
                            fieldName: 'linkTitle',
                            placeholder: '输入链接标题内容',
                            value: focusLink.linkTitle,
                            disabled: focusLink.linkTitle
                        },
                        {
                            label: '链接地址',
                            type: 'input',
                            fieldName: 'link',
                            placeholder: '输入http://或https://开头的链接地址',
                            value: focusLink.link
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
        onOk && onOk(fieldValue.linkTitle, fieldValue.link)
    }
}

export default InsertLink
