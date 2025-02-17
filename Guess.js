    let submit_btn=document.querySelector(".submit_btn");
    let start_Game=document.querySelector(".start_Game");
    let inp=document.querySelector(".inp_field");
    let level=document.querySelector(".level");
    let score=document.querySelector(".score");

    let rand=Math.floor(Math.random()*10)+1;
    let array=[];     

    submit_btn.addEventListener("click",()=>{
        
        if(rand==inp.value){
            level.innerText="Congrats!! You Guess";
            array.push(inp.value);

            submit_btn.disabled=true;
            submit_btn.style.cursor="not-allowed";
            start_Game.disabled=false;
            start_Game.style.cursor="pointer"
    
        }
        else if(rand>inp.value){
            level.innerText="Too low";
            array.push(inp.value)
        }
        else{
            level.innerText="Too high";
            array.push(parseInt(inp.value))
        }
        inp.value="";
        score.innerText=`Your Guesses is: `+ array.join();
    })

    start_Game.addEventListener("click",()=>{
        if(!start_Game.disabled){
            rand=Math.floor(Math.random()*10)+1;
            score.innerText="";
            level.innerText="";

            submit_btn.disabled=false;
            submit_btn.style.cursor="pointer";
            start_Game.disabled=true;
            start_Game.style.cursor="not-allowed"
        }
        while(array.length!=0){
            array.pop();
        }
    })

    