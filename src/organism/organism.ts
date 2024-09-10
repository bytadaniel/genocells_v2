import { randomInt } from "crypto";
import { EnergyProvider } from "../providers/energy-provider";
import { OrganismView } from "./organism-view";
import { GENOME_GRANULARITY } from "../constants";

export class Organism extends EnergyProvider {
  private view: OrganismView | null;

  private readonly genomeR: number;
  private readonly genomeG: number;
  private readonly genomeB: number;

  constructor() {
    super();

    this.genomeR = randomInt(GENOME_GRANULARITY);
    this.genomeG = randomInt(GENOME_GRANULARITY);
    this.genomeB = randomInt(GENOME_GRANULARITY);

    this.view = null;
  }

  public setView(view: OrganismView) {
    this.view = view;
  }

  public interpreteR(max: number): number {
    return Math.trunc((this.genomeR / GENOME_GRANULARITY) * max);
  }

  public interpreteG(max: number): number {
    return Math.trunc((this.genomeG / GENOME_GRANULARITY) * max);
  }

  public interpreteB(max: number): number {
    return Math.trunc((this.genomeB / GENOME_GRANULARITY) * max);
  }
}
