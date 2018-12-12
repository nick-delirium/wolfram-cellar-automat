const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);
const log = item => {
  console.log(item);
}

// adds 0 before num if its 1st or 2nd digit is empty
// i.e 1 => 001, 11 => 011
const fillZeros = (n, s) => {
  return "0".repeat(n - s.length) + s;
}

// apply ruleset to get next gen
const evolve = (arr, rules = parseInt(process.argv[2], 10)) => {
  let ruleSet = [];
  ruleSet = fillZeros(8, rules.toString(2))
    .split('')
    .reverse();
    
  ruleSet.map((item, i) => {
    ruleSet[i] = parseInt(item, 10);
  });

  const oldArr = [0, ...arr, 0];
  const newArr = [];

  oldArr.map((item, i) => {
    if (i > 0 && i < oldArr.length -1) {
      let str = '' + oldArr[i - 1] + item + oldArr[i + 1];
      for (let x = 7; x > -1; x -= 1) {
        if (str === fillZeros(3, x.toString(2))) {
          newArr.push(ruleSet[x]);
        }
      }
    }
  });
  return newArr;
}

const getConsoleSize = () => new Array(process.stdout.columns).fill(0);
const getEntryColumn = column => {
  column[Math.floor(column.length / 2)] = 1;
  return column;
}

const displayColumn = column => {
  const str = column.map(
    digit => parseInt(digit) === 1 ?
    '█' : ' '
  )
  .join("");
  log(str);
  return column;
}

const magic = column => 
  setTimeout(column => {
    compose(
      displayColumn,
      evolve,
      magic
    )(column)
  }, 10, column);
  

const start = () => 
  compose(
    getConsoleSize,
    getEntryColumn,
    magic
  )();

start();
