const image = document.getElementById('movingImage');

image.addEventListener('mouseover', () => {
  const container = image.parentElement;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const maxX = containerWidth - image.clientWidth;
  const maxY = containerHeight - image.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  image.style.transform = `translate(${randomX}px, ${randomY}px)`;
  console.log(containerHeight)
  console.log(containerWidth)
});