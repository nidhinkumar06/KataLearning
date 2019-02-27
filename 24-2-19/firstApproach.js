function goodVsEvil(good, evil){
  let goodSum = good.split(" ").map(Number).reduce((x, y) => {return x + y});
  let evilSum = evil.split(" ").map(Number).reduce((x, y) => {return x + y});
  let result;
  if (goodSum > evilSum) {
      result = "Battle Result: Good triumphs over Evil";
  } else if (goodSum < evilSum) {
      result = "Battle Result: Evil eradicates all trace of Good";
  } else {
      result = "Battle Result: No victor on this battle field";
  }
  return result;
}

goodVsEvil('1 1 1 1 1 10', '1 0 0 1 1 3');