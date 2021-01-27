import React from 'react'
import ReactDOM from 'react-dom'

import styles from './index.less'

class RqlFloatWrap extends React.Component<any, any> {
    private el: any
    constructor(props: any) {
        super(props)

        this.el = document.createElement('div')
        document.body.appendChild(this.el)
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.removeDom()
        })

        document.addEventListener('click', () => {
            this.removeDom()
        })
    }

    componentWillUnmount() {
        this.removeDom()
    }

    render() {
        const FloatWrap = this.createFloatWrap
        return ReactDOM.createPortal(<FloatWrap />, this.el)
    }

    removeDom = () => {
        const { handleFloatVisible } = this.props
        handleFloatVisible && handleFloatVisible()

        if (this.el) {
            document.body.removeChild(this.el)
            this.el = null
        }
    }

    createFloatWrap = () => {
        const { children, pos } = this.props
        return (
            <div className={styles['rql-float-wrap']} style={{ left: pos[0], top: pos[1] - 35 }}>
                {children}
            </div>
        )
    }
}

export default RqlFloatWrap
