import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeSlice = ({ slice }) => {
  return (
    <SyntaxHighlighter
      language={slice.primary.language}
      children={slice.primary.content[0].text}
      style={nightOwl}
    />
  );
};

export default CodeSlice;
