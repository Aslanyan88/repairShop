import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-semibold mb-4">Not Found</h2>
      <p className="text-xl mb-6">Could not find requested resource</p>
      <Link href="/home" className="text-blue-600 hover:underline text-lg">
        Return Home
      </Link>
    </div>
  );
}
