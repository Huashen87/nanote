import { useEffect, useState } from 'react';
import Filter, { FilterType } from '../components/Filter';
import Notes from '../components/Notes';
import { PreviewNoteProps } from '../components/PreviewNote';

function MyNotes() {
  const [filter, setFilter] = useState<FilterType>({ keyword: {}, orderBy: 'recommend' });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const mockData: PreviewNoteProps[] = [
    {
      id: '123',
      title: 'Nanote 筆記123$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',
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
    },
    {
      id: '1234',
      title: 'Nanote 筆記1234',
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
    },
    {
      id: '12345',
      title: 'Nanote 筆記12345',
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
    },
  ];

  const titleOptions = mockData.map((data) => {
    return { value: 'title-' + data.title, label: data.title };
  });

  return (
    <>
      <Filter titleOptions={titleOptions} filter={filter} setFilter={setFilter} />
      <Notes notes={mockData} />
    </>
  );
}

export default MyNotes;
