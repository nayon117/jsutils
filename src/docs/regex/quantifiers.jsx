import CodeBlock from "../../components/codeBlock";

const RegexQuantifiers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RegExp Quantifiers</h1>

      <p className="text-lg text-gray-700 mb-6">
        Quantifiers specify how many times a character, group, or character class must occur for a match:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><code>*</code>: Matches 0 or more times.</li>
        <li><code>+</code>: Matches 1 or more times.</li>
        <li><code>?</code>: Matches 0 or 1 time.</li>
        <li><code>{'{'}n{'}'}</code>: Matches exactly n times.</li>
        <li><code>{'{'}n, m{'}'}</code>: Matches between n and m times.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`const text = "aaaabbbb";\n\n// Match "a" repeated 2 or more times\nconsole.log(text.match(/a{2,}/g));   // Output: ["aaaa"]\n\n// Match "b" one or more times\nconsole.log(text.match(/b+/g));   // Output: ["bbbb"]\n\n// Match any character 3 times\nconsole.log("123-abc".match(/.{3}/g));   // Output: ["123", "-ab"]`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> Use quantifiers carefully; <code>*</code> and <code>+</code> can create very broad matches, especially in global searches.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercises</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Match goooal with 2 or more os.</li>
        <li>Exercise 2: Find patterns of exactly three letters in abc def ghi.</li>
      </ul>
    </div>
  );
};

export default RegexQuantifiers;
