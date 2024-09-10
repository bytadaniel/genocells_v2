import { EnergyProvider } from "../providers/energy-provider";
import { OrganismView } from "../organism/organism-view";

export class GridCell extends EnergyProvider {
  private organismView: OrganismView | null;

  constructor(public readonly x: number, public readonly y: number) {
    super();

    this.organismView = null;
  }

  public setOrganismView(organismView: OrganismView): void {
    this.organismView = organismView;
  }
}
