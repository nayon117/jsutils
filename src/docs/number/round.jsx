import CodeBlock from "../../components/codeBlock";

const MathRound = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.round()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.round()</code> method rounds a number to the nearest integer. It rounds up if the decimal is 0.5 or higher and rounds down if the decimal is less than 0.5.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Math.round()</code> is useful for cases where you want a simple rounding of numbers, for example, rounding currency values to whole numbers.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.round(number);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>

      <CodeBlock
        code={`console.log(Math.round(4.6));     // Output: 5\nconsole.log(Math.round(4.3));     // Output: 4\nconsole.log(Math.round(7.5));     // Output: 8\nconsole.log(Math.round(-2.3));    // Output: -2\nconsole.log(Math.round(-2.7));    // Output: -3`}
      />

      <h2 className="text-xl font-semibold mb-3">Rounding in Different Scenarios</h2>

      <p className="text-lg text-gray-700 mb-4">
        You can use <code>Math.round()</code> in various scenarios like rounding off calculations or scores:
      </p>
      <CodeBlock
        code={`const score = 89.8;\nconsole.log(Math.round(score));   // Output: 90\n\nconst price = 12.45;\nconsole.log(Math.round(price));    // Output: 12\n\nconst distance = -5.4;\nconsole.log(Math.round(distance)); // Output: -5`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Math.round()</code> to round <code>3.9</code> and <code>3.4</code>. What are the results?</li>
        <li>Exercise 2: Round a negative number like <code>-7.6</code> using <code>Math.round()</code> and observe the output.</li>
        <li>Exercise 3: Create a variable <code>temp</code> with a value of <code>22.5</code> and round it using <code>Math.round()</code>.</li>
      </ul>
    </div>
  );
};

export default MathRound;
