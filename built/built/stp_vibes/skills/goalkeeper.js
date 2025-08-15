define(["require", "exports", "base/world", "stp_vibes/skills/moveto", "base/vector"], function (require, exports, World, moveto_1, vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Goalkeeping = void 0;
    class Goalkeeping {
        constructor(robot) {
            this.robot = robot;
        }
        run() {
            var _a;
            const ball = (_a = World === null || World === void 0 ? void 0 : World.Ball) === null || _a === void 0 ? void 0 : _a.pos;
            if (!ball)
                return;
            if (ball.y >= -2)
                return;
            const limitedX = Math.max(-0.5, Math.min(0.5, ball.x));
            const targetPos = new vector_1.Vector(limitedX, -4.5);
            new moveto_1.MoveTo(this.robot).run(targetPos, 0);
        }
    }
    exports.Goalkeeping = Goalkeeping;
});
//# sourceMappingURL=goalkeeper.js.map