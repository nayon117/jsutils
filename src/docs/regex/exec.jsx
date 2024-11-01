import CodeBlock from "../../components/codeBlock";

const RegexExec = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp.exec()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>exec()</code> method searches for a match in a string and returns an array of matched text if found, or <code>null</code> if no match is found.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> Useful for capturing groups and extracting matched parts from a string.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`regex.exec(string);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const regex = /(\\d+)-([a-zA-Z]+)/;\nconst result = regex.exec("123-abc");\nconsole.log(result);\n// Output: ["123-abc", "123", "abc"]`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>exec()</code> to capture two groups: the year and month from <code>&quot;2023-10&quot;</code>.</li>
        <li>Exercise 2: Write a function that extracts the domain name from an email address.</li>
      </ul>
    </div>
  );
};

export default RegexExec;
