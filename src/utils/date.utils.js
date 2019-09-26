export const formatDate = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  const singleDigitRegex = /[1-9]/;

  if (singleDigitRegex.test(day)) date = `0${day}`;
  if (singleDigitRegex.test(month)) month = `0${month}`;

  return `${day}-${month}-${year}`;
};
