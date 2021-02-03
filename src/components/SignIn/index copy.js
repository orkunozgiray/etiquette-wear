import './SignIn.css';
import React from 'react';
import {
    LoginContainer,
    LoginWrapper,
    LoginUserName,
    LoginText,
    ErrorMsg,
    LoginLabel,
    LoginBtnContainer,
    LoginBtn,

} from './SignInElements';

const SignIn = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <LoginContainer>
            <LoginWrapper>
                <label>Username</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMsg>{emailError}</ErrorMsg>
                <LoginLabel>Password</LoginLabel>
                <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMsg>{passwordError}</ErrorMsg>
                <LoginBtnContainer>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>
                                Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>
                                Have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </> 
                    )}
                </LoginBtnContainer>
            </LoginWrapper>
        </LoginContainer>
    );
};

export default SignIn;
