import CodeBlock from "../../components/codeBlock";

const forEachMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">JavaScript Array forEach Method</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        The <code>forEach()</code> method is used to execute a provided function once for each array element. It is a simple way to iterate over arrays without needing to manage a loop counter or break out of a loop.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`array.forEach(callback(currentValue [, index [, array]]) [, thisArg]);`} />

      <h2 className="text-xl font-semibold mb-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>callback:</strong> A function that is called for each element in the array. It takes up to three arguments:</li>
        <ul className="list-disc list-inside">
          <li><code>currentValue:</code> The current element being processed in the array.</li>
          <li><code>index:</code> (Optional) The index of the current element being processed.</li>
          <li><code>array:</code> (Optional) The array forEach was called upon.</li>
        </ul>
        <li><strong>thisArg:</strong> (Optional) Value to use as <code>this</code> when executing the callback.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Example 1: Basic Usage</h2>
      <p className="mb-4">
        Here a simple example that logs each element of an array to the console:
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];\n\nnumbers.forEach(num => {\n  console.log(num);\n});`}
      />
      <p className="mb-4">
        Output:
        <CodeBlock code={`1\n2\n3\n4\n5`} />
      </p>

      <h2 className="text-xl font-semibold mb-3">Example 2: Using Index</h2>
      <p className="mb-4">
        You can also access the index of each element while iterating:
      </p>
      <CodeBlock
        code={`const fruits = ["apple", "banana", "cherry"];\n\nfruits.forEach((fruit, index) => {\n  console.log(\`Index: \${index}, Fruit: \${fruit}\`);\n});`}
      />
      <p className="mb-4">
        Output:
        <CodeBlock code={`Index: 0, Fruit: apple\nIndex: 1, Fruit: banana\nIndex: 2, Fruit: cherry`} />
      </p>

      <h2 className="text-xl font-semibold mb-3">Example 3: Modifying Array Elements</h2>
      <p className="mb-4">
        Note that <code>forEach()</code> does not create a new array or modify the original array. However, you can modify the elements directly if you access them by index:
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3];\n\nnumbers.forEach((num, index) => {\n  numbers[index] = num * 2;\n});\n\nconsole.log(numbers);`}
      />
      <p className="mb-4">
        Output:
        <CodeBlock code={`[2, 4, 6]`} />
      </p>

      <h2 className="text-xl font-semibold mb-3">Example 4: Using thisArg</h2>
      <p className="mb-4">
        You can set the <code>this</code> value for the callback function using the <code>thisArg</code> parameter:
      </p>
      <CodeBlock
        code={`const obj = {\n  factor: 3,\n  multiply(num) {\n    return num * this.factor;\n  }\n};\n\nconst numbers = [1, 2, 3];\n\nnumbers.forEach(function(num) {\n  console.log(obj.multiply(num));\n}, obj);`}
      />
      <p className="mb-4">
        Output:
        <CodeBlock code={`3\n6\n9`} />
      </p>

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The <code>forEach()</code> method is not chainable since it does not return a new array, but it is a good choice for executing side effects.
      </p>

      {/* Exercises Section */}
      <h2 className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an array of numbers and use <code>forEach()</code> to calculate and log their squares.</li>
        <li>Exercise 2: Write a function that takes an array of strings and uses <code>forEach()</code> to log the length of each string.</li>
        <li>Exercise 3: Create an object that contains an array and use <code>forEach()</code> to iterate over the array, applying a method on each element.</li>
      </ul>
    </div>
  );
};

export default forEachMethod;
