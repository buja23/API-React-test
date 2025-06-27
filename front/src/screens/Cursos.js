import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";

const API_URL = "http://localhost:3001/cursos";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [form, setForm] = useState({ nome: "", descricao: "", carga_horaria: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    const res = await axios.get(API_URL);
    setCursos(res.data);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ nome: "", descricao: "", carga_horaria: "" });
    setEditId(null);
    fetchCursos();
  };

  const handleEdit = curso => {
    setForm({ nome: curso.nome, descricao: curso.descricao, carga_horaria: curso.carga_horaria });
    setEditId(curso.id);
  };

  const handleDelete = async id => {
    await axios.delete(`${API_URL}/${id}`);
    fetchCursos();
  };

  return (
    <div>
      <h2>Cursos</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group>
          <Form.Control name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required className="mb-2" />
          <Form.Control name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required className="mb-2" />
          <Form.Control name="carga_horaria" placeholder="Carga Horária" value={form.carga_horaria} onChange={handleChange} required className="mb-2" />
        </Form.Group>
        <Button type="submit" variant="primary" className="me-2">{editId ? "Atualizar" : "Cadastrar"}</Button>
        {editId && <Button variant="secondary" onClick={() => { setForm({ nome: "", descricao: "", carga_horaria: "" }); setEditId(null); }}>Cancelar</Button>}
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Carga Horária</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map(curso => (
            <tr key={curso.id}>
              <td>{curso.nome}</td>
              <td>{curso.descricao}</td>
              <td>{curso.carga_horaria}</td>
              <td>
                <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(curso)}>Editar</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(curso.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}