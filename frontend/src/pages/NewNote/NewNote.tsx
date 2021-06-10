import React, { useState } from 'react';
import Input from '../../components/Input';
import { StyledNewNote, Button } from '../../components/styles';
import Textarea from '../../components/Textarea';

function NewNote() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, content });
  };

  return (
    <StyledNewNote onSubmit={handleOnSubmit}>
      <Input
        type="text"
        value={title}
        setValue={setTitle}
        placeholder="輸入筆記標題"
        inNote={true}
      />
      <hr />
      <Textarea value={content} setValue={setContent} placeholder="輸入筆記內容" inNote={true} />
      <hr />
      <Button type="submit" children="發佈筆記" />
    </StyledNewNote>
  );
}

export default NewNote;
