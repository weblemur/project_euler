var recursiveCache = {};

function latticePathsRecusive(w, h) {
  // Could use additional caching support to avoid re-calculating w:x h:y as w:y h:x
  if (w === 0 || h === 0)
    return 1;
  else if (recursiveCache[w] === undefined)
    recursiveCache[w] = {};
  
  if (recursiveCache[w][h] === undefined) {
    recursiveCache[w][h] = latticePathsRecusive(w-1, h) + latticePathsRecusive(w, h-1);
  }

    return recursiveCache[w][h]
}

function latticePathsIterative(w, h) {
  var pathTree = Array(w+1).fill(1),
      i;
  for (i=0; i<h; i++) {
    var prevNum = 1;

    pathTree = pathTree.map(function(val, index, tree) {
      if (index === 0)
        return val;
      else {
        prevNum = val + prevNum;
        return prevNum;
      }
    });
  }

  return pathTree[w];
}

function latticePaths(n) {
  var result = 1;

  for (var i=1; i<=n; i++)
    result = result * (n+i)/i;

  return result;
}