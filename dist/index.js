"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassC = exports.ClassB = exports.ClassA = exports.funcExtNum = exports.funcGenA = exports.funcGenAOld = exports.funcSignB = exports.funcSignA = void 0;
const line = () => { console.log("-".repeat(20)); };
line();
//================================
//引数：型定義オブジェクト
//================================
console.log("■型定義オブジェクト");
const funcPropsA = (prop) => `${prop.msg}`;
console.log(funcPropsA({ msg: "Message" }));
//================================
//関数シグネチャ(引数)
//================================
console.log("■関数シグネチャ(引数)");
//interface IFSignA { (msg: string): String } //Should be
const funcSignA = (msg) => `${msg}`;
exports.funcSignA = funcSignA;
console.log((0, exports.funcSignA)("文字列"));
//================================
//関数シグネチャ(引数+戻り値オブジェクト)
//================================
console.log("■関数シグネチャ(引数+戻り値オブジェクト)");
const funcSignB = (msg) => ({ id: 1, msg: msg });
exports.funcSignB = funcSignB;
console.log((0, exports.funcSignB)("文字列"));
//================================
//ジェネリック(旧)
//================================
console.log("■ジェネリック(旧)");
function funcGenAOld(msg) { return `${msg}`; }
exports.funcGenAOld = funcGenAOld;
console.log(funcGenAOld("文字列"));
console.log(funcGenAOld(123));
//================================
//ジェネリック(Arrow)
//================================
console.log("■ジェネリック(Arrow)");
const funcGenA = (msg) => `${msg}`;
exports.funcGenA = funcGenA;
console.log((0, exports.funcGenA)("文字列"));
console.log((0, exports.funcGenA)(123));
console.log((0, exports.funcGenA)("文字列"));
console.log((0, exports.funcGenA)(123));
//console.log(funcGenA<number>("文字列")) Error
//================================
//ジェネリック(extends)
//================================
console.log("■ジェネリック(extends)");
const funcExtNum = (val1) => (val1 + 1);
exports.funcExtNum = funcExtNum;
console.log((0, exports.funcExtNum)(123));
console.log((0, exports.funcExtNum)(1.23));
//console.log(funcExtNum("Hello")) Error
//================================
//ジェネリック(クラス)
//================================
console.log("■ジェネリック(クラス)");
class ClassA {
    constructor(value) { this.value = value; }
    getMsg(value) { return `${this.value}+${value}`; }
}
exports.ClassA = ClassA;
const clsA = new ClassA("クラス");
console.log(clsA.getMsg('A'));
const clsB = new ClassA(123);
console.log(clsB.getMsg(345));
//================================
//クラスインターフェイス
//================================
console.log("■クラス・インターフェイス");
class ClassB {
    constructor(name) { this.name = name; }
    getMsg(name) { return `${this.name}+${name}`; }
}
exports.ClassB = ClassB;
const clsIF1 = new ClassB("クラス");
console.log(clsIF1.getMsg('B'));
//================================
//クラスインターフェイス継承
//================================
console.log("■クラス・インターフェイス(継承)");
class ClassC {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    getMsg() { return `${this.name} ${this.age}`; }
}
exports.ClassC = ClassC;
const clsIF2 = new ClassC("クラス", 23);
console.log(clsIF2.getMsg());
//================================
line();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLElBQUksR0FBRyxHQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtBQUN4RCxJQUFJLEVBQUUsQ0FBQztBQUVQLGtDQUFrQztBQUNsQyxjQUFjO0FBQ2Qsa0NBQWtDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFJMUIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFjLEVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBRTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUUzQyxrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiLGtDQUFrQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRzVCLHlEQUF5RDtBQUVsRCxNQUFNLFNBQVMsR0FBWSxDQUFDLEdBQUcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUEvQyxRQUFBLFNBQVMsYUFBc0M7QUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGlCQUFTLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUU5QixrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLGtDQUFrQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFLL0IsTUFBTSxTQUFTLEdBQVksQ0FBQyxHQUFHLEVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQTVELFFBQUEs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