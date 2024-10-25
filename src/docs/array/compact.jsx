import CodeBlock from "../../components/codeBlock";

const compact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">compact</h1>
      <p className="text-lg text-gray-600 mb-6">
        Creates an array with all falsey values removed.
      </p>
      <h2 className="text-xl font-semibold mb-3">Arguments</h2>
      <p>array (Array): The array to process.</p>
      <h2 className="text-xl font-semibold mb-3">Returns</h2>
      <p>Array of truthy values.</p>
      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock code={`JSUtils.compact([0, 1, false, 2, '', 3]); // [1, 2, 3]`} />
      <h2 className="text-xl font-semibold mb-3">Additional Notes</h2>
      <p>Handy for cleaning up data before processing.</p>
    </div>
  );
};

export default compact;
