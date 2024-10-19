class Main {
  init(): void {
    let history = new BrowseHistory();
    history.push('a');
    history.push('b');
    history.push('c');

    let iterator: Iterator = history.createIterator();

    while (iterator.hasNext()) {
      let url = iterator.current();
      console.log(url);
      iterator.next();
    }
  }
}

class BrowseHistory {
  _urls: string[] = [];

  get urls() {
    return this._urls;
  }

  push(url: string): void {
    this._urls.push(url);
  }

  pop(): string {
    return this._urls.pop();
  }

  createIterator(): Iterator {
    return new ArrayIterator(this);
  }
}

interface Iterator {
  hasNext(): boolean;
  current(): string;
  next(): void;
}

class ArrayIterator implements Iterator {
  private history: BrowseHistory;
  private index: number = 0;

  constructor(history: BrowseHistory) {
    this.history = history;
  }

  hasNext(): boolean {
    return (this.index < this.history.urls.length);
  }

  current(): string {
    return this.history.urls[this.index];
  }

  next(): void {
    this.index++;
  }
}

let main = new Main();
main.init();
