var canvas= document.querySelector('canvas'); // getting the canvas element into canvas variable
canvas.width=window.innerWidth;// resizing canvas height to full width
canvas.height=window.innerHeight; // resizing canvas height to full height

var c = canvas.getContext('2d');


function Circle(x,y,dx,dy,radius,color)
{
    this.x = x;
    this.y = y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color= color;
    
    
    this.draw = function()
    {   
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }
    
    
    this.update = function()
    {
     // alert("called"); 

    if(this.x+this.radius > innerWidth || this.x-this.radius < 0)
        {
            this.dx = -this.dx ;
        }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0)
        {
            this.dy = -this.dy ;
        } 
        
        
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    
        
    }
    

}


var circlearray = [];
for (var i=0;i<2;i++)
    {   var x =Math.random()*innerWidth;
        var dx =(Math.random() - 0.5)* 8  ;
        var y= Math.random()*innerHeight ;
        var dy =(Math.random() - 0.5)*8 ;
        var radius = Math.random()*100;
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

        circlearray.push(new Circle(x,y,dx,dy,radius,color));
    }


function animate()
{ 
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,innerWidth,innerHeight);
    
  for(var i = 0;i<circlearray.length;i++)
{
    circlearray[i].update();
    
}    
    x+=dx;
    y+=dy;
    
    if(x+radius > innerWidth || x-radius < 0)
        {
            dx = -dx ;
        }
    if(y+radius > innerHeight || y-radius < 0)
        {
            dy = -dy ;
        } 
    
}


animate(); 