import Notes from '../components/Notes';
import { PreviewNoteProps } from '../components/PreviewNote';

function MyNotes() {
  const mockData: PreviewNoteProps[] = [
    {
      id: '123',
      title: 'Nanote 筆記',
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
      title: 'Nanote 筆記',
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
      title: 'Nanote 筆記',
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

  return <Notes notes={mockData} />;
}

export default MyNotes;
