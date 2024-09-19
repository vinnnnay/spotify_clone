console.log("welcome to ")
let audioElement = new Audio("songs/1.mp3");
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let myprogress = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));



let songs = [
    {songname:"salaam e ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/6.mp3" , coverPath:"covers/6.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/7.mp3" , coverPath:"covers/7.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/8.mp3" , coverPath:"covers/8.jpg"},
    {songname:"salaam e ishq" , filePath:"songs/9.mp3" , coverPath:"covers/9.jpg"},
    {songname:" ishq" ,   filePath:"songs/10.mp3" , coverPath:"covers/10.jpg"}]


masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})



audioElement.addEventListener('timeupdate' , ()=>{

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myprogress.value = progress;

})

// audioElement.play();

myprogress.addEventListener('change' , ()=>{
  audioElement.currentTime = myprogress.value *audioElement.duration/100;

})



songitems.forEach((element , i)=>{
element.getElementsByTagName("img")[0].src=  songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText  = songs[i].songname;

})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');


})


}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click" , (e)=>{
        makeAllplay();
        index = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index}.mp3`
       audioElement.currentTime = 0;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    })
})




