let message = false;

const onToggleBtn = () => {
  message = !message;
  render();
}

const render = () => {
  var template = (
    <div>
      <h1>Toggle Logic</h1>
      <button onClick={onToggleBtn}>
        {message ? 'Hide Details' : 'Show Details'}
        Toggle Button
        </button>
      {message &&
        <p>This appears when you click the toggle button and should disappear upon clicking it again.</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById('root'));
};

render();

