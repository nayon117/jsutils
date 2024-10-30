import CodeBlock from "../../components/codeBlock";

const isIntegerExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Number.isInteger()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Number.isInteger()</code> method checks if the given value is an integer. It returns <code>true</code> if the value is an integer, otherwise <code>false</code>. Unlike <code>parseInt()</code>, this method does not convert strings to numbers.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Number.isInteger()</code> only works for finite numbers. Values like <code>Infinity</code>, <code>NaN</code>, and non-numeric types will return <code>false</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Number.isInteger(value);`} />

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Checking an Integer</h3>
      <CodeBlock
        code={`const num = Number.isInteger(42);\nconsole.log(num); // Output: true`}
      />

      <h3 className="text-lg font-semibold my-5">Example 2: Checking a Float</h3>
      <CodeBlock
        code={`const floatNum = Number.isInteger(42.5);\nconsole.log(floatNum); // Output: false`}
      />

      <h3 className="text-lg font-semibold my-5">Example 3: Checking NaN</h3>
      <CodeBlock
        code={`const invalidNum = Number.isInteger(NaN);\nconsole.log(invalidNum); // Output: false`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Number.isInteger()</code> to check if <code>100.0</code> is considered an integer.</li>
        <li className="mt-2">Exercise 2: Write a function that filters out only integers from an array of numbers using <code>Number.isInteger()</code>.</li>
      </ul>
    </div>
  );
};

export default isIntegerExample;
