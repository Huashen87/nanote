import Tags, { Tag } from './Tags';
import Info, { AuthorInfo } from './Info';
import { StyledPreviewNote } from './styles';
import { Link } from 'react-router-dom';

export interface PreviewNoteProps {
  id: string;
  title: string;
  tags: Tag[];
  author: AuthorInfo;
  updatedAt: Date;
}

function PreviewNote(props: { data: PreviewNoteProps }) {
  const {
    data: { id, title, tags, author, updatedAt },
  } = props;

  return (
    <Link to={'/note/' + id}>
      <StyledPreviewNote>
        <span>{title}</span>
        <Tags tags={tags} />
        <Info author={author} updatedAt={updatedAt} />
      </StyledPreviewNote>
    </Link>
  );
}

export default PreviewNote;
