---
sidebar_position: 3
---

# Avaliações de desafios

## Endpoints

| Descrição                                                              | Endpoint                                                                                            |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Obter cada avaliação **de desafio** por matrícula e intervalo de datas | `/avaliacoes/desafio?matricula={matricula}&data_inicio={data_inicio}&data_fim={data_fim}`           |
| Obter cada avaliação **final de desafio** por matrícula (e/ou por data)               | `/avaliacoes/mediaFinalDesafio?matricula={matricula}&data_inicio={data_inicio}&data_fim={data_fim}` |
| Obter cada avaliação **de desafio** por matrícula                      | `/avaliacoes/desafio?matricula={matricula}`                                                         |

## Exemplos
  
### Obter cada avaliação **final de desafio** por matrícula  

```
GET - /avaliacoes/mediaFinalDesafio?matricula=12345
```
  
**Resposta:**
```
200 OK
#outros dados...
{
	"colaborador_id": 1,
	"data_avaliacao": "2025-10-25",
	"id": 11,
	"itens": [
		{
			"avaliacao_desafio_id": 11,
			"data_avaliacao": "2025-10-25",
			"descricao": "Desafio API de relatórios",
			"id": 39,
			"nota": 4.0,
			"numero_desafio": 1
		},
		{
			"avaliacao_desafio_id": 11,
			"data_avaliacao": "2025-10-25",
			"descricao": "Desafio Otimização SQL",
			"id": 40,
			"nota": 4.0,
			"numero_desafio": 2
		},
		{
			"avaliacao_desafio_id": 11,
			"data_avaliacao": "2025-10-25",
			"descricao": "Desafio Integração Lambda",
			"id": 41,
			"nota": 3.0,
			"numero_desafio": 3
		},
		{
			"avaliacao_desafio_id": 11,
			"data_avaliacao": "2025-10-25",
			"descricao": "Desafio Infra AWS",
			"id": 42,
			"nota": 5.0,
			"numero_desafio": 4
		}
	],
	"media_desafio": 4.0
},
```
---
### Obter cada avaliação **de desafio** por matrícula   

```
GET - /avaliacoes/desafio?matricula=12345
```
  
**Resposta:**
```
200 OK
# outros dados...
[
    {
		"avaliacao_desafio_id": 11, #Grupo de avaliações a qual essa avaliação pertence
		"data_avaliacao": "2025-10-25",
		"descricao": "Desafio API de relatórios",
		"id": 39,
		"nota": 4.0,
		"numero_desafio": 1
	},
	{
		"avaliacao_desafio_id": 11,
		"data_avaliacao": "2025-10-25",
		"descricao": "Desafio Otimização SQL",
		"id": 40,
		"nota": 4.0,
		"numero_desafio": 2
	},
	{
		"avaliacao_desafio_id": 11,
		"data_avaliacao": "2025-10-25",
		"descricao": "Desafio Integração Lambda",
		"id": 41,
		"nota": 3.0,
		"numero_desafio": 3
	},
	{
		"avaliacao_desafio_id": 11,
		"data_avaliacao": "2025-10-25",
		"descricao": "Desafio Infra AWS",
		"id": 42,
		"nota": 5.0,
		"numero_desafio": 4
	},
]
```
