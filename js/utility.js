function getInputValues(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}
function getValues(valuesId) {
  const values = document.getElementById(valuesId);
  const previousValues = parseFloat(values.innerText);
  return previousValues;
}
function setValues(valueId, result) {
  const results = document.getElementById(valueId);
  results.innerText = result;
  return result;
}
