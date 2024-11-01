import CodeBlock from "../../components/codeBlock";

const Switch = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">switch Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The switch statement evaluates an expression and executes the corresponding case block that matches the value of the expression. It is often used as an alternative to multiple if-else statements.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`switch (expression) {\n  case value1:\n    // code to be executed if expression matches value1\n    break;\n  case value2:\n    // code to be executed if expression matches value2\n    break;\n  default:\n    // code to be executed if no case matches\n}`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`const fruit = "apple";\nswitch (fruit) {\n  case "banana":\n    console.log("This is a banana.");\n    break;\n  case "apple":\n    console.log("This is an apple.");\n    break;\n  default:\n    console.log("Unknown fruit.");\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Always include a break statement to prevent fall-through to the next case.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a program that outputs the day of the week based on a number (1-7).</li>
        <li>Exercise 2: Write a program that classifies a number as low, medium, or high based on a range of values.</li>
      </ul>
    </div>
  );
};

export default Switch;
