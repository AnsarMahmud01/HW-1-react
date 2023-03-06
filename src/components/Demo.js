import React from 'react'

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: "#000" }
    }
    static getDrivedStatesFromProps(props, state) {
        return { color: props.color }
    }
    render() {
        return (
            <div>
                Demo Component! Color is {this.state.color}
            </div>
        )
    }
    ComponentDidMount() {
        setTimeout(() => {
            this.setState({ color: "#000" })
        }, 1000)
    }
}

export default Demo