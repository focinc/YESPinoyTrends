function getFormattedDate() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date();
  return date.toLocaleDateString("en-US", options);
}

document.getElementById("date").textContent = getFormattedDate();
