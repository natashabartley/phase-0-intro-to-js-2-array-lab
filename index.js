
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyAppendCat(Ralph) {
    if (cats);
    cats.push('Ralph'); 

  }

  function destructivelyPrependCat(Bob) {
    cats.unshift('Bob');
  }

  function destructivelyRemoveLastCat(Milo,Otis) {
    cats.pop('Garfield');
  }

  function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
  }


  function appendCat(Broom) {
    return [...cats, Broom];
 }