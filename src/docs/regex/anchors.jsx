import CodeBlock from "../../components/codeBlock";

const RegexAnchors = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp Anchors</h1>

      <p className="text-lg text-gray-700 mb-6">
        Anchors match positions within a string, not specific characters:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><code>^</code>: Matches the beginning of a string.</li>
        <li><code>$</code>: Matches the end of a string.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "JavaScript is fun";\n\n// Match "JavaScript" only at the start\nconsole.log(/^JavaScript/.test(text));   // Output: true\n\n// Match "fun" only at the end\nconsole.log(/fun$/.test(text));   // Output: true\n\n// Match lines starting with "fun" in a multi-line string\nconst multiLine = "fun\\nJavaScript\\nis fun";\nconsole.log(/^fun/m.test(multiLine));   // Output: true`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Anchors are very useful for form validation, like ensuring an input starts or ends with specific characters.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Check if a string starts with Hello.</li>
        <li>Exercise 2: Write a regex to see if a string ends with .com.</li>
      </ul>
    </div>
  );
};

export default RegexAnchors;
