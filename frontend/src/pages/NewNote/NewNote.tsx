import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { StyledNewNote, Button, PreviewContent, PreviewTitle } from '../../components/styles';
import Textarea from '../../components/Textarea';
import Modal from '../../components/Modal';
import Content from '../../components/Content';

function NewNote() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleRealOnSubmit = () => {
    console.log({ title, content });
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'scroll';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <PreviewTitle>預覽筆記內容</PreviewTitle>
        <PreviewContent children={<Content content={content} />} />
        <Button onClick={handleRealOnSubmit} children="確定送出" />
      </Modal>
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
    </>
  );
}

export default NewNote;
