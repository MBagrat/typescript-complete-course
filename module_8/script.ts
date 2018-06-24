namespace Module_8 {

// Simple Generic
  function echo(data: any) {
    return data;
  }

  console.log(echo("Bagrat"));
  console.log(echo(27));
  console.log(echo({name: "Bagrat", age: 27}));

// Better Generic
  function betterEcho<T>(data: T) {
    return data;
  }

  console.log(betterEcho("Bagrat"));
  console.log(betterEcho<number>(27));
  console.log(betterEcho({name: "Bagrat", age: 27}));

// Built in Generics
  const testResults: Array<number> = [1.94, 2.33];
  testResults.push(-2.99);
  console.log(testResults);

  //Arrays

  function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
  }

  printAll<string>(["Apples", "Banana"]);

  // Generic Types
  const echo2: <T>(data: T) => T = betterEcho;

  console.log(echo2<string>("Something"));

  // Generic classes
  class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;

    calculate(text: string): void {
      let result = +this.baseValue * +this.multiplyValue;
      console.log(text + result);
    }
  }

  const simpleMathNumber = new SimpleMath<number>();
  simpleMathNumber.baseValue = 10;
  simpleMathNumber.multiplyValue = 20;
  simpleMathNumber.calculate("Number result -> ");

  const simpleMathString = new SimpleMath<string>();
  simpleMathString.baseValue = "10";
  simpleMathString.multiplyValue = "20";
  simpleMathString.calculate("String result -> ");

  // Using more then one generic type
  class MoreThenOneGenericType<N extends number, S extends string> {
    baseValue: N;
    multiplyValue: S;

    calculate(text: string) {
      let result = +this.baseValue * +this.multiplyValue;
      console.log(text + result);
    }
  }

  const moreThenOneGenericType = new MoreThenOneGenericType<number, string>();
  moreThenOneGenericType.baseValue = 10;
  moreThenOneGenericType.multiplyValue = "20";
  moreThenOneGenericType.calculate("More Then One Generic Type result -> ")
}