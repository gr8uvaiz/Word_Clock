
// console.log("uvaiz");
function updateClock(){
    let d = new Date();
    let indiaTime = document.getElementById('india-time');
    indiaTime.innerHTML = d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).split(" ")[1];

    let usTime = document.getElementById('usa-time');
    usTime.innerHTML = d.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(" ")[1];

    let moscowTime = document.getElementById('moscow-time');
    moscowTime.innerHTML = d.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }).split(" ")[1];

    let alarm = document.getElementById('alarm');




    let alarmHour = alarm.value.split(":")[0];
    let alarmMinutes = alarm.value.split(":")[1];
    if((d.getHours()-12) == alarmHour && d.getMinutes() == alarmMinutes){
        let audio = new Audio('../alarm.mp3');
        audio.play();
        // console.log("ALArm is ringing")
    }

    document.getElementById('btn').addEventListener('click', function() {
        // Refresh the page
        location.reload();
      });

}
    
    setInterval(updateClock,1000);
    