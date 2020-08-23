/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/img/easy.png';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newCommand, setNewCommand] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@Easybar:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Easybar:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddCommand(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newCommand) {
      setInputError('Digite o seu CPF para consultar a sua comanda!');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newCommand}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewCommand('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca de sua comanda.');
    }
  }

  return (
    <>
      <img src={logo} width="80px" height="70px" alt="easyBar" />
      <Title>Explore os pedidos de sua comanda</Title>

      <Form hasError={!!inputError} onSubmit={handleAddCommand}>
        <input
          value={newCommand}
          onChange={e => setNewCommand(e.target.value)}
          placeholder="Digite o item pedido"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/authentication`}>
            <img src={logo} alt={'aguardando dados api'} />
            <div>
              <strong>{'Nome do item'}</strong>
              <p>{'descricao'}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
