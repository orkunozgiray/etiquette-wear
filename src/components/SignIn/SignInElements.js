import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 20px;
    background: #e9e9e9;
    display: flex;
    margin-top: 100px;
`;

export const LoginWrapper = styled.div`
    padding: 60px;
    margin: auto;
    width: 100%;
    max-width: 520px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: radial-gradient(
      ellipse at left bottom,
      rgba(22, 24, 47, 1) 0%,
      rgba(38, 20, 72, 0.9) 59%,
      rgba(17, 27, 75, 0.9) 100%
    );
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
`;

export const LoginUserName = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
`;

export const LoginText = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
`;

export const LoginBtnContainer = styled.div`
    width: 100%;
    padding: 24px 0;
`;

export const ErrorMsg = styled.p`
    color: red;
    font-size: 16px;
`;

export const LoginBtn = styled.div`
    color: red;
    font-size: 16px;
`;

export const LoginLabel = styled.p`
    color: white;
    margin: 14px 0;
    display: block;
    font-size: 22px;
    line-height: 1;
`;

