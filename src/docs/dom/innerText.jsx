import CodeBlock from "../../components/codeBlock";

const InnerText = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.innerText</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.innerText</code> retrieves or changes the visible text inside an HTML element. It respects hidden elements and does not include text from child elements styled with <code>display: none;</code>.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.innerText = "New Text";`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<p id="message">Original message</p>\n\n{/* JavaScript */}\nconst message = document.getElementById("message");\nconsole.log(message.innerText); // Output: "Original message"\n\nmessage.innerText = "Updated message";\nconsole.log(message.innerText); // Output: "Updated message"`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>innerText</code> doesn’t parse HTML tags. For handling HTML content, use <code>innerHTML</code>.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a button that changes the <code>innerText</code> of a paragraph with ID description when clicked.</li>
        <li>Exercise 2: Use <code>innerText</code> to display a message inside an element only if it&apos;s visible.</li>
      </ul>
    </div>
  );
};

export default InnerText;
