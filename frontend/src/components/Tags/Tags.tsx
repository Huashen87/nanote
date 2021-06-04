import { Link } from 'react-router-dom';
import './Tags.css';

export interface Tag {
  tagName: string;
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

export default Tags;
