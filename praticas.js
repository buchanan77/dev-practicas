const lista = document.querySelector("#lista");

const arrayPaises = ["Argentina", "Colombia", "Chile", "Venezuela", "Ecuador", "Bolivia"]

const fragment = document.createDocumentFragment();

const liTemplate = document.querySelector("#liTemplate");



const clickPaises = (e) => console.log("Me diste click", e.target);




arrayPaises.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector(".text-primary").textContent = pais;

    clone.addEventListener("click" , clickPaises)

    fragment.appendChild(clone);
})

lista.appendChild(fragment)