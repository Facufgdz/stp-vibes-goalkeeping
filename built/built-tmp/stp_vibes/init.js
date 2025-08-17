define(["require", "exports", "base/base", "base/entrypoints", "base/debug", "base/plot", "base/world", "base/entrypoints", "stp_vibes/trainerstub", "stp_vibes/tactics/Goalkeeping"], function (require, exports, ___pleasedontusewhydoyoudothis0, ___pleasedontusewhydoyoudothis1, debug, plot, World, EntryPoints, trainerstub_1, Goalkeeping_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptInfo = void 0;
    const goalieStrategy = new Goalkeeping_1.GoalieStrategy();
    function currentRefCommand() {
        var _a, _b, _c, _d;
        return (_d = (_b = (_a = World === null || World === void 0 ? void 0 : World.Referee) === null || _a === void 0 ? void 0 : _a.command) !== null && _b !== void 0 ? _b : (_c = World === null || World === void 0 ? void 0 : World.GameState) === null || _c === void 0 ? void 0 : _c.refereeCommand) !== null && _d !== void 0 ? _d : "";
    }
    function ourColor() {
        var _a, _b, _c;
        const c = ((_c = (_a = World === null || World === void 0 ? void 0 : World.FriendlyColor) !== null && _a !== void 0 ? _a : (_b = World === null || World === void 0 ? void 0 : World.Team) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : "YELLOW").toString().toUpperCase();
        return c.includes("BLUE") ? "BLUE" : "YELLOW";
    }
    function main() {
        (0, trainerstub_1.main)();
        const cmd = currentRefCommand();
        if (cmd !== `PREPARE_KICKOFF_${ourColor()}`) {
            goalieStrategy.run();
        }
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