import API from './api.js'
import Character from './character.js'
const api= new API();
let firstCharacter=1;

const $next=document.querySelector('#next');
$next.addEventListener('click', async()=>{
    firstCharacter=firstCharacter+1;
    const characterData=await api.getCharacter(firstCharacter);
    new Character(characterData);
})
async function initApp(initCharacterID){
    const characterData=await api.getCharacter(initCharacterID);
    // console.log(characterData);
    new Character(characterData);
}
initApp(firstCharacter);
// api.getCharacter(1);