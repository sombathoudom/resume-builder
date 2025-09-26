import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const PublicLayout = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 dark:border-primary/30 px-10 py-3">
          <div className="flex items-center gap-3 text-background-dark dark:text-background-light">
            <div className="w-8 h-8 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6_535)">
                  <path
                    clip-rule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-xl font-bold">ResumeCraft</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-background-dark/80 dark:text-background-light/80">
            <Link
              className="text-sm font-medium hover:text-primary"
              to={{
                pathname: "/",
                hash: "#templates",
              }}
            >
              Templates
            </Link>
            <a className="text-sm font-medium hover:text-primary" href="#">
              Features
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
            <Button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
              <span className="truncate">Create My Resume</span>
            </Button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCelHhW2HH9OyQE7qM0C_vOcreW7ZwsNV6j_Pl0JGOvt09wqWa-sl45fEBr3piQlvVhYR3i3R08Wqpij6CevtBqXVF0qvwk7WwAj_NMktuz4QW0ulpelv73-l-DgypLTIoV4w19GbjsDlLQ8ybiFHZO-zuq2aFr8fDcx6CXBZ0nRwsd7TEPaIL_FkKi-4BE2ulqmpOb39R2DJ8P51_uesuP71odQLA_04UjQLvm3OBA5D5_-Jr7qan_ipO-B3YqeZbBpV0MGDbarUw")',
              }}
            ></div>
            <button className="md:hidden text-background-dark dark:text-background-light">
              <span className="material-symbols-outlined"> menu </span>
            </button>
          </div>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 dark:border-primary/30">
          <div className="max-w-6xl mx-auto py-10 px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 text-background-dark dark:text-background-light">
                <div className="w-8 h-8 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_535_footer)">
                      <path
                        clip-rule="evenodd"
                        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_535_footer">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">ResumeCraft</h2>
              </div>
              <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-background-dark/70 dark:text-background-light/70">
                <a className="hover:text-primary" href="#">
                  About Us
                </a>
                <a className="hover:text-primary" href="#">
                  Contact
                </a>
                <a className="hover:text-primary" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-primary" href="#">
                  Terms of Service
                </a>
              </nav>
              <div className="flex items-center gap-4 text-background-dark/60 dark:text-background-light/60">
                <a className="hover:text-primary" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a className="hover:text-primary" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a className="hover:text-primary" href="#">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20 dark:border-primary/30 text-center text-sm text-background-dark/60 dark:text-background-light/60">
              <p>© 2024 ResumeCraft. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PublicLayout;
