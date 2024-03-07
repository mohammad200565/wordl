/*      start Generating The word           */

        let the_dictionary = [
            "Judge" , "Mouse" , "alien" , "knife" , "night" , "write" , "eager" , "eagle" , 
            "young" , "youth" , "royal" , "house" , "horse" , "legal" , "wreck" , "beach"
        ];
        let Ran = Math.floor( Math.random() *the_dictionary.length);
        let the_word = the_dictionary[Ran];
/*      end Generating The word         */


let The_number_of_the_word = 1;
let The_number_of_the_letter = 1;

document.addEventListener("click" , (e)=>{

    if(e.target.className === "playAgain") {
        The_number_of_the_word = 1;
        The_number_of_the_letter = 1;
        document.querySelector(".words").innerHTML = `  <div class="attempt">
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                        </div>
                                                        <div class="attempt">
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                        </div>
                                                        <div class="attempt">
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                        </div>
                                                        <div class="attempt">
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                        </div>
                                                        <div class="attempt">
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                            <span class="oneLetter"></span>
                                                        </div>`;
        document.querySelector(".theScore").style.display = "none";
        document.querySelector(".container").style.opacity = 1;
        Ran = Math.floor( Math.random() *the_dictionary.length);
        the_word = the_dictionary[Ran];
    }

    if(e.target.className === "delete" && The_number_of_the_letter>1 ) {
        let the_square = document.querySelector(".words :nth-child(" + The_number_of_the_word + ") :nth-child(" + (The_number_of_the_letter-1) + ")");
        the_square.innerHTML = "";
        The_number_of_the_letter--;
    }

    if(e.target.className === "letterButtom" && The_number_of_the_letter<=5 ) {
        let the_letter = e.target.innerHTML;
        let the_square = document.querySelector(".words :nth-child(" + The_number_of_the_word + ") :nth-child(" + The_number_of_the_letter + ")");
        the_square.innerHTML = the_letter;
        The_number_of_the_letter++;
    }

    if(e.target.className === "submit" && The_number_of_the_letter==6) {
        let result = 1;
        for(let i=1;i<=5;i++) {

            let the_square = document.querySelector(".words :nth-child(" + The_number_of_the_word + ") :nth-child(" + i + ")");
            
            for(let j=0;j<5;j++) 
                if(the_square.innerHTML == the_word[j].toUpperCase() && j!=i-1) {
                    the_square.style.backgroundColor = "var(--WP)";
                    the_square.style.borderBottom = "8px solid var(--BWP)";
            }
            if(the_square.style.backgroundColor != "var(--WP)") {
                the_square.style.backgroundColor = "var(--DE)";
                the_square.style.borderBottom = "8px solid var(--BDE)";
            }
            if(the_square.innerHTML === the_word[i-1].toUpperCase()) {
                the_square.style.backgroundColor = "var(--CP)";
                the_square.style.borderBottom = "8px solid var(--BCP)";
                result &&= 1;
            }
            else {
                result &&= 0;
            }

        }

        if(result || The_number_of_the_word==5) {
            let score = document.querySelector(".theScore")
            if(result)   score.innerHTML  = '<img src="images\\Congratulations.png" class="gameOver">' ;
            else        score.innerHTML = '<img src="images\\GameOver.png" class="gameOver">';
            score.innerHTML += '<div class="theWord">The word is ' + the_word.toLocaleUpperCase() +'</div><div class="playAgain">play again</div>';
            score.style.display = "block";
            document.querySelector(".container").style.opacity = "0.6" ;
        }
        The_number_of_the_word++;
        The_number_of_the_letter = 1;
    }
});

