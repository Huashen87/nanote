import { useState } from 'react';
import { StyledTextArea } from './styles';

interface TextareaProps {
  value: string;
  setValue: Function;
  placeholder?: string;
  inNote?: boolean;
}

function Textarea(props: TextareaProps) {
  const { value, setValue, placeholder = '', inNote = false } = props;

  const [tmp, setTmp] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target as HTMLTextAreaElement;
    setValue(el.value);
    autoScaleAndScroll(el);
  };

  const autoScaleAndScroll = (el: HTMLTextAreaElement) => {
    const windowY = window.pageYOffset;
    el.style.height = 'auto';

    if (el.scrollHeight - tmp > 10) {
      el.style.height = tmp + 24 + 'px';
      window.scrollTo(0, windowY + 24);
    } else if (el.scrollHeight - tmp < -10) {
      el.style.height = tmp - 24 + 'px';
      window.scrollTo(0, windowY - 24);
    } else {
      el.style.height = tmp + 'px';
      window.scrollTo(0, windowY);
    }
    setTmp(el.scrollHeight);
  };

  return (
    <StyledTextArea
      wrap="hard"
      cols={45}
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder}
      inNote={inNote}
    ></StyledTextArea>
  );
}

export default Textarea;
