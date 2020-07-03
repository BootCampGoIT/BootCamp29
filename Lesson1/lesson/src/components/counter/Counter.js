import React, { Component } from 'react';
import ButtonComponent from './buttonComponent/ButtonComponent';
console.dir(React)


// let x = 5;
// const changeX = () => {
//     x+=1
// }
// changeX()
// console.log(x)
// changeX()
// console.log(x)


class Counter extends Component {
    state = {
        isModalOpen: true,
        isActive: true,
        array: this.props.data
    }

    canWriteSix = () => {
        if (this.state.isModalOpen) {
            return [...this.state.array]
        } else return [...this.state.array, 6]
    };

    handleModalOpen = (num) => {
        console.log("num", num)
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen,
            array: this.canWriteSix(),
            newData: "sfhvshvkshvs"
        }));
    
    }
    // show = () => this.setState({ isModalOpen: true })
    // hide = () => this.setState({ isModalOpen: false })

    render() {
        // console.log("this.props", this.props)
        const { data, user } = this.props;
        return (
            <div>
                {console.log(data, user)}
                <ButtonComponent handleModalOpen={this.handleModalOpen} isModalOpen={this.state.isModalOpen}/>
                {/* <button type="button" onClick={this.hide}>Click</button> */}
                {this.state.isModalOpen && <div>
                    <h2>Hello</h2>
                </div>}
            </div>
        )
    }
}

export default Counter;
