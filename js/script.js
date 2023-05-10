document
  .getElementById("btn-calculate-income")
  .addEventListener("click", function () {
    const incomeValue = getInputValues("income-input-field");
    const foodValue = getInputValues("food-input-field");
    const rentValue = getInputValues("rent-input-field");
    const clothesValue = getInputValues("clothes-input-field");
    const expensesTotal = foodValue + rentValue + clothesValue;
    const expensesValues = getValues("expenses-total");
    const totalExpense = setValues("expenses-total", expensesTotal);
    const currentBalance = incomeValue - totalExpense;
    const currenTotaltBalance = setValues("current-belance", currentBalance);

    // console.log(updateBalance);
  });
