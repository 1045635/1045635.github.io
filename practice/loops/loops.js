let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for(y = 0; y <= 800; y += 100){
    for(let x = 25; x <= 725; x += 100){
         ctx.fillRect(x, y, 50,25);
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

let dx = 25;
for(y=100; y<=800; y += 100){
	for(let x=0; x<= dx ; x += 100){
		ctx.fillRect(x,y,50,25);
	} 
dx += 100;
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

dx=25;
for(y=100; y<= 800; y += 100){
	for(let x=0; x<=dx; x += 100){
		ctx.fillRect(x,y,50,25);
	}
dx += 100;
}



canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here
