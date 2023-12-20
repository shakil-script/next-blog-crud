import Link from "next/link";

const TravelCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mx-10 ">
        <div className="max-w-sm bg-white border text-slate-900 border-gray-200 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?w=740&t=st=1703091765~exp=1703092365~hmac=6b5c74c9fcd9317e08d8bba612e28c5ec0441e9c7e1fd28ddd48f417fda3e9e5"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <p className="font-semibold mb-4">Date: 12/12/23 </p>
            <Link
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
