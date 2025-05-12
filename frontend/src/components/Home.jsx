import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Tiebe from "../assets/Tiebe.jpg";
import Yenthe from "../assets/Yenthe.png";
import Jaro from "../assets/Jaro.png";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* Hero Section */}
        <div className="relative px-6 lg:px-8 pt-24">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-400/10 hover:ring-gray-400/20">
                  Powered by TensorFlow and FastAPI.{" "}
                  <a
                    href="https://www.tensorflow.org/"
                    className="font-semibold text-green-400"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Identify Dinosaurs with AI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-center">
                  Upload any dinosaur image and our advanced AI model will
                  identify the species with high accuracy. Perfect for
                  educators, students, and dinosaur enthusiasts.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    to="/classifier"
                    className="inline-block rounded-lg bg-green-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-500 hover:bg-green-600 hover:ring-green-600"
                  >
                    Try it now
                    <span className="text-white ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <a
                    href="#features"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="team" className="bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-green-400">
                Meet Our Team: De Drie Eendjes
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Passionate about Dinosaurs and AI
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={Yenthe}
                  alt="Team Member 1"
                />
                <div className="mt-6">
                  <p className="text-lg font-semibold text-white">
                    Yenthe Jannis
                  </p>
                  <p className="text-sm text-gray-400">APPAI Student</p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={Tiebe}
                  alt="Team Member 2"
                />
                <div className="mt-6">
                  <p className="text-lg font-semibold text-white">
                    Tiebe Goossens
                  </p>
                  <p className="text-sm text-gray-400">APPAI Student</p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={Jaro}
                  alt="Team Member 3"
                />
                <div className="mt-6">
                  <p className="text-lg font-semibold text-white">
                    Jaro Peeters
                  </p>
                  <p className="text-sm text-gray-400">APPAI Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-400">
                Fast and Accurate
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to identify dinosaurs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our AI model has been trained on thousands of dinosaur images to
                provide accurate identification across multiple species.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                      <feature.icon
                        className="h-5 w-5 flex-none text-green-400"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: "Instant Results",
    description:
      "Get immediate identification results with confidence scores for each prediction.",
    icon: function BoltIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
    },
  },
  {
    name: "Multiple Species",
    description:
      "Our model can identify various dinosaur species including T-Rex, Stegosaurus, Triceratops, and more.",
    icon: function ScaleIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      );
    },
  },
  {
    name: "Easy to Use",
    description:
      "Simply drag and drop or upload an image, and let our AI do the rest. No technical knowledge required.",
    icon: function ServerIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
      );
    },
  },
];
