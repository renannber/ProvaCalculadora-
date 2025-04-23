document.getElementById('form-gasto').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
  
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    let categoria = document.getElementById('categoria').value;
  
    if (descricao === "" || valor === "" || categoria === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Aqui você pode enviar os dados do formulário
    console.log("Descrição: " + descricao);
    console.log("Valor: " + valor);
    console.log("Categoria: " + categoria);
  });