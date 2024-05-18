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
   }
}

function removeClient(clientName){
    clientes = clientes.filter(client => client !== clientName);
    displayClients();
}

function displayClients(){
    let clientListContainer = document.querySelector('#clientListContainer');
    let clientListSection = document.querySelector('#clientListSection');

    clientListContainer.innerHTML = "";

    if(clientes.length > 0){  // Caso tenha o cliente na lista ela aparece na tela
        clientListSection.style.display = 'block';
        clientes.forEach(client =>{
            let div = document.createElement('div'); // Cria o elemento div no HTML 
            div.className = 'client-item'; // define a classe do elemente div para ser adicionado os estilos no CSS 

            let nameSpan = document.createElement('span'); // Cria o elemento Span
            nameSpan.textContent = client; // Define o texto que vai aparecer no Span

            let removeButton = document.createElement('button'); // Cria o elemento de botão 
            removeButton.className = 'remove-button'; // Define a classe para o botão
            removeButton.textContent = 'Remover'; // Definindo o texto que vai aparecer no elemento botton
            removeButton.onclick = () => removeClient(client); // Atribui a função de clique ao botão e faz que quando ele seja clicado a função de remover é acionada com o nome do cliente atual 

            div.appendChild(nameSpan); // Adiciona o elemento Span ao div
            div.appendChild(removeButton); // adiciona o botão de remover no div
            clientListContainer.appendChild(div); // Adiciona o div ao container da lista de clientes 
        }); 
    } else {
        clientListSection.style.display = 'none'; // Se nada de cima acontecer a lista vai ser ocultada 
    }
}

// Funcões para limpar os inputs quando estiverem com algo escrito
function clearInput() { 
    document.getElementById("clientName").value = "";
}







