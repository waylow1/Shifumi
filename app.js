const buttons = document.querySelectorAll("button");
let playerPoints = 0;
let robotPoints = 0;
let res;
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            let playerButton = button.textContent;
            let robotButton = buttons[Math.floor(Math.random()*buttons.length)].textContent;
            if(playerButton == robotButton){
               res="Equal"; 
            }
            else if((playerButton =="Rock" && robotButton=="Paper")
                    ||(playerButton == "Paper" && robotButton=="Scissors")
                    ||(playerButton=="Scissors" && robotButton=="Rock")){
                        res ="Lose";
                        robotPoints++;
                    }
            else{
                res="Win";
                playerPoints++;
            }
        document.querySelector(".resultat").innerHTML = 
        `Le joueur a joué : ${playerButton} <br>
         Le robot a joué : ${robotButton} <br>
         Le résultat de la partie est ${res}<br>
         Compteur joueur ${playerPoints}<br>
         Compteur robot  ${robotPoints}<br>
         `;   
        });
        
        
        
    });
    
    
