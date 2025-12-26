// Track data for the music player
const tracks = [
  {
    name: "Sacrifices",
    artist: "Gurinder Gill",
    cover: "https://cover.djpunjab.is/58765/300x700/sacrifices-gurinder-gill.jpg",
    source: "https://s320.djpunjab.is/data/320/58765/309492/Sacrifices%20-%20Gurinder%20Gill.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Jung Culture",
    artist: "Jass Bajwa",
    cover: "https://cover.djpunjab.is/58764/300x700/jung-culture-jass-bajwa.jpg",
    source: "https://s320.djpunjab.is/data/320/58764/309491/Jung%20Culture%20-%20Jass%20Bajwa.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Dhan Aa Baaza Waleya",
    artist: "Pamma Dumewal",
    cover: "https://cover.djpunjab.is/58753/300x700/dhan-aa-baaza-waleya-pamma-dumewal.jpg",
    source: "https://s320.djpunjab.is/data/320/58753/309469/Dhan%20Aa%20Baaza%20Waleya%20-%20Pamma%20Dumewal.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Mera Rakha",
    artist: "Guri",
    cover: "https://cover.djpunjab.is/58750/300x700/mera-rakha-guri.jpg",
    source: "https://s320.djpunjab.is/data/320/58750/309466/Mera%20Rakha%20-%20Guri.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Mahabir Rass",
    artist: "Harvi",
    cover: "https://cover.djpunjab.is/58734/300x700/mahabir-rass-harvi.jpg",
    source: "https://s320.djpunjab.is/data/320/58734/309435/Mahabir%20Rass%20-%20Harvi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Klaa Warte",
    artist: "Manjit Singh Sohi",
    cover: "https://cover.djpunjab.is/58731/300x700/klaa-warte-manjit-singh-sohi.jpg",
    source: "https://s320.djpunjab.is/data/320/58731/309432/Klaa%20Warte%20-%20Manjit%20Singh%20Sohi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Baba Nanak",
    artist: "Deepak Dhillon",
    cover: "https://cover.djpunjab.is/58461/300x700/baba-nanak-deepak-dhillon.jpg",
    source: "https://s320.djpunjab.is/data/320/58461/309001/Baba%20Nanak%20-%20Deepak%20Dhillon.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Jittan",
    artist: "Gulab Sidhu",
    cover: "https://cover.djpunjab.is/58459/300x700/jittan-gulab-sidhu.jpg",
    source: "https://s320.djpunjab.is/data/320/58459/308999/Jittan%20-%20Gulab%20Sidhu.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Namaskar",
    artist: "Diljit Dosanjh",
    cover: "https://cover.djpunjab.is/58420/300x300/namaskar-diljit-dosanjh.jpg",
    source: "https://p320.djpunjab.is/data/320/58420/308933/Nanak%20Naam%20Rakhaya%20-%20Diljit%20Dosanjh.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Sees Di Aasees",
    artist: "Diljit Dosanjh",
    cover: "https://cover.djpunjab.is/58420/300x300/namaskar-diljit-dosanjh.jpg",
    source: "https://p320.djpunjab.is/data/320/58420/308931/Sees%20Di%20Aasees%20-%20Diljit%20Dosanjh.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Nanak Naam Mile Tan Jeevan",
    artist: "Nav Dolorain",
    cover: "https://cover.djpunjab.is/58451/300x700/nanak-naam-mile-tan-jeevan-nav-dolorain.jpg",
    source: "https://s320.djpunjab.is/data/320/58451/308991/Nanak%20Naam%20Mile%20Tan%20Jeevan%20-%20Nav%20Dolorain.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Nanak",
    artist: "Jyotica Tangri",
    cover: "https://cover.djpunjab.is/58445/300x700/nanak-jyotica-tangri.jpg",
    source: "https://s320.djpunjab.is/data/320/58445/308975/Nanak%20-%20Jyotica%20Tangri.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Guru Nanak",
    artist: "Karan Randhawa",
    cover: "https://cover.djpunjab.is/58440/300x700/guru-nanak-karan-randhawa.jpg",
    source: "https://s320.djpunjab.is/data/320/58440/308955/Guru%20Nanak%20-%20Karan%20Randhawa.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Nanak Nanak",
    artist: "Sargi",
    cover: "https://cover.djpunjab.is/58439/300x700/nanak-nanak-sargi-maan.jpg",
    source: "https://s320.djpunjab.is/data/320/58439/308954/Nanak%20Nanak%20-%20Sargi%20Maan.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Sochai Soch Na Hovaee",
    artist: "Shree Brar",
    cover: "https://cover.djpunjab.is/58432/300x700/sochai-soch-na-hovaee-shree-brar.jpg",
    source: "https://s320.djpunjab.is/data/320/58432/308943/Sochai%20Soch%20Na%20Hovaee%20-%20Shree%20Brar.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Karda Hai Pyaar Nanak",
    artist: "Baba Gulab Singh Ji",
    cover: "https://cover.djpunjab.is/58431/300x700/karda-hai-pyaar-nanak-baba-gulab-singh-ji.jpg",
    source: "https://s320.djpunjab.is/data/320/58431/308942/Karda%20Hai%20Pyaar%20Nanak%20-%20Baba%20Gulab%20Singh%20Ji.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Baba Nanak Ji",
    artist: "Tiger",
    cover: "https://cover.djpunjab.is/58428/300x700/baba-nanak-ji-tiger.jpg",
    source: "https://s320.djpunjab.is/data/320/58428/308939/Baba%20Nanak%20Ji%20-%20Tiger.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Lokaan De Rang",
    artist: "Baba Gulab Singh Ji",
    cover: "https://cover.djpunjab.is/58427/300x700/lokaan-de-rang-baba-gulab-singh-ji.jpg",
    source: "https://s320.djpunjab.is/data/320/58427/308938/Lokaan%20De%20Rang%20-%20Baba%20Gulab%20Singh%20Ji.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Rababiya",
    artist: "Jaggi Sandhu",
    cover: "https://cover.djpunjab.is/58426/300x700/rababiya-jaggi-sandhu.jpg",
    source: "https://s320.djpunjab.is/data/320/58426/308937/Rababiya%20-%20Jaggi%20Sandhu.mp3",
    playlist: "Sehaj"
  },
  {
    name: "The Khalsa",
    artist: "Flop Likhari",
    cover: "https://cover.djpunjab.is/58414/300x700/the-khalsa-flop-likhari.jpg",
    source: "https://s320.djpunjab.is/data/320/58414/308923/The%20Khalsa%20-%20Flop%20Likhari.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Baajan Wala",
    artist: "Mankirt Aulakh",
    cover: "https://cover.djpunjab.is/58389/300x700/baajan-wala-mankirt-aulakh.jpg",
    source: "https://s320.djpunjab.is/data/320/58389/308894/Baajan%20Wala%20-%20Mankirt%20Aulakh.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "The Real Anthem",
    artist: "Khazala",
    cover: "https://cover.djpunjab.is/58374/300x700/the-real-anthem-khazala.jpg",
    source: "https://s320.djpunjab.is/data/320/58374/308872/The%20Real%20Anthem%20-%20Khazala.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Hind Ki Chadar",
    artist: "Satinder Sartaaj",
    cover: "https://cover.djpunjab.is/58361/300x700/hind-ki-chadar-satinder-sartaaj.jpg",
    source: "https://s320.djpunjab.is/data/320/58361/308856/Hind%20Ki%20Chadar%20-%20Satinder%20Sartaaj.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Khanda 18 Sair",
    artist: "Manjit Singh Sohi",
    cover: "https://cover.djpunjab.is/58229/300x700/khanda-18-sair-manjit-singh-sohi.jpg",
    source: "https://s320.djpunjab.is/data/320/58229/308646/Khanda%2018%20Sair%20-%20Manjit%20Singh%20Sohi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Mard Agamda",
    artist: "Jazzy B",
    cover: "https://cover.djpunjab.is/58197/300x700/mard-agamda-jazzy-b.jpg",
    source: "https://s320.djpunjab.is/data/320/58197/308557/Mard%20Agamda%20-%20Jazzy%20B.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Yodhe Bukkde",
    artist: "Soba Singh Sitara",
    cover: "https://cover.djpunjab.is/58128/300x700/yodhe-bukkde-soba-singh-sitara.jpg",
    source: "https://s320.djpunjab.is/data/320/58128/308420/Yodhe%20Bukkde%20-%20Soba%20Singh%20Sitara.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Yodhe",
    artist: "Daljeet Chahal",
    cover: "https://cover.djpunjab.is/58012/300x700/jodhe-daljeet-chahal.jpg",
    source: "https://s320.djpunjab.is/data/320/58012/308205/Jodhe%20-%20Daljeet%20Chahal.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "ONE HISTORY",
    artist: "Babbar Brar",
    cover: "https://cover.djpunjab.is/57819/300x700/one-history-babbar-brar.jpg",
    source: "https://s320.djpunjab.is/data/320/57819/307904/ONE%20HISTORY%20-%20Babbar%20Brar.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "1984",
    artist: "Simiran Kaur Dhadli",
    cover: "https://cover.djpunjab.is/57537/300x700/1984-simiran-kaur-dhadli.jpg",
    source: "https://s320.djpunjab.is/data/320/57537/307457/1984%20-%20Simiran%20Kaur%20Dhadli.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Sarbloh De Neje",
    artist: "Manjit Singh Sohi",
    cover: "https://cover.djpunjab.is/57502/300x700/sarbloh-de-neje-manjit-singh-sohi.jpg",
    source: "https://s320.djpunjab.is/data/320/57502/307404/Sarbloh%20De%20Neje%20-%20Manjit%20Singh%20Sohi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Maut Nachdi",
    artist: "Soba Singh Sitara",
    cover: "https://cover.djpunjab.is/57359/300x700/maut-nachdi-soba-singh-sitara.jpg",
    source: "https://s320.djpunjab.is/data/320/57359/307186/Maut%20Nachdi%20-%20Soba%20Singh%20Sitara.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Maut Boldi",
    artist: "Manjit Singh Sohi",
    cover: "https://cover.djpunjab.is/56908/300x700/maut-boldi-manjit-singh-sohi.jpg",
    source: "https://s320.djpunjab.is/data/320/56908/306529/Maut%20Boldi%20-%20Manjit%20Singh%20Sohi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Amar Shaheed Baba Deep Singh Ji",
    artist: "Guri Lahoria",
    cover: "https://cover.djpunjab.is/56874/300x700/amar-shaheed-baba-deep-singh-ji-guri-lahoria.jpg",
    source: "https://s320.djpunjab.is/data/320/56874/306485/Amar%20Shaheed%20Baba%20Deep%20Singh%20Ji%20-%20Guri%20Lahoria.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Shukar Malka",
    artist: "Gulab Sidhu",
    cover: "https://cover.djpunjab.is/56782/300x700/shukar-malka-gulab-sidhu.jpg",
    source: "https://s320.djpunjab.is/data/320/56782/306347/Shukar%20Malka%20-%20Gulab%20Sidhu.mp3",
    playlist: "Sehaj"
  },
  {
    name: "Jujhar Aakhda",
    artist: "Daljeet Chahal",
    cover: "https://cover.djpunjab.is/56763/300x700/jujhar-aakhda-daljeet-chahal.jpg",
    source: "https://s320.djpunjab.is/data/320/56763/306328/Jujhar%20Aakhda%20-%20Daljeet%20Chahal.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Warriors",
    artist: "Ravinder Grewal",
    cover: "https://cover.djpunjab.is/56759/300x700/warriors-ravinder-grewal.jpg",
    source: "https://s320.djpunjab.is/data/320/56759/306324/Warriors%20-%20Ravinder%20Grewal.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Akaal",
    artist: "Kulbir Jhinjer",
    cover: "https://cover.djpunjab.is/56757/300x700/akaal-kulbir-jhinjer.jpg",
    source: "https://s320.djpunjab.is/data/320/56757/306322/Akaal%20-%20Kulbir%20Jhinjer.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Chamkaur Di Garhi",
    artist: "Jass Bajwa",
    cover: "https://cover.djpunjab.is/56755/300x700/chamkaur-di-garhi-jass-bajwa.jpg",
    source: "https://s320.djpunjab.is/data/320/56755/306320/Chamkaur%20Di%20Garhi%20-%20Jass%20Bajwa.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Kaal",
    artist: "Bukka Jatt",
    cover: "https://cover.djpunjab.is/56754/300x700/kaal-bukka-jatt.jpg",
    source: "https://s320.djpunjab.is/data/320/56754/306319/Kaal%20-%20Bukka%20Jatt.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Maa Gujri De Potey",
    artist: "Jazzy B",
    cover: "https://cover.djpunjab.is/56753/300x700/maa-gujri-de-potey-jazzy-b.jpg",
    source: "https://s320.djpunjab.is/data/320/56753/306318/Maa%20Gujri%20De%20Potey%20-%20Jazzy%20B.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Soorme Ahge Neh",
    artist: "Amar Sehmbi",
    cover: "https://cover.djpunjab.is/56740/300x700/soorme-ahge-neh-amar-sehmbi.jpg",
    source: "https://s320.djpunjab.is/data/320/56740/306302/Soorme%20Ahge%20Neh%20-%20Amar%20Sehmbi.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Baap C",
    artist: "Amar Sandhu",
    cover: "https://cover.djpunjab.is/56734/300x700/baap-c-amar-sandhu.jpg",
    source: "https://s320.djpunjab.is/data/320/56734/306296/Baap%20C%20-%20Amar%20Sandhu.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Kinne Sohne Lagde",
    artist: "Baba Gulab Singh Ji",
    cover: "https://cover.djpunjab.is/56731/300x700/kinne-sohne-lagde-baba-gulab-singh-ji.jpg",
    source: "https://s320.djpunjab.is/data/320/56731/306293/Kinne%20Sohne%20Lagde%20-%20Baba%20Gulab%20Singh%20Ji.mp3",
    playlist: "Sehaj"
  },


  {
    name: "Sher Singh",
    artist: "Amrit Maan",
    cover: "https://cover.djpunjab.is/53215/300x700/Sher-Singh-Amrit-Maan.jpg",
    source: "https://s320.djpunjab.is/data/320/53215/301380/Sher%20Singh%20-%20Amrit%20Maan.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Yodhey",
    artist: "Sukh Sandhu",
    cover: "https://cover.djpunjab.is/53214/300x700/Yodhey-Sukh-Sandhu.jpg",
    source: "https://s320.djpunjab.is/data/320/53214/301379/Yodhey%20-%20Sukh%20Sandhu.mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Vaar",
    artist: "Prem Dhillon",
    cover: "https://lq.djjohal.com/covers/729137/Vaar.jpg",
    source: "https://hd1.djjohal.com/320/515137/Vaar%20-%20Prem%20Dhillon%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  }, 
  {
    name: "Putt Dashmesh De",
    artist: "Ft. Jodha Husan",
    cover: "https://lq.djjohal.com/covers/729135/Putt%20Dashmesh%20De.jpg",
    source: "https://hd1.djjohal.com/320/515135/Putt%20Dashmesh%20De%20-%20Husan%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Sirhind Fateh",
    artist: "Gulab Sidhu",
    cover: "https://lq.djjohal.com/covers/729002/Sirhind%20Fateh.jpg",
    source: "https://hd1.djjohal.com/320/514937/Sirhind%20Fateh%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Ardaas",
    artist: "Kanwar Grewal & Harf Cheema",
    cover: "https://lq.djjohal.com/covers/729000/Ardaas.jpg",
    source: "https://hd1.djjohal.com/320/514933/Ardaas%20-%20Kanwar%20Grewal%20%20Harf%20Cheema%20(DJJOhAL.Com).mp3",
    playlist: "Sehaj"
  },
  {
    name: "Takkar",
    artist: "Himmat Sandhu",
    cover: "https://lq.djjohal.com/covers/728999/Takkar.jpg",
    source: "https://hd1.djjohal.com/320/514932/Takkar%20-%20Himmat%20Sandhu%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Sache Patshah",
    artist: "Kanwar Grewal",
    cover: "https://lq.djjohal.com/covers/728997/Sache%20Patshah.jpg",
    source: "https://hd1.djjohal.com/320/514930/Sache%20Patshah%20-%20Kanwar%20Grewal%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Martyrs",
    artist: "Nirvair Pannu",
    cover: "https://lq.djjohal.com/covers/728984/Martyrs.jpg",
    source: "https://hd1.djjohal.com/320/514917/Martyrs%20-%20Nirvair%20Pannu%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Babe",
    artist: "Ravinder Grewal",
    cover: "https://lq.djjohal.com/covers/728977/Babe.jpg",
    source: "https://hd1.djjohal.com/320/514906/Babe%20-%20Ravinder%20Grewal%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Waar",
    artist: "Amar Sehmbi",
    cover: "https://lq.djjohal.com/covers/728986/Waar.jpg",
    source: "https://hd1.djjohal.com/320/514919/Waar%20-%20Amar%20Sehmbi%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Putt Baajan Aale De",
    artist: "Romey Maan",
    cover: "https://lq.djjohal.com/covers/728985/Putt%20Baajan%20Aale%20De.jpg",
    source: "https://hd1.djjohal.com/320/514918/Putt%20Baajan%20Aale%20De%20-%20Romey%20Maan%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Jaikaara",
    artist: "Gulab Sidhu",
    cover: "https://lq.djjohal.com/covers/728993/Jaikaara.jpg",
    source: "https://hd1.djjohal.com/320/514926/Jaikaara%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Sheran De Putt",
    artist: "Sippy Gill",
    cover: "https://lq.djjohal.com/covers/728990/Sheran%20De%20Putt.jpg",
    source: "https://hd1.djjohal.com/320/514923/Sheran%20De%20Putt%20-%20Sippy%20Gill%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Veer Ras",
    artist: "Babbu Maan",
    cover: "https://lq.djjohal.com/covers/728992/Veer%20Ras.jpg",
    source: "https://hd1.djjohal.com/320/514925/Veer%20Ras%20-%20Babbu%20Maan%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Kesari Nishan",
    artist: "Jass Bajwa",
    cover: "https://lq.djjohal.com/covers/728983/Kesari%20Nishan.jpg",
    source: "https://hd1.djjohal.com/320/514916/Kesari%20Nishan%20-%20Jass%20Bajwa%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Daadi Ji - Dhan Dhan Mata Gujri Ji",
    artist: "Amar Sandhu",
    cover: "https://lq.djjohal.com/covers/728982/Daadi%20Ji%202.jpg",
    source: "https://hd1.djjohal.com/320/514915/Daadi%20Ji%202%20-%20Amar%20Sandhu%20(DJJOhAL.Com).mp3",
    playlist: "Sehaj"
  },
  {
    name: "Sikhi Da Mehal",
    artist: "Geeta Zaildar",
    cover: "https://lq.djjohal.com/covers/728963/Sikhi%20Da%20Mehal.jpg",
    source: "https://hd1.djjohal.com/320/514883/Sikhi%20Da%20Mehal%20-%20Geeta%20Zaildar%20(DJJOhAL.Com).mp3",
    playlist: "Sehaj"
  },
  {
    name: "Bajan Waleya",
    artist: "Jordan Sandhu",
    cover: "https://lq.djjohal.com/covers/728981/Bajan%20Waleya.jpg",
    source: "https://hd1.djjohal.com/320/514914/Bajan%20Waleya%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Wali Chaar Jahana Da",
    artist: "Dhadi Jatha Gurpreet Singh Landran Wale",
    cover: "https://lq.djjohal.com/covers/728979/Wali%20Chaar%20Jahana%20Da.jpg",
    source: "https://hd1.djjohal.com/320/514908/Wali%20Chaar%20Jahana%20Da%20-%20Dhadi%20Jatha%20Gurpreet%20Singh%20Landran%20Wale%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Zameer Singha Di",
    artist: "Jagdeep Sangala",
    cover: "https://lq.djjohal.com/covers/728978/Zameer%20Singha%20Di.jpg",
    source: "https://hd1.djjohal.com/320/514907/Zameer%20Singha%20Di%20-%20Jagdeep%20Sangala%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "The Sikh Heritage",
    artist: "Sukhi Badrukhan",
    cover: "https://lq.djjohal.com/covers/728971/The%20Sikh%20Heritage.jpg",
    source: "https://hd1.djjohal.com/320/514900/The%20Sikh%20Heritage%20-%20Sukhi%20Badrukhan%20(DJJOhAL.Com).mp3",
    playlist: "ChardiKala"
  },
  {
    name: "Daadi Maa",
    artist: "Palwinder Tohra",
    cover: "https://lq.djjohal.com/covers/728969/Daadi%20Maa.jpg",
    source: "https://hd1.djjohal.com/320/514893/Daadi%20Maa%20-%20Palwinder%20Tohra%20(DJJOhAL.Com).mp3",
    playlist: "Sehaj"
  },
  {
    name: "Parivar Vichora",
    artist: "Khazala",
    cover: "https://lq.djjohal.com/covers/728968/Parivar%20Vichora.jpg",
    source: "https://hd1.djjohal.com/320/514892/Parivar%20Vichora%20-%20Khazala%20(DJJOhAL.Com).mp3",
    playlist: "Sehaj"
  }
];

// Export the tracks array for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tracks;
} else if (typeof window !== 'undefined') {
  window.tracks = tracks;
}








