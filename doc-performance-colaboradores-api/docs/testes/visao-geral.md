---
sidebar_position: 1
---

# Testes Unitários da Aplicação

## Visão Geral

A suíte de testes da aplicação tem como objetivo garantir a **qualidade**, **consistência** e **corretude** das funcionalidades principais da API.  
Os testes são escritos com **pytest**, utilizando **fixtures reutilizáveis** e um **banco SQLite em memória** para simular o comportamento real do banco MySQL, sem necessidade de dependências externas.

Os testes cobrem:
- **Camada de repositórios:** CRUD e persistência no banco.  
- **Camada de serviços:** cálculos de médias e integração entre entidades.  
- **Rotas:** respostas HTTP e fluxo de dados.  

> Todos os testes são executados automaticamente via `pytest` e a cobertura de código é medida com `pytest-cov`.

---

## Estratégia de Testes

A estratégia segue uma abordagem de **testes por camadas**, validando o comportamento individual e integrado de cada módulo:

| Camada | Objetivo | Exemplos |
|---------|-----------|----------|
| **Repositórios** | Validar acesso e manipulação direta do banco. | `test_avaliacao_desafio_repository.py`, `test_nota_final_repository.py` |
| **Serviços** | Garantir que a lógica de negócio (como cálculos de média e persistência) esteja correta. | `test_avaliacao_service.py` |
| **Rotas (Endpoints)** | Assegurar que as APIs respondam corretamente (status code, payload, erros). | `test_avaliacoes_routes.py`, `test_nota_final_routes.py` |
| **Integração** | Testar o fluxo completo de uma operação. | Criação, atualização e deleção de avaliações. |

A cobertura atual é de **81%**, com destaque para 100% em:
- `colaborador_service.py`
- `nota_final_service.py`
- Todas as rotas principais (`colaboradores`, `notas_finais`, `avaliacoes`)

---

## Configuração de Testes (`conftest.py`)

As fixtures definidas em `tests/conftest.py` preparam o ambiente e os dados necessários para a execução dos testes.  
O arquivo cria uma instância do Flask, inicializa o banco de dados e gera dados de exemplo.

### Estrutura Geral

| Fixture | Escopo | Função |
|----------|---------|--------|
| `app` | módulo | Cria e configura a aplicação Flask em modo de teste (`TESTING=True`). |
| `client` | função | Fornece um cliente HTTP para simular requisições às rotas. |
| `db_session` | função | Cria uma sessão de banco SQLite isolada para cada teste. |
| `sample_colaboradores` | função | Insere colaboradores fictícios no banco. |
| `sample_avaliacao_comportamental` | função | Gera uma avaliação comportamental de exemplo. |
| `sample_avaliacao_desafio` | função | Gera uma avaliação de desafios de exemplo. |
| `sample_notas_finais` | função | Insere notas finais de colaboradores para testes de agregação. |

---

## Banco de Dados de Teste

O banco de testes utiliza uma instância **SQLite em memória** (`sqlite:///:memory:`) configurada dinamicamente via `app.config`.  
Durante cada teste:
1. O schema completo é criado via `db.create_all()`.  
2. Os dados são inseridos pelas fixtures.  
3. O teste é executado.  
4. A transação é revertida (`rollback`) e a conexão é fechada.

Isso garante que **cada teste comece com o banco limpo**, mantendo isolamento e previsibilidade.

---

## Exemplo de Fixture: `sample_colaboradores`

```python
@pytest.fixture
def sample_colaboradores(db_session):
    c1 = Colaborador(matricula="001", nome="Ana Silva", data_admissao=datetime.date(2025,1,1), cargo="Analista")
    c2 = Colaborador(matricula="002", nome="Bruno Souza", data_admissao=datetime.date(2025,2,1), cargo="Desenvolvedor")
    db_session.add_all([c1, c2])
    db_session.commit()
    return [c1, c2]

Essa fixture:

* Insere dois colaboradores no banco;
* Permite reutilização em testes de repositório e serviço;
* Garante que os IDs e dados estejam disponíveis para avaliações e notas finais.

---

## Execução dos Testes

Para rodar todos os testes com cobertura:

```bash
pytest --cov=app --cov-report=term-missing
```

Para rodar apenas os testes de uma categoria específica (ex: serviços):

```bash
pytest tests/services/ -v
```

Para verificar o tempo de execução:

```bash
pytest --durations=10
```

---

## Cobertura e Qualidade

A cobertura atual do projeto:

| Camada           | Cobertura |
| ---------------- | --------- |
| **Models**       | 100%      |
| **Services**     | 85–100%   |
| **Routes**       | 90–100%   |
| **Repositories** | 30–100%   |
| **Schemas**      | 80%       |
| **Utils**        | 86%       |

> O objetivo é manter acima de **85% de cobertura total**, priorizando as camadas de **serviço** e **rotas** (que concentram a lógica de negócio e interface pública da API).


```
```




