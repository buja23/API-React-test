import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";

const API_URL = "http://localhost:3001/professores";

export default function Professores() {
  const [professores, setProfessores] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", especialidade: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProfessores();
  }, []);

  const fetchProfessores = async () => {
    const res = await axios.get(API_URL);
    setProfessores(res.data);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ nome: "", email: "", especialidade: "" });
    setEditId(null);
    fetchProfessores();
  };

  const handleEdit = professor => {
    setForm({ nome: professor.nome, email: professor.email, especialidade: professor.especialidade });
    setEditId(professor.id);
  };

  const handleDelete = async id => {
    await axios.delete(`${API_URL}/${id}`);
    fetchProfessores();
  };

  return (
    <div>
      <h2>Professores</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group>
          <Form.Control name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required className="mb-2" />
          <Form.Control name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required className="mb-2" />
          <Form.Control name="especialidade" placeholder="Especialidade" value={form.especialidade} onChange={handleChange} required className="mb-2" />
        </Form.Group>
        <Button type="submit" variant="primary" className="me-2">{editId ? "Atualizar" : "Cadastrar"}</Button>
        {editId && <Button variant="secondary" onClick={() => { setForm({ nome: "", email: "", especialidade: "" }); setEditId(null); }}>Cancelar</Button>}
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Especialidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.map(professor => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.email}</td>
              <td>{professor.especialidade}</td>
              <td>
                <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(professor)}>Editar</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(professor.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}