import React /* , { useState, useEffect } */ from 'react';
import { /* useRouteMatch, */ Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/img/easy.png';
import { Header, RepositoryInfo, Orders } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // const [newItens, setNewItens] = useState('');

  // const { params } = useRouteMatch();

  return (
    <>
      <Header>
        <img src={logo} width="80px" height="70px" alt="Easy Bar" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <div>
            <strong>mesa infinita</strong>
            <p>descricao da mesa</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>preco</strong>
            <span>total</span>
          </li>
          <li>
            <strong>quantidate</strong>
            <span>pedidos</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Orders>
        <Link to={`/repository`}>
          <img src={logo} alt={'aguardando dados api'} />
          <div>
            <strong>{'Nome do item'}</strong>
            <p>{'descricao'}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Orders>
    </>
  );
};

export default Repository;
