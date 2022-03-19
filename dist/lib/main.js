"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassC = exports.ClassB = exports.ClassA = exports.funcExtLen = exports.funcExtNum = exports.funcGenAOld = exports.funcGenA = exports.funcSignC = exports.funcSignA = exports.funcPropsB = exports.funcPropsA = exports.line = void 0;
const line = () => {
    console.log("-".repeat(20));
};
exports.line = line;
const funcPropsA = (prop) => {
    console.log(`[Props] ${prop.msg}`);
};
exports.funcPropsA = funcPropsA;
const funcPropsB = (prop) => {
    return `[Return] ${prop.msg}`;
};
exports.funcPropsB = funcPropsB;
const funcSignA = (msg) => {
    return `[Return] ${msg}`;
};
exports.funcSignA = funcSignA;
const funcSignC = (msg) => {
    return { id: 1, msg: msg };
};
exports.funcSignC = funcSignC;
//ジェネリック(Arrow)
const funcGenA = (msg) => {
    return `[GenArrow] ${msg}`;
};
exports.funcGenA = funcGenA;
//ジェネリック(旧)
function funcGenAOld(msg) {
    return `[GenOldFash] ${msg}`;
}
exports.funcGenAOld = funcGenAOld;
//ジェネリック(extends)
const funcExtNum = (val1) => {
    return (val1 + 1);
};
exports.funcExtNum = funcExtNum;
const funcExtLen = (el) => {
    let text = el.length ? 'Size: ' + el.length : "Empty";
    return [el, text];
};
exports.funcExtLen = funcExtLen;
//ククラスジェネリック
class ClassA {
    constructor(value) { this.value = value; }
    getMsg(value) {
        return `[Class Gen] ${this.value}+${value}`;
    }
}
exports.ClassA = ClassA;
class ClassB {
    constructor(name) { this.name = name; }
    getMsg(name) {
        return `[Class IF] ${this.name}+${name}`;
    }
}
exports.ClassB = ClassB;
class ClassC {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    getMsg() {
        return `[Class継承] ${this.name} ${this.age}`;
    }
}
exports.ClassC = ClassC;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUE7QUFGWSxRQUFBLElBQUksUUFFaEI7QUFLTSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWMsRUFBUSxFQUFFO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFGWSxRQUFBLFVBQVUsY0FFdEI7QUFDTSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWMsRUFBVSxFQUFFO0lBQ25ELE9BQU8sWUFBWSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7QUFDL0IsQ0FBQyxDQUFBO0FBRlksUUFBQSxVQUFVLGNBRXRCO0FBS00sTUFBTSxTQUFTLEdBQVksQ0FBQyxHQUFHLEVBQVUsRUFBRTtJQUNoRCxPQUFPLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDM0IsQ0FBQyxDQUFBO0FBRlksUUFBQSxTQUFTLGFBRXJCO0FBS00sTUFBTSxTQUFTLEdBQVksQ0FBQyxHQUFHLEVBQVUsRUFBRTtJQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFBO0FBRlksUUFBQSxTQUFTLGFBRXJCO0FBRUQsZUFBZTtBQUNSLE1BQU0sUUFBUSxHQUFHLENBQUksR0FBTSxFQUFVLEVBQUU7SUFDNUMsT0FBTyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQTtBQUZZLFFBQUEsUUFBUSxZQUVwQjtBQUNELFdBQVc7QUFDWCxTQUFnQixXQUFXLENBQUksR0FBTTtJQUNuQyxPQUFPLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRkQsa0NBRUM7QUFFRCxpQkFBaUI7QUFDVixNQUFNLFVBQVUsR0FBRyxDQUFtQixJQUFPLEVBQUssRUFBRTtJQUN6RCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBTSxDQUFDO0FBQ3pCLENBQUMsQ0FBQTtBQUZZLFFBQUEsVUFBVSxjQUV0QjtBQUlNLE1BQU0sVUFBVSxHQUFHLENBQW9CLEVBQUssRUFBZSxFQUFFO0lBQ2xFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdEQsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUE7QUFIWSxRQUFBLFVBQVUsY0FHdEI7QUFFRCxZQUFZO0FBQ1osTUFBYSxNQUFNO0lBRWpCLFlBQVksS0FBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsS0FBUTtRQUNiLE9BQU8sZUFBZSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQU5ELHdCQU1DO0FBT0QsTUFBYSxNQUFNO0lBRWpCLFlBQVksSUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLGNBQWMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFORCx3QkFNQztBQUtELE1BQWEsTUFBTTtJQUdqQixZQUFZLElBQVksRUFBRSxHQUFXO1FBRnJDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLGFBQWEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBVkQsd0JBVUMifQ==