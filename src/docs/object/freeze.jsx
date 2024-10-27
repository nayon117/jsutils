import CodeBlock from "../../components/codeBlock";

const ObjectFreezeMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.freeze()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.freeze()</code> method is used to freeze an object. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed or altered. This method is useful when you want to prevent any modifications to an object.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.freeze()</code> when you need to protect an object from being modified, ensuring its immutability.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.freeze(obj);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>obj</strong>: The object to be frozen.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the frozen object.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Freezing an Object</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2 };\nObject.freeze(obj);\nobj.a = 3;\nconsole.log(obj.a); // Output: 1`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Preventing New Properties</h3>
      <CodeBlock code={`const obj = { a: 1 };\nObject.freeze(obj);\nobj.b = 2;\nconsole.log(obj.b); // Output: undefined`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Nested Objects</h3>
      <CodeBlock code={`const nested = { a: 1, b: { c: 2 } };\nObject.freeze(nested);\nnested.b.c = 3;\nconsole.log(nested.b.c); // Output: 3 (still mutable)`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.freeze()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Freezing Configuration Objects</h3>
      <p className="my-3">Description: Use <code>Object.freeze()</code> to prevent modifications to a configuration object.</p>
      <CodeBlock code={`const config = { apiUrl: "https://api.example.com" };\nObject.freeze(config);\nconfig.apiUrl = "https://api.changed.com";\nconsole.log(config.apiUrl); // Output: "https://api.example.com"`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Managing Constants</h3>
      <p className="my-3">Description: Create a constants object and freeze it to prevent changes.</p>
      <CodeBlock code={`const Constants = { MAX_USERS: 100, APP_NAME: "MyApp" };\nObject.freeze(Constants);\nConstants.APP_NAME = "NewApp";\nconsole.log(Constants.APP_NAME); // Output: "MyApp"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object with properties and freeze it, then try to modify one of the properties.</li>
        <li className="mt-2">Exercise 2: Implement a function that accepts an object, freezes it, and attempts to add a new property.</li>
        <li className="mt-2">Exercise 3: Write a function that freezes a nested object and tests the mutability of its properties.</li>
      </ul>
    </div>
  );
};

export default ObjectFreezeMethod;
