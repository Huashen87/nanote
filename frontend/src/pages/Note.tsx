import { useEffect } from 'react';
import { useParams } from 'react-router';
import Note from '../components/Note';
import { NoteProps } from '../components/Note';

function NotePage() {
  const { id } = useParams<{ id: string }>();

  const mockData: NoteProps = {
    id: id,
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
    content: `# Nanote
    \n>取名為 Nanote 的意思是 "Nano" + "note"，如奈米般微小的筆記。
    \n生活中可能有許多點子、靈感，或是待辦事項，需要快速記錄下來以免忘記，但沒有一個方便、能快速紀錄的地方;也可能會遇到許多之前已經解決的問題，但始終找不到當初留下的紀錄，若有妥善分類將能方便查詢。鑒於這些需求，我希望能夠打造一個簡單、快速、方便、輕量的筆記應用程式，讓自己能夠快速記錄一些瑣碎的事項，並能夠利用分類快速找到相關的筆記。
    \n作為一名初階(菜鳥)工程師，我知道Nanote目前一定會有許多不足之處，我也會盡我所能地改進它，希望有朝一日它能夠成為很棒的筆記應用程式!
    \n**如果對於Nanote有任何建議或疑問，請透過我的Github或是Email與我聯繫。**
    \n- [**我的Github**](https://github.com/Huashen87)
    \n- [**我的Email**](mailto:HuashenCoding@gmail.com)
    `,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Note data={mockData} />
    </>
  );
}

export default NotePage;
