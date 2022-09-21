import "./botao.css";

const sayHello = () => alert("olá");

const Button = (props) => (
  <button className="btn" onClick={sayHello}>
    {props.label}
  </button>
);

Button.defaultProps = {
  label: "Clique aqui",
};

// class Button extends React.Component {
//     render() {
//         return <button className='btn'>{this.props.label}</button>
//     }
// }

// Button.defaultProps = {
//     label: 'CLique aqui com classe'
// };

export default Button;
