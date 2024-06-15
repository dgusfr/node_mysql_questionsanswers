CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

SHOW TABLES;

INSERT INTO usuarios(nome, email, idade) VALUES (
	"Diego",
	"diego@email.com",
	8
);

INSERT INTO usuarios(nome, email, idade) VALUES (
	"João",
	"joão@email.com",
	18
);

INSERT INTO usuarios(nome, email, idade) VALUES (
	"Maria",
	"maria@email.com",
	24
);

INSERT INTO usuarios(nome, email, idade) VALUES (
	"Fulano",
	"fulano@email.com",
	24
);

select * from usuarios;
select * from usuarios where idade > 18;
select * from usuarios where nome = "Diego";
DELETE FROM usuarios WHERE nome = "Fulano";
UPDATE usuarios SET idade = 19 where nome = "Maria";
