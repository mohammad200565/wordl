/*      start Generating the Letters        */
        console.log(window.innerWidth);
        let LL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let alpha = Array.from(LL);
        let container = document.querySelector(".container");
        let letters = document.createElement("div");

        let p1 = document.querySelector(".p1");
        let p2 = document.querySelector(".p2");

        p1.appendChild(letters);

        letters.innerHTML = '<span class="submit">Submit</span><span class="delete">Delete</span>';
        letters.className = "letters";

        alpha.forEach((x)=>{
            let span = document.createElement("span");
            let l = document.createTextNode(x);
            span.appendChild(l);
            letters.appendChild(span);
            span.innerHTML = x;
            span.className = "letterButtom"
        });


        letters = document.createElement("div");

        p2.appendChild(letters);

        letters.innerHTML = '<span class="submit">Submit</span><span class="delete">Delete</span>';
        letters.className = "letters";

        alpha.forEach((x)=>{
            let span = document.createElement("span");
            let l = document.createTextNode(x);
            span.appendChild(l);
            letters.appendChild(span);
            span.innerHTML = x;
            span.className = "letterButtom"
        });

        if( window.innerWidth>= 992) {
            p1.style.display = "none";
            p2.style.display = "block";
        }
        else {
            p2.style.display = "none";
            p1.style.display = "block";        
        }

/*      end Generating the Letters          */

let W=window.innerWidth;
function f() {
    if(window.innerWidth!=W) {
        if( window.innerWidth>= 992) {
            p1.style.display = "none";
            p2.style.display = "block";
        }
        else {
            p2.style.display = "none";
            p1.style.display = "block";        
        }
        W = window.innerWidth;
    }
}

setInterval( f , 50);


