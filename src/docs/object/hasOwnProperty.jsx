import CodeBlock from "../../components/codeBlock";

const ObjectHasOwnPropertyMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.prototype.hasOwnProperty()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>hasOwnProperty()</code> method is a built-in JavaScript function that checks if an object has a specific property as its own (not inherited) property. This is useful for distinguishing between properties that are directly on the object and those that come from its prototype chain.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>hasOwnProperty()</code> when you need to verify if an object contains a property that is not inherited from its prototype.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`obj.hasOwnProperty(prop);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>prop</strong>: A string representing the name of the property to check.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns <code>true</code> if the property exists as a direct property of the object; otherwise, returns <code>false</code>.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Checking Own Properties</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2 };\nconsole.log(obj.hasOwnProperty('a')); // Output: true\nconsole.log(obj.hasOwnProperty('b')); // Output: true`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Checking Inherited Properties</h3>
      <CodeBlock code={`function Parent() { this.inherited = 'inherited'; }\nconst child = new Parent();\nconsole.log(child.hasOwnProperty('inherited')); // Output: false`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Working with Prototypes</h3>
      <CodeBlock code={`const obj = { a: 1 };\nObject.prototype.b = 2;\nconsole.log(obj.hasOwnProperty('b')); // Output: false\nconsole.log(obj.hasOwnProperty('a')); // Output: true`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with hasOwnProperty()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Checking Object Properties</h3>
      <p className="my-3">Description: Create an object and use <code>hasOwnProperty()</code> to check if it contains a specific property.</p>
      <CodeBlock code={`const person = { name: "Alice", age: 25 };\nconsole.log(person.hasOwnProperty('name')); // Output: true`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Filtering Object Properties</h3>
      <p className="my-3">Description: Write a function that takes an object and an array of properties, returning only the properties that belong directly to the object.</p>
      <CodeBlock code={`const obj = { x: 1, y: 2 };\nObject.prototype.z = 3;\nfunction getOwnProperties(obj, props) {\n  return props.filter(prop => obj.hasOwnProperty(prop));\n}\nconsole.log(getOwnProperties(obj, ['x', 'y', 'z'])); // Output: ['x', 'y']`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object with several properties and use <code>hasOwnProperty()</code> to check for the presence of a specific property.</li>
        <li className="mt-2">Exercise 2: Implement a function that accepts an object and checks if it has properties using <code>hasOwnProperty()</code>.</li>
        <li className="mt-2">Exercise 3: Use <code>hasOwnProperty()</code> to differentiate between own and inherited properties in a prototype chain.</li>
      </ul>
    </div>
  );
};

export default ObjectHasOwnPropertyMethod;
