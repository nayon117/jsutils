import CodeBlock from "../../components/codeBlock";

const parseIntExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">parseInt()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>parseInt()</code> function in JavaScript parses a string and returns an integer based on the specified radix (number base). It’s useful for converting strings to integer numbers, but only the first number in the string is parsed, ignoring anything that follows.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> If the first character of the string can’t be converted into a number, <code>parseInt()</code> returns <code>NaN</code>. Ensure to specify the <code>radix</code> (base) parameter (e.g., 10 for decimal) to avoid unpredictable results, especially with leading zeros.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`parseInt(string, radix);`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Parsing a Decimal String</h3>
      <CodeBlock
        code={`const num1 = parseInt("42", 10);\nconsole.log(num1); // Output: 42`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Parsing a Binary String</h3>
      <CodeBlock
        code={`const binary = parseInt("1010", 2);\nconsole.log(binary); // Output: 10 (binary 1010 is decimal 10)`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Invalid String</h3>
      <CodeBlock
        code={`const invalid = parseInt("abc", 10);\nconsole.log(invalid); // Output: NaN`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Convert a hexadecimal string <code>1A</code> to its decimal form using <code>parseInt()</code>.</li>
        <li className="mt-2">Exercise 2: Create a function that checks if the first character in a string can be parsed into an integer.</li>
      </ul>
    </div>
  );
};

export default parseIntExample;
