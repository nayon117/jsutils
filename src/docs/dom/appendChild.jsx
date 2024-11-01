import CodeBlock from "../../components/codeBlock";

const AppendChild = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.appendChild()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.appendChild()</code> adds a node to the end of the list of children of a specified parent node. It can be used to add elements dynamically to the DOM.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`parentNode.appendChild(childNode);`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<div id="container"></div>\n\n{/* JavaScript */}\nconst container = document.getElementById("container");\nconst newParagraph = document.createElement("p");\nnewParagraph.innerText = "This is a new paragraph.";\n\ncontainer.appendChild(newParagraph);`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> <code>appendChild()</code> moves an existing node instead of duplicating it if it’s already present in the document.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a button that, when clicked, appends a new list item to a list.</li>
        <li>Exercise 2: Write a function that dynamically adds a specified number of paragraph elements to a <code>div</code>.</li>
      </ul>
    </div>
  );
};

export default AppendChild;
