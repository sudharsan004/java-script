console.log(this);
// Note:
// For all regular functions this points to the global /window object. But for function inside an object 'this' refers to the object
var colorMoods ={
    red : 'angry',
    blue : 'calm',
    orange : function(){
        // here this referes to the colorMoods because it's a function of an object
        console.log('I am orange line 7' ,this);

        // here sayhi() is regular function, not a function of object but may be inside it.
        function sayhi(){
            console.log('hi line 10 ',this);
            
        }
        sayhi();
    }
}

// this is not the regular function this is a function inside an object so here this refers to the object
colorMoods.orange()// function call through an object

