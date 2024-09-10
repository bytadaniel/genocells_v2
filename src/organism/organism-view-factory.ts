import { Grid } from "../world/grid";
import { OrganismView } from "./organism-view";
import { organismViews } from "./organism-view-set";

export class OrganismViewFactory {
  public static create(grid: Grid, x: number, y: number): OrganismView {
    const organismView = new OrganismView(grid, x, y);

    organismViews.add(organismView);

    return organismView;
  }
}
