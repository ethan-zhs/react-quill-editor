import React from 'react'

import Input from './Input'

import styles from './index.less'

class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            fieldList: [],
            fleldValue: {}
        }
    }

    componentDidMount() {
        const { config = [] } = this.props

        const ComList: any = {
            input: Input
        }

        const fleldValue: any = {}

        const fieldList = config.map((item: any) => {
            item.FormItem = ComList[item.type]

            if (item.value) {
                fleldValue[item.fieldName] = item.value
            }
            return item
        })

        this.setState({ fieldList, fleldValue })
    }

    render() {
        const { fieldList } = this.state

        return (
            <React.Fragment>
                {fieldList.map((item: any) => {
                    const { FormItem, fieldName, label } = item
                    return (
                        <div key={fieldName} className={styles['rql-form-item']}>
                            <label>{label}</label>
                            <FormItem {...item} onChange={this.handleValueChange} />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

    handleValueChange = (key: string, value: any) => {
        const { onChange } = this.props

        const fleldData = {
            ...this.state.fleldValue,
            [key]: value
        }

        this.setState({
            fleldValue: fleldData
        })

        onChange && onChange(fleldData)
    }
}

export default Form
