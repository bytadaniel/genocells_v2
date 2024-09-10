import { Organism } from "./organism";
import { Grid } from "../world/grid";

/**
 * Projects Organism instance to the grid
 */
export class OrganismView {
  private readonly organism: Organism;
  constructor(private readonly grid: Grid) {
    this.organism = new Organism();

    this.organism.setView(this);
  }

  public get color(): [number, number, number] {
    const R = this.organism.interpreteR(255);
    const G = this.organism.interpreteG(255);
    const B = this.organism.interpreteB(255);

    return [R, G, B];
  }
}
