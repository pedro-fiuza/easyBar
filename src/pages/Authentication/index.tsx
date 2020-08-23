import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/easy.png';

import { Container, Content } from './styles';

const Authentication: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} width="180px" height="140px" alt="EasyBar" />

          <form>
            <h1>Entre para brindar</h1>

            <input placeholder="CPF" />

            <Link to="/dashboard">
              <button type="submit">Entrar</button>
            </Link>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Authentication;
