import CodeBlock from "../../components/codeBlock";

const RegexMatch = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">String.match()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>match()</code> method retrieves the result of a string matching against a regular expression. It returns an array of matches, or <code>null</code> if no match is found.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> To find multiple matches, use the <code>g</code> flag in the regular expression.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.match(regex);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "I love JavaScript and JavaScript loves me";\nconst matches = text.match(/JavaScript/g);\nconsole.log(matches);   // Output: ["JavaScript", "JavaScript"]`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Match all words in <code>&quot;Hello World! Welcome!&quot;</code>.</li>
        <li>Exercise 2: Create a function that matches all digits in a string.</li>
      </ul>
    </div>
  );
};

export default RegexMatch;
