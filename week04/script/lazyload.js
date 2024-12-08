// Obtém o ano atual e insere no rodapé
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtém a data de última modificação da página e insere no rodapé
const lastModified = document.lastModified;
document.getElementById("lasModified").textContent = `Last Modified: ${lastModified}`;
