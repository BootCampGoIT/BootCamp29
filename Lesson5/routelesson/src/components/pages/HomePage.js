import React, { Component } from 'react';

class HomePage extends Component {
    state = {}
    render() {
        console.log('homePageProps', this.props)
        return (
            <>
                <h1>HomePage</h1>
            </>
        );
    }
}

export default HomePage;