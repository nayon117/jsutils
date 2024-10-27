import CodeBlock from "../../components/codeBlock";

const DeleteOperator = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">The delete Operator</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>delete</code> operator is used to remove a property from an object. This operation can be useful when you need to dynamically remove properties from an object during runtime.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use the <code>delete</code> operator when you want to remove properties from an object without creating a new object.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`delete object.property;\n// or \ndelete object['property'];`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>object</strong>: The object from which the property should be deleted.
        </li>
        <li>
          <strong>property</strong>: The name of the property to be deleted (can be accessed via dot notation or bracket notation).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns <code>true</code> if the property was successfully deleted, or <code>false</code> if the property could not be deleted (e.g., if it is a non-configurable property).
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Examples</h2>

      <h3 className="text-lg font-semibold mb-2">Example 1: Deleting a Property</h3>
      <CodeBlock code={`const person = { name: 'Alice', age: 25 };\ndelete person.age;\nconsole.log(person); // Output: { name: 'Alice' }`} />

      <h3 className="text-lg font-semibold mb-2">Example 2: Deleting a Non-Existent Property</h3>
      <CodeBlock code={`const car = { brand: 'Toyota', model: 'Camry' };\ndelete car.year;\nconsole.log(car); // Output: { brand: 'Toyota', model: 'Camry' }`} />

      <h3 className="text-lg font-semibold mb-2">Example 3: Using Bracket Notation</h3>
      <CodeBlock code={`const book = { title: '1984', author: 'George Orwell' };\ndelete book['author'];\nconsole.log(book); // Output: { title: '1984' }`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with delete</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Remove a Property from an Object</h3>
      <p className="my-3">Description: Use the <code>delete</code> operator to remove a specified property from an object.</p>
      <CodeBlock code={`const student = { name: 'John', age: 20, major: 'Physics' };\ndelete student.major;\nconsole.log(student); // Output: { name: 'John', age: 20 }`} />

      <h3 className="text-lg font-semibold mb-2">Problem 2: Check If Deletion Was Successful</h3>
      <p className="my-3">Description: Check if a property deletion was successful using the return value of the <code>delete</code> operator.</p>
      <CodeBlock code={`const user = { username: 'JaneDoe', email: 'jane@example.com' };\nconst isDeleted = delete user.email;\nconsole.log(isDeleted); // Output: true\nconsole.log(user); // Output: { username: 'JaneDoe' }`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create an object and remove one of its properties using the <code>delete</code> operator.</li>
        <li className="mt-2">Exercise 2: Write a function that takes an object and a property name as arguments and removes that property if it exists.</li>
        <li className="mt-2">Exercise 3: Attempt to delete a property from an object and log whether the deletion was successful.</li>
      </ul>
    </div>
  );
};

export default DeleteOperator;
