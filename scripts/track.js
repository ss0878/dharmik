// Track data for the music player
const tracks = [
  {
    name: "Namaskar",
    artist: "Diljit Dosanjh",
    cover: "https://cover.djpunjab.is/58420/300x300/namaskar-diljit-dosanjh.jpg",
    source: "https://p320.djpunjab.is/data/320/58420/308933/Nanak%20Naam%20Rakhaya%20-%20Diljit%20Dosanjh.mp3"
  },
  {
    name: "Sees Di Aasees",
    artist: "Diljit Dosanjh",
    cover: "https://cover.djpunjab.is/58420/300x300/namaskar-diljit-dosanjh.jpg",
    source: "https://p320.djpunjab.is/data/320/58420/308931/Sees%20Di%20Aasees%20-%20Diljit%20Dosanjh.mp3"
  },
  {
    name: "Nanak Naam Mile Tan Jeevan",
    artist: "Nav Dolorain",
    cover: "https://cover.djpunjab.is/58451/300x700/nanak-naam-mile-tan-jeevan-nav-dolorain.jpg",
    source: "https://s320.djpunjab.is/data/320/58451/308991/Nanak%20Naam%20Mile%20Tan%20Jeevan%20-%20Nav%20Dolorain.mp3"
  },
  {
    name: "Nanak",
    artist: "Jyotica Tangri",
    cover: "https://cover.djpunjab.is/58445/300x700/nanak-jyotica-tangri.jpg",
    source: "https://s320.djpunjab.is/data/320/58445/308975/Nanak%20-%20Jyotica%20Tangri.mp3"
  },
  {
    name: "Guru Nanak",
    artist: "Karan Randhawa",
    cover: "https://cover.djpunjab.is/58440/300x700/guru-nanak-karan-randhawa.jpg",
    source: "https://s320.djpunjab.is/data/320/58440/308955/Guru%20Nanak%20-%20Karan%20Randhawa.mp3"
  },
  {
    name: "Nanak Nanak",
    artist: "Sargi",
    cover: "https://cover.djpunjab.is/58439/300x700/nanak-nanak-sargi-maan.jpg",
    source: "https://s320.djpunjab.is/data/320/58439/308954/Nanak%20Nanak%20-%20Sargi%20Maan.mp3"
  },
  {
    name: "Sochai Soch Na Hovaee",
    artist: "Shree Brar",
    cover: "https://cover.djpunjab.is/58432/300x700/sochai-soch-na-hovaee-shree-brar.jpg",
    source: "https://s320.djpunjab.is/data/320/58432/308943/Sochai%20Soch%20Na%20Hovaee%20-%20Shree%20Brar.mp3"
  },
  {
    name: "Karda Hai Pyaar Nanak",
    artist: "Baba Gulab Singh Ji",
    cover: "https://cover.djpunjab.is/58431/300x700/karda-hai-pyaar-nanak-baba-gulab-singh-ji.jpg",
    source: "https://s320.djpunjab.is/data/320/58431/308942/Karda%20Hai%20Pyaar%20Nanak%20-%20Baba%20Gulab%20Singh%20Ji.mp3"
  },
  {
    name: "Baba Nanak Ji",
    artist: "Tiger",
    cover: "https://cover.djpunjab.is/58428/300x700/baba-nanak-ji-tiger.jpg",
    source: "https://s320.djpunjab.is/data/320/58428/308939/Baba%20Nanak%20Ji%20-%20Tiger.mp3"
  },
  {
    name: "Lokaan De Rang",
    artist: "Baba Gulab Singh Ji",
    cover: "https://cover.djpunjab.is/58427/300x700/lokaan-de-rang-baba-gulab-singh-ji.jpg",
    source: "https://s320.djpunjab.is/data/320/58427/308938/Lokaan%20De%20Rang%20-%20Baba%20Gulab%20Singh%20Ji.mp3"
  },
  {
    name: "Rababiya",
    artist: "Jaggi Sandhu",
    cover: "https://cover.djpunjab.is/58426/300x700/rababiya-jaggi-sandhu.jpg",
    source: "https://s320.djpunjab.is/data/320/58426/308937/Rababiya%20-%20Jaggi%20Sandhu.mp3"
  },
  {
    name: "Sher Singh",
    artist: "Amrit Maan",
    cover: "https://cover.djpunjab.is/53215/300x700/Sher-Singh-Amrit-Maan.jpg",
    source: "https://s320.djpunjab.is/data/320/53215/301380/Sher%20Singh%20-%20Amrit%20Maan.mp3"
  },
  {
    name: "Yodhey",
    artist: "Sukh Sandhu",
    cover: "https://cover.djpunjab.is/53214/300x700/Yodhey-Sukh-Sandhu.jpg",
    source: "https://s320.djpunjab.is/data/320/53214/301379/Yodhey%20-%20Sukh%20Sandhu.mp3"
  },
  {
    name: "Vaar",
    artist: "Prem Dhillon",
    cover: "https://lq.djjohal.com/covers/729137/Vaar.jpg",
    source: "https://hd1.djjohal.com/320/515137/Vaar%20-%20Prem%20Dhillon%20(DJJOhAL.Com).mp3"
  }, 
  {
    name: "Putt Dashmesh De",
    artist: "Ft. Jodha Husan",
    cover: "https://lq.djjohal.com/covers/729135/Putt%20Dashmesh%20De.jpg",
    source: "https://hd1.djjohal.com/320/515135/Putt%20Dashmesh%20De%20-%20Husan%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Sirhind Fateh",
    artist: "Gulab Sidhu",
    cover: "https://lq.djjohal.com/covers/729002/Sirhind%20Fateh.jpg",
    source: "https://hd1.djjohal.com/320/514937/Sirhind%20Fateh%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Ardaas",
    artist: "Kanwar Grewal & Harf Cheema",
    cover: "https://lq.djjohal.com/covers/729000/Ardaas.jpg",
    source: "https://hd1.djjohal.com/320/514933/Ardaas%20-%20Kanwar%20Grewal%20%20Harf%20Cheema%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Takkar",
    artist: "Himmat Sandhu",
    cover: "https://lq.djjohal.com/covers/728999/Takkar.jpg",
    source: "https://hd1.djjohal.com/320/514932/Takkar%20-%20Himmat%20Sandhu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Sache Patshah",
    artist: "Kanwar Grewal",
    cover: "https://lq.djjohal.com/covers/728997/Sache%20Patshah.jpg",
    source: "https://hd1.djjohal.com/320/514930/Sache%20Patshah%20-%20Kanwar%20Grewal%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Martyrs",
    artist: "Nirvair Pannu",
    cover: "https://lq.djjohal.com/covers/728984/Martyrs.jpg",
    source: "https://hd1.djjohal.com/320/514917/Martyrs%20-%20Nirvair%20Pannu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Babe",
    artist: "Ravinder Grewal",
    cover: "https://lq.djjohal.com/covers/728977/Babe.jpg",
    source: "https://hd1.djjohal.com/320/514906/Babe%20-%20Ravinder%20Grewal%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Waar",
    artist: "Amar Sehmbi",
    cover: "https://lq.djjohal.com/covers/728986/Waar.jpg",
    source: "https://hd1.djjohal.com/320/514919/Waar%20-%20Amar%20Sehmbi%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Putt Baajan Aale De",
    artist: "Romey Maan",
    cover: "https://lq.djjohal.com/covers/728985/Putt%20Baajan%20Aale%20De.jpg",
    source: "https://hd1.djjohal.com/320/514918/Putt%20Baajan%20Aale%20De%20-%20Romey%20Maan%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Jaikaara",
    artist: "Gulab Sidhu",
    cover: "https://lq.djjohal.com/covers/728993/Jaikaara.jpg",
    source: "https://hd1.djjohal.com/320/514926/Jaikaara%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Sheran De Putt",
    artist: "Sippy Gill",
    cover: "https://lq.djjohal.com/covers/728990/Sheran%20De%20Putt.jpg",
    source: "https://hd1.djjohal.com/320/514923/Sheran%20De%20Putt%20-%20Sippy%20Gill%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Veer Ras",
    artist: "Babbu Maan",
    cover: "https://lq.djjohal.com/covers/728992/Veer%20Ras.jpg",
    source: "https://hd1.djjohal.com/320/514925/Veer%20Ras%20-%20Babbu%20Maan%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Kesari Nishan",
    artist: "Jass Bajwa",
    cover: "https://lq.djjohal.com/covers/728983/Kesari%20Nishan.jpg",
    source: "https://hd1.djjohal.com/320/514916/Kesari%20Nishan%20-%20Jass%20Bajwa%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Daadi Ji - Dhan Dhan Mata Gujri Ji",
    artist: "Amar Sandhu",
    cover: "https://lq.djjohal.com/covers/728982/Daadi%20Ji%202.jpg",
    source: "https://hd1.djjohal.com/320/514915/Daadi%20Ji%202%20-%20Amar%20Sandhu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Sikhi Da Mehal",
    artist: "Geeta Zaildar",
    cover: "https://lq.djjohal.com/covers/728963/Sikhi%20Da%20Mehal.jpg",
    source: "https://hd1.djjohal.com/320/514883/Sikhi%20Da%20Mehal%20-%20Geeta%20Zaildar%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Bajan Waleya",
    artist: "Jordan Sandhu",
    cover: "https://lq.djjohal.com/covers/728981/Bajan%20Waleya.jpg",
    source: "https://hd1.djjohal.com/320/514914/Bajan%20Waleya%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Wali Chaar Jahana Da",
    artist: "Dhadi Jatha Gurpreet Singh Landran Wale",
    cover: "https://lq.djjohal.com/covers/728979/Wali%20Chaar%20Jahana%20Da.jpg",
    source: "https://hd1.djjohal.com/320/514908/Wali%20Chaar%20Jahana%20Da%20-%20Dhadi%20Jatha%20Gurpreet%20Singh%20Landran%20Wale%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Zameer Singha Di",
    artist: "Jagdeep Sangala",
    cover: "https://lq.djjohal.com/covers/728978/Zameer%20Singha%20Di.jpg",
    source: "https://hd1.djjohal.com/320/514907/Zameer%20Singha%20Di%20-%20Jagdeep%20Sangala%20(DJJOhAL.Com).mp3"
  },
  {
    name: "The Sikh Heritage",
    artist: "Sukhi Badrukhan",
    cover: "https://lq.djjohal.com/covers/728971/The%20Sikh%20Heritage.jpg",
    source: "https://hd1.djjohal.com/320/514900/The%20Sikh%20Heritage%20-%20Sukhi%20Badrukhan%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Daadi Maa",
    artist: "Palwinder Tohra",
    cover: "https://lq.djjohal.com/covers/728969/Daadi%20Maa.jpg",
    source: "https://hd1.djjohal.com/320/514893/Daadi%20Maa%20-%20Palwinder%20Tohra%20(DJJOhAL.Com).mp3"
  },
  {
    name: "Parivar Vichora",
    artist: "Khazala",
    cover: "https://lq.djjohal.com/covers/728968/Parivar%20Vichora.jpg",
    source: "https://hd1.djjohal.com/320/514892/Parivar%20Vichora%20-%20Khazala%20(DJJOhAL.Com).mp3"
  }
];

// Export the tracks array for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tracks;
} else if (typeof window !== 'undefined') {
  window.tracks = tracks;
}

