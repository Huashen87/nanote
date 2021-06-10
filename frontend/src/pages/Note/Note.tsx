import { useParams } from 'react-router';
import Note from '../../components/Note';

function NotePage() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Note id={id} />
    </>
  );
}

export default NotePage;
