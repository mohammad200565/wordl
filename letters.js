/*      start Generating the Letters        */
        console.log(window.innerWidth);
        let LL = [ "QWERTYUIOP" , "ASDFGHJKL" , "ZXCVBNM" ];

        let letters = '<div class="keyboard">';

        for(let i=0;i<3;i++) {
            letters += '<div class="letters">';
            let alpha = Array.from(LL[i]);
            alpha.forEach((x)=>{
                letters += '<span class="letterButtom">' + x + '</span>';
            });
            if(i===1) letters += '<span class="delete">Delete</span>';
            if(i===2) letters += '<span class="submit">Submit</span>';
            letters += '</div>';
            
        }

        letters += '</div>';

        document.querySelector(".p1").innerHTML = letters;
        document.querySelector(".p2").innerHTML = letters;

        //_____________________________________

/*      end Generating the Letters          */

