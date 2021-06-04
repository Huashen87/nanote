import './InputField.css';

interface InputFieldProps {
  type?: 'textarea' | 'text' | 'password';
  className?: string;
  value: string;
  setValue: Function;
  placeholder?: string;
}

function InputField(props: InputFieldProps) {
  const { type = 'text', className, value, setValue, placeholder = '' } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="input-field">
      {type === 'textarea' ? (
        <textarea
          className={className}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          className={className}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
        ></input>
      )}
    </div>
  );
}

export default InputField;
