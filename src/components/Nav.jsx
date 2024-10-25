import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ChevronRight, Github } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/docs?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button 
              className="md:hidden -ml-2 px-4 inline-flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-800">
                JSUtils
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            
            <Link 
              to="/docs"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Docs
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Github className="inline-block h-5 w-5 mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-25" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <Link 
                  to="/" 
                  className="text-xl font-bold text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  JSUtils
                </Link>
                <button onClick={() => setIsMenuOpen(false)}>
                  <ChevronRight className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <form onSubmit={handleSearch} className="mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
              <nav className="mt-4">
                <Link 
                  to="/docs"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Docs
                </Link>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;