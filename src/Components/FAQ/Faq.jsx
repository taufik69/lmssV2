import React from "react";

const Faq = () => {
  // return (
  //   <>
  //     <div className="pt-12 pb-24">
  //       <div className="max-w-screen-xl mx-auto">
  //         <Title className="!max-w-full" title={"সচরাচর জিজ্ঞাসা"} />

  //         <div
  //           className="border border-[#ebebeb] rounded-xl overflow-hidden max-w-[900px] mx-auto"
  //           id="accordion-flush"
  //           data-accordion="collapse"
  //           data-active-classes="bg-white text-gray-900 "
  //           data-inactive-classes="text-gray-500 "
  //         >
  //           <h2 id="accordion-flush-heading-1">
  //             <button
  //               type="button"
  //               className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
  //               data-accordion-target="#accordion-flush-body-1"
  //               aria-expanded="true"
  //               aria-controls="accordion-flush-body-1"
  //             >
  //               <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
  //                 কোর্সগুলো কাদের জন্য?
  //               </summary>
  //               <svg
  //                 data-accordion-icon
  //                 className="w-3 h-3 rotate-180 shrink-0"
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 10 6"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M9 5 5 1 1 5"
  //                 />
  //               </svg>
  //             </button>
  //           </h2>
  //           <div
  //             id="accordion-flush-body-1"
  //             className="hidden"
  //             aria-labelledby="accordion-flush-heading-1"
  //           >
  //             <div className="py-5 border-b border-gray-200 ">
  //               <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
  //                 {" "}
  //                 কোর্সগুলো এডমিশন পরীক্ষার্থীদের জন্য
  //               </div>
  //             </div>
  //           </div>

  //           <h2 id="accordion-flush-heading-2">
  //             <button
  //               type="button"
  //               className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
  //               data-accordion-target="#accordion-flush-body-2"
  //               aria-expanded="false"
  //               aria-controls="accordion-flush-body-2"
  //             >
  //               <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
  //                 কোর্সগুলো কাদের জন্য?
  //               </summary>
  //               <svg
  //                 data-accordion-icon
  //                 className="w-3 h-3 rotate-180 shrink-0"
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 10 6"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M9 5 5 1 1 5"
  //                 />
  //               </svg>
  //             </button>
  //           </h2>
  //           <div
  //             id="accordion-flush-body-2"
  //             className="hidden"
  //             aria-labelledby="accordion-flush-heading-2"
  //           >
  //             <div className="py-5 border-b border-gray-200 ">
  //               <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
  //                 {" "}
  //                 না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
  //               </div>
  //             </div>
  //           </div>

  //           <h2 id="accordion-flush-heading-3">
  //             <button
  //               type="button"
  //               className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
  //               data-accordion-target="#accordion-flush-body-3"
  //               aria-expanded="false"
  //               aria-controls="accordion-flush-body-3"
  //             >
  //               <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
  //                 কোর্সগুলো কাদের জন্য?
  //               </summary>
  //               <svg
  //                 data-accordion-icon
  //                 className="w-3 h-3 rotate-180 shrink-0"
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 10 6"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M9 5 5 1 1 5"
  //                 />
  //               </svg>
  //             </button>
  //           </h2>
  //           <div
  //             id="accordion-flush-body-3"
  //             className="hidden"
  //             aria-labelledby="accordion-flush-heading-3"
  //           >
  //             <div className="py-5 border-b border-gray-200 ">
  //               <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
  //                 {" "}
  //                 না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
  //               </div>
  //             </div>
  //           </div>

  //           <h2 id="accordion-flush-heading-4">
  //             <button
  //               type="button"
  //               className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200 "
  //               data-accordion-target="#accordion-flush-body-4"
  //               aria-expanded="false"
  //               aria-controls="accordion-flush-body-4"
  //             >
  //               <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
  //                 কোর্সগুলো কাদের জন্য?
  //               </summary>
  //               <svg
  //                 data-accordion-icon
  //                 className="w-3 h-3 rotate-180 shrink-0"
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 10 6"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M9 5 5 1 1 5"
  //                 />
  //               </svg>
  //             </button>
  //           </h2>
  //           <div
  //             id="accordion-flush-body-4"
  //             className="hidden"
  //             aria-labelledby="accordion-flush-heading-4"
  //           >
  //             <div className="py-5 border-b border-gray-200 ">
  //               <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
  //                 {" "}
  //                 না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span>
            What are the differences between Flowbite and Tailwind UI?
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
