import './Button.css';

interface ButtonProps {
  onClick: Function;
  text: string;
}

function Button(props: ButtonProps) {
  const { onClick, text } = props;
  const handleOnClick = () => onClick();

  return (
    <button className="button" onClick={handleOnClick}>
      {text}
    </button>
  );
}

export default Button;
