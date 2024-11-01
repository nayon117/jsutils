import CodeBlock from "../../components/codeBlock";

const RegexTest = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp.test()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>test()</code> method tests for a match in a string. It returns <code>true</code> if a match is found, and <code>false</code> otherwise.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> This method is case-sensitive unless you add the <code>i</code> flag to the regex.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`regex.test(string);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const regex = /hello/i;\nconsole.log(regex.test("Hello World"));   // Output: true\n\nconst regex2 = /apple/;\nconsole.log(regex2.test("I like apples"));   // Output: false`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Test if the word <code>&quot;JavaScript&quot;</code> is in the string <code>&quot;I love JavaScript!&quot;</code>.</li>
        <li>Exercise 2: Write a function that checks if a string contains only digits.</li>
        <li>Exercise 3: Create a case-insensitive regex to find <code>&quot;hello&quot;</code> in <code>&quot;Hello World&quot;</code>.</li>
      </ul>
    </div>
  );
};

export default RegexTest;
