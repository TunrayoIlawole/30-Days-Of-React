import React, {Component} from 'react';

class MouseMove extends Component {

    state = {
        bottom: 10,
        right: 0
    }



    handleMouse = () => {
        const index1 = Math.floor(Math.random() * 600);
        const index2 = Math.floor(Math.random() * 1000);
        this.setState({
            bottom: index1,
            right: index2
        })
    }

    render() {
        return (
            <div className = "mouse-con">
                <button style = {{ bottom: `${this.state.bottom}px`, right: `${this.state.right}px`}} onMouseOver = {this.handleMouse} className = "mouse">30 Days Of React</button>
            </div>
        )
    }

}

export default MouseMove;