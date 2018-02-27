var Product= require('../models/products');

var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/logging');

var products= [
    new Product({
      imagePath: "https://images-na.ssl-images-amazon.com/images/I/51WwnFLRHmL.jpg",
      title: "Say you're sorry!",
      description: "In this thrilling series from Amazon Charts and Wall Street Journal bestselling author Melinda Leigh, former prosecutor Morgan Dane faces the most personal—and deadly—case of her lifetime.",
      price:5
    }),
    new Product({
      imagePath: "https://images-na.ssl-images-amazon.com/images/I/51MCZCTie1L._SY346_.jpg",
      title: "Her last goodbye!",
      description: "In this Wall Street Journal bestseller, the Morgan Dane series continues as the fearless attorney and her partner, investigator Lance Kruger, take on a disturbing disappearance…",
      price: 8
    }),
    new Product({
      imagePath: "https://images-na.ssl-images-amazon.com/images/I/51Tb4M37d1L.jpg",
      title: "BEWARE THE PAST",
      description: "A stunning new standalone crime thriller from #1 best-selling author Joy Ellis with a totally shocking conclusion. Discover the author everyone’s talking about.",
      price: 4.64
    }),
    new Product({
      imagePath: "https://images-na.ssl-images-amazon.com/images/I/61u%2Bad7l5HL._AA300_.jpg",
      title: "A Wrinkle in Time",
      description: "Madeleine L'Engle's groundbreaking science fiction and fantasy classic, soon to be a major motion picture. This movie tie-in audiobook includes an introduction read by director Ava DuVernay, a foreword read by the author, and an afterword read by Madeleine L'Engle's granddaughter Charlotte Jones Voiklis. ",
      price: 7.42
    }),
    new Product({
      imagePath: "https://images-na.ssl-images-amazon.com/images/I/51l4cGH59aL._AA300_.jpg",
      title: "Tin Can Titans",
      description: "The Heroic Men and Ships of World War II's Most Decorated Navy Destroyer Squadron ",
      price: 19.37
    })
];

var done=0;
for (let i = 0; i < products.length; i++) {
  products[i].save(function(err, result){
    done++;
    if(done== products.length) {
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
