export default function hamburgerMenu(panelBtn, panel){
    const d = document;

    document.addEventListener("click", e =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn}*`)){
            document.querySelector(panel).classList.toggle("is-active");
        }
    });
};