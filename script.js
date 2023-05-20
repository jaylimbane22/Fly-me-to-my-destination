function minPlanes(fuelArray) {
  const n = fuelArray.length;
  const INF = Number.MAX_SAFE_INTEGER;
  
  // Create a distance array to store the minimum fuel required to reach each airport
  const distance = new Array(n).fill(INF);
  
  // Set the initial fuel at the first airport to 0
  distance[0] = 0;
  
  // Iterate over each airport
  for (let i = 0; i < n; i++) {
    // Iterate over the reachable airports from the current airport
    for (let j = i + 1; j <= i + fuelArray[i] && j < n; j++) {
      // Update the minimum fuel required to reach the next airport
      distance[j] = Math.min(distance[j], distance[i] + 1);
    }
  }
  
  return distance[n - 1] === INF ? -1 : distance[n - 1];
}

// Example usage
const fuelArray1 = [2, 1, 2, 3, 1];
const result1 = minPlanes(fuelArray1);
console.log(result1); // Output: 2

const fuelArray2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
const result2 = minPlanes(fuelArray2);
console.log(result2); // Output: 3
