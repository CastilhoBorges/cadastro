let clientes = []

// Função para Adicionar o nome na ARRAY
function addClient(){
    const clientNameInput = document.querySelector('#clientName');
    const clientName = clientNameInput.value.trim(); // trim() == Remove da cadeia de caracteres atual todos os caracteres de espaço em branco à esquerda e à direita.
 
    // Variavel para definir que o nome deve ter a primeira letra maiuscula seguida de minisculas com acentos e pelo menos o sobrenome 
    const namePattern = /^[A-ZÀ-ÿ][a-zà-ÿ]*\s[A-ZÀ-ÿ][a-zà-ÿ]*(\s[A-ZÀ-ÿ][a-zà-ÿ]*)*$/;

    !clientName // Caso o campo de prencher esteja vazio 
    ? alert('Por favor insira o nome completo do cliente')
    : !namePattern.test(clientName) // Se o nome que for colocado não tiver de acordo com a regra  
    ? alert('O nome completo deve conter pelo menos um sobrenome, e cada parte deve começar com uma letra maiúscula seguida de letras minúsculas.')
    : clientes.includes(clientName) // Ve se o nome esta ja cadastrado na array
    ? alert('Este cliente já esta cadastrado')
    : (clientes.push(clientName), clientNameInput.value = '', displayClients()) // Se nada de cima der true, então ele pega o nome colocado e joga na array 
}

function removeClient(clientName){
    clientes = clientes.filter(client => client !== clientName);
    displayClients(); 
}

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

// Funcões para limpar os inputs quando estiverem com algo escrito
function clearInput() { 
    document.getElementById("clientName").value = "";
}







