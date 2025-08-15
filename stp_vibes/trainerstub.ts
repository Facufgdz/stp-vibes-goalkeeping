import * as World from "base/world";
import { Halt } from "stp_vibes/plays/halt";
import { MoveCenter } from "stp_vibes/plays/movecenter";
import { KickOff } from "stp_vibes/plays/kickoff";


//import { Play } from "stp_vibes/plays/playstub"

let currentPlay = new Halt();

function redecide_play(): boolean {
	// Decide if you want to change your current play
	return true
}

export function main() {
	if (redecide_play()) {
		switch (World.RefereeState) {
			// Decide on play based on referee and world state
			case "Halt":{
				currentPlay = new Halt();
				break;
			}
			case "DirectOffensive":{
				currentPlay = new MoveCenter();
				break;
			}	
			case "KickoffOffensivePrepare":{
				currentPlay = new KickOff();
				break;
			}		
		}
	}
	currentPlay.run();
}
