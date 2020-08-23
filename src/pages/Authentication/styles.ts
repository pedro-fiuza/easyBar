import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin: 100px 0;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #023891;
    }

    input {
      background: whitesmoke;
      border-radius: 10px;
      border: 2px solid whitesmoke;
      padding: 16px;
      width: 100%;
      color: #023891;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #023891;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: whitesmoke;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#023891')};
      }
    }
  }
`;
