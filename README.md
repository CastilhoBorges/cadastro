# Gerenciamento de Clientes

Esta aplicação permite adicionar e remover clientes de uma lista. Abaixo está uma explicação detalhada de como o código funciona.

## Estrutura do Código

### Variáveis Globais

- `clientes`: Array que armazena os nomes dos clientes.

### Funções

#### addClient()
Adiciona um novo cliente à lista, verificando se o nome está correto e se o cliente já não foi cadastrado.

```
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
```
. Parâmetros: Nenhum

. Retorno: Nenhum

. Descrição:

    . Obtém o nome do cliente do campo de entrada.
    . Remove espaços em branco antes e depois do nome.
    . Verifica se o nome está vazio, se está no formato correto e se já existe na lista.
    . Adiciona o nome à lista e atualiza a exibição da lista.
  
removeClient(clientName)
Remove um cliente específico da lista.

```
function removeClient(clientName){
    clientes = clientes.filter(client => client !== clientName);
    displayClients(); 
}
```
. Parâmetros:
  . clientName (string): Nome do cliente a ser removido.
. Retorno: Nenhum
. Descrição:
    . Filtra a lista de clientes removendo o cliente especificado.
    . Atualiza a exibição da lista.
  
displayClients()
Atualiza a exibição da lista de clientes na interface do usuário.
```
function displayClients(){
    const clientListContainer = document.querySelector('#clientListContainer');
    const clientListSection = document.querySelector('#clientListSection');

    clientListContainer.innerHTML = "";

    clientes.length > 0
    ? (clientListSection.style.display = 'block', clientes.forEach(client => {
        const div = document.createElement('div');
        div.className = 'client-item';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = client;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeClient(client);

        div.appendChild(nameSpan);
        div.appendChild(removeButton);
        clientListContainer.appendChild(div);
    }))
    : clientListSection.style.display = 'none';
}
```
. Parâmetros: Nenhum
. Retorno: Nenhum
. Descrição:
    . Limpa a lista de clientes exibida.
    . Se a lista de clientes não estiver vazia, exibe cada cliente com um botão para remover.
    . Se a lista estiver vazia, esconde a seção de clientes.
  
clearInput()
Limpa o campo de entrada de nome do cliente.
```
function clearInput() { 
    document.getElementById("clientName").value = "";
}
```
. Parâmetros: Nenhum
. Retorno: Nenhum
. Descrição:
    . Limpa o valor do campo de entrada com o ID clientName.
    
## Exemplo de Uso

1. Adicionar Cliente

    . Insira o nome completo do cliente no campo de entrada.
    . Clique no botão "Adicionar Cliente" (ou equivalente na sua interface).
    . O nome será validado e adicionado à lista se estiver no formato correto e não duplicado.
   
2. Remover Cliente

    . Clique no botão "Remover" ao lado do nome do cliente na lista.
    . O cliente será removido da lista e a exibição será atualizada.
   
4. Limpar Campo de Entrada

    . Para limpar o campo de entrada manualmente, chame a função clearInput().
   
## Requisitos
    Um campo de entrada de texto com o ID clientName.
    Um contêiner para a lista de clientes com o ID clientListContainer.
    Uma seção que contém a lista de clientes com o ID clientListSection.
    
## Notas
    Certifique-se de que o HTML correspondente contém os elementos com os IDs usados nas funções.
    Adapte os estilos e a estrutura HTML conforme necessário para sua aplicação.
