function isBipartite(graph) {
  let obj = {};
  console.log('hi');
  graph.forEach((g) => {
    let k = JSON.stringify(g);
    if (k in obj) {
      obj[k] = +1;
    } else {
      obj[k] = 1;
    }
  });
  let v = Object.keys(obj);
  console.log(obj);
  return v.length === 2 ? true : false;
}

console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ])
);
