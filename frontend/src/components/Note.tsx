import Content from './Content';
import Tags, { Tag } from './Tags';
import Info, { AuthorInfo } from './Info';
import { StyledNote } from './styles';

export interface NoteProps {
  id: string;
  title: string;
  tags: Tag[];
  author: AuthorInfo;
  updatedAt: Date;
  content: string;
}

function Note(props: { data: NoteProps }) {
  const { data } = props;

  return (
    <StyledNote>
      <span>{data.title}</span>
      <Tags tags={data.tags} />
      <Info author={data.author} updatedAt={data.updatedAt} />
      <Content content={data.content} />
    </StyledNote>
  );
}

export default Note;
