const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const name = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;

    const selectedPlayersContainer = document.getElementById(
      "selected-players-container"
    );
    // disabled cart
    e.target.setAttribute("disabled", true);
    e.target.parentNode.style.backgroundColor = "gray";

    const countDown = getTargetValue("cart");
    if (countDown + 1 > 6) {
      alert("Your team is ready. You can't take more player");
      e.target.setAttribute("disabled", false);
      e.target.parentNode.style.backgroundColor = "#010313";
      return;
    }

    // budget, cart and remaining updated from here
    const budget = getTargetValue("budget");
    updateBudget = budget - parseInt(price);
    document.getElementById("budget").innerText = updateBudget;

    // cart update
    const cartUpdate = getTargetValue("cart");
    document.getElementById("cart").innerText = cartUpdate + 1;

    // Remaining Players
    const remainingPlayers = getTargetValue("remaining");
    document.getElementById("remaining").innerText = remainingPlayers - 1;

    // Create a div with the <p> to keep the player details
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
function updateGrandTotal(status) {
  const totalCost = getTargetValue("total-cost"); //grand total calculation here
  if (status == undefined) {
    //coupon code apply start here
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "Jihad") {
      const discountAmount = totalCost * 0.2; //20% discount
      document.getElementById("grand-total").innerText =
        totalCost - discountAmount;
    } else {
      console.log("Please Enter Valid Coupon Code"); // coupon code apply ends here
    }
  }
}

function getTargetValue(id) {
  const target = document.getElementById(id).innerText;
  const convertedTargetValue = parseInt(target);
  return convertedTargetValue;
}
