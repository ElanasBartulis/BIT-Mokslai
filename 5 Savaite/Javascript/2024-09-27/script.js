let quarter = 1;
let gameLog = [];
let foulsTeam1 = [0, 0, 0];
let foulsTeam2 = [0, 0, 0];
let team1Taskai = 0;
let team2Taskai = 0;
let keliniai = 1;
 
 
//Funkcija kuri prideda taškus
function addPoints(points, team) {
    let pridedamTaskus;  
    let htmlTaskai = 0;
    if (team == 1){
        team1Taskai += points;
        pridedamTaskus = `Komanda 1 taškai = ${team1Taskai} (+ ${points})`;
        htmlTaskai = document.querySelector(".scoreWindow1");
        htmlTaskai.innerHTML = `${team1Taskai}`;
    }else if (team == 2){
        team2Taskai += points;
        pridedamTaskus = `Komanda 2 taškai = ${team2Taskai} (+ ${points})`;
        htmlTaskai = document.querySelector(".scoreWindow2");
        htmlTaskai.innerHTML = `${team2Taskai}`;
    }
    updateLog(pridedamTaskus);
}
//Funkcija, kuri prideda prašangą
function addFoul(player, team) {
       
        let foulsText;
        let zaidejoBaudos;
 
        if (player == 1 && team == 1) {
            const zaidejas = document.querySelector('.pirma-komanda-zaidejas1').value;
            foulsTeam1[0]++;
            foulsText = document.querySelector('#fouls-team1-player1').innerHTML = `Pražanga: ${foulsTeam1[0]}`;
            zaidejoBaudos = `Komandos 1 žaidėjas ${zaidejas == '' ? 'Zaidejas 1' : zaidejas} ${foulsText}`;
         } else if (player == 2 && team == 1) {
            const zaidejas = document.querySelector('.pirma-komanda-zaidejas2').value;
            foulsTeam1[1]++;
            foulsText = document.querySelector('#fouls-team1-player2').innerHTML = `Pražangos: ${foulsTeam1[1]}`;
            zaidejoBaudos = `Komandos 1 žaidėjas ${zaidejas == '' ? 'Zaidejas 2' : zaidejas} ${foulsText}`;
        }else if (player == 3 && team == 1) {
            const zaidejas = document.querySelector('.pirma-komanda-zaidejas3').value;
            foulsTeam1[2]++;
            foulsText = document.querySelector('#fouls-team1-player3').innerHTML = `Pražangos: ${foulsTeam1[2]}`;
            zaidejoBaudos = `Komandos 1 žaidėjas ${zaidejas == '' ? 'Zaidejas 3' : zaidejas} ${foulsText}`;
        }
        else if (player == 1 && team == 2){
            const zaidejas = document.querySelector('.antra-komanda-zaidejas1').value;
            foulsTeam2[0]++;
            foulsText = document.querySelector('#fouls-team2-player1').innerHTML = `Pražangos: ${foulsTeam2[0]}`;
            zaidejoBaudos = `Komandos 2 žaidėjas ${zaidejas == '' ? 'Zaidejas 1' : zaidejas} ${foulsText}`;
        }
        else if (player == 2 && team == 2) {
           
            const zaidejas = document.querySelector('.antra-komanda-zaidejas2').value;
            foulsTeam2[1]++;
            foulsText = document.querySelector('#fouls-team2-player2').innerHTML = `Pražangos: ${foulsTeam2[1]}`;
            zaidejoBaudos = `Komandos 2 žaidėjas ${zaidejas == '' ? 'Zaidejas 2' : zaidejas} ${foulsText}`;
        }        
        else if (player == 3 && team == 2){
            const zaidejas = document.querySelector('.antra-komanda-zaidejas2').value;
            foulsTeam2[2]++;
            foulsText = document.querySelector('#fouls-team2-player3').innerHTML = `Pražangos: ${foulsTeam2[2]}`;
            zaidejoBaudos = `Komandos 2 žaidėjas ${zaidejas == '' ? 'Zaidejas 3' : zaidejas} ${foulsText}`;
        }      
       
        updateLog(zaidejoBaudos);
    }
 
 
//Funkcija įrašanti įrašą į protokolą
function updateLog(sakinys) {
    const logElement = document.querySelector("#log");
    const time = new Date().toLocaleTimeString();
    logElement.innerHTML += `<p>${time} | ${sakinys}</p>`;
}
 
//Kėlinio ir varžybų baigimo funkcija
function endQuarter() {
   
    const logElement = document.querySelector("#log");
    const time = new Date().toLocaleTimeString();
 
   
    if (keliniai <= 3) {
       
        logElement.innerHTML += `<p>${time} | Baigtas kelinys ${keliniai}</p>`;
        keliniai++;
    }
    else if (keliniai == 4) {
        logElement.innerHTML += `<p>${time} | Baigtas kelinys 4</p>`;
        logElement.innerHTML += `<p>Baigtos rungtynės</p>`;
        keliniai++;
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if(button.id !== 'start-again'){
                button.disabled = true;
            }
        })  
}
 
}
 
function restart () {
    location.reload(true);
  }
 