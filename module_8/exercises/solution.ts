class MyMap<T extends number | string> {
  private map: { [key: string]: T; } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apple", 5);
numberMap.setItem("banana", 10);
console.log(numberMap.getItem("apple"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apple", "Max");
stringMap.setItem("banana", "27");
console.log(stringMap.getItem("apple"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
