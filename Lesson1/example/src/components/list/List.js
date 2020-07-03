import React, { Component } from 'react';
import ListItem from './listItem/ListItem';

class List extends Component {
    state = {
        users: this.props.users, //[{},{},{}]
    }

    deleteCard = (e) => {
        const id = e.target.dataset.id;
        this.setState(prevState => {
            return {
                users: [...prevState.users.filter(user => user.id !== id)]
            }
        })
    }
    
    render() {
        return (
            <ul>
                {this.state.users.map(user => <ListItem deleteCard={this.deleteCard} user={user} key={user.id} />)}
            </ul>
        );
    }
}

export default List;