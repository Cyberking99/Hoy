import LogoPng from "../../../public/assets/App Logo Inspiraton 104.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#0F072C] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 font-openSan lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="h-10 w-11">
              <Image
                src={LogoPng}
                alt="logo"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#64B161] dark:text-[#64B161]">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mt-2">
                  <a href="" className="hover:underline">
                    Community
                  </a>
                </li>

                <li className="mt-2">
                  <a href="" className="hover:underline">
                    <li>
                      <a href="" className="hover:underline">
                      Terms of service
                      </a>
                    </li>
                  </a>
                </li>

                <li className="mt-2">
                  <a href="" className="hover:underline">
                    <li>
                      <a href="" className="hover:underline">
                      Collaboration features
                      </a>
                    </li>
                  </a>
                </li>

               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#64B161] dark:text-[#64B161]">
              Company
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <a href="" className="hover:underline">
                  About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="hover:underline">
                  Diversity & Inclusion
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="hover:underline">
                  Blog
                  </a>
                </li>

                <li className="mb-2">
                  <a href="" className="hover:underline">
                  Careers
                  </a>
                </li>

                <li className="mb-2">
                  <a href="" className="hover:underline">
                  Financial statements
                  </a>
                </li>

               
              </ul>
            </div>

            {/* legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#64B161] dark:text-[#64B161]">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Refund policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>

                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Brand Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" className="hover:underline">
              Hoy™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 3.266 2.4a10.004 10.004 0 0 0 13.468 15.2A10.038 10.038 0 0 0 10 .333Zm0 18.4a8.4 8.4 0 1 1 8.4-8.4 8.408 8.408 0 0 1-8.4 8.4ZM10 10a2.334 2.334 0 1 1 2.333-2.333A2.339 2.339 0 0 1 10 10Zm0 1.167A4.667 4.667 0 0 0 5.333 16h9.334A4.667 4.667 0 0 0 10 11.167Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0ZM9.183 15.541V9.868h1.597l.248-1.937H9.183V6.557c0-.56.156-.942.965-.942h1.038V4.021c-.18-.024-.788-.076-1.496-.076-1.48 0-2.494.904-2.494 2.565v1.44H5.701v1.937h1.495v5.673h1.987Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
