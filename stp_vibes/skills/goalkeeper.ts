// skills/goalkeeper.ts
import * as World from "base/world";
import { MoveTo } from "stp_vibes/skills/moveto";
import { Vector } from "base/vector";

export class Goalkeeping {
  private robot: any;

  constructor(robot: any) {
    this.robot = robot;
  }

  run(): void {
    const ball = World?.Ball?.pos;
    if (!ball) return;

    // Actúa sólo si la pelota está en nuestra mitad defensiva (Y < -2)
    if (ball.y >= -2) return;

    // Limitar X para no salir del arco (ajustá a tu portería si hace falta)
    const limitedX = Math.max(-0.5, Math.min(0.5, ball.x));

    // Posición objetivo: frente al arco propio
    const targetPos = new Vector(limitedX, -4.5);

    new MoveTo(this.robot).run(targetPos, 0);
  }
}
