import { useState } from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/Input/Input';
import { StyledNewNote } from '../../components/styles';

function NewNote() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const submitNote = () => {
    console.log({ title, content });
  };

  return (
    <StyledNewNote>
      <InputField
        className="title"
        type="text"
        value={title}
        setValue={setTitle}
        placeholder="輸入筆記標題"
        inNote={true}
      />
      <hr />
      <InputField
        className="content"
        type="textarea"
        value={content}
        setValue={setContent}
        placeholder="輸入筆記內容"
        inNote={true}
      />
      <hr />
      <Button onClick={submitNote} text="發佈筆記" />
    </StyledNewNote>
  );
}

export default NewNote;
