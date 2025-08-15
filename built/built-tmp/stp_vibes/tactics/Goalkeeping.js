define(["require", "exports", "base/world", "stp_vibes/skills/goalkeeper"], function (require, exports, World, goalkeeper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GoalieStrategy = void 0;
    class GoalieStrategy {
        constructor() {
            this.goalie = null;
        }
        run() {
            var _a, _b, _c, _d;
            const r = (_a = World.FriendlyRobotsById) === null || _a === void 0 ? void 0 : _a[0];
            if (!r)
                return;
            if (!this.goalie) {
                this.goalie = new goalkeeper_1.Goalkeeping(r);
            }
            const ballY = (_d = (_c = (_b = World === null || World === void 0 ? void 0 : World.Ball) === null || _b === void 0 ? void 0 : _b.pos) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0;
            if (ballY < -2.0) {
                this.goalie.run();
            }
        }
    }
    exports.GoalieStrategy = GoalieStrategy;
});
//# sourceMappingURL=Goalkeeping.js.map