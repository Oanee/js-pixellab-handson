const button = document.getElementById(`clicker`);
const removeEventButton = document.getElementById('remove-event');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});
