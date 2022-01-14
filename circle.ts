
namespace Drawing { 
    export class Circle implements IShape { 
       public draw() { 
          console.log("Circle is drawn"); 
       }  
       

 
  
          function drawAllShapes(shape:Drawing.IShape) { 
             shape.draw(); 
          } 
          drawAllShapes(new Drawing.Circle());
          drawAllShapes(new Drawing.Triangle());
       }
    }
 }