export default function cleanSet(set, startString) {
  const newString = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      newString.push(s.slice(startString.length));
    }
  });
  return newString.join('-');
}
