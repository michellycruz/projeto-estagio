function enviar() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var nascimento = document.getElementById("nascimento").value;
    var sexo = document.querySelector('input[name="radsex"]:checked').value;
    var nacionalidade = document.getElementById("nacionalidade").value;
    var turma = document.getElementById("turma").value;
    var responsavel = document.getElementById("responsavel").value;
    var cpf = document.getElementById("cpf").value;
    var tel = document.getElementById("tel").value;
    var contratante = document.getElementById("contratante").value;
    var cpf2 = document.getElementById("cpf2").value;
    var tel2 = document.getElementById("tel2").value;
  
    // Validar os campos obrigatórios
    if (nome == "") {
      alert("Por favor, informe o nome.");
      return false;
    }
    if (nascimento == "") {
      alert("Por favor, informe a data de nascimento.");
      return false;
    }
    if (sexo == "") {
      alert("Por favor, informe o sexo.");
      return false;
    }
    if (nacionalidade == "") {
      alert("Por favor, informe a nacionalidade.");
      return false;
    }
    if (turma == "") {
      alert("Por favor, informe a série.");
      return false;
    }
    if (responsavel == "") {
      alert("Por favor, informe o nome do responsável.");
      return false;
    }
    if (cpf == "") {
      alert("Por favor, informe o CPF do responsável.");
      return false;
    }
    if (tel == "") {
      alert("Por favor, informe o número de contato.");
      return false;
    }
    if (contratante == "") {
      alert("Por favor, informe o nome do contratante.");
      return false;
    }
    if (cpf2 == "") {
      alert("Por favor, informe o CPF do contratante.");
      return false;
    }
    if (tel2 == "") {
      alert("Por favor, informe o número de contato.");
      return false;
    }
  
    // Enviar os dados do formulário
    alert("Formulário enviado com sucesso!");
    return true;
  }
  