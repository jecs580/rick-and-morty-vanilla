import API from './api.js'
const api= new API();
const $characterContainer= document.querySelector('#character-container')
// const charatecterTemplete=`
// <article class="character">
// <div class="character-grid">
//     <h2>Rick Sanchez</h2>
//     <img src="" alt="">
// </div>
// </article>`;
class Character{
    constructor({name, image}){
        this.name= name;
        this.image=image;
        this.render()
    }
    build(){
        return `
        <article class="character">
        <div class="character-grid">
            <h2>${this.name}</h2>
            <img src="${this.image}" alt="">
        </div>
        </article>
        `
    }
    render(){
        $characterContainer.innerHTML = this.build();
    }
}
async function initApp(initCharacterID){
    const characterData=await api.getCharacter(initCharacterID);
    // console.log(characterData);
    new Character(characterData);
}
initApp(1);
// api.getCharacter(1);