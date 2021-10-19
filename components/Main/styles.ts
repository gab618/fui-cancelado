import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #000;
  width: 100%;
  height: 100vh;
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Info = styled.div`
  font-family: sans-serif;
  margin: 0 0 111px 69px;

  > h2 {
    color: white;
    font-size: 36px;
    font-weight: 700;
  }
  > span {
    font-size: 24px;
    font-weight: 200;
    color: #b5b5b5;
    margin-top: 16px;
  }
`;

export const Right = styled.div`
  background: #1c1a1a;
  width: 60%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;

  .twitter {
    margin-top: 60px;
    border-radius: 16px;
    background: #00acee;
    height: 48px;
    width: 320px;
    color: #fff;
    border: none;
    cursor: pointer;

    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      > svg {
        margin-right: 8px;
        height: 26px;
        width: 26px;
      }
    }
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 32px 0;

    .line {
      border-bottom: 1px solid #a8a8b3;
      width: 72px;
      margin: 0 8px;
    }

    .text {
      color: #a8a8b3;
      font-size: 14px;
      font-weight: 300;
    }
  }

  > input {
    height: 48px;
    width: 320px;
    border-radius: 16px;
    border: none;
    box-sizing: border-box;

    &::placeholder {
      padding: 0 20px;
    }
  }

  .button {
    margin-top: 16px;
    border-radius: 16px;
    background: #900000;
    height: 48px;
    width: 320px;
    color: #fff;
    border: none;
    cursor: pointer;

    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      > svg {
        margin-right: 8px;
        height: 26px;
        width: 26px;
      }
    }
  }
`;
