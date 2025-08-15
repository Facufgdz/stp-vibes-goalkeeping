// tactics/Goalkeeping.ts
import * as World from "base/world";
import { Goalkeeping } from "stp_vibes/skills/goalkeeper";

export class GoalieStrategy {
  private goalie: Goalkeeping | null = null;

  run(): void {
    const r = World.FriendlyRobotsById?.[0];
    if (!r) return;

    if (!this.goalie) {
      // Importante: que coincida el named export "Goalkeeping"
      this.goalie = new Goalkeeping(r);
    }

    const ballY = World?.Ball?.pos?.y ?? 0;

    // Activar sólo si la pelota entra en nuestro tercio defensivo (lado Y negativo)
    if (ballY < -2.0) {
      this.goalie.run();
    }
  }
}
