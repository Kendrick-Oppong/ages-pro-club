import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const steps = [
    { path: "/personal-details", label: "Personal Details" },
    { path: "/bootcamp", label: "Pro Club" },
    { path: "/overview", label: "Overview" },
  ];

  // Find the active step index based on the current path
  const activeStepIndex = steps.findIndex((step) =>
    pathName.startsWith(step.path)
  );

  // Calculate the width of the progress bar based on the active step
  const progressBarWidth = `${((activeStepIndex + 1) / steps.length) * 100}%`;

  return (
    <div className="mt-6 px-5 sm:px-10 ">
        <div>
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-2 rounded-full transition-transform bg-blue-500`}
              style={{ width: progressBarWidth }}
            />
          </div>

          <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`text-base flex items-center ${
                  index === steps.length - 1
                    ? "justify-end"
                    : `justify-${
                        index === 0 ? "start" : index === 1 ? "center" : "end"
                      }`
                } ${
                  index === activeStepIndex
                    ? "text-white bg-green-500 p-1 px-5 rounded-lg"
                    : "text-blue-600"
                } sm:gap-1.5`}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <svg
                  className="h-6 w-6 sm:h-5 sm:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </li>
            ))}
          </ol>
        </div>
      </div>
  );
};
