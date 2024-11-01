import CodeBlock from "../../components/codeBlock";

const MathTrunc = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.trunc()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.trunc()</code> method returns the integer part of a number by removing any fractional digits. This effectively truncates the decimal portion.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Math.trunc()</code> is different from <code>Math.floor()</code>, as it simply cuts off the decimals and does not round the number.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.trunc(number);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.trunc(4.7));    // Output: 4\nconsole.log(Math.trunc(-2.9));   // Output: -2\nconsole.log(Math.trunc(0.99));  // Output: 0\nconsole.log(Math.trunc(-0.5));  // Output: 0`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Math.trunc()</code> to remove the decimal from <code>3.14</code>.</li>
        <li>Exercise 2: Apply <code>Math.trunc()</code> to a negative decimal number, such as <code>-5.67</code>. What is the result?</li>
        <li>Exercise 3: Write a function that accepts a number and returns only its integer part using <code>Math.trunc()</code>.</li>
      </ul>
    </div>
  );
};

export default MathTrunc;
