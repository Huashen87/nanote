import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import { StyledNewNote, Button, PreviewContent, PreviewTitle, FlexRow } from '../components/styles';
import Textarea from '../components/Textarea';
import Modal from '../components/Modal';
import Content from '../components/Content';
import SearchBar from '../components/SearchBar';
import Tags, { EditableTags, Tag } from '../components/Tags';
import { Prompt, useHistory } from 'react-router';

function NewNote() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [searched, setSearched] = useState<boolean>(false);
  const history = useHistory();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleRealOnSubmit = () => {
    console.log({ title, content, tags });
    resetState();
    // I'm not sure if it works every time
    setTimeout(() => history.push('/my-notes'));
  };

  const resetState = () => {
    setTitle('');
    setContent('');
    setTags([]);
    setShowModal(false);
    setSearched(false);
  };

  const handleOnSearch = () => {
    if (tags.length >= 10) return;
    setTags([...tags, { tagName: searchText }]);
    setSearchText('');
  };

  const handleSearchOnSubmit = () => {
    setSearched(true);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'scroll';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <Prompt when={!!title || !!content} message="未發布的內容將會遺失，確定要離開嗎？" />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {searched ? (
          <>
            <PreviewTitle children={title} />
            <FlexRow width="80%" children={tags.length ? <Tags tags={tags} /> : null} />
            <PreviewContent children={<Content content={content} />} />
            <FlexRow width="50vw">
              <Button onClick={() => setSearched(false)} children="返回標籤" />
              <Button onClick={handleRealOnSubmit} children="確定送出" />
            </FlexRow>
          </>
        ) : (
          <>
            <PreviewTitle children="文章標籤" />
            <SearchBar
              value={searchText}
              setValue={setSearchText}
              onSearch={handleOnSearch}
              buttonText="新增"
              placeholder="輸入想新增的標籤"
              disabled={tags.length >= 10}
            />
            {tags.length ? (
              <>
                <div>點擊下方標籤列可移除標籤</div>
                <EditableTags tags={tags} setTags={setTags} />
                <div>目前標籤數量 : {tags.length} / 10</div>
              </>
            ) : null}
            <Button onClick={handleSearchOnSubmit} children="預覽筆記內容" />
          </>
        )}
      </Modal>
      <StyledNewNote onSubmit={handleOnSubmit}>
        <Input
          type="text"
          value={title}
          setValue={setTitle}
          placeholder="輸入筆記標題"
          inNote={true}
          width="100%"
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
