// TOSS GAME WITH SCORE USING JS
var img = document.querySelector("#img")
var msg = document.querySelector("#toss-msg")
var msgs = document.querySelector("#toss-msg2")
var img_chand = "./images/chand.jpg"; 
var img_masjid = "./images/masjid.jpg"; 
var win = [];
var loss = [];
var result = [];

function tossTheCoin(userpick) {
    var changecoins = Math.floor(Math.random() * 2);
    img.style.display = "inline";
    if(changecoins === 0){
          img.src = img_chand;
          msg.innerHTML = "Hurry..!! Chand Comes.."
          win.push(1);
          
    }
    else{
        img.src = img_masjid;
        msg.innerHTML = "Hurry..!! Masjid Comes.."
        loss.push(0);
    }
    var results = win.length + loss.length;
    msg.innerHTML = "You Win " + win.length + " Times Out Of " + results + " Games :)"
    msgs.innerHTML = "You Loose " + loss.length + " Times Out Of " + results + " Games :)"


}


