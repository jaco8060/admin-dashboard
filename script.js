document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    var input = document.getElementById("searchInput").value;
    if (input.length === 0) {
      alert("Please enter some text");
      event.preventDefault(); // Prevent form from submitting
    }
    // Add any other conditions or logic here
  });
