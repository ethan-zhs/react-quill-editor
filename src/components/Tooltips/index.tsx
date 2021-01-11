import * as React from 'react'
import './index.less'

interface IProps {
    value: React.ReactElement | string
}

class Tooltips extends React.Component<IProps, any> {
    private popoverRef: any

    constructor(props: IProps) {
        super(props)
        this.state = {
            visible: false
        }
    }

    render() {
        const { value } = this.props

        return <div className="tooltips">{value}</div>
    }
}

export default Tooltips
