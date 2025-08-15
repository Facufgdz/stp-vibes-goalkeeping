import "base/base";
import "base/entrypoints";
import * as debug from "base/debug";
import * as vis from "base/vis";
import * as plot from "base/plot";

import * as World from "base/world";
import * as EntryPoints from "base/entrypoints";
import { log } from "base/amun";
import { Vector } from "base/vector";
import { main as trainer } from "stp_vibes/trainerstub";

// ⬇️ IMPORTÁ TU TÁCTICA
import { GoalieStrategy } from "stp_vibes/tactics/Goalkeeping";

const goalieStrategy = new GoalieStrategy();

function main(): boolean {
  // Si querés, podés seguir llamando al trainer()
  // trainer();

  // Ejecutar la táctica de arquero en cada tick
  goalieStrategy.run();

  return true;
}

EntryPoints.add("Demo", main);

function wrapper(func: () => boolean): () => void {
  function f() {
    World.update();
    func();

    // Enviar comandos a Amun y limpiar debug
    World.setRobotCommands();
    debug.resetStack();
    plot._plotAggregated();
  }
  return f;
}

export let scriptInfo = {
  name: "Urubots Goalkeeper Strategy",
  entrypoints: EntryPoints.get(wrapper),
};
