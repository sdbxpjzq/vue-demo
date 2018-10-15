/*eslint-disable */


function Animal() {
    this.type = '动物类';
}

function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
Dog.prototype.construtor = Dog;
const dog1 = new Dog('小明');

