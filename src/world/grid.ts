import { GridCell } from "./grid-cell";
import { OrganismViewFactory } from "../organism/organism-view-factory";

export class Grid {
  private readonly matrix: GridCell[][];

  constructor(private readonly width: number, private readonly height: number) {
    this.matrix = [];

    for (let y = 0; y < this.height; y++) {
      const row: GridCell[] = [];

      for (let x = 0; x < this.width; x++) {
        row.push(new GridCell(x, y));
      }

      this.matrix.push(row);
    }
  }

  public addOrganismViewAt(x: number, y: number) {
    const cell = this.matrix[y][x];

    cell.setOrganismView(OrganismViewFactory.create(this, x, y));
  }
}
