# Gerenciamento de Clientes

Esta aplicação permite adicionar e remover clientes de uma lista. Abaixo está uma explicação detalhada de como o código funciona.

## Estrutura do Código

### Variáveis Globais

- `clientes`: Array que armazena os nomes dos clientes.

### Funções

#### addClient()
Adiciona um novo cliente à lista, verificando se o nome está correto e se o cliente já não foi cadastrado.

```javascript
function addClient(){
    const clientNameInput = document.querySelector('#clientName');
    const clientName = clientNameInput.value.trim();

    const namePattern = /^[A-ZÀ-ÿ][a-zà-ÿ]*\s[A-ZÀ-ÿ][a-zà-ÿ]*(\s[A-ZÀ-ÿ][a-zà-ÿ]*)*$/;

    !clientName 
    ? alert('Por favor insira o nome completo do cliente')
    : !namePattern.test(clientName)
    ? alert('O nome completo deve conter pelo menos um sobrenome, e cada parte deve começar com uma letra maiúscula seguida de letras minúsculas.')
    : clientes.includes(clientName)
    ? alert('Este cliente já esta cadastrado')
    : (clientes.push(clientName), clientNameInput.value = '', displayClients())
}
