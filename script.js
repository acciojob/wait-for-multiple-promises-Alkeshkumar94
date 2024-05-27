//your JS code here. If required.
document.addEventListener("DOMContentLoaded", async function () {
  const output = document.getElementById("output");
  const loadingRow = document.getElementById("loading");

  // Function to create a promise that resolves after a random time between 1 and 3 seconds
  function createRandomPromise(index) {
    return new Promise((resolve) => {
      const randomTime = Math.random() * 2 + 1; // Time between 1 and 3 seconds
      setTimeout(() => {
        resolve({ index, time: randomTime.toFixed(3) });
      }, randomTime * 1000);
    });
  }

  // Create an array of three promises
  const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3)
  ];

  // Wait for all promises to resolve
  const results = await Promise.all(promises);

  // Calculate total time
  const totalTime = results.reduce((acc, curr) => acc + parseFloat(curr.time), 0).toFixed(3);

  // Remove loading row
  loadingRow.remove();

  // Populate the table with results
  results.forEach(result => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    cell1.textContent = `Promise ${result.index}`;
    cell2.textContent = result.time;

    row.appendChild(cell1);
    row.appendChild(cell2);
    output.appendChild(row);
  });

  // Add total time row
  const totalRow = document.createElement("tr");
  const totalCell1 = document.createElement("td");
  const totalCell2 = document.createElement("td");

  totalCell1.textContent = "Total";
  totalCell2.textContent = totalTime;

  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);
  output.appendChild(totalRow);
});
