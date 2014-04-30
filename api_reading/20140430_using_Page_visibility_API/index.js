// vim:set st=2 sw=2 sts=2:

init();

function init() {
  document.addEventListener("visibilitychange", handler);
  var output = document.getElementById('output');
  output.appendChild(outputVisibilityState());
}

function handler() {
  var output = document.getElementById('output');
  output.appendChild(outputVisibilityChange());

  var childUl = document.createElement('ul');
  childUl.appendChild(outputHidden());
  childUl.appendChild(outputVisibilityState());

  output.appendChild(childUl);
}

function outputVisibilityChange() {
  var li = document.createElement('li');
  li.innerHTML = 'event: visibilitychange';
  return li;
}

function outputHidden() {
  var li = li = document.createElement('li');
  if (document.hidden) {
    // 不可視状態
    li.innerHTML = 'document.hidden = hidden';
  } else {
    // 可視状態
    li.innerHTML = 'document.hidden = visible';
  }
  return li;
}

function outputVisibilityState() {
  var li = document.createElement('li');
  if (document.visibilityState == "visible") {
    // 可視状態
    li.innerHTML = 'document.visibilityState = visible';
  } else if (document.visibilityState == "hidden") {
    // 不可視状態
    li.innerHTML = 'document.visibilityState = hidden';
  } else if (document.visibilityState == "prerender") {
    // プリレンダリング状態
    li.innerHTML = 'document.visibilityState = prerender';
  }
  return li;
}

