define(["require", "exports", "base/base", "base/entrypoints", "base/debug", "base/plot", "base/world", "base/entrypoints", "stp_vibes/tactics/Goalkeeping"], function (require, exports, ___pleasedontusewhydoyoudothis0, ___pleasedontusewhydoyoudothis1, debug, plot, World, EntryPoints, Goalkeeping_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptInfo = void 0;
    const goalieStrategy = new Goalkeeping_1.GoalieStrategy();
    function main() {
        goalieStrategy.run();
        return true;
    }
    EntryPoints.add("Demo", main);
    function wrapper(func) {
        function f() {
            World.update();
            func();
            World.setRobotCommands();
            debug.resetStack();
            plot._plotAggregated();
        }
        return f;
    }
    exports.scriptInfo = {
        name: "Urubots Goalkeeper Strategy",
        entrypoints: EntryPoints.get(wrapper),
    };
});
//# sourceMappingURL=init.js.map