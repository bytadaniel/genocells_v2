import { EnergyProvider } from "../providers/energy-provider";
import { OrganismView } from "../organism/organism-view";

export class GridCell extends EnergyProvider {
  private organism: OrganismView | null;

  constructor(public readonly x: number, public readonly y: number) {
    super();

    this.organism = null;
  }

  public placeOrganismView(organism: OrganismView): void {
    this.organism = organism;
  }
}
