enum ToolType {
  SELECTION,
  BRUSH,
  ERASER,
}

class Canvas {
  private currentTool: ToolType;

  getCurrentTool(): ToolType {
    return this.currentTool;
  }

  setCurrentTool(value: ToolType): void {
    this.currentTool = value;
  }

  mouseDown(): void {
    if (this.currentTool == ToolType.SELECTION) {
      console.log('Selection icon');
    } else if (this.currentTool == ToolType.BRUSH) {
      console.log('Brush icon');
    } else if (this.currentTool == ToolType.ERASER) {
      console.log('Eraser icon');
    }
  }

  mouseUp(): void {
    if (this.currentTool == ToolType.SELECTION) {
      console.log('Draw dashed rectangle');
    } else if (this.currentTool == ToolType.BRUSH) {
      console.log('Draw a line');
    } else if (this.currentTool == ToolType.ERASER) {
      console.log('Eraser something');
    }
  }
}
