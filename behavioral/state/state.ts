class Main {
  init(): void {
    let canvas = new Canvas();
    canvas.setCurrentTool(new SelectionTool());
    canvas.mouseDown();
    canvas.mouseUp();
  }
}

class Canvas {
  private currentTool: Tool;

  getCurrentTool(): Tool {
    return this.currentTool;
  }

  setCurrentTool(value: Tool) {
    this.currentTool = value;
  }

  mouseDown(): void {
    this.currentTool.mouseDown();
  }

  mouseUp(): void {
    this.currentTool.mouseUp();
  }
}

interface Tool {
  mouseDown(): void;
  mouseUp(): void;
}

class SelectionTool implements Tool {
  mouseDown(): void {
    console.log('Selection icon');
  }

  mouseUp(): void {
    console.log('Draw a dashed rectangle');
  }
}

class BrushTool implements Tool {
  mouseDown(): void {
    console.log('Brush icon');
  }

  mouseUp(): void {
    console.log('Draw a line');
  }
}

class EraserTool implements Tool {
  mouseDown(): void {
    console.log('Eraser icon');
  }

  mouseUp(): void {
    console.log('Erase something');
  }
}

let main = new Main();
main.init();
