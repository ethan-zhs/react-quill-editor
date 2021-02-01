import React from 'react'
import styles from './index.less'

class RqlImage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { src } = this.props

        return <img className={styles['rql-image']} src={src} />
    }
}

export default RqlImage
