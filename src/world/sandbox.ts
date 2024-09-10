import { WORLD_ENERGY_AMOUNT, WORLD_HEIGHT, WORLD_WIDTH } from "../constants";
import { Grid } from "./grid";
import { OrganismView } from "../organism/organism-view";

export class Sandbox {
  public readonly width = WORLD_WIDTH;
  public readonly height = WORLD_HEIGHT;

  private readonly grid: Grid;
  private readonly biota = new Set<OrganismView>();

  constructor() {
    this.addEnergy(WORLD_ENERGY_AMOUNT);

    this.grid = new Grid(this.width, this.height);
  }

  public spawnOrganism(x: number, y: number) {
    this.grid.addOrganismViewAt(x, y);
  }

  private addEnergy(amount: number): void {
    void amount;
  }
}
