import { StyledButton } from '../styles';

interface ButtonProps {
  onClick: Function;
  text: string;
}

function Button(props: ButtonProps) {
  const { onClick, text } = props;
  const handleOnClick = () => onClick();

  return <StyledButton onClick={handleOnClick}>{text}</StyledButton>;
}

export default Button;
