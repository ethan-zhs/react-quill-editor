import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import styles from './index.less'

class Fixedlayer extends React.Component<any, any> {
    private el: any
    constructor(props: any) {
        super(props)

        this.el = document.getElementById('rql-fixed-layer')

        if (!this.el) {
            this.el = document.createElement('div')
            this.el.setAttribute('id', 'rql-fixed-layer')
            document.body.appendChild(this.el)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.removeDom)
        window.addEventListener('resize', this.removeDom)
        document.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        this.removeDom()
        document.removeEventListener('click', this.handleClick)
        window.removeEventListener('scroll', this.removeDom)
        window.removeEventListener('resize', this.removeDom)
    }

    handleClick = (e: any) => {
        const elem = e.target
        const wrapElem: any = document.querySelector(`#rql-fixed-layer`)

        if (!wrapElem || !wrapElem.contains(elem)) {
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
    }

    createFloatWrap = () => {
        const {
            children,
            pos: [left = 0, top = 0],
            visible
        } = this.props

        const scrollTop = document.documentElement.scrollTop
        const scrollLeft = document.documentElement.scrollLeft

        return (
            <div
                className={classNames({
                    [styles['rql-fixed-layer-wrap']]: true,
                    [styles['rql-fixed-layer-hide']]: !visible
                })}
                style={{ left: left + scrollLeft, top: top + scrollTop - 45 }}
            >
                {children}
            </div>
        )
    }
}

export default Fixedlayer
