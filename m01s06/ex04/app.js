(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      const message = 'Mousul este pe scena';
      console.log(message);
      // showMessage(message);
      createParagraph(message, 'message');
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';
      console.log(message);
      // showMessage(message);
      createParagraph(message, 'message');
    });

    // function functions are hoisted
    // function showMessage(message) {
    //   const paragraphElement = document.createElement('p');
    //   paragraphElement.innerText = message;
    //   paragraphElement.classList.add('message');

    //   document.body.append(paragraphElement);
    // }

    function createParagraph(message, cssClass = '') {
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add(cssClass);

      document.body.append(paragraphElement);
    }
  });
})();
