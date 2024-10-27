/* eslint-disable react/prop-types */

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        backgroundColor: "#00212B",
        margin: "0px",
      }}
      language="jsx"
      style={dracula }
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;