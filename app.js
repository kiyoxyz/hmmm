const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => observer.observe(elem));
let flag=true;

function play(){ 
    var audio = document.getElementById("audio");
    if(flag){
        audio.play();
        flag = false;
        document.getElementById("music").src="/icons8-pause-button-96.png"

    }else{
        audio.pause();
        flag = true;
        document.getElementById("music").src="/icons8-play-button-circled-96.png"
    }
}
