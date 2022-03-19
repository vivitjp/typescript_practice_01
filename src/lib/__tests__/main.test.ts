import * as lib from "../main"

//TypeScript

//===================================================
//関数
//===================================================
describe.skip("関数", () => {

  test.skip("関数(引数オブジェクト)", () => {
    expect(lib.funcPropsA({ msg: "Message" })).toBe("Message")
  });

  test.skip("関数(引数+戻り値)", () => {
    expect(lib.funcSignA("Hello")).toBe("Hello");
  });

  test("関数(引数+戻り値オブジェクト)", () => {
    //expect(lib.funcSignB1("Hello")).toBe({ id: 1, msg: "Hello" });  //Fail
    expect(lib.funcSignB1("Hello")).toEqual({ id: 1, msg: "Hello" });
    expect(lib.funcSignB2("Hello")).toEqual({ id: 2, msg: "Hello" });
    expect(lib.funcSignB3("Hello")).toEqual({ id: 3, msg: "Hello" });
  });

  test.skip("関数(引数+戻り値配列)", () => {
    //expect(lib.funcArrayA1("World")).toBe(["Hello", "World"]);  //Fail
    expect(lib.funcArrayA1("World")).toEqual(["Hello", "World"]);
    expect(lib.funcArrayA2(123)).toEqual(["Hello", 123]);
  });

  test.skip("関数(引数から戻り値タイプ取得)", () => {
    expect(lib.funcGetTypeA1("World")).toEqual(["Hello", "World"]);
  });

});

//===================================================
//関数(Promise)
//===================================================
describe.skip("関数(戻り値 Promise)", () => {

  test("関数(戻り値:Promise.then)", () => {
    return lib.funcPromiseA("Hello").then(data => {
      expect(data).toBe("Hello");
    });
  });

  test("関数(戻り値:Promise.await)", async () => {
    const data = await lib.funcPromiseA("Hello");
    expect(data).toBe("Hello");
  });

  test("関数(戻り値:Promise.Error)", async () => {
    expect.assertions(1);
    try {
      await lib.funcPromiseA();
    } catch (e) {
      expect(e).toBe('MyError');
    }
  });

  test('関数(戻り値:Promise.resolves)', async () => {
    await expect(lib.funcPromiseA("Hello")).resolves.toBe("Hello");
  });

  test('関数(戻り値:Promise.rejects)', async () => {
    await expect(lib.funcPromiseA()).rejects.toMatch(/error/i);
  });

});

//===================================================
//関数ジェネリック
//===================================================
describe.skip("関数ジェネリック", () => {

  test("関数ジェネリック(旧式)", () => {
    expect(lib.funcGenOld("Hello")).toBe("Hello");
    expect(lib.funcGenOld(123)).toBe(123);
  });

  test("関数ジェネリック(Arrow)", () => {
    expect(lib.funcGenA("Hello")).toBe("Hello");
    expect(lib.funcGenA<string>("Hello")).toBe("Hello");
  });

  test("関数ジェネリック(複数)", () => {
    expect(lib.funcGenM("Hello", 123))
      .toEqual({ msg: "Hello", id: 123 });
  });

  test("関数ジェネリック(型指定)", () => {
    expect(lib.funcGenM<string, number, any>("Hello", 123))
      .toEqual({ msg: "Hello", id: 123 });
  });

  test("関数ジェネリック(デフォルト指定)", () => {
    expect(lib.funcGenMOpt<string>("Hello", 123))
      .toEqual({ msg: "Hello", id: 123 });
  });
});

//===================================================
//関数ジェネリック(制限)
//===================================================
describe("関数ジェネリック(制限)", () => {

  test("関数ジェネリック(extends)", () => {
    expect(lib.funcExtNumA("Hello")).toBe("Hello");
    expect(lib.funcExtNumB(123)).toBe(124);
  });

  test("関数ジェネリック(extendsで制限)", () => {
    expect(lib.funcExtLen("Hello")).toEqual(["Hello", "Size: 5"]);
  });

  test("関数ジェネリック(extendsで最低限の属性制限)", () => {
    expect(lib.funcExtObj({
      family: "Smith", name: "John", age: 45  //age は制限外の追加属性
    })).toEqual({
      family: "Smith", name: "John", age: 45, fullname: "John Smith"
    });
  });

  test("関数ジェネリック(extends+Optinal Chain)", () => {
    expect(lib.funcChain({ data: { name: 'John' }, num: 12 })).toEqual({ name: 'John' });
    expect(lib.funcChain({ arr: [3, 2], data: { idx: 7, name: 'John' } }))
      .toEqual({ name: 'John', val: 7, arrItem: 2 });
    expect(lib.funcChain({ func: v => v * 2 })).toEqual({ funcRes: 2 });
  });
});

//===================================================
//クラス
//===================================================

describe.skip("クラス", () => {

  test("クラス(インターフェイス)", () => {
    const cls = new lib.ClassB("Hello")
    expect(cls.getMsg('World')).toBe("Hello World");
  });

  test("クラス(インターフェイス継承)", () => {
    const cls = new lib.ClassC("年齢", 23)
    expect(cls.getMsg()).toBe("年齢 23");
  });

  test("クラス(ジェネリック)", () => {
    const cls = new lib.ClassA("Hello")
    expect(cls.getMsg('World')).toBe("Hello World");
  });

});
