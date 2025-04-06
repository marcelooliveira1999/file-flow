# file-flow
API para upload e processamento assíncrono de arquivos (como relatórios Excel), utilizando filas de jobs com BullMQ. Os arquivos são armazenados em disco e processados por workers que realizam a leitura, transformação e registro dos dados em banco de dados.
