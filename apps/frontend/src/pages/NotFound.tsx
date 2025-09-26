import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
          Page not found
        </h1>
        <p className="mt-2 text-base text-background-dark/70 dark:text-background-light/70">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white shadow hover:shadow-md transition"
          >
            Go back home
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-4 py-2 text-primary hover:bg-primary/5 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
