/* News*/

let freshData = [
  [
    {
      genre: "MUSIC",
      title:
        "‘The world’s perception of Ukraine has changed’ says singer from cult band Okean Elzy",
      img: "https://s1.ticketm.net/dam/a/44f/ef2a8f0b-ce68-40fb-9aa9-7823831f844f_92231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
      alt: "okean",
    },
    {
      genre: "MUSIC",
      title: "Kanye West Announces 'Donda 2' event in Miami this week",
      img: "https://phantom-marca.unidadeditorial.es/d4cdd2b4d0d957024a13d08e870d2ea1/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/19/16477259420275.jpg",
      alt: "kanye",
    },
  ],
  [
    {
      genre: "MUSIC",
      title:
        "Fox News Taylor Swift's new song 'Carolina' based on Delia Owens' novel 'Where the Crawdads Sing'",
      img: "https://api.time.com/wp-content/uploads/2019/04/taylor-swift-time-100-2019-082.jpg?quality=85&zoom=2",
      alt: "taylor",
    },
  ],

  [
    {
      genre: "MUSIC",
      title: "Shakira complains of harassment after split with Pique",
      img: "https://phantom-marca.unidadeditorial.es/aab8aaf75e1d4cea3253886d2f21e5c6/crop/0x0/828x466/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/14/16552316769449.jpg",
      alt: "shakira",
    },
    {
      genre: "MUSIC",
      title:
        "Legacy of Taste the CHINESE POP SINGERS making soundwaves in the west",
      img: "http://legacyoftaste.wpengine.com/wp-content/uploads/2017/05/maxresdefault-2.jpg",
      alt: "chinese",
    },
  ],
];

let weekData = [
  [
    {
      genre: "MUSIC",
      title:
        "Sanjeevani Bhelande to perform a live virtual concert this Sunday",
      img: "https://sl.sbs.com.au/public/image/file/f669fea1-434c-4b0a-9633-df2a71935466/crop/16x9",
      alt: "Sanjeevani",
    },
    {
      genre: "MUSIC",
      title:
        "Alyona Savranenko a.k.a. Alyona Alyona Is Paving the Way for Ukrainian Rap",
      img: "https://assets.vogue.com/photos/5cacfe055f16dc5ea444e75e/master/w_2560%2Cc_limit/00-social-alyona.jpg",
      alt: "alyona",
    },
  ],
  [
    {
      genre: "MUSIC",
      title:
        "Business Insider How Singer Pink Makes and Spends Her $110 Million Fortune",
      img: "https://cdn.britannica.com/78/204578-050-70DF0CC4/Pink-2018.jpg",
      alt: "pink",
    },
  ],

  [
    {
      genre: "MUSIC",
      title: "List of awards and nominations received by Armin van Buuren",
      img: "https://s3.eu-central-1.amazonaws.com/armadafuga/uploads/artist/_1200x630_crop_center-center_82_none/artist-armin-van-buuren.jpg?mtime=1592812110",
      alt: "armin",
    },
    {
      genre: "MUSIC",
      title:
        "Carlos Santana to address UCLA Herb Alpert School of Music graduates",
      img: "https://mavenprodcontenthobv2.blob.core.windows.net/media/houseofblues_lav/ImageGalleryWidget/SantanaPromo/image1_Santana.jpg",
      alt: "santana",
    },
  ],
];

/* Music */

let songsData = [
  {
    id: 1,
    name: "Brat",
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19peQ2nMaPXFYGqm5fa8xmjBwEPCXFYKwAc02I82oW06fSk0o0Mk41NTYLRu%2fzedzLaoob9J2WYTGmklMX8FYRut76%2fLo7SvJp2gJxnRwHeWqQjoxNLIFYY&s=youtube&id=&h=844019832527451704",
    artist: "LeanJe",
    duration: "2:56",
    cover:
      "https://images.genius.com/39a9ee0ff3383b420394105dea72858b.1000x1000x1.jpg",
  },
  {
    id: 2,
    name: "Anumati",
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2brPCXEMHtc%2bwGr%2fkKvaARPiWsYvRCbv6B7wDUecTaSx8W2q1Je%2bnNc8EmoiTPjW0aK0etq6fgF8GpUxtCLxuKCHQft1tKE7SpwCuKw1iQ3GcLeCZZSK%2f45KOLBRP1AJqS8Bu0FGnu23KDzDDnmQwX9hTHwEGDxQZRCprCqpToE1KFLJa76PXGJupr2ckfKFHLvxis4lVdfSNzUx%2bherZTiTSPbDBrNHgtDBT1h1YtwuAzCRenm01FM%2fiFYBngwrbqastJV6enPrg%3d%3d&s=youtube&id=&h=844019832527452011",
    artist: "Jo Blankenburg",
    duration: "9:02",
    cover:
      "https://i.ytimg.com/vi/zY6fTKEh9m4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA502oT7WC2TbCja33gv6N17HPfqw",
  },
  {
    id: 3,
    name: "Marooned",
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX18sXfdWhtNOmakF5iJ6VzfxvEsrqZQgJvY1XXbDlnGuxWJjmCOigCZGGu5UINvnvjPUO8GprfSFEXFnFD5Sf9DJwJ%2fCxCvREgFKvFLbx%2fTlswqx%2bzJRRTkDJneJI8OyrJIf7Wn%2bnHjRfOwepSvu%2brAd0tdOwxtmPXwKfvcEiOyQmG4ZEDOgy8ox&s=youtube&id=&h=844019832527452011",
    artist: "Pink Floyd",
    duration: "5:25",
    cover:
      "https://www.cnet.com/a/img/resize/d4795b4a414ac5e4543cf6768f477336c99a9c41/2021/10/18/e7dc3a2c-0e1f-4bbd-9ffa-51409f592633/floydmars.jpg?auto=webp",
  },
  {
    id: 4,
    name: "Sun Is Shining(Remix)",
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2be59DOjqaIapFZEjSeohGerdaYt38SaH1DjVnkSH2c0rflU6Yc%2bckFCOE%2fG3J8YVtjxALu20DetPijzxTD3ztECBOeVkeibcRiP67mSkZY0q99qjEAJmfqdSmcAbEHe1kgFEEayBmKcyFnJKoGIHbLZAGmIibVUXo%3d&s=youtube&id=&h=844019832527451710",
    artist: "Bob Marley",
    duration: "7:29",
    cover:
      "https://2.bp.blogspot.com/-gf_cbHxPwXk/UuNWput61VI/AAAAAAAABoo/ns2Sb0ufl1w/s1600/bob-marley.jpg",
  },
  {
    id: 5,
    name: "Krasota",
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19vqdf%2fCyVOD1nhGP7uMyPuBHOYOrPhOHt3aRw7WXaXvLHMXruiazfkdf2OIY4gINKK3Uji%2f7gOmPcdmG1s529ME3Yz%2f6THy3G4PfY5rK%2f8y7P%2b303UXHC9&s=youtube&id=&h=844019832527451705",
    artist: "Chaykovskaya",
    duration: "4:14",
    cover:
      "https://lastfm.freetls.fastly.net/i/u/avatar170s/cf42b9f1ee9a203818a64357ba5b2b1c",
  },
];

/* Videos */

let videosData = [
  {
    id: 100,
    genre: "Video Top",
    title:
      "Leon The Professional New York City Jean Reno Movie Art Huge Print Poster",
    img: "https://ae01.alicdn.com/kf/HTB1k4M0NXXXXXcyaXXXq6xXFXXXS/Leon-The-Professional-New-York-City-Jean-Reno-Movie-Art-Huge-Print-Poster-TXHOME-D6170.jpg",
    path: "https://www.youtube.com/embed/QK-Z1K67uaA",
  },
  {
    id: 101,
    genre: "Video Top",
    title: "Bird's Teardrops || Estas Tonne feat. Peia || Ashland, Oregon",
    img: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/estas-tonne-no8-fei-a.jpg",
    path: "https://www.youtube.com/embed/hn10okvX19E",
  },
  {
    id: 102,
    genre: "Video Top",
    title: "Song of the Day: Jezebel by Sade, Live",
    img: "http://untitled-magazine.com/online/wp-content/uploads/2022/02/sade.jpg",
    path: "https://www.youtube.com/embed/yK3IlV3l9xY",
  },

  {
    id: 103,
    genre: "Video Top",
    title: "Eternal Eclipse - Yearning Hearts (Official Music Video)",
    img: "https://i.ytimg.com/vi/pMIb9HRKJJQ/maxresdefault.jpg",
    path: "https://www.youtube.com/embed/sJMc6EpHPHI",
  },
  {
    id: 104,
    genre: "Video Top",
    title:
      "Listen to In Me(azi version) by Izzamuzzic in Izzamusic playlist online'",
    img: "https://i1.sndcdn.com/artworks-000246135340-ub19jf-t500x500.jpg",
    path: "https://www.youtube.com/embed/ftIhTuro_wg",
  },
];

/* Bands */

let bandsData = [
  {
    id: "hu",
    title: "The Hu return with This Is Mongol single and spectacular video",
    author: "Andrey Coy",
    time: "5 hours ago",
    img: "https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/45e8cb4f-cf8b-4047-98db-791110e45cef.jpg",
  },
  {
    id: "metallica",
    title: `METALLICA Releases "Fight Fire With Fire" Live In Brazil`,
    author: "Henry Gray",
    time: "10 hours ago",
    img: "https://cdn-img.scalabs.com.au/yK7DeI7lMr4J3UPG0asysrNuGix3Qy5su7kRLMnmM_I/aHR0cHM6Ly9zdy10/cmlwbGVtLXByZC5z/Y2FkaWdpdGFsLmlv/L21lZGlhLzQxNzk5/L2phbWVzLWhldGZp/ZWxkLmpwZz9wcmVz/ZXQ9TWFpbkltYWdl",
  },
  {
    id: "soad",
    title: `System Of A Down: “As long as we’re on the same page, we'll play"`,
    author: "Hannah Dailey",
    time: "3 hours ago",
    img: "https://cdn.mos.cms.futurecdn.net/pHLyg8XNqe6zzxShC3EvDd-1200-80.jpg",
  },
];

/* More News */

let moreNewsData = [
  {
    name: "Sriya",
    genre: "Music",
    title:
      "Sriya as a K-pop idol is no fluke. A well-oiled industry is hunting for Indian stars",
    img: "https://static.theprint.in/wp-content/uploads/2022/06/K-Pop-copy.jpg?compress=true&quality=80&w=800&dpr=1.0",
  },
  {
    name: "Bred Pitt",
    genre: "TV/FILM",
    title:
      "'Who did the body?' Brad Pitt's GQ magazine cover is 'very upsetting' to some people",
    img: "https://static.foxnews.com/foxnews.com/content/uploads/2019/09/brad-pitt-ad-astra-tokyo-getty.jpg",
  },
  {
    name: "Nayeon",
    genre: "Music",
    title:
      "TWICE’s Nayeon Is the Perfect ‘Pop!’ Star With Debut Solo Album: Listen",
    img: "https://www.billboard.com/wp-content/uploads/2022/05/nayeon-twice-2022-press-billboard-1548.png?w=910&h=511&crop=1&resize=681%2C383",
  },
];
