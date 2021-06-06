import { Input, TextArea } from '../styles';

interface InputFieldProps {
  type?: 'textarea' | 'text' | 'password';
  value: string;
  setValue: Function;
  placeholder?: string;
  inNote?: boolean;
}

function InputField(props: InputFieldProps) {
  const { type = 'text', value, setValue, placeholder = '', inNote = false } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setValue(e.target.value);

  const OnInput = (el: HTMLTextAreaElement) => {
    el.style.height = ((el.value.match(/\n/g) || []).length + 1) * 24 + 'px';

    if (window.scrollY - el.scrollHeight + document.body.clientHeight > 210)
      window.scrollTo(0, el.scrollHeight || document.documentElement.scrollHeight);
  };
  return (
    <>
      {type === 'textarea' ? (
        <TextArea
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          inNote={inNote}
          onInput={(e) => OnInput(e.target as HTMLTextAreaElement)}
        ></TextArea>
      ) : (
        <Input
          type={type}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          inNote={inNote}
        ></Input>
      )}
    </>
  );
}

export default InputField;
