const selectScreen = document.getElementById("select-screen");
const knight = document.getElementById("knight");
const mage = document.getElementById("mage");
const rouge = document.getElementById("rouge");
const enemy = document.getElementById("enemy");
const atk = document.getElementById("atk");
const def = document.getElementById("def");
const chest = document.getElementById("chest");
const gimmie = document.getElementById("gimmie");
const store = document.getElementById("store");
const shop = document.getElementById("shop");
const leaveShop = document.getElementById("leave-shop");
const fountain = document.getElementById("fountain");
const drink = document.getElementById("drink");
const leave = document.getElementById("leave") ;
const npc = document.getElementById("npc");
const speak = document.getElementById("speak");
const item = document.getElementById("item");
const grab = document.getElementById("grab");
const health = document.getElementById("health");
const atknav = document.getElementById("atknav");
const defnav = document.getElementById("defnav");
const mana = document.getElementById("mana");
const money = document.getElementById("money");
const navbar = document.getElementById("navbar");

let playerChar = {
    health: 100,
    attack: 10,
    defense: 10,
    mana: 50,
    money: 100
}

function updateUI() {
    health.innerHTML= `Health: ${playerChar.health}`;
    atknav.innerHTML= `Attack: ${playerChar.attack}`;
    defnav.innerHTML= `Defense: ${playerChar.defense}`;
    mana.innerHTML= `Mana: ${playerChar.mana}`;
    money.innerHTML= `Money ${playerChar.money}`;
}
function onStart() {
    enemy.style.display="none";
    chest.style.display="none";
    store.style.display="none";
    fountain.style.display="none";
    npc.style.display="none";
    item.style.display="none";
    navbar.style.display="none";
}
function clickFunctionK() {
    selectScreen.style.display="none";
    enemy.style.display="flex";
    
}
function clickFunctionM() {
    selectScreen.style.display="none";
    enemy.style.display="flex";
}
function clickFunctionR() {
    selectScreen.style.display="none";
    enemy.style.display="flex";
}
function clickFunction1() {
    selectScreen.style.display="none";
    enemy.style.display="flex";
}
onStart();