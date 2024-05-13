let clientes = []

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
    }
}