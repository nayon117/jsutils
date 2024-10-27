import CodeBlock from "../../components/codeBlock";

const ObjectCreateMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Object.create()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Object.create()</code> method creates a new object with the specified prototype object and properties. This method allows for easy inheritance by specifying an existing object as the prototype of the new object.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use <code>Object.create()</code> when you want to create an object that inherits from another object without using a constructor function.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`Object.create(proto, propertiesObject);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>proto</strong>: The object which should be the prototype of the newly created object.
        </li>
        <li>
          <strong>propertiesObject</strong> (optional): An object whose own enumerable properties (if any) represent property descriptors to be added to the new object.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new object with the specified prototype and properties.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Basic Usage</h3>
      <CodeBlock code={`const animal = { sound: 'roar' };\nconst lion = Object.create(animal);\nconsole.log(lion.sound); // Output: 'roar'`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Adding Properties</h3>
      <CodeBlock code={`const person = { name: 'Alice' };\nconst student = Object.create(person, {\n  grade: { value: 'A', writable: true }\n});\nconsole.log(student.name); // Output: 'Alice'\nconsole.log(student.grade); // Output: 'A'`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Inherited Properties</h3>
      <CodeBlock code={`const vehicle = { wheels: 4 };\nconst car = Object.create(vehicle);\nconsole.log(car.wheels); // Output: 4\ncar.wheels = 5; // Attempt to change inherited property\nconsole.log(car.wheels); // Output: 5 (new property, not changing prototype)`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with Object.create()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Inheriting Properties</h3>
      <p className="my-3">Description: Create an object and use <code>Object.create()</code> to inherit properties from another object.</p>
      <CodeBlock code={`const base = { baseProp: 'I am a base property' };\nconst derived = Object.create(base);\nconsole.log(derived.baseProp); // Output: 'I am a base property'`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Creating Objects with Properties</h3>
      <p className="my-3">Description: Write a function that creates a new object with specified prototype and properties using <code>Object.create()</code>.</p>
      <CodeBlock code={`function createAnimal(name, sound) {\n  return Object.create({}, {\n    name: { value: name },\n    sound: { value: sound }\n  });\n}\nconst dog = createAnimal('Dog', 'Bark');\nconsole.log(dog.name); // Output: 'Dog'\nconsole.log(dog.sound); // Output: 'Bark'`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a prototype object and then create a new object that inherits from it using <code>Object.create()</code>.</li>
        <li className="mt-2">Exercise 2: Use <code>Object.create()</code> to create an object with properties that are defined as non-writable.</li>
        <li className="mt-2">Exercise 3: Explore how changes to the prototype affect the created object.</li>
      </ul>
    </div>
  );
};

export default ObjectCreateMethod;
