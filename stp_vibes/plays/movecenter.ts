import * as World from "base/world";
import { MoveTo } from "stp_vibes/skills/moveto";
import { Vector } from "base/vector";

export class MoveCenter {
	
	constructor() {
		
	}

	run() {		
		new MoveTo(World.FriendlyRobotsById[2]).run(new Vector(0,0), 0);		
	}
}