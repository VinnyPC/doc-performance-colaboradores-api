---
sidebar_position: 1
---

# Visão Geral

Esta aplicação segue uma **arquitetura em camadas**, onde cada camada tem uma responsabilidade bem definida.  
A camada de **services** (serviços) atua como um elo entre as **rotas** e os **repositórios**, concentrando a lógica de negócio, cálculos e validações.

Os três principais serviços da aplicação são:

---

## 1. Serviço de Avaliação (`avaliacao_service.py`)

### Função Principal
Gerencia todo o fluxo de **criação, atualização e exclusão de avaliações** comportamentais e de desafios.

### Responsabilidades
- Validar matrícula e dados de entrada;
- Calcular médias das avaliações comportamentais e de desafios;
- Gerar e atualizar notas finais dos colaboradores;
- Garantir integridade transacional entre várias tabelas (usando SQLAlchemy);
- Centralizar o tratamento de exceções e logs.

### Interações
- **Depende de:**  
  `colaborador_repository`, `avaliacao_comportamental_repository`,  
  `avaliacao_desafio_repository`, `nota_final_repository`  
- **Produz:**  
  Registros nas tabelas `tb_avaliacao_comportamental`, `tb_avaliacao_desafio`,  
  `tb_nota_final` e seus respectivos itens.

---

## 2. Serviço de Colaborador (`colaborador_service.py`)

### Função Principal
Fornece dados dos colaboradores, servindo como base para os demais módulos da aplicação.

### Responsabilidades
- Listar todos os colaboradores cadastrados no sistema;
- Servir de referência para consultas de avaliações e notas finais;
- Garantir padronização de logs e integração simples com outras camadas.

### Interações
- **Depende de:**  
  `colaborador_repository`
- **Produz:**  
  Dados normalizados de colaboradores para uso em endpoints REST.

---

## 3. Serviço de Nota Final (`nota_final_service.py`)

### Função Principal
Consolida e retorna as **médias finais** das avaliações comportamentais e de desafios.

### Responsabilidades
- Buscar todas as notas finais registradas;
- Consultar notas finais específicas por matrícula;
- Converter objetos SQLAlchemy em dicionários JSON formatados;
- Normalizar dados numéricos e datas para consumo por API.

### Interações
- **Depende de:**  
  `nota_final_repository`, `colaborador_repository`
- **Produz:**  
  Dados agregados das médias e notas finais dos colaboradores.

---

