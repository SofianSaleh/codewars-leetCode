function isBipartite(graph) {
  let obj = {};

  graph.forEach((g) => {
    let k = JSON.stringify(g);
    if (k in obj) {
      obj[k] = +1;
    } else {
      obj[k] = 1;
    }
  });
  let v = Object.keys(obj);

  return v.length === 2 ? true : false;
}

console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
// console.log(
//   isBipartite([
//     [1, 3],
//     [0, 2],
//     [1, 3],
//     [0, 2],
//   ])
// );
