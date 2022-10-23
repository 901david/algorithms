const knapSack = (
  items,
  capacity,
  n = items.length - 1,
  cache = Array.from({ length: n + 1 }, () => Array.from({ length: capacity }))
) => {
  if (cache[n][capacity] !== undefined) {
    console.log('Cached Value Used', cache[n][capacity]);
    return cache[n][capacity];
  }
  if (n === 0 || capacity === 0) results = 0;
  else if (items[n].weight > capacity)
    results = knapSack(items, capacity, n - 1, cache);
  else {
    const without = knapSack(items, capacity, n - 1, cache);
    const withAdded =
      items[n].value +
      knapSack(items, capacity - items[n].weight, n - 1, cache);
    results = Math.max(withAdded, without);
  }
  cache[n][capacity] = results;
  return results;
};

module.exports = knapSack;
