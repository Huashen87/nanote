import { Link } from 'react-router-dom';
import './Note.css';

interface NoteData {
  title: string;
  tags: Tag[];
  author: AuthorInfo;
  updatedAt: Date;
  contents: string[];
}

interface Tag {
  tagName: string;
}

interface AuthorInfo {
  id: string;
  name: string;
  image: string;
}

function Note(props: { id: string }) {
  const { id } = props;

  const mockData: NoteData = {
    title: 'Nanote 筆記編號 : ' + id,
    tags: [
      { tagName: 'Introduction' },
      { tagName: 'Hello World' },
      { tagName: 'Happy Hacking' },
      { tagName: 'Test Tag 1' },
      { tagName: 'Test Tag 2' },
      { tagName: 'Test Tag 3' },
    ],
    author: {
      id: 'Huashen87',
      name: 'Nanote-Huashen',
      image: 'https://i.imgur.com/K5ZPD03.jpg',
    },
    updatedAt: new Date(),
    contents: [
      `\t取名為 Nanote 的意思是 "Nano" + "note"，如奈米般微小的筆記。`,
      `\t生活中可能有許多點子、靈感，或是待辦事項，需要快速記錄下來以免忘記，但沒有一個方便、能快速紀錄的地方;也可能會遇到許多之前已經解決的問題，但始終找不到當初留下的紀錄，若有妥善分類將能方便查詢。鑒於這些需求，我希望能夠打造一個簡單、快速、方便、輕量的筆記應用程式，讓自己能夠快速記錄一些瑣碎的事項，並能夠利用分類快速找到相關的筆記。`,
      `\t作為一名初階(菜鳥)工程師，我知道Nanote目前一定會有許多不足之處，我也會盡我所能地改進它，希望他有朝一日能夠成為很棒的筆記應用程式!`,
      `\t如果對於Nanote有任何建議或疑問，請透過我的Github或是Email與我聯繫。`,
      `我的Github : https://github.com/Huashen87\n我的Email : HuashenCoding@gmail.com`,
    ],
  };

  const data: NoteData = mockData;

  return (
    <div className="note-page">
      <Title title={data.title} />
      <Tags tags={data.tags} />
      <Info author={data.author} updatedAt={data.updatedAt} />
      <Contents contents={data.contents} />
    </div>
  );
}

function Title(props: { title: string }) {
  const { title } = props;
  return <div className="title">{title}</div>;
}

function Tags(props: { tags: Tag[] }) {
  const { tags } = props;
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Link key={index} className="tag" to={'/tags/' + tag.tagName}>
          {tag.tagName}
        </Link>
      ))}
      <div className="tricky-space"></div>
    </div>
  );
}

interface InfoProps {
  author: AuthorInfo;
  updatedAt: Date;
}

function Info(props: InfoProps) {
  const {
    author: { id, name, image },
    updatedAt,
  } = props;
  return (
    <div className="note-info">
      <Link className="author" to={'/user/' + id}>
        <img className="author-image" src={image} alt=""></img>
        <div className="author-info">
          <div className="author-id">@{id}</div>
          <div className="author-name">{name}</div>
        </div>
      </Link>
      <div className="updated-at">最後更新於 : {updatedAt.toLocaleDateString()}</div>
    </div>
  );
}

function Contents(props: { contents: string[] }) {
  const { contents } = props;
  return (
    <>
      {contents.map((content, index) => (
        <div key={index} className="content">
          {content}
        </div>
      ))}
    </>
  );
}

export default Note;
