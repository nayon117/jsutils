import CodeBlock from "../../components/codeBlock";

const maxExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.max()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.max()</code> method is used to find the largest number among the provided arguments. It’s commonly used for comparing multiple numbers, and if no arguments are provided, it will return <code>-Infinity</code>.
      </p>

      <p className="bg-yellow-100 p-3 mb-6 rounded">
        <strong>Note:</strong> <code>Math.max()</code> does not accept arrays directly. To find the maximum in an array, you need to use the spread operator, like <code>Math.max(...array)</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Math.max(value1, value2, ..., valueN);`} />

      <h2 className="text-xl font-semibold mb-3">Examples</h2>

      <CodeBlock
        code={`console.log(Math.max(5, 10, 2));      // Output: 10\nconsole.log(Math.max(-5, -10, -2));  // Output: -2\nconsole.log(Math.max(0, 5, -15));     // Output: 5\n`}
      />

      <h2 className="text-xl font-semibold mb-3">Finding Max in Arrays</h2>
      <p className="text-lg text-gray-700 mb-4">
        Using <code>Math.max()</code> with arrays requires the spread operator to spread the array elements as individual arguments:
      </p>
      <CodeBlock
        code={`const numbers = [5, 10, 15, 20];\nconsole.log(Math.max(...numbers)); // Output: 20\n\nconst negativeNumbers = [-5, -10, -3, -8];\nconsole.log(Math.max(...negativeNumbers)); // Output: -3`}
      />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Use <code>Math.max()</code> to find the largest number among <code>-3, 9, 15, 2</code>.</li>
        <li>Exercise 2: Create an array of numbers <code>[12, 34, 56, 78, 90]</code> and find the maximum value using <code>Math.max()</code> and the spread operator.</li>
        <li>Exercise 3: Try using <code>Math.max()</code> without any arguments. What is the output, and why?</li>
      </ul>
    </div>
  );
};

export default maxExample;
