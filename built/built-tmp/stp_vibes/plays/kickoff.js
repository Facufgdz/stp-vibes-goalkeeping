define(["require", "exports", "base/world", "stp_vibes/skills/moveto", "base/vector"], function (require, exports, World, moveto_1, vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KickOff = void 0;
    class KickOff {
        constructor() { }
        run() {
            var _a;
            const state = (_a = World === null || World === void 0 ? void 0 : World.RefereeState) !== null && _a !== void 0 ? _a : "";
            if (!state.toLowerCase().includes("kickoff")) {
                return;
            }
            const assignedIds = new Set();
            const kickoffPositions = [
                { id: 0, pos: new vector_1.Vector(0.0, -3.0) },
                { id: 0, pos: new vector_1.Vector(0.0, -4.5) },
                { id: 1, pos: new vector_1.Vector(-2.0, 0.0) },
                { id: 2, pos: new vector_1.Vector(0.0, -2.0) },
                { id: 3, pos: new vector_1.Vector(0.0, 0.0) },
                { id: 4, pos: new vector_1.Vector(2.0, 0.0) }
            ];
            kickoffPositions.forEach((robot) => {
                if (assignedIds.has(robot.id))
                    return;
                const r = World.FriendlyRobotsById[robot.id];
                if (r) {
                    new moveto_1.MoveTo(r).run(robot.pos, 0);
                    assignedIds.add(robot.id);
                }
                else {
                    amun.log(`Robot con ID ${robot.id} no disponible todavýa`);
                }
            });
        }
    }
    exports.KickOff = KickOff;
});
//# sourceMappingURL=kickoff.js.map