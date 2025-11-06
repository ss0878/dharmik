new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: tracks,
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
      showPlaylist: false
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'playing';
        }
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'paused';
        }
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;

      // Update media session position state for mobile devices
      if ('mediaSession' in navigator && this.audio.duration) {
        navigator.mediaSession.setPositionState({
          duration: this.audio.duration,
          playbackRate: this.audio.playbackRate,
          position: this.audio.currentTime
        });
      }
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      this.updateMediaSession();
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    togglePlaylist() {
      this.showPlaylist = !this.showPlaylist;
    },
    selectTrack(index) {
      this.currentTrackIndex = index;
      this.currentTrack = this.tracks[index];
      this.resetPlayer();
      this.play();
    },
    updateMediaSession() {
      if ('mediaSession' in navigator) {
        const track = this.currentTrack;
        navigator.mediaSession.metadata = new MediaMetadata({
          title: track.name,
          artist: track.artist,
          album: '',
          artwork: [
            { src: track.cover, sizes: '96x96', type: 'image/png' },
            { src: track.cover, sizes: '128x128', type: 'image/png' },
            { src: track.cover, sizes: '192x192', type: 'image/png' },
            { src: track.cover, sizes: '256x256', type: 'image/png' },
            { src: track.cover, sizes: '384x384', type: 'image/png' },
            { src: track.cover, sizes: '512x512', type: 'image/png' }
          ]
        });
      }
    },
    setupMediaControls() {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => {
          this.play();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          this.play();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          this.prevTrack();
        });
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          this.nextTrack();
        });
        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
          const skipTime = details.seekOffset || 10;
          this.audio.currentTime = Math.max(this.audio.currentTime - skipTime, 0);
        });
        navigator.mediaSession.setActionHandler('seekforward', (details) => {
          const skipTime = details.seekOffset || 10;
          this.audio.currentTime = Math.min(this.audio.currentTime + skipTime, this.audio.duration);
        });
      }
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }

    // Setup media session controls for mobile devices
    this.setupMediaControls();
    this.updateMediaSession();
  }
});
