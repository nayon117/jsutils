import CodeBlock from "../../components/codeBlock";

const addEventListener = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">.addEventListener()</h1>
      <p className="text-lg text-gray-700 mb-6">
        <code>element.addEventListener()</code> attaches an event handler to an element, allowing you to specify the type of event (like click or mouseover) and the function to execute when the event occurs. This method lets you add multiple event listeners of the same type on a single element, which <code>onclick</code> does not.
      </p>

      <h2 className="text-xl font-semibold mb-3">Syntax</h2>
      <CodeBlock code={`element.addEventListener("event", handlerFunction, useCapture);`} />

      <h2 className="text-xl font-semibold mb-3">Example</h2>
      <CodeBlock
        code={`{/* HTML */}\n<button id="myButton">Click me</button>\n\n{/* JavaScript */}\nconst button = document.getElementById("myButton");\nbutton.addEventListener("click", () => {\n  alert("Button clicked!");\n});`}
      />

      <p className="bg-yellow-100 p-3 rounded">
        <strong>Note:</strong> The third argument, <code>useCapture</code>, determines the event flow. By default, it is <code>false</code> (bubble phase). Setting it to <code>true</code> will trigger the event on the capture phase.
      </p>

      <h2 id="exercise" className="text-xl font-semibold my-3">Exercise</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Exercise 1: Create a button that logs Button was clicked in the console each time it’s clicked.</li>
        <li>Exercise 2: Add an event listener to a <code>div</code> that changes its background color on mouse over.</li>
      </ul>
    </div>
  );
};

export default addEventListener;
