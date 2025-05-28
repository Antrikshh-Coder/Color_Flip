function getRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return randomColor;
}
document.getElementById('colorButton').addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById('colorCode').textContent = newColor;
});
