import { Link } from 'react-router-dom';
import { Author, NoteInfo, UpdateAt } from './styles';

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
    <NoteInfo>
      <Link to={'/user/' + id}>
        <Author>
          <img src={image} alt=""></img>
          <div>
            <code>@{id}</code>
            <div>{name}</div>
          </div>
        </Author>
      </Link>
      <UpdateAt>最後更新於 : {updatedAt.toLocaleDateString()}</UpdateAt>
    </NoteInfo>
  );
}

export default Info;
