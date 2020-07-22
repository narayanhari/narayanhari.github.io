var toggle=1;
function toggleTheme(){
    if(toggle==1){
        // light mode
        document.body.classList.add("bodyLight");
        
        //aside
        const aside=document.querySelector("aside");
        const asideA=document.querySelectorAll("aside a");
        aside.style.background="#dedce8";
        asideA.forEach(a=>{
            a.style.color="#111";
            $(a).hover(function(){
                $(this).css("background", "#fff");
            },
            function(){
                $(this).css("background", "none");
            });
        });
        
        
        //header
        const headerH1=document.querySelector("header h1");
        const headerH5=document.querySelector("header h5");
        const headerImg=document.querySelector("header img");
        headerH1.style.color="#111";
        headerH5.style.color="#333";
        headerImg.src="img/11.jpg";
        headerImg.classList.remove("darkImg");
        headerImg.classList.add("lightImg");
        
        //about
        const aboutH2=document.querySelectorAll(".about h2");
        aboutH2.forEach(h2=>{
            h2.style.color="#111";
        });
        const aboutSpan=document.querySelector(".about span");
        aboutSpan.style.color="#111";
        const aboutP=document.querySelectorAll(".about p");
        aboutP.forEach(p=>{
            p.style.color="#333";
        });
        
        //skills
        const skillsCol=document.querySelectorAll(".Myskills .col");
        skillsCol.forEach(col=>{
            col.classList.remove("colDark");
            col.classList.add("colLight");
        });
        console.log(skillsCol);
        
        toggle=0;
    }
    else{
        //dark mode
        document.body.classList.remove("bodyLight");
        
        //aside
        const aside=document.querySelector("aside");
        const asideA=document.querySelectorAll("aside a");
        console.log(asideA);
        aside.style.background="#222";
        asideA.forEach(a=>{
            a.style.color="#fff";
            $(a).hover(function(){
                $(this).css("background", "#111");
            },
            function(){
                $(this).css("background", "none");
            });
        });
        
        
        
        
        //header
        const headerH1=document.querySelector("header h1");
        const headerH5=document.querySelector("header h5");
        const headerImg=document.querySelector("header img");
        headerH1.style.color="#fff";
        headerH5.style.color="#b2b2b2";
        headerImg.src="img/1.jpg";
        headerImg.classList.remove("lightImg");
        headerImg.classList.add("darkImg");
        
        //about
        const aboutH2=document.querySelectorAll(".about h2");
        aboutH2.forEach(h2=>{
            h2.style.color="#fff";
        });
        const aboutSpan=document.querySelector(".about span");
        aboutSpan.style.color="#fff";
       const aboutP=document.querySelectorAll(".about p");
        console.log(aboutP);
        aboutP.forEach(p=>{
            p.style.color="#b2b2b2";
        });
        
        //skills
        const skillsCol=document.querySelectorAll(".Myskills .col");
        skillsCol.forEach(col=>{
            col.classList.remove("colLight");
            col.classList.add("colDark");
        });
        
        
        toggle=1;
    }
    
}