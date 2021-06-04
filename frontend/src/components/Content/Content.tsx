import Markdown from 'react-markdown';
import './Content.css';

function Content(props: { content: string }) {
  const { content } = props;

  return <Markdown className="content" children={content} />;
}

export default Content;
