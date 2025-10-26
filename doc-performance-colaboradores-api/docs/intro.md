---
sidebar_position: 1
---

# Introdução

## Descrição do Projeto
Este projeto consiste em uma API desenvolvida para gerenciar avaliações de colaboradores.  
A função principal da API é receber notas de avaliações comportamentais e de desafios, calcular as médias de cada avaliação, gerar uma nota final e persistir todos esses dados no banco de dados.

O sistema possibilita a visualização de todas as avaliações e notas finais de colaboradores específicos, bem como operações de atualização e exclusão de registros, oferecendo uma ferramenta completa de acompanhamento de desempenho.

## Tecnologias Utilizadas
O projeto foi desenvolvido com foco em Python e web backend, utilizando as seguintes tecnologias:

- **Flask**: Framework web para criação da API.
- **Flask-SQLAlchemy / SQLAlchemy**: ORM para manipulação de banco de dados MySQL.
- **MySQL**: Banco de dados relacional.
- **pytest / pytest-flask / pytest-mock / factory_boy**: Ferramentas para testes automatizados.
- **marshmallow / marshmallow-sqlalchemy**: Serialização e validação de dados.
- **loguru**: Logging estruturado.
- **python-dotenv**: Gerenciamento de variáveis de ambiente.
- **Werkzeug, Jinja2, colorama, Faker**: Bibliotecas auxiliares para suporte a desenvolvimento, templates e testes.
- **coverage**: Medição de cobertura de testes.

## Motivação
O projeto foi criado para fornecer uma solução simples e eficiente de acompanhamento de desempenho, permitindo que os gestores visualizem e analisem avaliações de colaboradores em tempo real.  
A ideia é centralizar todas as informações de avaliações em uma API confiável, evitando processos manuais e possibilitando a automatização do cálculo de médias e notas finais.

