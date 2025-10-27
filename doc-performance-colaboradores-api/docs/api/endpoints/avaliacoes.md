---
sidebar_position: 5
---

# Gerenciando avaliações
## POST
### Criando uma avaliação
Endpoint `/avaliacoes` POST
  
Body:
```json
{
  "matricula": "string",
  "data_avaliacao": "YYYY-MM-DD",
  "comportamental": [
    {"numero_questao": int, "descricao": "string", "nota": int}
  ],
  "desafios": [
    {"numero_desafio": int, "descricao": "string", "nota": int}
  ]
}
```
### Exemplo:
```
POST - /avaliacoes
```
  
**Body:**
```
{
  "matricula": "12345",
  "data_avaliacao": "2025-10-30",
  "comportamental": [
    {"numero_questao": 1, "descricao": "Você promove um ambiente colaborativo?", "nota": 5},
    {"numero_questao": 2, "descricao": "Você se atualiza e aprende o tempo todo?", "nota": 3},
    {"numero_questao": 3, "descricao": "Você utiliza dados para tomar suas decisões?", "nota": 2},
    {"numero_questao": 4, "descricao": "Você trabalha com autonomia?", "nota": 3}
  ],
  "desafios": [
    {"numero_desafio": 1, "descricao": "Desafio A", "nota": 3},
    {"numero_desafio": 2, "descricao": "Desafio B", "nota": 3},
    {"numero_desafio": 3, "descricao": "Desafio C", "nota": 3},
    {"numero_desafio": 4, "descricao": "Desafio D", "nota": 3}
  ]
}
```
**Resposta:**
```
201 CREATED
{
	"media_comportamental": "3.25",
	"media_desafio": "3.00",
	"nota_final": "3.13"
}
```
---
## PUT
### Atualizar avaliação completa por ID
Endpoint `/avaliacoes/{id}` POST
Body:
```json
{
  "matricula": "string",
  "data_avaliacao": "YYYY-MM-DD",
  "comportamental": [
    {"numero_questao": int, "descricao": "string", "nota": int}
  ],
  "desafios": [
    {"numero_desafio": int, "descricao": "string", "nota": int}
  ]
}
```
### Exemplo:
```
PUT - /avaliacoes/10 #ID da avaliação
```
  
**Body:**
```
{
  #Atenção a data e matrícula corretas aqui, se não a API não irá encontrar no banco de dados
  "matricula": "12345",
  "data_avaliacao": "2025-10-24", 
  "comportamental": [
    {"numero_questao": 1, "descricao": "Você promove um ambiente colaborativo?", "nota": 1},
    {"numero_questao": 2, "descricao": "Você se atualiza e aprende o tempo todo?", "nota": 2},
    {"numero_questao": 3, "descricao": "Você utiliza dados para tomar suas decisões?", "nota": 3},
    {"numero_questao": 4, "descricao": "Você trabalha com autonomia?", "nota": 4}
  ],
  "desafios": [
    {"numero_desafio": 1, "descricao": "Desafio A", "nota": 4},
    {"numero_desafio": 2, "descricao": "Desafio B", "nota": 3},
    {"numero_desafio": 3, "descricao": "Desafio C", "nota": 2},
	{"numero_desafio": 4, "descricao": "Desafio f", "nota": 1}
  ]
}
```
**Resposta:**
```
200 OK
{
	"media_comportamental": "2.50",
	"media_desafio": "2.50"
}
```
---
### Atualizar somente avaliação comportamental
Endpoint `/avaliacoes/{id}` POST
Body:
```json
{
  "matricula": "string",
  "data_avaliacao": "YYYY-MM-DD",
  "comportamental": [
    {"numero_questao": int, "descricao": "string", "nota": int}
  ]
}
```
  
### Exemplo:
```
PUT - /avaliacoes/10 #ID da avaliação
```
  
**Body:**
```
{
  #Atenção a data e matrícula corretas aqui, se não a API não irá encontrar no banco de dados
  "matricula": "12345",
  "data_avaliacao": "2025-10-30",
  "comportamental": [
    {"numero_questao": 1, "descricao": "Você promove um ambiente colaborativo?", "nota": 5},
    {"numero_questao": 2, "descricao": "Você se atualiza e aprende o tempo todo?", "nota": 5},
    {"numero_questao": 3, "descricao": "Você utiliza dados para tomar suas decisões?", "nota": 5},
    {"numero_questao": 4, "descricao": "Você trabalha com autonomia?", "nota": 5}
  ]
}
```
**Resposta:**
```
200 OK
{
	"media_comportamental": "5.00",
	"media_desafio": "2.50"
}
```
---
### Atualizar somente avaliação de desafios
Endpoint `/avaliacoes/{id}` POST
Body:
```json
{
  "matricula": "string",
  "data_avaliacao": "YYYY-MM-DD",
  "desafios": [
    {"numero_desafio": int, "descricao": "string", "nota": int}
  ]
}
```
  
### Exemplo:
```
PUT - /avaliacoes/10 #ID da avaliação
```
  
**Body:**
```
{
  #Atenção a data e matrícula corretas aqui, se não a API não irá encontrar no banco de dados
  "matricula": "12345",
  "data_avaliacao": "2025-10-30",
  "desafios": [
    {"numero_desafio": 1, "descricao": "Desafio A", "nota": 4.0},
    {"numero_desafio": 2, "descricao": "Desafio B", "nota": 4.0},
    {"numero_desafio": 3, "descricao": "Desafio C", "nota": 4.0},
	{"numero_desafio": 4, "descricao": "Desafio E", "nota": 4.0}
  ]
}
```
**Resposta:**
```
200 OK
{
	"media_comportamental": "5.00",
	"media_desafio": "4.00"
}
```
---
## DELETE
### Deletar avaliação
Endpoint `/avaliacoes/nota_final/{id}` POST
  
**Resposta:**
```
200 OK
{
	"message": "Avaliação removida com sucesso"
}
```



