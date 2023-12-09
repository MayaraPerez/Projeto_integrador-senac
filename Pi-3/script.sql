CREATE DATABASE banco_de_dados_PI3;

USE banco_de_dados_PI3;

CREATE TABLE produto(
id int not null auto_increment,
nome varchar(200) not null,
tipo varchar(200) not null,
descrição varchar(200),
fornecedor varchar(200) not null,
preço real not null,
código varchar(200) not null,
primary key(id),
unique(código)
);

CREATE TABLE cliente(
id int not null auto_increment,
nome varchar(200) not null,
idade int not null,
cpf varchar(200) not null,
endereço varchar(200),
telefone varchar(100),
primary key(id),
unique(cpf)
);

CREATE TABLE fornecedor(
id int not null auto_increment,
endereço varchar(200),
telefone varchar(200) not null,
tipo_produto varchar(200) not null,
preco varchar(10),
primary key(id)
);

CREATE TABLE visitas(
id int not null auto_increment,
cliente_id int not null,
data_da_visitas date,
tipo varchar(200),
produto varchar(200) not null,
valor_total real not null,
primary key(id),
foreign key(cliente_id) references cliente(id),
foreign key(produto_id) references produto(id)
);