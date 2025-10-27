---
sidebar_position: 2
---

# Serviço de Avaliação

## Visão Geral

O **service de avaliação** é o núcleo responsável por coordenar toda a lógica de negócio relacionada às avaliações comportamentais e de desafios dos colaboradores.  
Ele centraliza as operações de **criação, atualização, exclusão e cálculo de médias**, interagindo com os repositórios e o banco de dados.

Este serviço garante a consistência entre:

- As tabelas de avaliações (`tb_avaliacao_comportamental` e `tb_avaliacao_desafio`);
- Os itens de cada avaliação (`tb_avaliacao_comportamental_item` e `tb_avaliacao_desafio_item`);
- A tabela de notas finais (`tb_nota_final`).

---

## Principais Responsabilidades

| Função | Descrição |
|--------|------------|
| `salvar_avaliacao(data)` | Cria uma nova avaliação comportamental e de desafios. Calcula as médias individuais e a nota final. Persiste os dados no banco. |
| `atualizar_avaliacao(avaliacao_id, data)` | Atualiza avaliações existentes (itens comportamentais e/ou desafios). Recalcula médias e atualiza a nota final. |
| `deletar_avaliacao_por_nota_final(nota_final_id)` | Remove a avaliação completa (comportamental, desafio e nota final) a partir do ID da nota final. |

---

## Fluxo do `salvar_avaliacao`

1. Recebe os dados do corpo da requisição (`matricula`, `data_avaliacao`, `comportamental`, `desafios`).
2. Valida a matrícula e busca o `colaborador_id` no banco de dados.
3. Calcula:
   - Média comportamental (4 questões);
   - Média de desafios (2 a 4 desafios);
   - Média final (média entre as duas anteriores).
4. Persiste as médias e os itens nas tabelas correspondentes.
5. Cria o registro na tabela `tb_nota_final`.
6. Retorna as médias calculadas.

---

## Fluxo do `atualizar_avaliacao`

1. Localiza a avaliação comportamental pelo `avaliacao_id`.
2. Se o payload contém `"comportamental"`, atualiza os itens e recalcula a média.
3. Se o payload contém `"desafios"`, busca a avaliação de desafios pelo `colaborador_id` + `data_avaliacao`, atualiza itens e recalcula média.
4. Atualiza a nota final com as novas médias.
5. Retorna um resumo das médias atualizadas.

> Caso a avaliação de desafios não exista para a data informada, o sistema retorna:
> ```json
> {"error": "Avaliação de desafios não encontrada"}
> ```

---

## Fluxo do `deletar_avaliacao_por_nota_final`

1. Busca o registro da nota final pelo `nota_final_id`.
2. Caso exista, deleta:
   - Os itens e o registro da avaliação comportamental;
   - Os itens e o registro da avaliação de desafio;
   - O registro de nota final.
3. Em caso de erro, realiza `rollback` e registra logs no sistema.

---

## Cálculos Realizados

Os cálculos utilizam o helper `calcular_media`:

```python
def calcular_media(valores):
    return round(sum(valores) / len(valores), 2) if valores else 0
```
  
Esse cálculo é aplicado tanto para:

- Questões comportamentais (1 a 5);
- Desafios de entrega (1 a 5).

## Logs Utilizados

O service utiliza o Loguru para registrar operações:

- logger.info → etapas de processamento;
- logger.error → erros de validação e inconsistências;
- logger.success → confirmações de operação bem-sucedida;
- logger.exception → falhas críticas com rastreamento detalhado.

## Dependências internas

| Módulo                                     | Função                                    |
| ------------------------------------------ | ----------------------------------------- |
| `colaborador_repository`                   | Busca o ID do colaborador pela matrícula. |
| `avaliacao_comportamental_repository`      | Gerencia avaliações comportamentais.      |
| `avaliacao_desafio_repository`             | Gerencia avaliações de desafios.          |
| `avaliacao_comportamental_item_repository` | Atualiza e deleta itens comportamentais.  |
| `avaliacao_desafio_item_repository`        | Atualiza e deleta itens de desafios.      |
| `nota_final_repository`                    | Persiste e atualiza notas finais.         |



