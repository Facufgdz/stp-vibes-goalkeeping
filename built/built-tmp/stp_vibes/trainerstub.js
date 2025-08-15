define(["require", "exports", "base/world", "stp_vibes/plays/halt", "stp_vibes/plays/movecenter", "stp_vibes/plays/kickoff"], function (require, exports, World, halt_1, movecenter_1, kickoff_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.main = void 0;
    let currentPlay = new halt_1.Halt();
    function redecide_play() {
        return true;
    }
    function main() {
        if (redecide_play()) {
            switch (World.RefereeState) {
                case "Halt": {
                    currentPlay = new halt_1.Halt();
                    break;
                }
                case "DirectOffensive": {
                    currentPlay = new movecenter_1.MoveCenter();
                    break;
                }
                case "KickoffOffensivePrepare": {
                    currentPlay = new kickoff_1.KickOff();
                    break;
                }
            }
        }
        currentPlay.run();
    }
    exports.main = main;
});
//# sourceMappingURL=trainerstub.js.map