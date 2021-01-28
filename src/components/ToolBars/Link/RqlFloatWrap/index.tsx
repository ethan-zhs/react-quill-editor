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

        document.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        this.removeDom()
        document.removeEventListener('click', this.handleClick)
    }

    handleClick = (e: any) => {
        const elem = e.target
        const wrapElem: any = document.querySelector(`.${styles['rql-float-wrap']}`)

        if (!elem || !wrapElem.contains(elem)) {
            this.removeDom()
        }
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
            <div className={styles['rql-float-wrap']} style={{ left: pos[0], top: pos[1] - 45 }}>
                {children}
            </div>
        )
    }
}

export default RqlFloatWrap
