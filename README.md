# 📂 Upload & Processing API

API construída em Node.js para realizar o upload de arquivos (como relatórios Excel), armazená-los em disco e processá-los de forma assíncrona utilizando uma fila com BullMQ. O foco é eficiência, escalabilidade e não travar a aplicação durante uploads ou processamento pesado.

---

## 🛠 Stack

- **Node.js**
- **Express**
- **Multer** – Upload de arquivos
- **BullMQ** – Fila de processamento (Redis)
- **ExcelJS** – Leitura e manipulação de arquivos Excel
- **Redis** – Backend da fila

---

## 🚀 Como funciona

1. O usuário faz upload de um arquivo (até 1GB).
2. O arquivo é salvo em disco imediatamente.
3. Um job é criado e enviado para a fila BullMQ.
4. Um worker processa o arquivo:
   - Lê via streaming
   - Realiza transformação/conversão dos dados
   - Registra no banco
   - Atualiza status/logs do job
5. O usuário pode consultar o status do processamento via um endpoint.

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
