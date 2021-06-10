import { Link } from 'react-router-dom';
import { StyledTags } from './styles';

export interface Tag {
  tagName: string;
}

function Tags(props: { tags: Tag[] }) {
  const { tags } = props;
  return (
    <StyledTags>
      {tags.map((tag, index) => (
        <Link key={index} to={'/tags/' + tag.tagName} children={tag.tagName} />
      ))}
      <span />
    </StyledTags>
  );
}

export default Tags;
