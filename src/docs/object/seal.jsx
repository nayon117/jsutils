import CodeBlock from "../../components/codeBlock";

const ObjectSealMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.seal()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.seal()</code> method is used to seal an object. A sealed object cannot have new properties added to it, and existing properties cannot be removed. However, the values of existing properties can still be modified. This method is useful for preventing modifications to an object’s structure while allowing changes to its existing properties.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.seal()</code> when you want to ensure that an objects structure remains unchanged but allow for updates to its values.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.seal(obj);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>obj</strong>: The object to be sealed.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns the sealed object.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Sealing an Object</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2 };\nObject.seal(obj);\nobj.a = 3;\nconsole.log(obj.a); // Output: 3`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Preventing New Properties</h3>
      <CodeBlock code={`const obj = { a: 1 };\nObject.seal(obj);\nobj.b = 2;\nconsole.log(obj.b); // Output: undefined`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Modifying Existing Properties</h3>
      <CodeBlock code={`const obj = { a: 1, b: 2 };\nObject.seal(obj);\nobj.a = 3;\nconsole.log(obj.a); // Output: 3`}/>

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.seal()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Sealing Configuration Objects</h3>
      <p className="my-3">Description: Use <code>Object.seal()</code> to prevent modifications to a configuration objects structure.</p>
      <CodeBlock code={`const config = { apiUrl: "https://api.example.com", timeout: 5000 };\nObject.seal(config);\nconfig.apiUrl = "https://api.changed.com";\nconsole.log(config.apiUrl); // Output: "https://api.changed.com"`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Managing User Profiles</h3>
      <p className="my-3">Description: Create a user profile object and seal it to prevent the addition or removal of properties.</p>
      <CodeBlock code={`const userProfile = { name: "Alice", age: 25 };\nObject.seal(userProfile);\nuserProfile.age = 26;\nconsole.log(userProfile.age); // Output: 26\nuserProfile.location = "NYC";\nconsole.log(userProfile.location); // Output: undefined`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object with properties, seal it, and attempt to add a new property.</li>
        <li className="mt-2">Exercise 2: Implement a function that accepts an object, seals it, and attempts to remove a property.</li>
        <li className="mt-2">Exercise 3: Write a function that seals a nested object and tests the mutability of its properties.</li>
      </ul>
    </div>
  );
};

export default ObjectSealMethod;
