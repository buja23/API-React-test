CREATE DATABASE crud_node;

CREATE TABLE crud_node.`usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE crud_node.`usuarios`
  ADD PRIMARY KEY (`id`);

ALTER TABLE crud_node.`usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
