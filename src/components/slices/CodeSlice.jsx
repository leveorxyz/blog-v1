import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeSlice = ({ slice }) => {
  return (
    <SyntaxHighlighter
      className="mt-3 rounded-md p-3"
      language={slice.primary.language}
      children={slice.primary.content[0].text}
      style={gradientDark}
    />
  );
};

export default CodeSlice;
