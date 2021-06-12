import PreviewNote, { PreviewNoteProps } from './PreviewNote';

interface NotesProps {
  notes: PreviewNoteProps[];
}

function Notes(props: NotesProps) {
  const { notes } = props;

  return (
    <>
      {notes.map((data, index) => (
        <PreviewNote key={index} data={data} />
      ))}
    </>
  );
}

export default Notes;
