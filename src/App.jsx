import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/main_page/navbar';
import Content from './modules/main_page/content';
import Footer from './modules/main_page/footer';
import LoginForm from './modules/login/form';
import CadastroForm from './modules/cadastro/form';
import AlterarSenhaForm from './modules/senha/form';
import Painel from './modules/admin/painel';
import PreferenciasForm from './modules/preferencias/preferencias';
import MatchesForm from './modules/matches/matches';
import Chat from './modules/chat/chat';
import ProtectedRoutes from './services/ProtectedRoutes';

function Chatm() {
  return (
    <div>
      <Navbar />
      <Chat />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

function Cadastro() {
  return (
    <div>
      <CadastroForm />
    </div>
  );
}

function AlterarSenha() {
  return (
    <div>
      <AlterarSenhaForm />
    </div>
  );
}

function Admin() {
  return (
    <div>
      <Painel />
    </div>
  );
}

function Preferencias() {
  return (
    <div>
      <Navbar />
      <PreferenciasForm />
    </div>
  );
}

function Matches() {
  return (
    <div>
      <Navbar />
      <h1>Minha Aplicação de Preferências</h1>
      <MatchesForm />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/senha" element={<AlterarSenha />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/preferencias" element={<Preferencias />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/chat" element={<Chatm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
