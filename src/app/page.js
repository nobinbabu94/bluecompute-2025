import Head from "next/head";
import Image from "next/image";
import { constructMetadata } from "./metadata";

export const metadata = constructMetadata({
  title: "BlueCompute | Cloud Solutions to Drive Digital Transformation.",
  description: "Helping organizations to achieve complete control and flexibility over their cloud environment",
  keywords: [
    "IT solutions",
    "technology services",
    "digital transformation",
    "software development",
    "cloud computing",
    "IT consulting",
    "business technology",
    "pdf to pog",
    "pdf to planogram",
    "category management",
    "revealnext",
  ],
  canonicalUrl: "https://bluecompute.com"
})
export default function Home() {
  const services = [
    {
      // icon: <FaHome size={40} />,
      title: 'Category Management',
      description: ' Optimize product assortments and shelf layouts to align with shopper behavior',
    },
    {
      // icon: <FaBroom size={40} />,
      title: 'Space Planning & Analysis',
      description: 'Maximize shelf efficiency and improve product visibility through intelligent planogram compliance',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      title: 'Retail Execution',
      description: 'Real-time tracking of merchandising standards, pricing accuracy, and stock availability',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      title: 'In-Store Audits',
      description: 'Automated insights with image-based analytics for fast, consistent store checks',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      title: 'Competitive Benchmarking',
      description: 'Understand and outperform competition with real-time market data',
    }

  ]
  return (
    <div className=" text-white font-sans flex flex-col pb-32">
      <Head>
        <title>Bluecompute</title>
        <link
          rel="canonical"
          href="https://bluecompute.com/"
          key="canonical"
        />
      </Head>
      <section className="flex justify-between w-full min-h-screen h-screen bg-black px-4">
        <div className="flex flex-col w-[50%] h-full items-center justify-center">
          <h1 className="text-6xl max-w-2xl">
            A smarter approach to- category management
          </h1>

        </div>
        <div className="flex flex-col w-[50%] h-full items-center justify-center ">


        </div>

      </section>
      <section className="flex flex-col  items-center w-full px-4 pt-32">
        <h3 className="text-4xl font-semibold text-gray-800 ">
          Proudly Trusted by Top Retail Stores Around You
        </h3>
        <div className="w-full flex justify-center gap-x-6 gap-y-16 pt-24 flex-wrap">
          <Image
            src={'/Coca-Cola_logo.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='py-2 border border-gray-300 rounded-full'
          />
          <Image
            src={'/The_Boston_Beer_Company_Inc.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='py-2 p-6 border border-gray-300 rounded-full'
          />
          <Image
            src={'/ocrolus.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='py-2 p-6 border border-gray-300 rounded-full'
          />
          <Image
            src={'/vitaclay.svg'}
            width={250}
            height={400}
            alt='Filetext icon'
            className='py-2 p-6 border border-gray-300 rounded-full'
          />

        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full px-4 pt-32 rounded-xl">
        <h3 className="text-4xl font-semibold text-gray-800 ">
          Why Choose us ?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center pt-24">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 w-full text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              {/* <div className="flex justify-center mb-4 text-orange-500">{service.icon}</div> */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full px-4 pt-32 rounded-xl">
        <h3 className="text-4xl font-semibold text-gray-800 ">OUR EXPERTISE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center pt-24">

          <Image
            src={'/four-azure.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='py-2 p-6 rounded-full'
          />
          <Image
            src={'/four-docker.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='py-2 p-6 rounded-full'
          />
          <Image
            src={'/four-gcp.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='py-2 p-6 rounded-full'
          />
          <Image
            src={'/four-kubernetes.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='py-2 p-6 rounded-full'
          />
        </div>
      </section>
      <section className="flex justify-around items-center w-full px-4 pt-32 ">
        <div className="flex flex-col justify-start">
          <h3 className="text-4xl max-w-md font-semibold text-gray-800 ">
            Powerful Features for Modern Retail
          </h3>
        </div>
        <div className="flex rounded-xl">
          <img
            src="/category-management.webp"
            className="w-96 rounded-xl"
          />
        </div>
      </section>
      <section className="flex flex-col bg-black justify-center items-center w-full px-4 mt-32 py-32 rounded-4xl ">
        <h3 className="text-4xl  font-semibold ">
          Get early access
        </h3>
        <p className="text-lg ">Sign up your team today to be the first to try out our new product to increase your team’s productivity
        </p>
        <form className="flex gap-4 py-6">
          <input
            placeholder="Your Email"
            className="h-10 w-96 border-white border p-4"
          />
          <button className="border px-4">
            Signup
          </button>
        </form>
      </section>
    </div>
  );
}
