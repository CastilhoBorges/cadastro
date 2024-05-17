let clientes = []

// Função para Adicionar o nome na ARRAY
function addClient(){
    let clientNameInput = document.querySelector('#clientName');
    let clientName = clientNameInput.value.trim(); // trim() == Remove da cadeia de caracteres atual todos os caracteres de espaço em branco à esquerda e à direita.
 
    // Variavel para definir que o nome deve ter a primeira letra maiuscula seguida de minisculas com acentos e pelo menos o sobrenome 
    let namePattern = /^[A-ZÀ-ÿ][a-zà-ÿ]*\s[A-ZÀ-ÿ][a-zà-ÿ]*(\s[A-ZÀ-ÿ][a-zà-ÿ]*)*$/;

   if(!clientName){
    alert('Por favor, insira o nome completo do cliente!');
   } else if (!namePattern.test(clientName)){
    alert("O nome completo deve conter pelo menos um sobrenome, e cada parte deve começar com uma letra maiúscula seguida de letras minúsculas.");
   } else if(clientes.includes(clientName)){
    alert('Este cliente já está cadastrado!');
   } else {
    clientes.push(clientName);
    clientNameInput.value = '';
    displayClients();
    toggleRemoveSection();
   }
}

// Função para remover cliente da ARRAY
function removeClient(){
    let removeClientNameInput = document.querySelector('#removeClientName');
    let clientName = removeClientNameInput.value.trim();

    if(!clientName){
        alert('Por favor, insira o nome do cliente que deseja remover!');
    } else if(!clientes.includes(clientName)){ // Condição caso o cliente não esteja na ARRAY
        alert('Este cliente não está cadastrado!');
    } else {
        clientes = clientes.filter(cliente => cliente !== clientName); // Comando para remover o cliente
        removeClientNameInput.value = "";
        displayClients();
        toggleRemoveSection();
    }
}

function displayClients(){
    let clientListContainer = document.querySelector('#clientListContainer');
    let clientListSection = document.querySelector('#clientListSection');

    clientListContainer.innerHTML = "";

    if(clientes.length > 0){  // Caso tenha o cliente na lista ela aparece na tela
        clientListSection.style.display = 'block'   
        clientes.forEach(client => {
            let div = document.createElement('div');
            div.className = 'client-item';
            div.textContent = client;
            clientListContainer.appendChild(div);
        });
    } else { // Condição caso não tenha nome na lista a div de lista deixa de ser projetada 
        clientListSection.style.display = 'none';
    }
}

function toggleRemoveSection(){
    let removeSection = document.querySelector('#removeSection')
    removeSection.style.display = clientes.length > 0 ? "block" : "none"; // Condição para mostrar a div de remover cliente
}

// Funcões para limpar os inputs quando estiverem com algo escrito
function clearInput() { 
    document.getElementById("clientName").value = "";
}
function clearRemoveInput() {
    document.getElementById("removeClientName").value = "";
}







