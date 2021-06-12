import { StyledInput } from './styles';
interface InputProps {
  type?: 'text' | 'password';
  value: string;
  setValue: Function;
  placeholder?: string;
  inNote?: boolean;
  width: string;
  require?: boolean;
  disabled?: boolean;
}

function Input(props: InputProps) {
  const {
    type = 'text',
    value,
    setValue,
    placeholder = '',
    inNote = false,
    width,
    require = true,
    disabled = false,
  } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder}
      inNote={inNote}
      width={width}
      required={require}
      disabled={disabled}
    ></StyledInput>
  );
}

export default Input;
