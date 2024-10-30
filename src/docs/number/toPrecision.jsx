import CodeBlock from "../../components/codeBlock";

const toPrecisionExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Number.toPrecision()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>toPrecision()</code> method returns a string representing the number to the specified precision, which is the total number of significant digits.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>toPrecision()</code> rounds the number if it exceeds the specified precision and adds decimal places if necessary to reach the required number of significant digits.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`number.toPrecision(precision);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const num = 123.456;\nconsole.log(num.toPrecision(4)); // Output: "123.5"\nconsole.log(num.toPrecision(2)); // Output: "1.2e+2"`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>toPrecision()</code> to represent <code>45.6789</code> with 3 significant digits.</li>
      </ul>
    </div>
  );
};

export default toPrecisionExample;
