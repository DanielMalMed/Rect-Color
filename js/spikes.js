//used the same logic as borders and goal line

function spike(x, y, width, height, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    this.draw = function() {
        if (this.type === 1) {
            ctx.fillStyle = "silver";
       } else if (this.type === 2)  {
            ctx.fillStyle = 'orange';
       }
       ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
