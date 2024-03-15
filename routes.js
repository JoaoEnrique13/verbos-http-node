const axios = require('axios');


// POST
const newItem = {
  name: 'Novo Item',
  description: 'Descrição do novo item'
};

//   PUT
const itemIdPut = 1; // Substitua pelo ID do item que deseja atualizar
const updatedItem = {
  name: 'Nome atualizado',
  description: 'Descrição atualizada'
};


// POST
const itemIdDelete = 2; // Substitua pelo ID do item que deseja atualizar

axios.post('http://localhost:3000/api/data', newItem)
  .then(response => {
    console.log('Item adicionado com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao adicionar item:', error);
  });


//   PUT
axios.put(`http://localhost:3000/api/data/${itemIdPut}`, updatedItem)
  .then(response => {
    console.log('Item atualizado com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao atualizar item:', error);
  });



axios.delete(`http://localhost:3000/api/data/${itemIdDelete}`)
  .then(response => {
    console.log('Item excluído com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao excluir item:', error);
  });



axios.options('http://localhost:3000/api/data')
  .then(response => {
    console.log('Opções permitidas:', response.headers.allow);
  })
  .catch(error => {
    console.error('Erro ao obter opções:', error);
  });
