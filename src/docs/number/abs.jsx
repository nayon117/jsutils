import CodeBlock from "../../components/codeBlock";

const MathAbs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.abs()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.abs()</code> method returns the absolute (non-negative) value of a number. If the number is negative, it returns the positive equivalent.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Math.abs()</code> is useful for calculations where only positive values are desired, regardless of input.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.abs(number);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.abs(-10));    // Output: 10\nconsole.log(Math.abs(4.7));    // Output: 4.7\nconsole.log(Math.abs(-0.5));   // Output: 0.5\nconsole.log(Math.abs(0));      // Output: 0`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Find the absolute value of <code>-35.6</code>.</li>
        <li>Exercise 2: What happens if you use <code>Math.abs()</code> on <code>0</code>? Verify the result.</li>
        <li>Exercise 3: Write a function that takes any number and returns its absolute value using <code>Math.abs()</code>.</li>
      </ul>
    </div>
  );
};

export default MathAbs;
