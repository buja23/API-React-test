import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";


const API_URL = "http://localhost:3001/alunos";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", data_nascimento: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    const res = await axios.get(API_URL);
    setAlunos(res.data);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ nome: "", email: "", data_nascimento: "" });
    setEditId(null);
    fetchAlunos();
  };

  const handleEdit = aluno => {
    setForm({ nome: aluno.nome, email: aluno.email, data_nascimento: aluno.data_nascimento?.slice(0,10) });
    setEditId(aluno.id);
  };

  const handleDelete = async id => {
    await axios.delete(`${API_URL}/${id}`);
    fetchAlunos();
  };

  return (
    <div>
      <h2>Alunos</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group>
          <Form.Control name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required className="mb-2" />
          <Form.Control name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required className="mb-2" />
          <Form.Control type="date" name="data_nascimento" placeholder="Data de Nascimento" value={form.data_nascimento} onChange={handleChange} required className="mb-2" />
        </Form.Group>
        <Button type="submit" variant="primary" className="me-2">{editId ? "Atualizar" : "Cadastrar"}</Button>
        {editId && <Button variant="secondary" onClick={() => { setForm({ nome: "", email: "", data_nascimento: "" }); setEditId(null); }}>Cancelar</Button>}
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.data_nascimento ? aluno.data_nascimento.slice(0,10) : ""}</td>
              <td>
                <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(aluno)}>Editar</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(aluno.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}