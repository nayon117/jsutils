import CodeBlock from "../../components/codeBlock";

const getElementById = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">document.getElementById()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>document.getElementById()</code> is a method that returns a single element object by its ID. It’s a fast and common way to select elements.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`document.getElementById("elementID");`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="header">Hello World</div>\n\n{/* JavaScript */}\nconst headerElement = document.getElementById("header");\nconsole.log(headerElement.textContent);   // Output: "Hello World"`}
      />

      <h2 className="text-xl font-semibold mb-3">Changing Content Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<button id="changeText">Click me</button>\n<div id="output">Original text</div>\n\n{/* JavaScript */}\ndocument.getElementById("changeText").addEventListener("click", () => {\n  document.getElementById("output").textContent = "Text has been changed!";\n});`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>getElementById()</code> only works with ID attributes. It returns <code>null</code> if no element with the specified ID exists.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Write a function that changes the color of an element with ID box to blue when clicked.</li>
        <li>Exercise 2: Get the value from an input field with ID username and display it in a <code>div</code> with ID output on button click.</li>
      </ul>
    </div>
  );
};

export default getElementById;
