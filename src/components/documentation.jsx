import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Documentation = () => {
  const { category: urlCategory, method: urlMethod } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  
  // Initialize state with URL params
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || '');
  const [selectedMethod, setSelectedMethod] = useState(urlMethod || '');
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = searchParams.get('search') || '';

  // Update state when URL params change
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
    if (urlMethod) {
      setSelectedMethod(urlMethod);
    }
  }, [urlCategory, urlMethod]);

  // Documentation structure
  const docs = {
    'Array': {
      methods: ['chunk', 'compact', 'concat', 'difference', 'drop', 'filter', 'find', 'map'],
      description: 'Methods for array manipulation and transformation.'
    },
    'Object': {
      methods: ['assign', 'clone', 'get', 'has', 'keys', 'merge', 'omit', 'pick'],
      description: 'Utility functions for working with objects.'
    },
    'String': {
      methods: ['camelCase', 'capitalize', 'endsWith', 'escape', 'kebabCase', 'toLowerCase'],
      description: 'String manipulation and formatting utilities.'
    },
    'Function': {
      methods: ['debounce', 'memoize', 'throttle', 'curry', 'partial', 'compose'],
      description: 'Function decorators and composition utilities.'
    }
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery) {
      const results = [];
      Object.entries(docs).forEach(([category, { methods }]) => {
        methods.forEach(method => {
          if (method.toLowerCase().includes(searchQuery.toLowerCase()) ||
              category.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({ category, method });
          }
        });
      });
      setSearchResults(results);
    }
  }, [searchQuery]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
      setSelectedMethod('');
      navigate('/docs');
    } else {
      setSelectedCategory(category);
      setSelectedMethod('');
      navigate(`/docs/${category}`);
    }
  };

  const handleMethodClick = (category, method) => {
    setSelectedMethod(method);
    navigate(`/docs/${category}/${method}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar - Categories */}
      <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          {searchQuery ? (
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Search Results</h3>
              {searchResults.map(({ category, method }, index) => (
                <button
                  key={`${category}-${method}-${index}`}
                  onClick={() => handleMethodClick(category, method)}
                  className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                >
                  {category} → {method}
                </button>
              ))}
              {searchResults.length === 0 && (
                <p className="text-gray-500 text-sm px-3">No results found</p>
              )}
            </div>
          ) : (
            Object.keys(docs).map(category => (
              <div key={category} className="mb-2">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between ${
                    selectedCategory === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>{category}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transform transition-transform ${
                      selectedCategory === category ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {selectedCategory === category && (
                  <div className="ml-4 mt-1 space-y-1">
                    {docs[category].methods.map(method => (
                      <button
                        key={method}
                        onClick={() => handleMethodClick(category, method)}
                        className={`w-full text-left px-3 py-1 text-sm rounded-md ${
                          selectedMethod === method ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-8 px-6">
          {selectedCategory && selectedMethod ? (
            <MethodDocumentation
              category={selectedCategory}
              method={selectedMethod}
            />
          ) : selectedCategory ? (
            <div className="text-gray-600">
              <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
              <p className="mb-4">{docs[selectedCategory].description}</p>
              <p>Select a method from the sidebar to view its documentation.</p>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              Select a category and method from the sidebar to view its documentation.
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Quick Nav */}
      {selectedCategory && selectedMethod && (
        <div className="hidden lg:block w-56 bg-gray-50 border-l border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#arguments" className="text-gray-600 hover:text-gray-900">Arguments</a>
            </li>
            <li>
              <a href="#returns" className="text-gray-600 hover:text-gray-900">Returns</a>
            </li>
            <li>
              <a href="#example" className="text-gray-600 hover:text-gray-900">Example</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
const MethodDocumentation = ({ category, method }) => (
    <div>
      <h1 className="text-3xl font-bold mb-4">{method}</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Method from {category} category - Documentation content goes here.
        </p>
        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <pre className="text-gray-100">
            <code>{`// Example usage of ${method}
  const result = JSUtils.${method}([1, 2, 3]);
  console.log(result);`}</code>
          </pre>
        </div>
        <h2 id="arguments" className="text-xl font-semibold mb-3">Arguments</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <code className="bg-gray-100 px-2 py-1 rounded">array</code> (Array): The array to process
          </li>
        </ul>
        <h2 id="returns" className="text-xl font-semibold mb-3">Returns</h2>
        <p className="mb-6">(Array): Returns the new array of filtered values.</p>
        <h2 id="example" className="text-xl font-semibold mb-3">Example</h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <pre className="text-gray-100">
            <code>{`// Additional example of ${method}
  const data = [1, 2, 3, 4, 5];
  const result = JSUtils.${method}(data);
  // Result explanation here`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
  
  export default Documentation;