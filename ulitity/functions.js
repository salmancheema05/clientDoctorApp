export const stringConvertInterger = (string, length) => {
  let newString = string.replace(/\(\d+\)/, "");
  let number = parseFloat(newString);
  let check = !isNaN(number) && !Number.isInteger(number);
  if (check) {
    const result = length - 0.5;
    return result;
  } else {
    return length;
  }
};
