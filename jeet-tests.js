Tinytest.add("jeet - stylus", function(test) {

  var div = document.createElement('div');
  div.style.display = 'block';
  div.className = 'stylus';
  UI.materialize(Template.testBlocks, div);
  document.body.appendChild(div);

  var block = div.querySelector('div');
  var divWidth = parseInt(getStyleProperty(div, 'width'), 10);
  var blockWidth = parseInt(getStyleProperty(block, 'width'), 10);
  var percent = Math.floor(blockWidth / divWidth * 100);
  test.equal(percent, 22);

  document.body.removeChild(div);
});

Tinytest.add("jeet - scss", function(test) {

  var div = document.createElement('div');
  div.style.display = 'block';
  div.className = 'scss';
  UI.materialize(Template.testBlocks, div);
  document.body.appendChild(div);

  var block = div.querySelector('div');
  var divWidth = parseInt(getStyleProperty(div, 'width'), 10);
  var blockWidth = parseInt(getStyleProperty(block, 'width'), 10);
  var percent = Math.floor(blockWidth / divWidth * 100);
  test.equal(percent, 22);

  document.body.removeChild(div);
});