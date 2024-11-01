import CodeBlock from "../../components/codeBlock";

const MathPow = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.pow()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.pow()</code> method returns the result of raising a base to the power of an exponent.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Math.pow()</code> is often used for exponentiation, and can also be achieved with <code>**</code> in JavaScript.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.pow(base, exponent);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.pow(2, 3));   // Output: 8 (2^3)\nconsole.log(Math.pow(5, 2));   // Output: 25 (5^2)\nconsole.log(Math.pow(7, 0));   // Output: 1 (7^0)`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Calculate <code>4^3</code> using <code>Math.pow()</code>.</li>
        <li>Exercise 2: What happens when you use <code>Math.pow()</code> with negative exponents, like <code>Math.pow(2, -1)</code>?</li>
        <li>Exercise 3: Write a function that squares a number using <code>Math.pow()</code>.</li>
      </ul>
    </div>
  );
};

export default MathPow;
