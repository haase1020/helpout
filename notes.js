//implicit binding  --> look to the left of the dot at call time
var me = {
  name: 'Mandi',
  age: 1,
  sayName: function () {
    console.log(this.name);
  },
};
me.sayName(); ///look to the left of the dot, and that is what the 'this' keyword is referencing

//explicit binding --> telling function what the context of this keyword is going to be
var helloWorld = function (lang1, lang2) {
  console.log(
    'Hello world, my name is ' +
      this.name +
      ' and I  know ' +
      lang1 +
      ' and ' +
      lang2
  );
};

var stacie = {
  name: 'stacie',
  age: 2,
};
var languages = ['javascript', 'ruby', 'python'];

//call and apply immediately invoke the function, but apply you can pass in an array
helloWorld.call(stacie, languages[0], languages[2]); // call method available on every function
helloWorld.apply(stacie, languages); //the second argument is an array you can pass in because of the apply method

//binding
var newFn = helloWorld.bind(stacie, languages[0], languages[2]); //calling this fn will bind 'this' to stacie
//bind returns a new function instead of invoking the original function
// same as call but returns a new function
newFn();

//new binding  --> invoking a function with new keyword
var Animal = function (color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra);
//window binding
var sayAge = function () {
  'use strict';
  console.log(this.age); // if not in strict mode, will default this to the window object, which here would be undefined
};

var me = {
  age: 3,
};

sayAge(); // will create error since in strict mode and this keyword defaults to window

// where is this function invoked?

var sayName = function (name) {
  console.log('hello ' + name);
};

sayName('Mandi');
