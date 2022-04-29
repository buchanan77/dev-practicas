import hamburgerMenu from "./hamburgerMenu.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/thats-life.mp3", "#activar-alarm", "#desactivar-alarm" )
})