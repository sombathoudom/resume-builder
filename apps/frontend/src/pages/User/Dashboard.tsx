import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">My CVs</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90">
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 256 256"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
          </svg>
          New CV
        </button>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4">Recent CVs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-4 flex gap-4 items-center border border-border-light dark:border-border-dark">
            <div
              className="w-24 h-32 bg-center bg-no-repeat bg-cover rounded flex-shrink-0"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRr1dZVtYAG8NnWYZT24xR0zfz5V7VlgMRLNodgvFKpWVRD4rr1mX1BLGfcW0jJH7Kw1RlZ2xjFGvkOqnadxH9I_w5fuAq71LvPZ5etGsZPs7r7zJPv9_7VkQJAeTHlJ8rNXlHsV-qAH35Q-C-gCkCL8b1os63GP3CNB4kKk5wzU9gnm3JQoK8A0-gf3dnyPQH0KDAO6UhVZoCQeqKmzzev2fbadyXaC3Xg02oQgJDTHWcYX-coun01J6rOZ6gIxpeSPxo6p_9-qQ")',
              }}
            ></div>
            <div className="flex-grow">
              <p className="text-lg font-bold">Marketing Manager CV</p>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Template: Modern
              </p>
              <p className="text-xs text-muted-light dark:text-muted-dark mt-2">
                Last edited 2 days ago
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-4 flex gap-4 items-center border border-border-light dark:border-border-dark">
            <div
              className="w-24 h-32 bg-center bg-no-repeat bg-cover rounded flex-shrink-0"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU7kTbQCo2ob5bjhFQjO7_zk9P-CpkKOyaT6XKjB70REDRHlhJIomtPD4V1gajZ5pi892iPgwo_luyoM1TEukvtBUCQ0aOUMnfmsYr4Kwc7Nus8yOWRqYgsxbcMNpYPlYWl1EnTvjew7nk1FKFlatvXNE7F-DUZQVA75AyZLEZX4xUSN0fGKuaTMdz3kIRjzmWyk0oGKPgX23u2XqWi_4IcIlVJXNmwK4GlXnA_1uJ61XS4Mb7USv41Rj2vOUMLByMd-Ln-qE0ePc")',
              }}
            ></div>
            <div className="flex-grow">
              <p className="text-lg font-bold">Software Engineer CV</p>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Template: classNameic
              </p>
              <p className="text-xs text-muted-light dark:text-muted-dark mt-2">
                Last edited 1 week ago
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-bold mb-4">All CVs</h3>
        <div className="bg-white dark:bg-background-dark/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
          <table className="w-full text-left">
            <thead className="bg-background-light/50 dark:bg-background-dark/20 border-b border-border-light dark:border-border-dark">
              <tr>
                <th className="p-4 text-sm font-medium">Name</th>
                <th className="p-4 text-sm font-medium">Template</th>
                <th className="p-4 text-sm font-medium">Last Edited</th>
                <th className="p-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                <td className="p-4 text-sm font-medium">
                  Marketing Manager CV
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  Modern
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  2 days ago
                </td>
                <td className="p-4 text-sm">
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                <td className="p-4 text-sm font-medium">
                  Software Engineer CV
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  classNameic
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  1 week ago
                </td>
                <td className="p-4 text-sm">
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                <td className="p-4 text-sm font-medium">Project Manager CV</td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  Professional
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  2 weeks ago
                </td>
                <td className="p-4 text-sm">
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                <td className="p-4 text-sm font-medium">Graphic Designer CV</td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  Creative
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  1 month ago
                </td>
                <td className="p-4 text-sm">
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-border-light dark:border-border-dark last:border-b-0">
                <td className="p-4 text-sm font-medium">Data Analyst CV</td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  Technical
                </td>
                <td className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  2 months ago
                </td>
                <td className="p-4 text-sm">
                  <a
                    className="font-medium text-primary hover:underline"
                    href="#"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
