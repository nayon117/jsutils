import CodeBlock from "../../components/codeBlock";

const randomExample = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Math.random()</h1>

      <p className="text-lg text-gray-700 mb-6">
        The <code>Math.random()</code> method returns a pseudo-random floating-point number between <code>0</code> (inclusive) and <code>1</code> (exclusive).
      </p>

      <h2 className="text-xl font-semibold mb-3">Examples</h2>
      <CodeBlock
        code={`console.log(Math.random()); // Output: a random number between 0 and 1`}
      />
    </div>
  );
};

export default randomExample;
