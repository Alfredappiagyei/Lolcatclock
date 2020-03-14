
var course =1;
if (course == 1) {
	document.write("<h1>HTML Tutorial</h1>");
}else if (course == 2) {
	document.write("<h1>css Tutorial</h1>");
}else if (course == 3) {
	document.write("<h1>Javascript Tutorial</h1>");
}


var course =3;
if (course == 1) {
	document.write("<h1>HTML Tutorial</h1>");
}else if (course == 2) {
	document.write("<h1>css Tutorial</h1>");
}else  {
	document.write("<h1>Javascript Tutorial</h1>");
}

var color = "yelow";
switch(color) {
	case "blue":
	document.write("this is blue.");
	break;
	case "green":
	document.write ("this is green.");
	break;
	case "orange":
	document.write ("this is orange.");
	break;
	default:
	document.write ("color not found.");
}


for ( i=0  ; i<=5; i++) {
	document.write(i +"<br/>");
}


/*
var sum=0;
for (i=4; i<8;i++) {
	if(i==6) {
		continue;
	}
	sum +=i;
}
document.write(sum);*/
 
    
 var person = {
 	name:"John", age:31,
 	favColor:"green",height:183
 };
 var x = person.name;
 var y = person["age"];

 document.write(x);
 document.write(y);

 

 