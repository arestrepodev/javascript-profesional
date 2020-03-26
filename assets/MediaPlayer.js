class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.paused = true;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }

  _initPlugins = function() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  };

  play = function() {
    this.media.play();
  };

  pause = function() {
    this.media.pause();
  };

  muted = function() {
    this.media.muted = true;
  };

  unmuted = function() {
    this.media.muted = false;
  };

  togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };
}

export default MediaPlayer;
