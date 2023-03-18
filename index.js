const endTime = '11 august 2023 11:59 AM';
const time = document.querySelectorAll('.show-counter');
console.log(time[0])
const timercount = () =>{
    const end = new Date(endTime);
    const currentTime = new Date();
    const deff = (end - currentTime) / 1000;
    // console.log(deff)
    if(end < currentTime){      
        window.location.href = 'index2.html';
        document.getElementById('myAudio').play();
        return
    }
    time[0].innerText = Math.floor((deff / 3600) /24);
    time[1].innerText = Math.floor((deff / 3600) % 60);
    time[2].innerText = Math.floor((deff / 60) % 60);
    time[3].innerHTML = Math.floor((deff) % 60); 
    console.log(Math.floor((deff) % 60))
}
setInterval(() => {
    timercount()
    
}, 1000);