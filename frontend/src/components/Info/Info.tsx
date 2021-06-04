import { Link } from 'react-router-dom';
import './Info.css';

export interface AuthorInfo {
  id: string;
  name: string;
  image: string;
}

export interface InfoProps {
  author: AuthorInfo;
  updatedAt: Date;
}

function Info(props: InfoProps) {
  const {
    author: { id, name, image },
    updatedAt,
  } = props;
  return (
    <div className="note-info">
      <Link className="author" to={'/user/' + id}>
        <img className="author-image" src={image} alt=""></img>
        <div className="author-info">
          <div className="author-id">@{id}</div>
          <div className="author-name">{name}</div>
        </div>
      </Link>
      <div className="updated-at">最後更新於 : {updatedAt.toLocaleDateString()}</div>
    </div>
  );
}

export default Info;
