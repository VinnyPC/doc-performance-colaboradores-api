---
sidebar_position: 2
---

# Avaliações comportamentais

## Endpoints

| Descrição                                                              | Endpoint                                                                                            |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Obter cada avaliação **comportamental** por matrícula                  | `/avaliacoes/comportamental?matricula={matricula}`                                                  |
| Obter cada avaliação **final comportamental** por matrícula            | `/avaliacoes/mediaFinalComportamental?matricula={matricula}`                                        |
| Obter avaliações comportamentais filtradas por data                    | `/avaliacoes/comportamental?matricula={matricula}&data_inicio={data_inicio}&data_fim={data_fim}`    |

## Exemplos
  
### Obter cada avaliação **comportamental** por matrícula  

```
GET - /avaliacoes/comportamental?matricula=12345
```
  
**Resposta:**
```
200 OK
#outros dados...
{
    "avaliacao_comportamental_id": 10,
    "data_avaliacao": "2025-10-30",
    "descricao": "Você promove um ambiente colaborativo?",
    "id": 37,
    "nota": 5.0,
    "numero_questao": 1
},
{
    "avaliacao_comportamental_id": 10,
    "data_avaliacao": "2025-10-30",
    "descricao": "Você se atualiza e aprende o tempo todo?",
    "id": 38,
    "nota": 5.0,
    "numero_questao": 2
},
{
    "avaliacao_comportamental_id": 10,
    "data_avaliacao": "2025-10-30",
    "descricao": "Você utiliza dados para tomar suas decisões?",
    "id": 39,
    "nota": 5.0,
    "numero_questao": 3
},
{
    "avaliacao_comportamental_id": 10,
    "data_avaliacao": "2025-10-30",
    "descricao": "Você trabalha com autonomia?",
    "id": 40,
    "nota": 5.0,
    "numero_questao": 4
},
```
---
### Obter cada avaliação **final comportamental** por matrícula   

```
GET - /avaliacoes/mediaFinalComportamental?matricula=12345
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

