import * as World from "base/world";
import { MoveTo } from "stp_vibes/skills/moveto";
import { Vector } from "base/vector";

export class KickOff {
  constructor() {}

  run() {
    // ✅ Evitar que se ejecute fuera del kickoff
    const state = World?.RefereeState ?? "";
    if (!state.toLowerCase().includes("kickoff")) {
      return; // No estamos en kickoff → no hacer nada
    }

    const assignedIds = new Set();

    // id: número del robot en tu equipo
    const kickoffPositions = [
      { id: 0, pos: new Vector(0.0, -3.0) },
      { id: 0, pos: new Vector(0.0, -4.5) },    // arquero en el medio del arco
      { id: 1, pos: new Vector(-2.0, 0.0) },   // defensa derecha
      { id: 2, pos: new Vector(0.0, -2.0) },  // defensa izquierda
      { id: 3, pos: new Vector(0.0, 0.0) },    // medio
      { id: 4, pos: new Vector(2.0, 0.0) }     // delantero
    ];

    kickoffPositions.forEach((robot) => {
      if (assignedIds.has(robot.id)) return;

      const r = World.FriendlyRobotsById[robot.id];
      if (r) {
        new MoveTo(r).run(robot.pos, 0); // segundo parámetro: orientación
        assignedIds.add(robot.id);
      } else {
        amun.log(`Robot con ID ${robot.id} no disponible todavía`);
      }
    });
  }
}
