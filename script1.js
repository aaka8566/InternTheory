let a=document.querySelector("#showm");
    let b=document.querySelector(".navbar");
    let c=document.querySelector("#dshowm");
    let count=0;

    a.addEventListener("click",function(){
        if(count==0){
            b.classList.add("resize");
        count=1;
        }

       else{
        b.classList.remove("resize");
        count=0;
       }
    })
    c.addEventListener("click",function(){
        b.classList.remove("resize");
        count=0;
    })

    // main code
   