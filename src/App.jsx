import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/main_page/navbar';
import Content from './modules/main_page/content';
import Footer from './modules/main_page/footer';
import LoginForm from './modules/login/form';
import CadastroForm from './modules/cadastro/form';
import AlterarSenhaForm from './modules/senha/form';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/senha" element={<AlterarSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
