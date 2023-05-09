let btn = document.querySelector('.btn');
let quote = document.querySelector('.qoute');
let book = document.querySelector('.book');




let quotes = [{
    quote: "Satan well knows that all whom he can lead to neglect prayer and the searching of the Scriptures, will be overcome by his attacks.",
    book: "(Steps to Christ, p. 90)"
  },
  {
    quote: "The darkness of the evil one encloses those who neglect to pray.",
    book: "(Steps to Christ, p. 93)"
  },
  {
    quote: "The warfare against self is the greatest battle that was ever fought.",
    book: "(Messages to Young People, p. 130)"
  },
  {
    quote: "It is the love of self that destroys our peace.",
    book: "(Christ's Object Lessons, p. 166)"
  },
  {
    quote: "A character formed according to the divine likeness is the only treasure that we can take from this world to the next.",
    book: "(Christ's Object Lessons, p. 332)"
  },
  {
    quote: "Christ is waiting with longing desire for the manifestation of Himself in His church.",
    book: "(Christ's Object Lessons, p. 69)"
  },
  {
    quote: "The sanctification now gaining prominence in the religious world carries with it a spirit of self-exaltation and a disregard for the law of God that mark it as foreign to Bible Christianity.",
    book: "(The Great Controversy, p. 482)"
  },
  {
    quote: "Those who would share the benefits of the Saviour's mediation should permit nothing to interfere with their duty to perfect holiness in the fear of God.",
    book: "(The Great Controversy, p. 623)"
  },
  {
    quote: "The Saviour's promise to abide with us, to guide and comfort us, is not limited to any age or any race.",
    book: "(The Desire of Ages, p. 827)"
  },
  {
    quote: "In the matchless gift of His Son, God has encircled the whole world with an atmosphere of grace as real as the air which circulates around the globe.",
    book: "(The Desire of Ages, p. 317)"
  }, {
    quote: "Multitudes are asleep in sin, and the deceiver is working to keep them in this state.",
    book: "(The Great Controversy, p. 518)"
  },
  {
    quote: "Satan well knows that all whom he can lead to neglect prayer and the searching of the Scriptures, will be overcome by his attacks. Therefore he invents every possible device to engross the mind.",
    book: "(Steps to Christ, p. 90)"
  },
  {
    quote: "Many who profess to be Christians are sleeping. They need to be aroused to understand the perils and dangers of this time.",
    book: "(Testimonies for the Church, vol. 5, p. 455)"
  },
  {
    quote: "We are in the midst of an important work, and yet many are asleep.",
    book: "(Testimonies for the Church, vol. 2, p. 252)"
  },
  {
    quote: "The present is a time of overwhelming interest to all living. Rulers and statesmen, men who occupy positions of trust and authority, thinking men and women of all classes, have their attention fixed upon the events taking place about us. They are watching the strained, restless relations that exist among the nations. They observe the intensity that is taking possession of every earthly element, and they recognize that something great and decisive is about to take place--that the world is on the verge of a stupendous crisis. Angels are now restraining the winds of strife, that they may not blow until the world shall be warned of its coming doom; but a storm is gathering, ready to burst upon the earth, and when God shall bid His angels loose the winds, there will be such a scene of strife as no pen can picture.",
    book: "(Testimonies for the Church, vol. 6, p. 14)"
  },
  {
    quote: "The people of God are represented in the message to the Laodiceans as in a position of carnal security. They are at ease, believing themselves to be in an exalted condition of spiritual attainments. . . . Many who profess to be looking for the speedy coming of Christ are becoming careless and indifferent.",
    book: "(Testimonies for the Church, vol. 3, p. 253)"
  },
  {
    quote: "The sleeping saints must be aroused.",
    book: "(The Great Controversy, p. 636)"
  },
  {
    quote: "The church is asleep.",
    book: "(Testimonies for the Church, vol. 2, p. 594)"
  },
  {
    quote: "We are living in the perils of the last days, and Satan is working with all his cunning to take captive unwary souls. The world is asleep in the cradle of carnal security.",
    book: "(Testimonies for the Church, vol. 4, p. 556)"
  },
  {
    quote: "God's professed people are selfish and self-caring.... They are idolaters, and are worse, in the sight of God, than the heathen, graven-image worshippers who have had no knowledge of a better way.",
    book: "(Testimonies for the Church, vol. 2, p. 441)"
  }];




btn.addEventListener('click',function(){
  let random = Math.floor(Math.random()*quotes.length);
  quote.innerText = quotes[random].quote;
  book.innerText = quotes[random].book;
});
