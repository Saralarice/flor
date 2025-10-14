function verificarSenha() {
  const senhaCorreta ="fufu";
  const senhaDigitada = document.getElementById("senha").value;

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("mensagem").style.display = "block";
    document.getElementById("flor").style.display = "block";
  } else {
    alert("Senha incorreta! Tente novamente.");
  }
}