class Main {
  init(): void {
    let editor = new Editor();
    let history = new History();

    editor.setContent('a');
    history.push(editor.createState());

    editor.setContent('b');
    history.push(editor.createState());

    editor.setContent('c');

    editor.restore(history.pop());

    console.log(editor.getContent());
  }
}

class Editor {
  private content: string;

  createState(): EditorState {
    return new EditorState(this.content);
  }

  restore(state: EditorState): void {
    this.content = state.getContent();
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }
}

class EditorState {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

class History {
  private states: EditorState[] = [];

  push(state: EditorState): void {
    this.states.push(state);
  };

  pop(): EditorState {
    return this.states.pop();
  }
}

let main = new Main();
main.init();
