import React from 'react'
import classNames from 'classnames'
import Modal from '@components/Modal/ModalWrapper'

import styles from './index.less'

class InsertVote extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            currentVote: undefined
        }
    }

    render() {
        const { currentVote = {} } = this.state
        const { content } = this.props

        const voteList = [
            { id: 1, title: '投票名称1', voteItemList: [{ name: '投票选项1' }, { name: '投票选项2' }] },
            { id: 2, title: '投票名称2', voteItemList: [{ name: '投票选项1' }, { name: '投票选项2' }] }
        ]

        return (
            <Modal title="插入投票" style={{ width: 700 }} onOk={this.handleOk} content={content}>
                <table className={styles['insert-table']}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>投票名称</th>
                            <th>截至时间</th>
                            <th>投票人数</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voteList.map(item => (
                            <tr key={item.id} onClick={() => this.handleSelectVote(item)}>
                                <td>
                                    <div
                                        className={classNames({
                                            [styles['table-radio-btn']]: true,
                                            [styles['active']]: currentVote.id === item.id
                                        })}
                                    ></div>
                                </td>
                                <td>{item.title}</td>
                                <td>2021-05-28 00:00</td>
                                <td>0</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>
        )
    }

    handleSelectVote = (item: any) => {
        this.setState({
            currentVote: item
        })
    }

    handleOk = () => {
        const { onOk } = this.props
        const { currentVote } = this.state
        if (currentVote && onOk) {
            onOk(currentVote)
        }
    }
}

export default InsertVote
