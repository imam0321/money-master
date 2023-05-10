function getInputValues(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}
function setValues(valueId, result) {
  const results = document.getElementById(valueId);
  results.innerText = result;
  return result;
}
