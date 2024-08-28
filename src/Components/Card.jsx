function Card({ data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((currData) => {
        if (!currData.urlToImage) {
          return null;
        } else {
          return (
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="">
                <img
                  class="rounded-t-lg w-full  "
                  src={currData.urlToImage}
                  alt=""
                />
              </div>

              <div class="p-5">
                <a href="#">
                  <h5
                    onClick={() => window.open(currData.url)}
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    {currData.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {currData.description}
                </p>
                <a
                  onClick={() => window.open(currData.url)}
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
