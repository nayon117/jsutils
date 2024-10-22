import { useNavigate } from 'react-router-dom';
import { Book, Code, Terminal } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JSUtils
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern JavaScript utility library delivering modularity, performance, & extras.
        </p>
        
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/docs')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/docs')}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Documentation
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={<Book className="h-8 w-8 text-blue-600 mb-4" />}
          title="Comprehensive"
          description="Packed with utilities for every programming challenge."
        />
        <Feature
          icon={<Code className="h-8 w-8 text-blue-600 mb-4" />}
          title="Modular"
          description="Import only what you need, keep your bundles small."
        />
        <Feature
          icon={<Terminal className="h-8 w-8 text-blue-600 mb-4" />}
          title="Modern"
          description="Built for modern JavaScript, with full TypeScript support."
        />
      </div>

      <CodeExample />
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    {icon}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CodeExample = () => (
  <div className="mt-16">
    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
      <pre className="text-gray-100">
        <code>{`// Using array methods with a functional approach
const numbers = [1, 2, 3, 4, 5];

// Transform array elements
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Filter array elements
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]`}</code>
      </pre>
    </div>
  </div>
);

export default Home;