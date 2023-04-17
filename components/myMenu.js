export class myMenu extends HTMLElement{
    constructor(){
        super() //usamos super para poder heredar las propiedades de HTMLElemente
        this.attachShadow({mode: "open"}) //Es como el worker que utiliza el navegador para crear las etiquetas de html
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "./components/myMenu.css";
        </style>
        <div class="h7">${this.texto()}</div>
        `;
        /* this.attachShadow( { mode: "closed"}) */
    }//attachShadow, es para decirle que cuando creo una clase igual no vaya a ocurrir un problema 
    texto(){
        return `Hola mundo`;
    }
}
customElements.define("my-h7", myMenu); //Pedirle a GPT que lo explique