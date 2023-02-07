console.log("test");

/* 
mit forEach auf Objekt zugreifen



*/


let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];
  
  console.log(myMusic);
  console.table(myMusic);
  
  // Alle artist
  console.log(myMusic.forEach(i => console.log(i.artist)));
  myMusic.forEach((i) => console.log(i.artist) )

  for ( let i in myMusic){
    if (myMusic[i].artist != 0) {
        console.log(myMusic[i].artist);
  }}


  // Alle title
myMusic.forEach((i) => console.log(i.title));

for ( let i in myMusic){
    if ( myMusic[i].title != (false)){
        console.log(myMusic[i].title);
    }
}


// Alle medium 
myMusic.forEach((i) => console.log(i.medium));


// Alle 3 Zusammen
myMusic.forEach((i) => 
//console.log(`${i.artist} <br> ${i.title}  <br> ${i.medium} `)

document.write(`${i.artist} <br> ${i.title}  <br> ${i.medium} <br> <br>`)
 )

 for (let i in myMusic){
    console.log(`${myMusic[i].artist} <br> ${myMusic[i].title}  <br> ${myMusic[i].medium} <br> <br>`)
    document.write(`${myMusic[i].artist} <br> ${myMusic[i].title}  <br> ${myMusic[i].medium} <br> <br>`)

 }