// add solution here
var musicianString = ["John", "Paul", "George", "Ringo"];
var musicianInstrument = ["guitar", "guitar", "bass", "drums"];
function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push('${musicians[0]} plays ${instruments[0]}');
  }
  return arr;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  const arr=[];
  let i=0;
  while(facts.length > i) {
    arr.push('${facts[i]}!!!')
    i++
  }
  return arr;
}

function iLoveTheBeatles(x) {
  var array = [];
  do {
    x = array.push("I love the Beatles!");
    x++;
  } while (x < 15); {

  }
  return array;
}
