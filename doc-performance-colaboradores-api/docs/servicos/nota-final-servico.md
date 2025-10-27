---
sidebar_position: 3
---

# Serviço de Nota Final

## Visão Geral

O **service de notas finais** é responsável por centralizar toda a lógica de agregação e consulta das médias finais dos colaboradores.  
Ele fornece uma camada de abstração entre as **rotas** e o **repositório (`nota_final_repository`)**, garantindo que os dados retornados estejam devidamente formatados e prontos para consumo pela API.

Esse serviço atua em conjunto com as avaliações comportamentais e de desafios, servindo como **fonte principal dos resultados consolidados de desempenho**.

---

## Principais Responsabilidades

| Função | Descrição |
|--------|------------|
| `listar_notas_finais()` | Retorna todas as notas finais registradas no banco de dados, convertendo os valores para formato legível (float e ISO date). |
| `listar_notas_por_matricula(matricula)` | Retorna as notas finais de um colaborador específico, identificado pela matrícula. |

---

## Fluxo do `listar_notas_finais`

1. Chama `nota_final_repository.listar_todos()` para buscar todas as notas no banco.
2. Itera sobre o resultado, convertendo cada campo do modelo em um dicionário Python.
3. Formata os valores decimais (`media_comportamental`, `media_desafio`, `nota_final`) como `float`.
4. Converte a data para formato ISO (`YYYY-MM-DD`).
5. Retorna uma lista de dicionários com os dados normalizados.

---

## Fluxo do `listar_notas_por_matricula`

1. Recebe a **matrícula** como parâmetro.
2. Busca o `colaborador_id` correspondente usando `colaborador_repository.get_id_por_matricula(matricula)`.
3. Chama `nota_final_repository.listar_por_colaborador(colaborador_id)` para buscar as notas.
4. Converte os resultados para dicionários, formatando números e datas.
5. Retorna as notas finais daquele colaborador.

> Caso a matrícula não exista, o método do repositório levantará um `ValueError`, que deve ser tratado na camada de rotas.

---

