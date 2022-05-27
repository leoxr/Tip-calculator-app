const formTips = document.getElementById("formTips");
const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".field-tip");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const tipTotal = document.getElementById("tipTotal");
const custom = document.getElementById("custom");
const btnReset = document.getElementById("btnReset");
const error = document.querySelector(".error");

addEventListener("change", () => {
  if (bill.value >= 0 && people.value > 0) {
    let billValue = bill.value;
    let peopleValue = people.value;
    let customValue = custom.value;
    tipTotal.innerHTML = `${billValue}`;

    for (const tip of tips) {
      if (tip.checked) {
        let totalTips = billValue * (tip.value / 100);

        let amount = totalTips / peopleValue;

        tipTotal.innerHTML = `${totalTips.toFixed(2)}`;

        tipAmount.innerHTML = `${amount.toFixed(2)}`;
      }
      if (customValue > 0) {
        tip.disabled = true;
        tip.classList.add("custom-focus");
        let totalTipsCustom = billValue * (customValue / 100);
        let amountCustom = totalTipsCustom / peopleValue;
        tipTotal.innerHTML = `${totalTipsCustom.toFixed(2)}`;
        tipAmount.innerHTML = `${amountCustom.toFixed(2)}`;
      } else {
        tip.classList.remove("custom-focus");
        tip.disabled = false;
      }
    }
  }
  if (people.value <= 0) {
    people.classList.add("error-outline");
    people.classList.add("error-outline:focus");
    error.classList.remove("hidden");
  } else {
    people.classList.remove("error-outline");
    error.classList.add("hidden");
  }
});

btnReset.addEventListener("click", () => {
  formTips.reset();
  let billReset = (bill.value = 0);
  bill.innerHTML = `${billReset}`;
  tipAmount.innerHTML = `${billReset.toFixed(2)}`;
  tipTotal.innerHTML = `${billReset.toFixed(2)}`;
});
