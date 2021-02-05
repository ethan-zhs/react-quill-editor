import React from 'react'
import styles from './index.less'

class Split extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            disabled: true
        }
    }

    render() {
        return <span className={styles['rql-split']}></span>
    }
}

export default Split
