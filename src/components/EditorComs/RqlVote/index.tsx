import React from 'react'
import styles from './index.less'

class RqlVote extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { title, voteItemList = [] } = this.props

        return (
            <div className={styles['rql-vote']}>
                <div className={styles['rql-vote-header']}>{title}</div>
                <div className={styles['rql-vote-list']}>
                    {voteItemList.map((item: any, index: number) => (
                        <div className={styles['rql-vote-item']} key={index}>
                            <span className={styles['rql-vote-item-radio']}></span>
                            <span className={styles['rql-vote-item-name']}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default RqlVote
