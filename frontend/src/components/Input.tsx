import { StyledInput } from './styles';
interface InputProps {
  type?: 'text' | 'password';
  value: string;
  setValue: Function;
  placeholder?: string;
  inNote?: boolean;
}

function Input(props: InputProps) {
  const { type = 'text', value, setValue, placeholder = '', inNote = false } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder}
      inNote={inNote}
    ></StyledInput>
  );
}

export default Input;
