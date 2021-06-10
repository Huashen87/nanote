import Markdown from 'react-markdown';
import { StyledMarkdown } from '../styles';
function Content(props: { content: string }) {
  const { content } = props;

  return <StyledMarkdown children={<Markdown children={content} />} />;
}

export default Content;
