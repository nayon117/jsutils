import CodeBlock from "../../components/codeBlock";

const toExponentialExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Number.toExponential()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>toExponential()</code> method returns a string representing the number in exponential notation, with an optional parameter specifying the number of digits after the decimal point.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> This method is useful when working with very large or very small numbers, as it provides a concise representation using scientific notation.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`number.toExponential(fractionDigits);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const num = 123.456;\nconsole.log(num.toExponential(2)); // Output: "1.23e+2"\nconsole.log(num.toExponential(4)); // Output: "1.2346e+2"`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>toExponential()</code> to display <code>0.00056</code> with 3 decimal places.</li>
      </ul>
    </div>
  );
};

export default toExponentialExample;
