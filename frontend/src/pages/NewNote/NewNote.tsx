import { useState } from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import './NewNote.css';

function NewNote() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const submitNote = () => {
    console.log({ title, content });
  };

  return (
    <div className="new-note">
      <InputField
        className="title"
        type="text"
        value={title}
        setValue={setTitle}
        placeholder="輸入筆記標題"
      />
      <hr />
      <InputField
        className="content"
        type="textarea"
        value={content}
        setValue={setContent}
        placeholder="輸入筆記內容"
      />
      <hr />
      <Button onClick={submitNote} text="發佈筆記" />
    </div>
  );
}

export default NewNote;
