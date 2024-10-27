import CodeBlock from "../../components/codeBlock";

const arrowFunctionMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Arrow Functions</h1>

      <p className="text-lg text-gray-700 mb-6">
        Arrow functions provide a concise syntax for writing function expressions. They also lexically bind the `this` value, meaning they inherit `this` from the parent scope.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use arrow functions when you need a shorter syntax for functions, especially in callbacks or functional programming scenarios. They are particularly useful in methods like `map()`, `filter()`, and `reduce()`.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`const functionName = (parameters) => { /* function body */ };`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>parameters</strong>: A comma-separated list of parameters. If there is only one parameter, the parentheses can be omitted.</li>
        <li><strong>function body</strong>: The code to be executed. If the body consists of a single expression, you can omit the braces and the return keyword.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the result of the expression in the function body. If braces are used, you need to use the `return` statement explicitly.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const add = (a, b) => a + b;\nconsole.log(add(5, 10)); // Output: 15`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Arrow Functions</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Square an array of numbers.</h3>
      <p className="my-3">Description: Use an arrow function to map over an array and return an array of squared values.</p>
      <CodeBlock code={`const numbers = [1, 2, 3, 4];\nconst squares = numbers.map(num => num ** 2);\nconsole.log(squares); // Output: [1, 4, 9, 16]`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Filter out even numbers from an array.</h3>
      <p className="my-3">Description: Use an arrow function to filter an array and return only odd numbers.</p>
      <CodeBlock code={`const mixedNumbers = [1, 2, 3, 4, 5];\nconst oddNumbers = mixedNumbers.filter(num => num % 2 !== 0);\nconsole.log(oddNumbers); // Output: [1, 3, 5]} />`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an arrow function that takes a string and returns its length.</li>
        <li className="mt-2">Exercise 2: Write an arrow function that takes two parameters and returns the larger of the two.</li>
      </ul>
    </div>
  );
};

export default arrowFunctionMethod;
