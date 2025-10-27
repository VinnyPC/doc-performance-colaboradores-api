---
sidebar_position: 2
---

# Visão geral

Esta API foi desenvolvida para gerenciar e avaliar o desempenho de colaboradores, tanto no aspecto comportamental quanto nas entregas de desafios.
Ela permite o registro, consulta, atualização e exclusão de avaliações, além do cálculo automático das notas finais por colaborador e período.

A aplicação tem como principais objetivos:

- Facilitar a coleta de avaliações periódicas de desempenho.
- Permitir análises comparativas entre colaboradores.
- Centralizar as informações comportamentais e de desafios em um único ponto.
- Servir de base para relatórios gerenciais e feedbacks estruturados.

## Estrutura de recursos
| Recurso          | Descrição                                                           |
| ---------------- | ------------------------------------------------------------------- |
| `/avaliacoes`    | Gerencia as avaliações (criação, consulta, atualização e exclusão). |
| `/notas_finais`  | Acessa as médias e resultados consolidados de cada colaborador.     |
| `/colaboradores` | Consulta os colaboradores cadastrados no sistema.                   |
