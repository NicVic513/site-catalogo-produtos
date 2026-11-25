
const botaoMenu = document.getElementById("menu-botao");
const menu = document.getElementById("menu");
 
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
 
  if (menu.classList.contains("aberto")) {
    botaoMenu.textContent = "✕";
    botaoMenu.setAttribute("aria-expanded", "true");
  } else {
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-expanded", "false");
  }
});
 

const linksMenu = menu.querySelectorAll("a");
 
linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});
 
 

const botoesFiltro = document.querySelectorAll(".filtros button");
const produtos = document.querySelectorAll(".produtos article");
 
botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const filtro = botao.dataset.filtro;
 
  
    botoesFiltro.forEach(function (b) {
      b.classList.remove("ativo");
    });
    botao.classList.add("ativo");
 
    
    produtos.forEach(function (produto) {
      if (filtro === "todos" || produto.dataset.categoria === filtro) {
        produto.hidden = false;
      } else {
        produto.hidden = true;
      }
    });
  });
});
 
 

const botoesFavorito = document.querySelectorAll(".favorito");
 
botoesFavorito.forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (botao.textContent === "♡") {
      botao.textContent = "♥";
    } else {
      botao.textContent = "♡";
    }
  });
});
 
 
const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const textoSucesso = document.getElementById("sucesso");
 

function mostrarErro(campo, mensagem) {
  campo.classList.add("erro");
  campo.nextElementSibling.textContent = mensagem;
}
 

function limparErro(campo) {
  campo.classList.remove("erro");
  campo.nextElementSibling.textContent = "";
}
 
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); 
 
  let tudoCerto = true;
  textoSucesso.hidden = true;
 
  
  if (campoNome.value.trim().length < 3) {
    mostrarErro(campoNome, "Digite seu nome (mínimo 3 letras).");
    tudoCerto = false;
  } else {
    limparErro(campoNome);
  }
 
  
  const modeloEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!modeloEmail.test(campoEmail.value.trim())) {
    mostrarErro(campoEmail, "Digite um e-mail válido, ex: nome@email.com");
    tudoCerto = false;
  } else {
    limparErro(campoEmail);
  }
 
  
  if (campoMensagem.value.trim().length < 10) {
    mostrarErro(campoMensagem, "Escreva uma mensagem com pelo menos 10 caracteres.");
    tudoCerto = false;
  } else {
    limparErro(campoMensagem);
  }
 
  
  if (tudoCerto) {
    textoSucesso.hidden = false;
    formulario.reset();
  }
});