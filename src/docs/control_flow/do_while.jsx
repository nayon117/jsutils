import CodeBlock from "../../components/codeBlock";

const doWhileLoop = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">do...while Loop</h1>
      <p className="text-lg text-gray-700 mb-6">
        The do...while loop executes a block of code once before checking the condition. After that, it continues to execute as long as the specified condition is true.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`do {\n  // code to be executed\n} while (condition);`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`let i = 0;\ndo {\n  console.log("Iteration: " + i);\n  i++;\n} while (i < 5);`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The code inside the do block will always execute at least once, even if the condition is false.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that prompts the user for input until they enter stop.</li>
        <li>Exercise 2: Create a program that displays numbers from 1 to 10, skipping 5.</li>
      </ul>
    </div>
  );
};

export default doWhileLoop;
