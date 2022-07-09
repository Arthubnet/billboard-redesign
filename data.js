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
    name: "Note For U(Remix)",
    path: "https://ytop1.com/ru/Thankyou?token=U2FsdGVkX1%2fE8pG4GkvKj56jU0vzSrMALLIIjPIS7QSVpkCn2RhluKO2UA3Q6pScgvM%2fwIBtjLldISlFtaRnSI3XFKZkYjm9YDW7kpNzD3wZsvLsy8n9DexAPV29Is34i02XVhVog2sKfYqDSyUCGIYTDVFF37WvYhRKkrWkZEG%2ffoXwTyveY6Z71qzM%2f721pxyaTrf7P7kumH%2b7qBpcaGpDiuU5Y6NiYkkkqUsKWxc%3d&s=youtube&id=&h=3789168762462316212",
    artist: "Anton Ishutin",
    duration: { time: "6:44", miliseconds: 385800 },
  },
  {
    id: 2,
    name: "Cypher Black",
    path: "https://ytop1.com/ru/Thankyou?token=U2FsdGVkX1%2fWLTWXnPKZ%2bqVhV%2bj4UBguPSDkIbBp69Gtp24iW7%2bmVPndmXDAst0Ulo2IGso1D9%2bePjvyqVCzTsZkbsH1WLOjieqcYUzubc6dyN4soFjOkhplu8kwt3sGpNTJv8zdjg17kLynwrElDfX7HFZDq0Bw80ixwompmZ8t%2boinqJsNXDvG2DGN6s7O&s=youtube&id=&h=3789168762462316205",
    artist: "FUSIK",
    duration: { time: "4:25", miliseconds: 255000 },
  },
  {
    id: 3,
    name: "About us",
    path: "https://ytop1.com/ru/Thankyou?token=U2FsdGVkX1%2fE8pG4GkvKj56jU0vzSrMALLIIjPIS7QSVpkCn2RhluKO2UA3Q6pScgvM%2fwIBtjLldISlFtaRnSI3XFKZkYjm9YDW7kpNzD3wZsvLsy8n9DexAPV29Is34i02XVhVog2sKfYqDSyUCGIYTDVFF37WvYhRKkrWkZEG%2ffoXwTyveY6Z71qzM%2f721pxyaTrf7P7kumH%2b7qBpcaGpDiuU5Y6NiYkkkqUsKWxc%3d&s=youtube&id=&h=3789168762462316212",
    artist: "Carolina Gaitan",
    duration: { time: "6:44", miliseconds: 385800 },
  },
  {
    id: 4,
    name: "Heat Waves",
    path: "https://ytop1.com/ru/Thankyou?token=U2FsdGVkX1%2fE8pG4GkvKj56jU0vzSrMALLIIjPIS7QSVpkCn2RhluKO2UA3Q6pScgvM%2fwIBtjLldISlFtaRnSI3XFKZkYjm9YDW7kpNzD3wZsvLsy8n9DexAPV29Is34i02XVhVog2sKfYqDSyUCGIYTDVFF37WvYhRKkrWkZEG%2ffoXwTyveY6Z71qzM%2f721pxyaTrf7P7kumH%2b7qBpcaGpDiuU5Y6NiYkkkqUsKWxc%3d&s=youtube&id=&h=3789168762462316212",
    artist: "Glass Animals",
    duration: { time: "6:44", miliseconds: 385800 },
  },
  {
    id: 5,
    name: "Super Gremlin",
    path: "https://ytop1.com/ru/Thankyou?token=U2FsdGVkX1%2fE8pG4GkvKj56jU0vzSrMALLIIjPIS7QSVpkCn2RhluKO2UA3Q6pScgvM%2fwIBtjLldISlFtaRnSI3XFKZkYjm9YDW7kpNzD3wZsvLsy8n9DexAPV29Is34i02XVhVog2sKfYqDSyUCGIYTDVFF37WvYhRKkrWkZEG%2ffoXwTyveY6Z71qzM%2f721pxyaTrf7P7kumH%2b7qBpcaGpDiuU5Y6NiYkkkqUsKWxc%3d&s=youtube&id=&h=3789168762462316212",
    artist: "Kodack Black",
    duration: { time: "6:44", miliseconds: 385800 },
  },
];

/* Videos */

let videosData = [
  {
    genre: "Video Top",
    title:
      "Ricky Martin on coming out as gay: 'I've been super happy ever since'",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_29/3396653/200713-ricky-martin-jm-1503.jpg",
  },
  {
    genre: "Video Top",
    title:
      "Global News Post Malone criticized for going ahead with concert despite coronavirus outbreak",
    img: "https://globalnews.ca/wp-content/uploads/2019/09/saint-tropez-post-malone-2.jpg?quality=85&strip=all",
  },
  {
    genre: "Video Top",
    title:
      "How Dua Lipa went from aspiring singer to one of today's top global female pop stars",
    img: "https://cae8b291f7a009bc3e401054-wceel7psqz6.netdna-ssl.com/wp-content/uploads/2016/12/Dua-Lipa.jpg?x40218",
  },
  {
    genre: "Video Top",
    title: "Keanu Reeves - latest news, breaking stories and comment",
    img: "https://static.independent.co.uk/2022/04/29/07/newFile.jpg?quality=50&width=640&auto=webp",
  },
  {
    genre: "Video Top",
    title: "Sade's Signature Beauty Is More Timeless Than Ever Before",
    img: "http://untitled-magazine.com/online/wp-content/uploads/2022/02/sade.jpg",
  },
  {
    genre: "Video Top",
    title: "Tany death: 22-year-old Korean singer dies in car crash",
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/16/12/tany-korea.jpg?quality=75&width=982&height=726&auto=webp",
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
