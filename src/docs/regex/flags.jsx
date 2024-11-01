import CodeBlock from "../../components/codeBlock";

const RegexFlags = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp Flags</h1>

      <p className="text-lg text-gray-700 mb-6">
        Flags in regex modify search behavior. Common flags are:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><code>i</code>: Case-insensitive matching.</li>
        <li><code>g</code>: Global search for all matches.</li>
        <li><code>m</code>: Multi-line matching, allowing <code>^</code> and <code>$</code> to match line boundaries.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "Hello hello HELLO";\n\n// Case-insensitive search\nconsole.log(/hello/i.test(text));   // Output: true\n\n// Global search for all matches\nconsole.log(text.match(/hello/gi));   // Output: ["Hello", "hello", "HELLO"]\n\n// Multi-line search\nconst multilineText = "first line\\nsecond line";\nconsole.log(multilineText.match(/^second/m));   // Output: ["second"]`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Combining flags, like <code>/hello/gi</code>, allows case-insensitive matching on multiple occurrences.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a case-insensitive regex to find world in Hello World.</li>
        <li>Exercise 2: Write a regex that matches every a in Banana globally and case-insensitively.</li>
      </ul>
    </div>
  );
};

export default RegexFlags;
