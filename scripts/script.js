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
      tracks: [
        {
          name: "Kesari Nishan",
          artist: "Jass Bajwa",
          cover: "https://lq.djjohal.com/covers/728983/Kesari%20Nishan.jpg",
          source: "https://hd1.djjohal.com/320/514916/Kesari%20Nishan%20-%20Jass%20Bajwa%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=1Hv62gi-N1E",
          favorited: false
        },
        {
          name: "Daadi Ji - Dhan Dhan Mata Gujri Ji",
          artist: "Amar Sandhu",
          cover: "https://lq.djjohal.com/covers/728982/Daadi%20Ji%202.jpg",
          source: "https://hd1.djjohal.com/320/514915/Daadi%20Ji%202%20-%20Amar%20Sandhu%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=ck-IH-A6Y1w",
          favorited: false
        },
        {
          name: "Bajan Waleya",
          artist: "Jordan Sandhu",
          cover: "https://lq.djjohal.com/covers/728981/Bajan%20Waleya.jpg",
          source: "https://hd1.djjohal.com/320/514914/Bajan%20Waleya%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=HswqeDAEPOw",
          favorited: false
        },
        {
          name: "Wali Chaar Jahana Da",
          artist: "Dhadi Jatha Gurpreet Singh Landran Wale",
          cover: "https://lq.djjohal.com/covers/728979/Wali%20Chaar%20Jahana%20Da.jpg",
          source: "https://hd1.djjohal.com/320/514908/Wali%20Chaar%20Jahana%20Da%20-%20Dhadi%20Jatha%20Gurpreet%20Singh%20Landran%20Wale%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=mE9Dju3kaHo",
          favorited: false
        },
        {
          name: "Zameer Singha Di",
          artist: "Jagdeep Sangala",
          cover: "https://lq.djjohal.com/covers/728978/Zameer%20Singha%20Di.jpg",
          source: "https://hd1.djjohal.com/320/514907/Zameer%20Singha%20Di%20-%20Jagdeep%20Sangala%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=LmmOqXXUzyg",
          favorited: false
        },
        {
          name: "The Sikh Heritage",
          artist: "Sukhi Badrukhan",
          cover: "https://lq.djjohal.com/covers/728971/The%20Sikh%20Heritage.jpg",
          source: "https://hd1.djjohal.com/320/514900/The%20Sikh%20Heritage%20-%20Sukhi%20Badrukhan%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=zapO-xFkyzc",
          favorited: false
        },
        {
          name: "Daadi Maa",
          artist: "Palwinder Tohra",
          cover: "https://lq.djjohal.com/covers/728969/Daadi%20Maa.jpg",
          source: "https://hd1.djjohal.com/320/514893/Daadi%20Maa%20-%20Palwinder%20Tohra%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=_Zn8MtrMHM0",
          favorited: false
        },
        {
          name: "Parivar Vichora",
          artist: "Khazala",
          cover: "https://lq.djjohal.com/covers/728968/Parivar%20Vichora.jpg",
          source: "https://hd1.djjohal.com/320/514892/Parivar%20Vichora%20-%20Khazala%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=S4jvJ1B7018",
          favorited: false
        },
        {
          name: "Peer e Hind",
          artist: "Surinder Baba",
          cover: "https://lq.djjohal.com/covers/728967/Peer%20e%20Hind.jpg",
          source: "https://hd1.djjohal.com/320/514891/Peer%20e%20Hind%20-%20Surinder%20Baba%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=BKPiV0vMGDk",
          favorited: false
        },
        {
          name: "Baazan Wale De Puttar Ne",
          artist: "Tarsem Jassar",
          cover: "https://lq.djjohal.com/covers/728962/Baazan%20Wale%20De%20Puttar%20Ne.jpg",
          source: "https://hd1.djjohal.com/320/514882/Baazan%20Wale%20De%20Puttar%20Ne%20-%20Tarsem%20Jassar%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=269LNWNpkKY",
          favorited: false
        },
        {
          name: "True Talks",
          artist: "Jassa Dhillon",
          cover: "https://lq.djjohal.com/covers/728944/True%20Talks.jpg",
          source: "https://hd1.djjohal.com/320/514864/True%20Talks%20-%20Jassa%20Dhillon%20(DJJOhAL.Com).mp3",
          url: "https://www.youtube.com/watch?v=gqlajedOVC8",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
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
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
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
  }
});
