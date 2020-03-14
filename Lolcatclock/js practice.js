 
// function printTime() {
// 	var d = new Date();
// 	var hour = d.getHours();
// 	var mins = d.getMinutes();
// 	var secs = d.getSeconds();
// 	document.body.innerHTML = hour+":"+mins+":"+secs;

// }
// setInterval(printTime,1000);




// let name ="alfred"
// console.log(name)

// var me ="appiagyei"
// console.log(me)

// let you ="james"
// console.log(you)

// var hey ="john"
// console.log(hey)

// console.log(true)
// console.log(false)

// document.write("<center><h1>THIS IS BEAUTIFUL</h1></center>")

// let age=(45+24)
// console.log(age)

// var total=(54-85)
// console.log(total)

// var one=(4/2)
// console.log(one)

// var tale=(54/10)
// console.log(tale)

// var ally=(20%3)
// console.log(ally)

// var first=(23<=54)
// console.log(first)

// let dole=(24>50 && 54<20)
// console.log(dole)

// var mode=(30<50 || 54<10)
// console.log(mode)

// function addNumbers(a,b) {return a + b;}


// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }
   

// var friends=["alfred","boadi","appiah","solomon"];
// friends.push("lemon");

//  console.log(friends)

 


// var vegetable=["letuce","tomato","cabbage","carrot"];
// vegetable[vegetable.length] ="onion";

// console.log(vegetable);



// var person = {
// 	name:"john",age:31,
// 	Email:"appiagyeialfred815@gmail.com",height:183
// };
// var x = person.age; 
// var y = person['name,'];
// var z = person['Email,'];
// var a = person['height,'];   

// document.write(x);
// document.write(y);
// document.write(z);
// document.write(a);
 





// class user{
// 	constructor(name,age) {
// 		this.name = name
// 		this.age = age
// 	}
// 	post() {
// 		console.log(this.name +"posting new article")
// 	}

// 	comment() {
// 		console.log(this.name + "commenting on post")
// 	}

// 	block(){
// 		console.log(this.name + "blocking that anoying person")
// 	}

// 	orderFood(food) {
// 		console.log(this.name + "is ordering" +food)
// 	}


// }

// let tupac = new user("tupac",45)
// let alfred = new user("alfred",20)
// let appiagyei = new user("appiagyei",25)

// tupac.comment()
// alfred.block()
// appiagyei.post()

// tupac.orderFood("rice")
// alfred.orderFood("kenkey")


   

// class player{
// 	constructor(name,strenth,weapon){
// 		this.name = name
// 		this.strenth = strenth
// 		this.weapon = weapon
// 	}

// 	block(){
// 		console.log(this.name + "is blocking")
// 	}

// 	jump(){
// 		console.log(this.name + "is jumping")
// 	}
// }

// class Blowman extends player{
// 	constructor(name,strenth,weapon){
// 		super(name,strenth,weapon)
// 		this.name = "Blowman" + name
// 	}

// punish(){
// 	console.log(this.name +"is punishing with" +this.weapon)
//   }
// }

// class Killer extends player{
// 	constructor(name,strenth,weapon){
// 		super(name,strenth,weapon)
// 		this.name = "Killer" + name
// 	}

//  Kill(){
// 	console.log(this.name +"is Killing with" +this.weapon)
//   }
// }

// let subzero = new Blowman("sub zero",120,"ice")
// let scorpion = new Killer("scorpion",119,"fire")

// subzero.punish()
// scorpion.block()

 

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);







