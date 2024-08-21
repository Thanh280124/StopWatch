const time = document.querySelector('.time');
const startEL = document.querySelector('.Start');
const stopEL = document.querySelector('.Stop');
const resetEL = document.querySelector('.Reset');

startEL.addEventListener('click',startTime);
stopEL.addEventListener('click',stopTime);
resetEL.addEventListener('click',resetTime);

let startTimes = 0;
let elapsedTime = 0;
let interval;
function startTime(){
  startTimes = Date.now() - elapsedTime;
interval = setInterval(()=>{
    elapsedTime = Date.now() - startTimes;
    time.innerHTML = formating(elapsedTime);
  },10)

  startEL.disabled = true;
  stopEL.disabled = false;
}


function formating(elapsedTime){
  const hours = Math.floor(elapsedTime/(100*60*60));
  const minutes = Math.floor((elapsedTime % (100*60*60))/ (1000 * 60));
  const seconds = Math.floor((elapsedTime % (100*60))/ 1000);
  const milisecond = Math.floor((elapsedTime % 1000) / 10);

  return(
    ( hours ? (hours > 9 ? hours : '0'+ hours) : '00')
    + ':' +
    ( minutes ? (minutes > 9 ? minutes : '0'+ minutes) : '00')
    + ':' +
    ( seconds ? (seconds > 9 ? seconds : '0'+ seconds) : '00')
    + ':' +
   (milisecond > 9 ? milisecond : '0'+ milisecond)
    
  )
}




function stopTime(){
 clearInterval(interval);
 startEL.disabled = false;
 stopEL.disabled = true;
}

function resetTime(){
clearInterval(interval);
elapsedTime = 0;
time.innerHTML = '00:00:00:00'

startEL.disabled = false;
stopEL.disabled = true; 
}
