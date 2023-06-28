import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../login/form.jsx';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login component', () => {
  test('should display error messages for invalid inputs', async () => {
    render(<Login />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    await waitFor(() => {
      expect(screen.getByText('O campo usuário é obrigatório.')).toBeInTheDocument();
      expect(screen.getByText('O campo senha é obrigatório.')).toBeInTheDocument();
    });
  });

  test('should display error messages for invalid username and password', async () => {
    axios.post.mockRejectedValueOnce({ response: { status: 403 } });

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText('Usuário'), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'abc' } });
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    await waitFor(() => {
      expect(screen.getByText('O campo usuário só pode conter letras.')).toBeInTheDocument();
      expect(screen.getByText('A senha deve conter apenas números.')).toBeInTheDocument();
    });
  });

  test('should redirect to home page for successful login', async () => {
    axios.post.mockResolvedValueOnce({ status: 200 });
    useNavigate.mockReturnValue(jest.fn());

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText('Usuário'), { target: { value: 'username' } });
    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

  });
});
