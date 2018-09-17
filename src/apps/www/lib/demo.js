const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign(obj1, obj2);
console.dir(obj3);

const arr1 = [1];
const arr2 = [3, 2, 1];
const arr3 = Object.assign(arr1, arr2);
console.log(arr3);

function Animal() {
    this.type = '动物类';
}

function Dog(name) {
    this.name = name;
}
Dog.prototype = new Animal();
Dog.prototype.construtor = Dog;
const dog1 = new Dog('小明');
window.addEventListener('error', (e) => {
    console.dir(e);
}, true);

var person = {
    _age: 20,
    type: '成人'
}

Object.defineProperty(person, 'age', {
    get() {
        this._age
    },
    set(newValue) {
        this._age = newValue;
        this.type = newValue > 10 ? '成人' : '小孩';
    }
})


