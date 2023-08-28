const sideLength = 30;
const hexagonWidth = Math.sqrt(3) * sideLength;
const hexagonHeight = 2 * sideLength;
const gap = 0.1 * hexagonWidth;
// width each lane
const colWidth = hexagonWidth + gap;
// height each lane
const rowHeight = 1.5 * sideLength + Math.sqrt(0.75) * gap;

const root = document.documentElement;

root.style.setProperty('--width', hexagonWidth + 'px');
root.style.setProperty('--height', hexagonHeight + 'px');
root.style.setProperty('--gap', gap + 'px');

var putdivlist = document.getElementsByClassName("hexagon")
function moveimg() {
  let divlist = []
  let divlist1 = document.getElementsByClassName("gallery_one")
  let divlist2 = document.getElementsByClassName("gallery_two")
  let divlist3 = document.getElementsByClassName("gallery_three")
  let divlist4 = document.getElementsByClassName("gallery_four")
  let divlist5 = document.getElementsByClassName("gallery_five")
  divlist = Array.prototype.concat.apply([], [divlist1, divlist2, divlist3, divlist4, divlist5]);
  console.log(divlist.length)
  var imglist = []
  for (let k = 0; k < divlist.length; k++) {
    let temp = divlist[k]
    for (let l = 0; l < temp.length; l++) {
      let parentDiv = temp[l]
      let imgs = parentDiv.querySelectorAll('a img');
      for (let j = 0; j < imgs.length; j++) {
        let img = imgs[j]
        imglist.push(img);
      }
    }
  }

  for (let n = 0; n < putdivlist.length; n++) {
    let tmp = putdivlist[n]
    tmp.addEventListener('dragover', allowDrop);
    tmp.addEventListener('drop', drop);
  }
  for (let g = 0; g < imglist.length; g++) {
    let el = imglist[g]
    el.addEventListener('dragstart', dragStart);
  }
}

function dragStart(event) {
  event.dataTransfer.setData("URL", event.target.src);
  event.dataTransfer.setData("ALT", event.target.alt);
}
function allowDrop(event) {
  event.preventDefault();
}


var cashAmount = 0;
function price(str) {
  lastC = str.charAt(str.length - 1);
  if(lastC == '1') {
    cashAmount += 1;
  }
  else if(lastC == '2') {
    cashAmount += 2;
  }
  else if(lastC == '3') {
    cashAmount += 3;
  }
  else if(lastC== '4') {
    cashAmount += 4;
  }
  else if(lastC == '5') {
    cashAmount += 5;
  }
}

function drop(event) {
  event.preventDefault();
  const imageUrl = event.dataTransfer.getData('URL');
  const divElement = event.currentTarget;
  const imageAlt= event.dataTransfer.getData('ALT');
  price(imageAlt);
  document.getElementById("cash").innerHTML = cashAmount;
  butLastID = imageAlt.slice(0,-1);
  traits(butLastID);
  let tier = (sabc(butLastID));
  document.getElementById("champ").innerHTML += tier + " " + "tier: " + butLastID + "<br>";
  let ids = generateId();
  divElement.setAttribute('id', ids);
  let cssstr=`#${ids}::after{background:url('${imageUrl}') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(divElement,cssstr);
}
function insertCSSRule(element,cssStyle){
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(cssStyle));
  element.appendChild(style)
}
function generateId() {
  const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const maxLength = 10;
  let result = "";
  for (let i = 0; i < maxLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    result += allowedChars[randomIndex];
  }
  return result;
}

function createGrid() {
  const grid = document.querySelector('.grid');
  const gridWidth = grid.clientWidth;
  const gridHeight = grid.clientHeight;
  const rowTotal = 4;
  const colTotal = 7;
  const rows = [];
  for (let i = 0; i < rowTotal; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < colTotal; j++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      row.append(hexagon);
    }
    rows.push(row);
  }
  grid.replaceChildren(...rows);
}

let cultist = ["Elise", "Twisted_Fate", "Pyke", "Evelynn", "Kalista", "Aatrox", "Jhin", "Zilean"];
let divine = ["Wukong", "Jax", "Irelia", "Lux", "Warwick", "Lee_Sin"];
let dusk = ["Vayne", "Thresh", "Cassiopeia", "Riven", "Lillia"];
let elderwood = ["Maokai", "Hecarim", "Lulu", "Nunu", "Veigar", "Ashe", "Ezreal"];
let enlightened = ["Fiora", "Nami", "Jana", "Irelia", "Morgana", "Talon"];
let exile = ["Yasuo", "Yone"];
let fortune = ["Tahm", "Annie", "Jinx", "Katarina", "Sejuani"];
let moonlight = ["Diana", "Lissandra", "Aphelios", "Sylas"];
let ninja = ["Zed", "Akali", "Kennen", "Shen"];
let spirit = ["Teemo", "Kindred", "Yuumi", "Ahri"];
let theboss = ["Sett"];
let tormented = ["Kayn"];
let warlord = ["Garen", "Nidalee", "Jarvan", "Vi", "Katarina", "Xin_Zhao", "Azir"];
let adept = ["Irelia", "Shen", "Yone"];
let assassin = ["Diana", "Pyke", "Akali", "Katarina", "Talon"];
let brawler = ["Maokai", "Tahm", "Sylas", "Vi", "Nunu", "Warwick", "Sett"];
let dazzler = ["Lissandra", "Lux", "Morgana", "Ezreal"];
let duelist = ["Fiora", "Yasuo", "Jax", "Kalista", "Xin_Zhao", "Lee_sin"];
let emperor = ["Azir"];
let hunter = ["Aphelios", "Kindred", "Ashe", "Warwick"];
let keeper = ["Elise", "Jarvan", "Kennen", "Riven", "Azir"];
let mage = ["Nami", "Twisted_Fate", "Annie", "Lulu", "Veigar", "Ahri", "Lillia"];
let mystic = ["Janna", "Yuumi", "Cassiopeia", "Shen", "Zilean"];
let shade = ["Zed", "Evelynn", "Kayn"];
let sharpshooter = ["Nidalee", "Vayne", "Teemo", "Jinx", "Jhin"];
let vanguard = ["Garen", "Wukong", "Hecarim", "Thresh", "Aatrox", "Sejuani"];

const traitCollection = [];
traitCollection.push(cultist, divine, dusk, elderwood, enlightened, exile, fortune, moonlight
  , ninja, spirit, theboss, tormented, warlord, adept, assassin, brawler, dazzler
  , duelist, emperor, hunter, keeper, mage, mystic, shade, sharpshooter, vanguard);
let traitSeq = [];
for (let i = 0; i < 26; i++) {
  traitSeq.push(0);
}

let traitAmount = new Map();
traitAmount.set(0, "Cultist.png");
traitAmount.set(1, "Divine.png");
traitAmount.set(2, "Dusk.png");
traitAmount.set(3, "Elderwood.png");
traitAmount.set(4, "Enlightened.png");
traitAmount.set(5, "Exile.png");
traitAmount.set(6, "Fortune.png");
traitAmount.set(7, "Moonlight.png");
traitAmount.set(8, "Ninja.png");
traitAmount.set(9, "Spirit.png");
traitAmount.set(10, "Theboss.png");
traitAmount.set(11, "Tormented.png");
traitAmount.set(12, "Warlord.png");
traitAmount.set(13, "Adept.png");
traitAmount.set(14, "Assassin.png");
traitAmount.set(15, "Brawler.png");
traitAmount.set(16, "Dazzler.png");
traitAmount.set(17, "Duelist.png");
traitAmount.set(18, "Emperor.png");
traitAmount.set(19, "Hunter.png");
traitAmount.set(20, "Keeper.png");
traitAmount.set(21, "Mage.png");
traitAmount.set(22, "Mystic.png");    
traitAmount.set(23, "Shade.png");
traitAmount.set(24, "Sharpshooter.png");
traitAmount.set(25, "Vanguard.png");

let traitSelectedNum = new Map();
let index = 0;

function traits(id) {
  for (let i = 0; i < traitCollection.length; i++) {
    for (let j = 0; j < traitCollection[i].length; j++) {
      if (id == traitCollection[i][j]) {
        traitSeq[i]++;
        break;
      }
    }
  }
  document.getElementById("trait").innerHTML = "";
  for (let i = 0; i < 26; i++) {
    if (traitSeq[i] != 0) {
      traitSelectedNum.set(traitAmount.get(i), traitSeq[i]);
    }
  }
  let traitSelectedNumSorted = new Map([...traitSelectedNum.entries()].sort((a, b) => b[1] - a[1]));
  traitSelectedNumSorted.forEach((values, keys) => {
    document.getElementById("trait").innerHTML += "<img src=\'" + keys + "\'>" + "   :" + "   " + values + "\r";
  });

  traitSelectedNum.clear();
  traitSelectedNumSorted.clear();
}

function TeamBuildOne() {
  location.reload;
  let id1 = generateId();
  putdivlist[27].setAttribute('id', id1);
  let cssstr1=`#${id1}::after{background:url('Ahri.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[27],cssstr1);

  let id2 = generateId();
  putdivlist[26].setAttribute('id', id2);
  let cssstr2=`#${id2}::after{background:url('Yuumi.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[26],cssstr2);

  let id3 = generateId();
  putdivlist[20].setAttribute('id', id3);
  let cssstr3=`#${id3}::after{background:url('Zilean.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[20],cssstr3);

  let id4 = generateId();
  putdivlist[6].setAttribute('id', id4);
  let cssstr4=`#${id4}::after{background:url('Thresh.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[6],cssstr4);

  let id5 = generateId();
  putdivlist[5].setAttribute('id', id5);
  let cssstr5=`#${id5}::after{background:url('Cassiopeia.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[5],cssstr5);

  let id6 = generateId();
  putdivlist[4].setAttribute('id', id6);
  let cssstr6=`#${id6}::after{background:url('Sejuani.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[4],cssstr6);

  let id7 = generateId();
  putdivlist[3].setAttribute('id', id7);
  let cssstr7=`#${id7}::after{background:url('Aatrox.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[3],cssstr7);
  
  let id8 = generateId();
  putdivlist[2].setAttribute('id', id8);
  let cssstr8=`#${id8}::after{background:url('Shen.png') ;clip-path: var(--clip-path);content: "";position: absolute;top: var(--border-width);right: var(--border-width);bottom: var(--border-width);left: var(--border-width);background-size:100% 100%}`
  insertCSSRule(putdivlist[2],cssstr8);

  document.getElementById("trait").innerHTML += "<img src=\'" + "Mystic.png" + "\'>" + "   :" + "   " + 4 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Vanguard.png" + "\'>" + "   :" + "   " + 3 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Spirit.png" + "\'>" + "   :" + "   " + 2 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Dusk.png" + "\'>" + "   :" + "   " + 2 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Cultist.png" + "\'>" + "   :" + "   " + 2 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Ninja.png" + "\'>" + "   :" + "   " + 1 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Mage.png" + "\'>" + "   :" + "   " + 1 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Fortune.png" + "\'>" + "   :" + "   " + 1 + "\r";
  document.getElementById("trait").innerHTML += "<img src=\'" + "Adept.png" + "\'>" + "   :" + "   " + 1 + "\r";

  cashAmount = 30;
  document.getElementById("cash").innerHTML = cashAmount;
  return false;
}

let tierZero = ["Ahri", "Riven", "Sett", "Yone", "Kayn", "Warwick", "Aphelios", "Lee_Sin"];
let tierOne = ["Aatrox", "Akali", "Azir", "Ezreal", "Jhin", "Kalista", "Talon", "Zilean", "Morgana", "Zed", "Veigar"];
let tierTwo = ["Lillia", "Shen", "Sejuani", "Ashe", "Cassiopeia", "Yuumi", "Nunu", "Kindred", "Kennen", "Everlynn", "Jinx",
"Sylas", "Jarvan", "Pyke", "Hecarim", "Annie", "Vi", "Teemo", "Yasuo", "Tahm", "Nami", "Vayne", "Elise"];

function sabc(str) {
  if(tierZero.includes(str)) {
    return "S";
  }
  else if(tierOne.includes(str)) {
    return "A";
  }
  else if(tierTwo.includes(str)) {
    return "B";
  }
  else return "C";
}

function init() {
  createGrid()
  moveimg();
}
window.addEventListener('resize', createGrid);