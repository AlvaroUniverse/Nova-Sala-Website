
import { Routes, Route } from "react-router";
import Auth from './../pages/Auth/index.tsx';
import AlunoAuth from './../pages/Auth/profilesAuth/alunoAuth/index.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/aluno-login" element={<AlunoAuth />} />
    </Routes>
  );
}
