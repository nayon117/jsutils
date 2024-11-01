import CodeBlock from "../../components/codeBlock";

const ThrowStatement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">throw Statement</h1>
      <p className="text-lg text-gray-700 mb-6">
        The throw statement is used to create a custom error. When an error is thrown, the normal flow of the program stops, and control is passed to the nearest catch block.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`throw expression;`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`function checkAge(age) {\n  if (age < 18) {\n    throw "You are not old enough!";\n  }\n  return "Access granted!";\n}\n\ntry {\n  console.log(checkAge(15));\n} catch (error) {\n  console.error("Error: " + error);\n}`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> You can throw strings, numbers, or even instances of the Error class to create custom error objects.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that throws an error if the input is not a number.</li>
        <li>Exercise 2: Create a program that simulates user authentication and throws an error if the user is not found.</li>
      </ul>
    </div>
  );
};

export default ThrowStatement;
