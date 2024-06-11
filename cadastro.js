let clientes = []

// Função para Adicionar o nome na ARRAY
function addClient(){
    
    // trim() == Remove da cadeia de caracteres atual todos os caracteres de espaço em branco à esquerda e à direita.
    const clientFullName = document.getElementById('clientName').value.trim();
    if (!clientFullName) {
        alert('Por favor, insira o nome completo do cliente.');
        return;
      }
 
    // Variavel para definir que o nome deve ter a primeira letra maiuscula seguida de minisculas com acentos e pelo menos o sobrenome 
    const isValidName = clientFullName.match(/^[A-ZÀ-ÿ][a-zà-ÿ]*\s[A-ZÀ-ÿ][a-zà-ÿ]*(\s[A-ZÀ-ÿ][a-zà-ÿ]*)*$/);

    // Se o nome que for colocado não tiver de acordo com a regra  
    if (!isValidName) { 
        alert('O nome completo deve conter pelo menos um sobrenome e cada parte iniciar com maiúscula.');
        return;
      } 

    // Ve se o nome esta ja cadastrado na array
    const existingClient = clientes.find(client => client === clientFullName);

    if (existingClient) {
        alert('Este cliente já está cadastrado.');
        return;
      }

     clientes.push(clientFullName);
     clearInput();
     displayClients();
   }
   
   function removeClient(clientName) {
     clientes = clientes.filter(client => client !== clientName);
     displayClients();
   }
   
   function displayClients() {
     const clientListContainer = document.getElementById('clientListContainer');
     const clientListSection = document.getElementById('clientListSection');
   
     clientListContainer.innerHTML = '';
   
     if (clientes.length > 0) {
       clientListSection.style.display = 'block';
   
       clientes.forEach(clientFullName => {
         const clientElement = createClientElement(clientFullName);
         clientListContainer.appendChild(clientElement);
       });
     } else {
       clientListSection.style.display = 'none';
     }
   }
   
   function createClientElement(clientFullName) {
     const div = document.createElement('div');
     div.className = 'client-item';
   
     const nameSpan = document.createElement('span');
     nameSpan.textContent = clientFullName;
   
     const removeButton = document.createElement('button');
     removeButton.className = 'remove-button';
     removeButton.textContent = 'Remover';
     removeButton.onclick = () => removeClient(clientFullName);
   
     div.appendChild(nameSpan);
     div.appendChild(removeButton);
   
     return div;
   }
   
   function clearInput() {
     document.getElementById('clientName').value = '';
   }







