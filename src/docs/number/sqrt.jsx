import CodeBlock from "../../components/codeBlock";

const MathSqrt = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.sqrt()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.sqrt()</code> method returns the square root of a number.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> If the provided number is negative, <code>Math.sqrt()</code> returns <code>NaN</code>, since square roots of negative numbers are not real.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.sqrt(number);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.sqrt(16));   // Output: 4\nconsole.log(Math.sqrt(25));   // Output: 5\nconsole.log(Math.sqrt(-4));   // Output: NaN`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Find the square root of <code>49</code>.</li>
        <li>Exercise 2: Use <code>Math.sqrt()</code> on <code>-9</code> and observe the result.</li>
        <li>Exercise 3: Write a function that calculates the square root of any positive integer using <code>Math.sqrt()</code>.</li>
      </ul>
    </div>
  );
};

export default MathSqrt;
