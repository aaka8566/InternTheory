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
    let ap=document.querySelector(".btnp");
        let bn=document.querySelector(".btnn");
        let slides=document.querySelectorAll(".midmai");
        let numofslides=slides.length;
        let slidenum=0;

        bn.addEventListener("click",function(){
            slides.forEach(function(el){
                el.classList.remove("active");
            })
            slidenum++;
            if(slidenum>numofslides-1){slidenum=0;}
            slides[slidenum].classList.add("active");

        })

        ap.addEventListener("click",function(){
            slides.forEach(function(el){
                el.classList.remove("active");
            })
            slidenum--;
            if(slidenum>numofslides-1){slidenum=0;}
            if(slidenum<0){slidenum=numofslides-1;}
            slides[slidenum].classList.add("active");
        })

        // automatic


        let play;
        let repeata=function (){
            play=setInterval(function(){
                slides.forEach(function(el){
                el.classList.remove("active");
            })
            slidenum++;
            if(slidenum>numofslides-1){slidenum=0;}
            slides[slidenum].classList.add("active");
            },7500)
        }
        repeata();