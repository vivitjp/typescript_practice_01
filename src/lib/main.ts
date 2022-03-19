export const line = (): void => {
  console.log("-".repeat(20));
}

//===================================================
//TypeScript 関数
//===================================================
//---------------------------------------------------
//関数(引数オブジェクト)
//---------------------------------------------------
interface IFPropsA { msg: string }
export const funcPropsA = (prop: IFPropsA): string => {
  return prop.msg
}

//---------------------------------------------------
//関数(引数+戻り値)
//---------------------------------------------------
//interface IFSignA { (msg: string): void } 戻り値オーバーライド可能
interface IFSignA { (msg: string): String }
export const funcSignA: IFSignA = (msg): String => {
  return msg;
}

//---------------------------------------------------
//関数(引数+戻り値オブジェクト)
//---------------------------------------------------
interface retObj { id: number, msg: string }
interface IFSignB { (msg: string): retObj }

export const funcSignB1: IFSignB = (msg): retObj => {
  return { id: 1, msg: msg };
}

export const funcSignB2 = (msg: string): retObj => {
  return { id: 2, msg: msg };
}

export const funcSignB3 = (msg: string): { id: number, msg: string } => {
  return { id: 3, msg: msg };
}

//---------------------------------------------------
//関数(引数+戻り値配列)
//---------------------------------------------------

export const funcArrayA1 = (msg: string): string[] => {
  return ["Hello", msg];
}

type typeSN = string | number;
export const funcArrayA2 = (msg: typeSN): Array<typeSN> => {
  return ["Hello", msg];
}

//---------------------------------------------------
//関数(引数から戻り値タイプ取得)
//---------------------------------------------------

export const funcGetTypeA1 = (msg: string): typeof msg[] => {
  return ["Hello", msg];
}

//===================================================
//TypeScript 関数(Promise)
//===================================================
//---------------------------------------------------
//関数(戻り値:Promise) any以外
//---------------------------------------------------
export const funcPromiseA = (msg?: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      if (!msg) throw Error("MyError")
      resolve(msg);
    } catch (e: any) {
      reject(e.message)
    }
  });
}

//===================================================
//TypeScript 関数ジェネリック
//===================================================
//---------------------------------------------------
//関数ジェネリック(旧式)
//---------------------------------------------------
export function funcGenOld<T>(msg: T): string {
  return msg as unknown as string;
}

//---------------------------------------------------
//関数ジェネリック(Arrow)
//---------------------------------------------------
export const funcGenA = <T>(msg: T): string => {
  return msg as unknown as string;
}

//---------------------------------------------------
//関数ジェネリック(複数)
//---------------------------------------------------
export const funcGenM = <T, U, S>(msg: T, id: U): S => {
  return { msg, id } as unknown as S;
}

//デフォルトタイプ、戻り値タイプはおまかせ
export const funcGenMOpt = <T, U = number>(msg: T, id: U) => {
  return { msg, id };
}

//---------------------------------------------------
//関数ジェネリック(extends)
//---------------------------------------------------
export const funcExtNumA = <T extends string>(msg: T): string => {
  return msg as string;
}
export const funcExtNumB = <N extends number>(val1: N): N => {
  return (val1 + 1) as N;
}

//---------------------------------------------------
//関数ジェネリック(extendsで制限)
//---------------------------------------------------
//少なくとも length 属性を持つタイプに制限
interface Lengthy { length: number; }
export const funcExtLen = <T extends Lengthy>(el: T): [T, string] => {
  let text = el.length ? 'Size: ' + el.length : "Empty";
  return [el, text];
}

//少なくとも familyname 属性を持つオブジェクトに制限
export const funcExtObj = <T extends { family: string, name: string }>(obj: T) => {
  return { ...obj, fullname: `${obj.name} ${obj.family}` };
}

//---------------------------------------------------
//関数ジェネリック(extends+Optinal Chain)
//---------------------------------------------------
interface propsChain {
  data?: {
    idx?: number,
    name: string
  }
  arr?: Array<number>
  func?: (v: number) => number
}

export const funcChain = <T extends propsChain>(obj: T) => {
  let retObj: {
    val?: number,
    name?: string,
    arrItem?: number,
    funcRes?: number
  } = {};

  if (obj.data?.idx) retObj.val = obj.data?.idx;
  if (obj.data?.name) retObj.name = obj.data?.name;
  if (obj.arr?.[1]) retObj.arrItem = obj.arr?.[1];
  if (obj.func?.(1)) retObj.funcRes = obj.func?.(1);
  return retObj;
}

//===================================================
//TypeScript クラス
//===================================================

//---------------------------------------------------
//クラス(インターフェイス)
//---------------------------------------------------
interface IFClassB {
  name: string;                 //Public
  getMsg(name: string): string; //Public
}
export class ClassB implements IFClassB {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getMsg(name: string) {
    return `${this.name} ${name}`;
  }
}

//---------------------------------------------------
//クラス(インターフェイス継承)
//---------------------------------------------------
interface IFBase { name: string }
interface ISSub extends IFBase { age: number }

export class ClassC implements ISSub {
  name = '';
  age = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getMsg() {
    return `${this.name} ${this.age}`;
  }
}

//---------------------------------------------------
//クラス(ジェネリック)
//---------------------------------------------------
export class ClassA<T> {
  value: T;
  constructor(value: T) { this.value = value; }
  getMsg(value: T) {
    return `${this.value} ${value}`;
  }
}