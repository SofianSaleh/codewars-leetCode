function isBipartite(graph: number[][]): boolean {
  let obj = {};

  graph.forEach((g) => {
    let k = JSON.stringify(g);
    if (k in obj) {
      obj[k] = +1;
    } else {
      obj[k] = 1;
    }
  });
  console.log(obj);
  return false;
}
