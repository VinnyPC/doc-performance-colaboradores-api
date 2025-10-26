---
sidebar_position: 1
---

# Arquitetura do Projeto

## Visão Geral
O projeto segue uma arquitetura **modular e em camadas**, permitindo fácil manutenção, testes e escalabilidade.  
A API é responsável por receber, processar e armazenar dados de avaliações de colaboradores, garantindo integridade e consistência.

As principais camadas do sistema são:

1. **Camada de Apresentação (API / Routes)**  
   - Responsável por expor os endpoints da API via Flask.
   - Recebe requisições HTTP dos clientes.
   - Valida e serializa os dados de entrada e saída utilizando **Marshmallow**.

2. **Camada de Serviço (Services)**  
   - Contém a lógica de negócio da aplicação.
   - Calcula médias de avaliações comportamentais e de desafios.
   - Orquestra chamadas aos repositórios para persistir ou consultar dados.

3. **Camada de Persistência (Repositories)**  
   - Interage diretamente com o banco de dados via **SQLAlchemy**.
   - Contém funções para CRUD de cada modelo (Colaborador, AvaliacaoComportamental, AvaliacaoDesafio, NotaFinal).

4. **Camada de Modelos (Models)**  
   - Define as tabelas e relações no banco de dados usando **SQLAlchemy ORM**.

5. **Camada de Testes**  
   - Testes unitários e de integração com **pytest**, **pytest-flask** e **factory_boy**.
   - Cobertura completa da API, serviços e repositórios.
   - Inclui fixtures para dados de teste isolados do banco de produção.

## Fluxo de Dados

## Tecnologias e Ferramentas
- **Backend**: Python, Flask
- **ORM**: SQLAlchemy, Flask-SQLAlchemy
- **Banco de Dados**: MySQL
- **Testes**: pytest, pytest-flask, factory_boy
- **Serialização e validação**: Marshmallow, marshmallow-sqlalchemy
- **Logging**: loguru
- **Ambiente e Configuração**: python-dotenv

## Diagrama Simplificado
```mermaid
flowchart LR
    Cliente -->|HTTP| API
    API -->|Valida e chama| Services
    Services -->|CRUD| Repositories
    Repositories -->|Persistência| BancoDeDados[(MySQL)]
    Services -->|Retorna resultado| API
    API -->|JSON| Cliente


