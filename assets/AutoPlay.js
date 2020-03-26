class AutoPlay {
  run = function(player) {
    player.muted();
    player.play();
  };
}

export default AutoPlay;
