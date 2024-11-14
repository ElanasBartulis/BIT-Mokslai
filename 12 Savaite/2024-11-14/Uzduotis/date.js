export const getFormattedDate = () =>
  new Date().toLocaleString("lt-LT").replace(".", ":");
