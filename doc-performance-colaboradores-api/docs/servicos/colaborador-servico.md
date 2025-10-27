---
sidebar_position: 4
---

# Serviço de Colaboradores

## Visão Geral

O **service de colaboradores** é responsável por centralizar a lógica de acesso e manipulação de informações sobre os colaboradores do sistema.  
Ele atua como uma camada intermediária entre os **controllers (rotas)** e o **repositório (`colaborador_repository`)**, garantindo o isolamento da lógica de negócio e a rastreabilidade via logs.

Esse service é utilizado principalmente para fornecer dados a outras partes do sistema, como o módulo de avaliações e de notas finais.

---

## Principais Responsabilidades

| Função | Descrição |
|--------|------------|
| `listar_colaboradores()` | Busca todos os colaboradores cadastrados no banco de dados, retornando uma lista completa. |

---

## Fluxo do `listar_colaboradores`

1. O método é chamado pela rota `/colaboradores` via HTTP `GET`.
2. É registrado um log informativo de início da operação.
3. O método `colaborador_repository.listar_todos()` é invocado para recuperar os dados do banco.
4. O resultado é retornado em formato JSON para o controller.
5. Um log de sucesso é registrado com o número total de colaboradores encontrados.

---

## Logs Importantes

O service utiliza o **Loguru** para registrar logs detalhados:

- `logger.info("Buscando todos os colaboradores...")` → indica o início da operação;
- `logger.success(f"{len(colaboradores)} colaboradores encontrados.")` → confirma o sucesso da operação e o total de resultados retornados.

Esses logs são essenciais para auditoria e troubleshooting em ambiente de produção.

---

## Dependências Internas

| Módulo | Função |
|--------|---------|
| `colaborador_repository` | Acesso direto à base de dados de colaboradores, com o método `listar_todos()` para consulta. |

---




