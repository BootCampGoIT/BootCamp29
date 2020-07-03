import React, { Component } from 'react';
import axios from 'axios';
import ButtonsGrop from './buttonsGroup/ButtonsGrop';

const API_KEY = "AIzaSyAdzls6jyMSj9l5fr2JPCwBdeE46JQhUBw";
// https://newproject-eb2de.firebaseio.com/

class AuthForm extends Component {
    state = {
        email: "",
        password: ""
    }

    getInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    // getAction = (e) => {

    // }
    // authUser = (e) => {
    //     e.preventDefault();
    //     this.getAction(e) === "signIn" ? this.signIn() : this.signUp()
    // }

    signUp = (e) => {
        e.preventDefault();
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, { ...this.state, returnSecureToken: true })
            .then(() => this.setState({ email: "", password: "" }));
    }
    signIn = (e) => {
        e.preventDefault();
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, { ...this.state, returnSecureToken: true })
            .then((response) => localStorage.setItem('user', JSON.stringify({ email: response.data.email, token: response.data.idToken, localId: response.data.localId })))
            .then(() => this.setState({ email: "", password: "" }));
    }

    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.signIn}>
                <label>Email<input type="text" name="email" onChange={this.getInfo} value={email} /></label>
                <label>Password<input type="text" name="password" onChange={this.getInfo} value={password} /></label>
                <button type="submit">SignIn</button>

                {/* <ButtonsGrop getAction={this.getAction} /> */}
            </form>
        );
    }
}

export default AuthForm;