function validateForm() {
    var nome = document.getElementById("f1").value;
    var tipo = document.getElementById("f2").value;
    var descricao = document.getElementById("f3").value;
    var empresa = document.getElementById("f4").value;
    var preco = document.getElementById("f5").value;
    var codigo = document.getElementById("f6").value;

    if (nome === "" || tipo === "" || descricao === "" || empresa === "" || preco === "" || codigo === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
}

document.getElementById("jButton6").addEventListener("click", validateForm);

document.getElementById("jButton5").addEventListener("click", function () {
    window.location.href = "tela_seleção.html";
});