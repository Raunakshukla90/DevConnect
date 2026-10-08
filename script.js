const toggle = document.querySelector("#differences-toggle");
const rows = document.querySelectorAll("tbody tr");
const status = document.querySelector("#comparison-status");

function rowHasDifferences(row) {
  const cells = row.querySelectorAll("td");

  const values = Array.from(cells).map((cell) =>
    cell.textContent.trim().toLowerCase()
  );

  return new Set(values).size > 1;
}

function updateComparison() {
  let hiddenCount = 0;

  rows.forEach((row) => {
    const different = rowHasDifferences(row);

    if (toggle.checked && !different) {
      row.hidden = true;
      hiddenCount += 1;
    } else {
      row.hidden = false;
    }
  });

  if (toggle.checked) {
    const visibleCount = rows.length - hiddenCount;

    status.textContent =
      `${visibleCount} features with differences shown. ` +
      `${hiddenCount} matching features hidden.`;
  } else {
    status.textContent =
      `${rows.length} features shown.`;
  }
}

toggle.addEventListener("change", updateComparison);

