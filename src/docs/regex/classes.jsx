import CodeBlock from "../../components/codeBlock";

const RegexCharacterClasses = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp Character Classes</h1>

      <p className="text-lg text-gray-700 mb-6">
        Character classes allow you to match specific types of characters:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><code>\\d</code>: Matches any digit (0-9).</li>
        <li><code>\\w</code>: Matches any word character (letters, digits, underscores).</li>
        <li><code>\\s</code>: Matches any whitespace character.</li>
        <li><code>\\D</code>, <code>\\W</code>, <code>\\S</code>: Matches non-digit, non-word, and non-whitespace characters, respectively.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "The price is 100 dollars";\n\n// Match digits\nconsole.log(text.match(/\\d+/g));   // Output: ["100"]\n\n// Match word characters\nconsole.log(text.match(/\\w+/g));   // Output: ["The", "price", "is", "100", "dollars"]\n\n// Match whitespace\nconsole.log(text.match(/\\s/g));   // Output: [" ", " ", " ", " "]`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Combining character classes can help narrow down searches, like <code>\\d\\w+</code> to find digits followed by letters.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Match all whitespace characters in New York City.</li>
        <li>Exercise 2: Find all digits in Apartment 101, 2nd floor.</li>
      </ul>
    </div>
  );
};

export default RegexCharacterClasses;
