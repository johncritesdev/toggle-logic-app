
//single piece of state visibility - false

class RenderToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    }

    this.onToggleBtn = this.onToggleBtn.bind(this);
  }

  onToggleBtn() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle Logic</h1>
        <button onClick={this.onToggleBtn}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (<div>
          <p>This appears when you click the toggle button and should disappear upon clicking it again.</p>
        </div>)}
      </div>
    );
  }
}

ReactDOM.render(<RenderToggle />, document.getElementById('root'));

// ******************************************

// let message = false;

// const onToggleBtn = () => {
//   message = !message;
//   render();
// }

// const render = () => {
//   var template = (
//     <div>
//       <h1>Toggle Logic</h1>
//       <button onClick={onToggleBtn}>
//         {message ? 'Hide Details' : 'Show Details'}
//         Toggle Button
//         </button>
//       {message &&
//         <p>This appears when you click the toggle button and should disappear upon clicking it again.</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('root'));
// };

// render();

