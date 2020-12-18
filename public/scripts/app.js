'use strict';

var message = false;

var onToggleBtn = function onToggleBtn() {
  message = !message;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Toggle Logic'
    ),
    React.createElement(
      'button',
      { onClick: onToggleBtn },
      message ? 'Hide Details' : 'Show Details',
      'Toggle Button'
    ),
    message && React.createElement(
      'p',
      null,
      'This appears when you click the toggle button and should disappear upon clicking it again.'
    )
  );
  ReactDOM.render(template, document.getElementById('root'));
};

render();
