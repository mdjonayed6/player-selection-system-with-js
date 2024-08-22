const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const name = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;

    const selectedPlayersContainer = document.getElementById(
      "selected-players-container"
    );

    const div = document.createElement("div");
    div.classList.add("flex", "justify-around", "p-2");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedPlayersContainer.appendChild(div);
    updateTotalCost(price);
    updateGrandTotal();
  });
}

// calculate Total cost
function updateTotalCost(value) {
  const totalCost = getTargetValue("total-cost");
  const addPrice = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = addPrice;
}

// calculate grand total cost
function updateGrandTotal() {
  const totalCost = getTargetValue("total-cost");
  document.getElementById("grand-total").innerText = totalCost;
}

function getTargetValue(id) {
  const target = document.getElementById(id).innerText;
  const convertedTargetValue = parseInt(target);
  return convertedTargetValue;
}
