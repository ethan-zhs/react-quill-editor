import React from 'react'
import Modal from '@components/Modal/ModalWrapper'
import Form from '@components/Form'

class InsertAudio extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            fieldValue: {}
        }
    }

    render() {
        const { content } = this.props

        return (
            <Modal title="插入音频" style={{ width: 700 }} onOk={this.handleOk} content={content}>
                <Form
                    onChange={this.handleFieldChange}
                    config={[
                        {
                            label: '音频名称',
                            type: 'input',
                            fieldName: 'filename',
                            placeholder: '输入音频名称',
                            value: 'asdsadsadasdasdasds阿三大苏打阿三大苏打阿三大苏打ad.mp3'
                        },
                        {
                            label: '播放地址',
                            type: 'input',
                            fieldName: 'url',
                            placeholder: '输入http://或https://开头的视频地址',
                            value:
                                'https://video2-cloud.itouchtv.cn/video/2020/12/24/c20ca9309d72656b1608796578648667__hd.mp4'
                        },
                        {
                            label: '音频时长',
                            type: 'input',
                            fieldName: 'duration',
                            placeholder: '输入音频时长',
                            value: 365
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

export default InsertAudio
