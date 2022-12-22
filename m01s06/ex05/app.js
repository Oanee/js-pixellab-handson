(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButton = document.querySelector('#removeButton');
    let eventBound = true;

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    removeButton.addEventListener('click', () => {
      if (!confirm('Stergem butoanele?')) {
        return;
      }

      toggleEventButton.remove();
      showButton.remove();
    });

    toggleEventButton.addEventListener('click', function () {
      let message = '';
      let label = '';

      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        message = 'Porneste afisarea';
        label = 'Alerta nu va si afisata';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        message = 'Opreste afisarea';
        label = 'Alerta va fi afisata';
      }

      this.innerText = message;
      showMessage(label);
    });

    //function functions are hoisted
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    function showMessage(message) {
      let paragraphElement = document.querySelector('.message');

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('message');
      }

      paragraphElement.innerText = message;

      document.body.append(paragraphElement);
    }
  });
})();
