import React from 'react'
import classNames from 'classnames'

import styles from './index.less'

class Input extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.changeInputValue(this.props.value)
    }

    render() {
        const { value } = this.state
        const { placeholder, disabled } = this.props

        return (
            <input
                value={value}
                className={classNames({
                    [styles['rql-form-input']]: true,
                    [styles['disable']]: disabled
                })}
                placeholder={placeholder}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                onKeyUp={this.handleInputKeyUp}
                disabled={disabled}
            />
        )
    }

    handleInputKeyUp = (e: any) => {
        const keyCode = window.event ? e.keyCode : e.which
        keyCode === 13 && e.target.blur()
    }

    handleChange = (e: any) => {
        this.changeInputValue(e.target.value)
    }

    handleBlur = () => {
        const { onChange, value, fieldName } = this.props
        const { value: currValue } = this.state

        if (currValue && currValue.trim() === '') {
            this.changeInputValue(value)
        } else if (onChange && fieldName && currValue) {
            onChange(fieldName, this.state.value)
        }
    }

    changeInputValue = (value = '') => {
        this.setState({
            value
        })
    }
}

export default Input
