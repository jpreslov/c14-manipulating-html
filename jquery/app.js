$('document').ready(() => {
  //Part 1
  let btn = $('<button>Click Me!</button>');
  $('body').append(btn);
  btn.click(function () {
    alert('Hecky eah');
  });
  //Part 2
  let textBtn = $('#textBtn');
  let textBox = $('#textBox');
  textBtn.click(function () {
    alert(textBox.val());
  });
  //Part 3
  let hoverDiv = $('#hoverDiv');
  hoverDiv.css({
    height: '100px',
    width: '100px',
    border: '1px solid black',
  });
  hoverDiv.hover(
    function () {
      hoverDiv.css({
        backgroundColor: 'red',
      });
    },
    function () {
      hoverDiv.css({
        backgroundColor: 'white',
      });
    }
  );
  //Part 4
  let paragraph = $(
    '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Qui impedit rem accusamus suscipit molestiae, sed commodi perspiciatis sunt mollitia eum illo quasi.<br/> Corporis voluptatum quod voluptatibus et mollitia velit eum.</p>'
  );
  $('body').append(paragraph);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  paragraph.click(function () {
    paragraph.css({
      color: getRandomColor(),
    });
  });
  //Part 5
  let nameBtn = $('<button>Click For Name</button>');
  let nameDiv = $('<div></div>');
  $('body').append(nameBtn);
  $('body').append(nameDiv);
  nameBtn.click(function () {
    nameDiv.append($('<span>Garrett</span><br/>'));
  });
  //Part 6
  let friendsBtn = $('<button>Click For MY Friends!</button>');
  let friendsUl = $('<ul></ul>');
  $('body').append(friendsBtn);
  $('body').append(friendsUl);
  let friends = ['Biff', 'Bamm', 'Boom', 'Zoom', 'Boom Margerine', 'Boom2', '7', 'Jake', 'a;diug', 'apiygvu'];
  let counter = 0;
  friendsBtn.click(function () {
    if (friends[counter] == undefined) {
      alert('ya aint go ntoa nioanrawda');
    } else {
      friendsUl.append($(`<li>${friends[counter]}</li>`));
      counter++;
    }
  });
});
