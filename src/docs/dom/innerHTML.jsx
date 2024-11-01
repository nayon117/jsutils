import CodeBlock from "../../components/codeBlock";

const InnerHTML = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.innerHTML</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.innerHTML</code> retrieves or sets the HTML content of an element, allowing you to add HTML tags, attributes, and structure within the element.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.innerHTML = "<strong>New HTML content</strong>";`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="content">Hello, <em>world</em>!</div>\n\n{/* JavaScript */}\nconst content = document.getElementById("content");\nconsole.log(content.innerHTML); // Output: "Hello, <em>world</em>!"\n\ncontent.innerHTML = "<h1>Welcome!</h1><p>This is a new message.</p>";`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>innerHTML</code> can be a security risk if using untrusted data. Avoid using it with user-generated content to prevent XSS attacks.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a button that changes the <code>innerHTML</code> of a <code>div</code> to include a list of items.</li>
        <li>Exercise 2: Use <code>innerHTML</code> to dynamically add HTML content with a heading and paragraph to an element.</li>
      </ul>
    </div>
  );
};

export default InnerHTML;
