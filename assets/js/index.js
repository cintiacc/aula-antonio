function loginBtn() {
    showAlert("Erro!", "Usuário ou senha incorretos.", "error");
}

function showAlert(title, text, icon = "info", buttonText = "OK") {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: buttonText
    });
}

