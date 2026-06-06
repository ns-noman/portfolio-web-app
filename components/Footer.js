import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white">
            Copyright © 2017{" "}
            <Link
              href="/"
              className="font-bold no-underline hover:text-gray-300 transition-colors"
            >
              CVIT
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}