import routes from "@/lib/routes";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={"/"} className="text-2xl font-semibold text-gray-800">
            AraGraph
          </Link>
          <div className="hidden md:flex space-x-8">
						{routes.map((item) => (
							<Link href={item.path} key={item.label}
							className="text-gray-600 hover:text-gray-900">
								{item.label}
							</Link>
						))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
