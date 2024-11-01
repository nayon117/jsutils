import CodeBlock from "../../components/codeBlock";

const RegexReplace = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">String.replace()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>replace()</code> method searches a string for a specified pattern and returns a new string with the specified replacement.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> For all matches, use the <code>g</code> flag; otherwise, only the first match is replaced.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string.replace(regex, replacement);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "I love JavaScript";\nconst result = text.replace("JavaScript", "coding");\nconsole.log(result);   // Output: "I love coding"\n\nconst text2 = "Java Java";\nconst result2 = text2.replace(/Java/g, "JavaScript");\nconsole.log(result2);   // Output: "JavaScript JavaScript"`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Replace all spaces in a string with underscores.</li>
        <li>Exercise 2: Write a function that replaces the first occurrence of <code>&quot;cat&quot;</code> with <code>&quot;dog&quot;</code>.</li>
      </ul>
    </div>
  );
};

export default RegexReplace;
