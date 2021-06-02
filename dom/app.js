document.addEventListener('DOMContentLoaded', function () {
  let container = document.createElement('div');
  let alertBtn = document.createElement('button');
  let textInput = document.getElementById('text-input');
  let submitBtn = document.getElementById('submit-btn');
  let hoverDiv = document.getElementById('hover-div');
  let paragraph = document.createElement('p');
  let nameDiv = document.createElement('div');
  let nameBtn = document.createElement('button');
  let friendBtn = document.createElement('button');
  friendBtn.innerText = 'Briends';
  nameBtn.innerText = 'Name';
  container.id = 'container';
  document.body.appendChild(container);
  alertBtn.innerHTML = 'Click me';
  container.appendChild(alertBtn);
  hoverDiv.style.height = '100px';
  paragraph.innerText = `Amusing title, Anyone Can Cook!
    What's even more amusing is that
    Gusteau actually seems to believe it.
    I, on the other hand,
    take cooking seriously.
    And, no, I don't think anyone can do it.
    This is me.
    I think it's apparent
    I need to rethink my life a little bit.
    What's my problem?
    First of all, I'm a rat.
    Which means life is hard.
    And second, I have a highly developed
    sense of taste and smell.
    Flour, eggs, sugar, vanilla bean...
    Oh! Small twist of lemon.
    Whoa, you can smell all that?
    You have a gift.
    This is Emile, my brother.`;

  container.appendChild(paragraph);

  paragraph.addEventListener('click', function () {
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    paragraph.style.color = getRandomColor();
  });

  //alert a nice message
  alertBtn.addEventListener('click', function () {
    alert('Whats pooping');
  });

  //alert the value that the user typed into the text input
  submitBtn.addEventListener('click', function () {
    alert(textInput.value);
  });

  hoverDiv.addEventListener('mouseover', function () {
    hoverDiv.style.backgroundColor = 'blue';
  });
  hoverDiv.addEventListener('mouseout', function () {
    hoverDiv.style.backgroundColor = '';
  });
  container.appendChild(nameBtn);
  nameBtn.addEventListener('click', function () {
    let nameSpan = document.createElement('span');
    nameSpan.appendChild(document.createTextNode('Jake'));
    nameDiv.appendChild(nameSpan);
    nameSpan.style.marginRight = '30px';
    container.appendChild(nameDiv);
  });

  container.appendChild(friendBtn);
  let counter = 0;
  friendBtn.addEventListener('click', function () {
    let friendsArr = ['Bibby', 'Bobby', 'Betilda', 'Brandt', 'Bompton', 'Barles', 'Bake', 'Barrett', 'Bosh', 'Brenda'];
    let friendUL = document.createElement('ul');
    let friendLI = document.createElement('li').appendChild(document.createTextNode(friendsArr[counter]));

    if (counter < 10) {
      counter++;
    } else {
        return
    }

    friendUL.appendChild(friendLI);
    container.appendChild(friendUL);
  });
});
