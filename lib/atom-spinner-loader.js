import { LitElement, html, css } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
export class AtomSpinnerLoader extends LitElement{
    static get properties(){
        return{
        visible: {
            type: Boolean,
            attribute: "visible",
            reflect: true
        }
}}
    static get styles(){
        return[
        css`
        :host {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.7);
justify-content: center;
align-items: center;
display: none;
}
.loaders {
    border-style: solid;
    border-color: #DCF1FF;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 3s infinite alternate;
 
}
#bigloader{
    border-width: .1rem;
    border-radius: 6rem;
    width: 5rem;
    height: 2.5rem;
}
#middleloader {
    border-width: .1rem;
    border-radius: 50%;
    width: 2.5em;
    height: 5rem;
  animation-duration: 3.8s;
  animation-direction: alternate-reverse;
}

#smallerloader{
    border-width: .1rem;
    border-radius: 50%;
    width: 5rem;
    height: 2.5rem;
}

#smallestloader{
    border-width: .1rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 5rem;
  animation-direction: alternate-reverse;
  animation-duration:4.1s;
}
#middle {
  width: .1rem;
  height: .1rem;
  border-width: .5em;
  border-style: dotted;
  border-radius: 10%;
}
@keyframes rotate {
    
    to {
        transform: rotate(360deg);
      
    }
}`
        ]}
        constructor(){
            super();
            this.visible = false;
        }
        updated(props){
            super.updated(props);
            if(props.has("visible")){
                if(this.visible){
                this.style.display = "flex";
            }else{
                this.style.display = "none";
            }}
            console.log("updated")
        }

    render(){
        return html` 
             <div class="loaders" id="bigloader">
            <div class="loaders" id="smallerloader">
            <div class="loaders" id="smallestloader">
              <div class="loaders" id="middleloader">
              <div class="loaders" id="middle"></div>
              </div>
            </div>
        </div></div>`
    }
}
customElements.define("atom-spinner-loader", AtomSpinnerLoader);