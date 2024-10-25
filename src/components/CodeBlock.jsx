/* eslint-disable react/prop-types */

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-6">
      <pre className="text-green-400 overflow-x-auto">
        <code className="text-sm md:text-base">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
