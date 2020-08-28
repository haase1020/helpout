//implicit binding
var me = {
  name: 'Mandi',
  age: 1,
  sayName: function () {
    console.log(this.name);
  },
};
me.sayName(); ///look to the left of the dot, and that is what the 'this' keyword is referencing
//explicit binding
var helloWorld = function () {
  console.log('Hello world, my name is ' + this.name);
};

var stacie = {
  name: 'stacie',
  age: 2,
};
helloWorld.call(stacie);
//new binding
// window binding

// where is this function invoked?

var sayName = function (name) {
  console.log('hello ' + name);
};

sayName('Mandi');
