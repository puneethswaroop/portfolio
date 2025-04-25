import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The portfolio item you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        Return to Gallery
      </Link>
    </div>
  );
}
