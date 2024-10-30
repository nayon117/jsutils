import CodeBlock from "../../components/codeBlock";

const parseFloatExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">parseFloat()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>parseFloat()</code> function parses a string and returns a floating-point number. It stops reading the string at the first character that isn’t part of a valid floating-point number, so it’s helpful for converting strings with decimal points into numbers.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> If the string cannot be converted into a number, <code>parseFloat()</code> returns <code>NaN</code>. Only the first valid number in the string is considered; additional characters are ignored.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`parseFloat(string);`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Parsing a Decimal String</h3>
      <CodeBlock
        code={`const num = parseFloat("3.14");\nconsole.log(num); // Output: 3.14`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Parsing with Extra Characters</h3>
      <CodeBlock
        code={`const numWithExtra = parseFloat("3.14abc");\nconsole.log(numWithExtra); // Output: 3.14`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Invalid String</h3>
      <CodeBlock
        code={`const invalid = parseFloat("abc");\nconsole.log(invalid); // Output: NaN`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>parseFloat()</code> to parse <code>5.678 meters</code> and return only the numeric part.</li>
        <li className="mt-2">Exercise 2: Write a function that checks if a string can be converted to a floating-point number using <code>parseFloat()</code>.</li>
      </ul>
    </div>
  );
};

export default parseFloatExample;
