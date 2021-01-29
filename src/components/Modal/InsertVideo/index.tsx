import React from 'react'
import Modal from '@components/Modal/ModalWrapper'
import Form from '@components/Form'

class InsertVideo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            fieldValue: {}
        }
    }

    render() {
        const { content } = this.props

        return (
            <Modal title="插入视频" style={{ width: 700 }} onOk={this.handleOk} content={content}>
                <Form
                    onChange={this.handleFieldChange}
                    config={[
                        {
                            label: '封面地址',
                            type: 'input',
                            fieldName: 'poster',
                            placeholder: '输入http://或https://开头的封面地址',
                            value: 'https://img2-cloud.itouchtv.cn/news/e1fcb5925356f06d1e8b3092e757903f.png'
                        },
                        {
                            label: '视频地址',
                            type: 'input',
                            fieldName: 'url',
                            placeholder: '输入http://或https://开头的视频地址',
                            value:
                                'https://video2-cloud.itouchtv.cn/video/2020/12/24/c20ca9309d72656b1608796578648667__hd.mp4'
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

export default InsertVideo
