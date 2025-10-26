---
sidebar_position: 2
---

# Configuração do banco de dados

Criar um arquivo `.env` caso não exista e configurar variáveis de ambiente (MySQL):

```bash
  DB_USER=root
  DB_PASSWORD=root
  DB_HOST=localhost
  DB_NAME=db_performance_colaboradores
  DB_PORT=3306
```

Executar o script `db_setup`:
```bash
  python db_setup.py
```