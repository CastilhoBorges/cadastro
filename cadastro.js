let clientes = []

// Função para Adicionar o nome na ARRAY
function addClient(){
    let clientNameInput = document.querySelector('#clientName');
    let clientName = clientNameInput.value.trim();

    if (clientName === "") { // Condição para se o campo de nome estiver vazio alertar a que tem q ser prenchido
        alert('Por favor, insera o nome do cliente!');
    } else if (!/^[A-Z][a-z]*$/.test(clientName)){
        alert('Por favor, insira um nome válido, tente colocar a primeira letra Maiuscula e apenas o seu primeiro nome!');
    } else if (clientes.includes(clientName)) { // Condição caso o nome do cliente ja esteja na lista
        alert('Este cliente já está cadastrado!');
    } else {
        clientes.push(clientName);
        console.log(`Clientes: ${clientes}`);
        clientNameInput.value = ''; // Para limpar o imput quando colocado o nome
        
        if(clientes.length > 0){ // Condição para exibir o remover clientes quando ele estiver na Array
        document.querySelector('#removeSection').style.display = 'block';
        }
    }
}

// Função para remover cliente da ARRAY
function removeClient(){
    let removeClientNameInput = document.querySelector('#removeClientName');
    let clientName = removeClientNameInput.value.trim();

    if(clientName === ""){
        alert('Por favor, insira o nome do cliente que deseja remover!');
    } else if(!clientes.includes(clientName)){ // Condição caso o cliente não esteja na ARRAY
        alert('Este cliente não está cadastrado!');
    } else{
        clientes = clientes.filter(cliente => cliente !== clientName); // Comando para remover o cliente
        console.log(`Clientes: ${clientes}`);
        removeClientNameInput.value = "";

        if(clientes.length === 0){
            document.querySelector('#removeSection').style.display = 'none';
        }
    }
}

// Funcões para limpar os inputs quando estiverem com algo escrito
function clearInput() { 
    document.getElementById("clientName").value = "";
}
function clearRemoveInput() {
    document.getElementById("removeClientName").value = "";
}





