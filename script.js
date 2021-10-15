const nameTaref = window.document.querySelector(".to-do input[type=text]");
const button = window.document.querySelector(".to-do input[type=submit]");
const inputLimp = window.document.querySelector("input[name=limp]");
const listSupreme = window.document.querySelector(".list-all");

// Limpar inputs
const limpAll = () => {
  inputLimp.addEventListener("click", () => {
    listSupreme.innerHTML = "";
  });
};

limpAll();

// adicionar a lista

const add = () => {
  if (nameTaref.value.trim() === "") {
    nameTaref.style.color = "red";
    nameTaref.style.borderColor = "red";
    setInterval(() => {
      nameTaref.style.color = "black";
      nameTaref.style.borderColor = "black";
    }, 4000);
    return;
  }

  var item = [];

  item.push({
    nome: nameTaref.value,
  });

  // listSupreme.innerHTML = '';
  item.map((value) => {
    listSupreme.innerHTML +=
      `
      <div class="taref-list-single">
        <h1 id="nomeTarefa">` +
      value.nome +
      `</h1>        
        <div class="mud"><i class="fas fa-pen-square"></i></div>
        <div class="clui"><i class="fas fa-times"></i></div>
        <div class="clear"></div><!--clear-->
      </div><!--taref-list-single-->
    //     `;
    const buttonMud = window.document.querySelectorAll(".taref-list-single .mud i");
    const buttonClear = window.document.querySelectorAll(
      ".taref-list-single .clui i"
    );
    const  nameTarefList = window.document.querySelectorAll('h1');
    const lis = window.document.querySelectorAll(".taref-list-single");

    for (let i = 0; i < buttonClear.length; i++) {
      buttonClear[i].addEventListener("click", () => {
        lis[i].style.display = "none";
      });
    }

    for(let i = 0;i < buttonMud.length;i++) {
      buttonMud[i].addEventListener('click',() => {
        var namNew = prompt('escreva o novo item');
        nameTarefList[i].innerHTML = `${namNew}`
      });
    }
  });
};

// resetar input

const resetarInput = () => {
  nameTaref.value = "";
};

button.addEventListener("click", () => {
  add();
  resetarInput();
});

const clickEnter = () => {
  nameTaref.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  });
};

clickEnter();
