/* Custom elements: para definir mis propios elementos*/
class AppSample extends HTMLElement{
    constructor(){
        super();
        console.log("Creando el componente");
        this.attachShadow(mode: "open")
    }
}

customElements.define("app-sample",AppSample)