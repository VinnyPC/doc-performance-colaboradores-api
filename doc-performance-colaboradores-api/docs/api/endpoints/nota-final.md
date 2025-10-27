---
sidebar_position: 4
---

# Notas finais

## Endpoints

| Descrição                                                               | Endpoint                                                                                        |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Obter todas as notas finais de um colaborador por matrícula             | `/notas_finais/colaborador?matricula={matricula}`                                               |
| Obter notas finais de um colaborador por matrícula e intervalo de datas | `/notas_finais/colaborador?matricula={matricula}&data_inicio={data_inicio}&data_fim={data_fim}` |
| Obter todas as notas finais do sistema                                  | `/notas_finais`                                                                                 |
  
## Exemplos

### Obter todos os colaboradores
```
GET - /notas_finais
```
  
**Resposta:**
```
[
	{
		"avaliacao_comportamental_id": 10,
		"avaliacao_desafio_id": 10,
		"colaborador_id": 1,
		"data_calculo": "2025-10-30",
		"id": 10,
		"media_comportamental": 5.0,
		"media_desafio": 4.0,
		"nota_final": 4.5
	},
	{
		"avaliacao_comportamental_id": 11,
		"avaliacao_desafio_id": 11,
		"colaborador_id": 1,
		"data_calculo": "2025-10-25",
		"id": 11,
		"media_comportamental": 4.0,
		"media_desafio": 4.0,
		"nota_final": 4.0
	},
	{
		"avaliacao_comportamental_id": 12,
		"avaliacao_desafio_id": 12,
		"colaborador_id": 1,
		"data_calculo": "2025-10-27",
		"id": 12,
		"media_comportamental": 2.5,
		"media_desafio": 2.5,
		"nota_final": 2.5
	}
]
```
---
### Obter todas as notas finais de um colaborador por matrícula 
```
GET - /notas_finais/colaborador?matricula=161000
```
  
**Resposta:**
```
[
	{
		"avaliacao_comportamental_id": 17,
		"avaliacao_desafio_id": 17,
		"colaborador_id": 3,
		"data_calculo": "2025-11-03",
		"id": 17,
		"media_comportamental": 2.5,
		"media_desafio": 3.0,
		"nota_final": 2.75
	},
	{
		"avaliacao_comportamental_id": 18,
		"avaliacao_desafio_id": 18,
		"colaborador_id": 3,
		"data_calculo": "2025-11-07",
		"id": 18,
		"media_comportamental": 2.5,
		"media_desafio": 4.0,
		"nota_final": 3.25
	}
]
```
