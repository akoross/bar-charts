const numbers = [
  5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13,
];

const rootElement = document.getElementById('root');
rootElement.style.width = numbers.length * 20 + 'px';

const colors = (num) => {
  if (num >= 0 && num <= 5) {
    return 'green';
  }
  if (num >= 6 && num <= 10) {
    return 'yellow';
  }
  if (num > 10) {
    return 'red';
  }
  return 'transparent';
};

numbers.forEach((num) => {
  const newPoint = document.createElement('div');
  newPoint.style.height = num * 10 + 'px';
  newPoint.style.width = '15px';
  newPoint.style.background = colors(num);
  rootElement.appendChild(newPoint);
});
