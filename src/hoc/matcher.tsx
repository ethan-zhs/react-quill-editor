import React from 'react'

export default function matcherHoc(WrapperComponent: any) {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props)
        }

        render() {
            return <WrapperComponent {...this.props} />
        }
    }
}
