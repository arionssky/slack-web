export function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <img
            src="/images/slack-logo.png"
            alt="Slack Logo"
            className="h-8 mr-4"
          />
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Features
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Solutions
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Enterprise
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Resources
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Pricing
            </a>
          </nav>
        </div>

        {/* Search, Sign In, and Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Sign in
          </a>
          <a
            href="#"
            className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50"
          >
            Talk to Sales
          </a>
          <a
            href="#"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
