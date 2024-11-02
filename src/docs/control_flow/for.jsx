import CodeBlock from "../../components/codeBlock";

const forLoop = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">for Loop</h1>
      <p className="text-lg text-gray-700 mb-6">
        The for loop repeats a block of code a specified number of times. It consists of three parts: initialization, condition, and increment/decrement.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`for (initialization; condition; increment) {\n  // code to be executed in each iteration\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`for (let i = 0; i < 5; i++) {\n  console.log("Iteration: " + i);\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> You can use <code>break</code> to exit the loop early and <code>continue</code> to skip the current iteration.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a program that prints the multiplication table for a given number.</li>
        <li>Exercise 2: Create a program that sums all numbers from 1 to 100.</li>
      </ul>
    </div>
  );
};

export default forLoop;
