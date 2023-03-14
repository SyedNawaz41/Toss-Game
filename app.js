// CHECKING INDEXES OF CHARACTERS
// var username = "Asim Ali";
// var i_index = [];

// console.log(username.indexOf("i"));

// for(var i = 0; i < username.length; i++){
//     if(username[i] == "i"){
//         i_index.push(i);
//     }
// }

// console.log(i_index);

// CHECKING ROUND OF NUMBERS USING JS DEFAULT FUNCTIONS
// var num = 2.499;
// var num2 = 2.999;

// console.log(Math.round(num))
// console.log(Math.round(num2))

// console.log(Math.floor(num));
// console.log(Math.floor(num2));

// console.log(Math.ceil(num));
// console.log(Math.ceil(num2));

// MAKING DICE USING RANDOM NUMBER FUNCTION
// var randomnum = Math.random()
// var dice = Math.ceil(randomnum * 6)
// console.log(dice)

// GENRATING 0 TO 100 RANDOMLY
// var randomnum = Math.random()
// var dice = Math.ceil(randomnum * 100)
// console.log(dice)

// GENERATING 0 TO 100 IN 10TH ORDERS RANDOMLY
// var randomnum = Math.random()
// var dice = Math.ceil(randomnum * 10)
// console.log(dice * 10)

// INCREASING PROBABILITY OF 6
// var randomnum = Math.random()
// var dice = Math.ceil(randomnum * 10)
// if(dice >= 6){
//     console.log(6)
// }
// else{
// console.log(dice)
// }


// TOSS GAME WITH SCORE USING JS
// var img = document.querySelector("#img")
// var msg = document.querySelector("#toss-msg")
// var msgs = document.querySelector("#toss-msg2")
// var img_chand = "./images/chand.jpg"; 
// var img_masjid = "./images/masjid.jpg"; 
// var win = [];
// var loss = [];
// var result = [];

// function tossTheCoin(userpick) {
//     var changecoins = Math.floor(Math.random() * 2);
//     img.style.display = "inline";
//     if(changecoins === 0){
//           img.src = img_chand;
//           msg.innerHTML = "Hurry..!! Chand Comes.."
//           win.push(1);
          
//     }
//     else{
//         img.src = img_masjid;
//         msg.innerHTML = "Hurry..!! Masjid Comes.."
//         loss.push(0);
//     }
//     var results = win.length + loss.length;
//     msg.innerHTML = "You Win " + win.length + " Times Out Of " + results + " Games :)"
//     msgs.innerHTML = "You Loose " + loss.length + " Times Out Of " + results + " Games :)"


// }


// function colorpicker(){
// var x = document.querySelector("#color-picker").value;
// document.querySelector("#msg").innerHTML = x;
// }

