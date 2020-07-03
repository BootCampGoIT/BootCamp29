import React from 'react';

const ButtonsGrop = ({getAction}) => {
    return (
        <>
            <input type="submit" data-action="signIn" value="SignIn" onClick={getAction}/>
            <input type="submit" data-action="signUp" value="SignUp" onClick={getAction} />
        </>
    );
}

export default ButtonsGrop;