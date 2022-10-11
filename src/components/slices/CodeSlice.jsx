import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import gradientDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark.js';

const CodeSlice = ({ slice }) => {
  return (
    <SyntaxHighlighter
      className="mt-3 rounded-md p-3"
      language={slice.primary.language}
      style={gradientDark}
    >
      {slice.primary.content[0].text}
    </SyntaxHighlighter>
  );
};

export default CodeSlice;
