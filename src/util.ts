export function randint(min, max) {
  max = Math.floor(max);
  min = Math.floor(min);
  let rnd = Math.random();
  let res = Math.floor(rnd * (max - min + 1) + min);
  return res;
}

export function dice(n,s){
  let rolls = [];
  let sum = 0;
  for(let i = 0; i<n; ++i){
    sum += randint(0,s);
  }
  return [sum,rolls];
}

export function obdice(n,s) {
  var rolls = []
  let obd_aux = () => {
    let x = randint(1, s);
    rolls.push(x);
    if (x === s) {
      return obd_aux() + obd_aux();
    } else {
      return x;
    }
  }
  var sum = 0;
  for (let i = 0; i < n; ++i) {
    sum += obd_aux();
  }
  return [sum, rolls];
}