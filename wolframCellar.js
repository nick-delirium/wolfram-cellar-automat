// adds 0 before num if its 1st or 2nd digit is empty
// i.e 1 => 001, 11 => 011
const fillZeros = (n, s) => {
  let zeros = '';
  for (let i = 0; i < n - s.length; i += 1) {
    zeros += '0';
  }
  const str = zeros + s;
  return str;
}

// apply ruleset to get next gen
const evolve = (arr, rules) => {
  let ruleSet = [];
  ruleSet = fillZeros(8, rules.toString(2))
    .split('')
    .reverse();
    
  ruleSet.map((item, i) => {
    ruleSet[i] = parseInt(item, 10);
  });

  const oldArr = [...arr];
  oldArr.unshift(0);
  oldArr.push(0);

  const newArr = [];
  oldArr.forEach((item, i) => {
    if (i > 0 && i < oldArr.length - 1) {
      let str = '' + oldArr[i - 1] + item + oldArr[i + 1];
      for (let x = 7; x > -1; x -= 1) {
        if (str === zeroFill(3, x.toString(2))) {
          newArr.push(ruleSet[x]);
        }
      }
    }
  });
  return newArr;
}

let map = new Array(process.stdout.columns).fill(0);
map[Math.floor(map.length / 2)] = 1;

function main() {
  let str = '';
  map.forEach((item) => {
    if (item === 1) {
      str += '█';
    } else {
      str += ' ';
    }
  });
  console.log(str);
  map = evolve(map, parseInt(process.argv[2], 10));

  setTimeout(() => {
    main();
  }, 50);
}

main();
