interface shaper {
    x :number;
    y: number;
    z: number;
    printArea() :void;
}

class Rect implements shaper{
    constructor (public x:number, public y:number){}
    printArea = () => 
    {
        console.log(this.x * this.y);
    }
}

var square= {
    x:10,
    y : 20,
    printArea:function(){
        console.log(this.x  *  this.y)
    }

}

var createShape = function(shape : shaper )
{
    shape.printArea();
}
// rectangle : Rect = new Rect();
// rectangle : Rect = new Rect();
createShape(new Rect());
createShape(square)
createShape({                    //{} -> passing object content 
    x:10,
    y : 20,
    printArea:function(){
        console.log(this.x  *  this.y)
    }

})        

