import "base/base";
import "base/entrypoints";
import * as debug from "base/debug";
import * as plot from "base/plot";
import * as World from "base/world";
import * as EntryPoints from "base/entrypoints";
import { main as trainer } from "stp_vibes/trainerstub";
import { GoalieStrategy } from "stp_vibes/tactics/Goalkeeping";

const goalieStrategy = new GoalieStrategy();

function currentRefCommand(): string {
  return World?.Referee?.command ?? World?.GameState?.refereeCommand ?? "";
}
function ourColor(): "YELLOW" | "BLUE" {
  const c = (World?.FriendlyColor ?? World?.Team?.color ?? "YELLOW").toString().toUpperCase();
  return c.includes("BLUE") ? "BLUE" : "YELLOW";
}

function main(): boolean {
  // 1) Kickoff (vive dentro de trainer())
  trainer();

  // 2) Arquero sólo si NO estamos en prepare kickoff propio
  const cmd = currentRefCommand();
  if (cmd !== `PREPARE_KICKOFF_${ourColor()}`) {
    goalieStrategy.run();
  }

  return true;
}

EntryPoints.add("Demo", main);

function wrapper(func: () => boolean): () => void {
  function f() {
    World.update();
    func();
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
