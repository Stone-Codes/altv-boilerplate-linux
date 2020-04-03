import {on, Player, emitClient} from "alt-server";

on("playerConnect", (player: Player) => {
  player.model = "mp_m_freemode_01";
  player.spawn(813, -279, 66, 1000);
  emitClient(player, "greet_player_console");
  emitClient(player, "greet_player_cef");

});
