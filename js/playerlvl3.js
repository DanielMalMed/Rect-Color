//window alerts links
let a=document.createElement('a');
a.target='_blank';
a.href='level2.html';
let b=document.createElement('a');
b.target='_blank';
b.href='level1.html';
let c=document.createElement('a');
c.target='_blank';
c.href='level3.html';
let d=document.createElement('a');
d.target='_blank';
d.href='level4.html';
let e=document.createElement('a');
e.target='_blank';
e.href='index.html';
let f=document.createElement('a');
f.target='_blank';
f.href='level5.html';



function Playerlvl3(x,y) {
    

    this.x = x;
    this.y = y;
    //horizontal velocity
    this.xspeed = 0;
    this.yspeed= 0;
    //how quickly it stops when it doesnt move
    this.friction= 0.6;

    this.maxSpeed = 15;

    this.width = 50;
    this.height = 100;
    this.active = true;
    this.step = function() {
        //movement
        if(this.active) {
            //horizontal movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //slowdown
                this.xspeed *= this.friction;
            } else if (rightKey) {
                //move right
                this.xspeed ++;
            } else if (leftKey) {
                //move left
                this.xspeed --;
            }
            //verticalmovement
            if (upKey) {
                //chek if on ground

                this.yspeed -= 20;

            }
            //Gravity
            this.yspeed += 5;

            //correct speed
            if (this.xspeed > this.maxSpeed) {
                this.xspeed = this.maxSpeed;
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed;
            }
            if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed;
            } else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed;
            }
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed);
            } else {
                this.xspeed = Math.ceil(this.xspeed)
            }
            if (this.yspeed > 0) {
                this.yspeed = Math.floor(this.yspeed);
            } else {
                this.yspeed = Math.ceil(this.yspeed)
            }

            //horizontal collision rect
            let horizontalRect = {
                x : this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height
            }
             //vertical collision rect
            let verticalRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
            }

            //check for intersection
            for (let i =0; i < borders.length; i++) {
                let borderRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height
                }
                if (checkIntersection(horizontalRect, borderRect)) {

                    this.xspeed = 0;
                    
                }
                if (checkIntersection(verticalRect, borderRect)) {
                    this.yspeed = 0;
                }
            }
                //spikes intersections
            for (let i =0; i < spikes.length; i++) {
                let spikeRect = {
                    x: spikes[i].x,
                    y: spikes[i].y,
                    width: spikes[i].width,
                    height: spikes[i].height
                }
                if (checkIntersection(horizontalRect, spikeRect)) {
                    this.x = 01;
                    this.y = 40;
                    console.log('count + 1' )
                }
                if (checkIntersection(verticalRect, spikeRect)) {
                    this.x = 5;
                    this.y = 40;
                    console.log('count + 1')

                }
            }
            //wintwo
            for (let i =0; i < wins.length; i++) {
                let wintwoRect = {
                    x: wins[i].x,
                    y: wins[i].y,
                    width: wins[i].width,
                    height: wins[i].height
                }
                if (checkIntersection(horizontalRect, wintwoRect)) {
                    this.x = 60;
                    this.y = 400;
                    console.log("1")
                    window.confirm("You beat level 2!, on to level 3 ");
                    if (window.confirm('Ok to Confirm, Cancel to Stay here'))
                        {
                        d.click();
                        } else {
                            c.click();
                        }
                    
                }
                if (checkIntersection(verticalRect, wintwoRect)) {
                    this.x = 60;
                    this.y = 400;
                    window.confirm("You beat level 3!, on to level 4 ");
                    if (window.confirm('Ok to Confirm, Cancel to Stay here'))
                        {
                        d.click();
                        } else {
                            c.click();
                        }
                    console.log('count + 1')

                }
            }

            if (pKey) {
                this.x = 1200;
                this.y = 600;
            }
            this.x += this.xspeed;
            this.y += this.yspeed;

        }
    }

    this.draw = function() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x,this.y, this.width, this.height);
    }

}
