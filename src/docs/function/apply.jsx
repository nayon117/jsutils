import CodeBlock from "../../components/codeBlock";

const applyMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.apply()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .apply() method calls a function with a given `this` value and an array or array-like object of arguments.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .apply() when you need to invoke a function with a specific context and want to pass multiple arguments as an array.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`function.apply(thisArg, [argsArray]);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>thisArg</strong>: The value to use as `this` when executing the function.</li>
        <li><strong>argsArray</strong>: An array or array-like object containing the arguments to be passed to the function.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the result of the function call. If the function does not return a value, it returns `undefined`.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`const obj = { num: 42 };\nconst getNum = function(a, b) {\n  return this.num + a + b;\n};\nconsole.log(getNum.apply(obj, [1, 2])); // Output: 45`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .apply()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Invoke a function with array arguments.</h3>
      <p className="my-3">Description: Use .apply() to invoke a function that takes multiple arguments passed as an array.</p>
      <CodeBlock code={`function multiply(a, b) {\n  return a * b;\n}\nconst numbers = [5, 10];\nconsole.log(multiply.apply(null, numbers)); // Output: 50`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Calculate the maximum value in an array.</h3>
      <p className="my-3">Description: Use .apply() with Math.max() to find the maximum number in an array.</p>
      <CodeBlock code={`const values = [1, 3, 5, 2, 4];\nconst maxValue = Math.max.apply(null, values);\nconsole.log(maxValue); // Output: 5`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a function that takes three numbers and returns their sum, and use .apply() to calculate the sum with an array of numbers.</li>
        <li className="mt-2">Exercise 2: Write a function that takes an array of strings and concatenates them, and use .apply() to invoke it with different arrays.</li>
      </ul>
    </div>
  );
};

export default applyMethod;
