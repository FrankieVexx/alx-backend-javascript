export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [...reportWithIterator];
  const result = employeeNames.join(' | ');
  return result;
}
