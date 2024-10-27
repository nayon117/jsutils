import CodeBlock from "../../components/codeBlock";

const concatMethod = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.concat()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The .concat() method is used to join two or more strings together and returns a new string.
      </p>

      <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
      <p className="my-3">
        Use .concat() when you want to combine multiple strings into one without modifying the original strings.
      </p>

      <h2 id="syntax" className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`string1.concat(string2, string3, ...);`} />

      <h2 className="text-xl font-semibold my-3">Parameters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>string2, string3, ...</strong>: (String) The strings to concatenate with the original string.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Return Value</h2>
      <p className="my-3">
        Returns a new string that combines the original string with the provided strings.
      </p>

      <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`let greeting = "Hello";\nlet name = "World";\nlet message = greeting.concat(", ", name, "!");\nconsole.log(message); // Output: "Hello, World!"`} />

      <h2 className="text-xl font-semibold my-3">Problem Solving with .concat()</h2>

      <h3 className="text-lg font-semibold mb-2">Problem 1: Create a full name from first and last names.</h3>
      <p className="my-3">Description: Given a first name and a last name, use .concat() to create a full name.</p>
      <CodeBlock code={`let firstName = "John";\nlet lastName = "Doe";\nlet fullName = firstName.concat(" ", lastName);\nconsole.log(fullName); // Output: "John Doe"`} />

      <h3 className="text-lg font-semibold my-3">Problem 2: Combine multiple strings into a single sentence.</h3>
      <p className="my-3">Description: Use .concat() to join several strings into a coherent sentence.</p>
      <CodeBlock code={`let part1 = "Learning";\nlet part2 = "JavaScript";\nlet part3 = "is fun!";\nlet sentence = part1.concat(" ", part2, " ", part3);\nconsole.log(sentence); // Output: "Learning JavaScript is fun!"`} />

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that takes an array of strings and uses .concat() to return a single concatenated string.</li>
        <li className="mt-2">Exercise 2: Given two sentences, use .concat() to combine them into a single paragraph.</li>
      </ul>
    </div>
  );
};

export default concatMethod;
