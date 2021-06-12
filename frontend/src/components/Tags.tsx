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

export function EditableTags(props: { tags: Tag[]; setTags: Function }) {
  const { tags, setTags } = props;

  const handleOnClick = (index: number) => () => {
    const tags2 = [...tags];
    tags2.splice(index, 1);
    setTags(tags2);
  };

  return (
    <StyledTags>
      {tags.map((tag, index) => (
        <div key={index} onClick={handleOnClick(index)} children={tag.tagName} />
      ))}
      <span />
    </StyledTags>
  );
}

export default Tags;
