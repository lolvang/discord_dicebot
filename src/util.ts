export function randint(min, max) {
  max = Math.floor(max);
  min = Math.floor(min);
  let rnd = Math.random();
  let res = Math.floor(rnd * (max - min + 1) + min);
  return res;
}

export function dice(n,s):[number,number[]]{
  let rolls = [];
  let sum = 0;
  for(let i = 0; i<n; ++i){
    let tmp = randint(1,s);
    sum += tmp;
    rolls.push(tmp);
  }
  return [sum,rolls];
}

export function obdice(n,s):[number,number[]] {
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

export function sobdice(n,s):[number,number[]]{  
  let m = (n-3)*4;
  let [sum, rolls] = obdice(3,s);
  rolls.push(m);
  return [sum+m, rolls];
}

export function mobdice(n,s):[number,number[]]{
  if(n>3){
    let m = n-3;
    let [osum, orolls] = obdice(3,s);
    let [msum, mrolls] = dice(m,s);
    return [osum+msum, orolls.concat(mrolls)];
  } else if(n<3){
    let m = Math.abs(n-3);
    let [osum, orolls] = obdice(3,s);
    let [msum, mrolls] = dice(m,s);
    osum -= msum;
    return [osum, orolls.concat(mrolls.map(x=>-x))];
  } else {
    return obdice(n,s);
  }
}

export function fobdice(n,s):[number, number[]]{
  let k = Math.floor((s+1)/2);
  let l = Math.ceil((s+1)/2);
  let m = l*(n-2) + k*2;
  let [psum, prolls] = obdice(2,s);
  let [nsum, nrolls] = obdice(2,s);
  return [m+psum-nsum, prolls.concat(nrolls.map(x=>-x))];
}