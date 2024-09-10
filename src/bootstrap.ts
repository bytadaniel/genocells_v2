import { Sandbox } from "./world/sandbox";

function bootstrap() {
  const sandbox = new Sandbox();

  sandbox.spawnOrganism(1, 0);
  sandbox.spawnOrganism(2, 0);
  sandbox.spawnOrganism(3, 0);

  while (true) {
    // process sandbox events
  }
}

bootstrap();
