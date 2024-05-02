let outter = null;
let run = function () {
  let inner = outter;
  let unused = function () {
    if (inner) console.log(`inner`);
  };
  outter = {
    logStr: new Array(1000000).join('x'),
  };
};

setInterval(run, 1000);
