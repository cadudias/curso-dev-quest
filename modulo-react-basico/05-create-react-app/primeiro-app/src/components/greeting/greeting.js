import React from 'react'

class Greeting extends React.Component {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}

export default Greeting