import { render } from '@testing-library/react';
import ProtectedRoutes from '../services/ProtectedRoutes.jsx';

// Mock do localStorage
const localStorageMock = {
  getItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock do componente Outlet
jest.mock('react-router-dom', () => ({
  Outlet: () => <div data-testid="outlet" />,
}));

describe('ProtectedRoutes', () => {
  afterEach(() => {
    localStorageMock.getItem.mockClear();
  });

  test('Renderiza quando o usuário está autenticado', () => {
    localStorageMock.getItem.mockReturnValueOnce('authToken');

    const { queryByTestId } = render(<ProtectedRoutes />);
    const outlet = queryByTestId('outlet');

    expect(outlet).toBeInTheDocument();
  });

  test('Renderiza o login quando o usuário não está autenticado', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    const { queryByTestId } = render(<ProtectedRoutes />);
    const loginForm = queryByTestId('login-form');

    expect(loginForm).toBeInTheDocument();
  });
});
