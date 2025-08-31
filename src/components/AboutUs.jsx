import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 
                     mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] 
                     stroke-gray-200 dark:stroke-gray-700"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      
      {/* Content Section */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                      lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 
                        lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Frameworko</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty 
                             text-gray-900 dark:text-white sm:text-5xl">
                IT Company in Kuwait, Pakistan & GCC
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                Frameworko is a trusted IT solutions provider in Kuwait, Pakistan & GCC. 
                We design websites, mobile apps & custom software with PayPal, Stripe & KNET payment support.
              </p>
            </div>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="-mt-12 -ml-12 p-12 
                        lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Project Screenshot"
            src="./src/assets/agile.png"
            className="bg-transparent"
          />
        </div>

        {/* Bottom Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 
                        lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-lg">
              <p>
                At <b>Frameworko</b>, we believe that every successful digital product starts with a clear understanding of our client’s goals. Our working style blends <b>industry-proven methodologies</b> such as Agile and Scrum with cutting-edge tools to ensure efficiency, transparency, and quality at every stage. We begin by conducting detailed requirement-gathering sessions, where our team of business analysts and project managers work closely with clients to define objectives, user needs, and technical specifications. These requirements are then translated into structured wireframes, prototypes, and development roadmaps. Our expert designers, developers, and QA engineers collaborate throughout the process, ensuring seamless communication and fast iterations. From concept to deployment, we focus on delivering scalable, secure and user-friendly solutions that transform your vision into a strong digital presence.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Requirement Gathering & Analysis
                    </strong> — In-depth discussions, workshops, and documentation 
                    to capture client needs and transform them into actionable technical plans.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Agile Development with Expert Teams
                    </strong> — Flexible and iterative development cycles using Agile/Scrum, 
                    ensuring faster delivery, adaptability and transparency.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Tools & Technologies for Excellence
                    </strong> — We use modern frameworks, cloud platforms, and collaboration 
                    tools (e.g., GitHub, Jira, Figma, CI/CD pipelines) to build robust, 
                    scalable and future-ready solutions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
