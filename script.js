function enviar() {
  // pega os valores dos campos do formulário
  var nome = document.getElementById("inome").value;
  var nascimento = document.getElementById("inascimento").value;
  var sexo = document.querySelector('input[name="radsex"]:checked').value;
  var nacionalidade = document.getElementById("inacionalidade").value;
  var turma = document.getElementById("iturma").value;
  var responsavel = document.getElementById("iresponsavel").value;
  var cpf = document.getElementById("icpf").value;
  var telefone = document.getElementById("itel").value;
  var contratante = document.getElementById("icontratante").value;
  var cpf2 = document.getElementById("icpf2").value;
  var telefone2 = document.getElementById("itel2").value;

  // exibe um alerta informando que o formulário foi enviado
  alert("Formulário enviado com sucesso!");

  // reseta os valores dos campos do formulário
  document.getElementById("inome").value = "";
  document.getElementById("inascimento").value = "";
  document.getElementById("mas").checked = true;
  document.getElementById("inacionalidade").value = "";
  document.getElementById("iturma").value = "";
  document.getElementById("iresponsavel").value = "";
  document.getElementById("icpf").value = "";
  document.getElementById("itel").value = "";
  document.getElementById("icontratante").value = "";
  document.getElementById("icpf2").value = "";
  document.getElementById("itel2").value = "";
}
