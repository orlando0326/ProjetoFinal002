document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");
    const usuario = document.querySelector("#usuario");
    const senha = document.querySelector("#senha");
    const feedback = document.querySelector("#loginFeedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        feedback.textContent = "";
        feedback.className = "login-feedback";

        if (!usuario.value.trim() || !senha.value.trim()) {
            feedback.textContent = "Preencha o usuário e a senha para continuar.";
            feedback.classList.add("is-error");
            (!usuario.value.trim() ? usuario : senha).focus();
            return;
        }

        feedback.textContent = "Acesso demonstrativo autorizado.";
        feedback.classList.add("is-success");
        window.location.href = "painel.html";
    });
});
