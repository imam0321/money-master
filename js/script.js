document
  .getElementById("btn-calculate-income")
  .addEventListener("click", function calculate() {
    const incomeValue = getInputValues("income-input-field");
    const foodValue = getInputValues("food-input-field");
    const rentValue = getInputValues("rent-input-field");
    const clothesValue = getInputValues("clothes-input-field");
    const expensesTotal = foodValue + rentValue + clothesValue;
    const totalExpense = setValues("expenses-total", expensesTotal);
    const currentBalance = incomeValue - totalExpense;
    const currenTotaltBalance = setValues("current-belance", currentBalance);

    document
      .getElementById("saving-btn")
      .addEventListener("click", function () {
        const savingParsent = getInputValues("Saving-input-field");
        const totalSaving = (savingParsent * incomeValue) / 100;
        const savingsTotalAmount = setValues("saving-amount", totalSaving);
        const remainingAmount = currenTotaltBalance - savingsTotalAmount;
        setValues("remaining-balance", remainingAmount);
      });
  });
