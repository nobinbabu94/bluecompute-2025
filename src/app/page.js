// import Head from "next/head";
import Image from "next/image";
import { constructMetadata } from "./metadata";
import Headers from "./components/reusetext/Headers";


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

      {/* <Head>
        <title>Bluecompute</title>
        <link
          rel="canonical"
          href="https://bluecompute.com/"
          key="canonical"
        />
      </Head> */}
      <section className=" flex flex-col md:flex-row md:justify-between w-full h-[90vh] md:min-h-screen md:h-screen bg-black ">
        <div className="flex flex-col lg:w-[50%] h-full justify-center items-center md:items-start  px-4">
          {/* <h1 className="text-6xl max-w-2xl">
            A smarter approach to- category management
          </h1> */}

          <Headers
            text="A smarter approach to- category management"
            color="text-white"
            size="text-4xl md:text-6xl"
            element="h1"
            width="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          />
          <h2 className="text-lg max-w-xl pt-4 bg-gradient-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
            Align strategy with shopper behavior using AI-powered tools.
          </h2>
        </div>
        <div className="relative md:order-none order-first flex w-full md:w-[50%] h-full items-center justify-center">
          {/* Decorative Blob */}
          <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl md:top-28 md:left-24 z-0 animate-pulse" />

          <img
            src="/retail-hero-bluecompute.webp"
            alt="hero image"
            className="md:w-[70%] w-[70%] object-cover z-10 relative pt-4 md:pt-0"
          />
        </div>

      </section>
      <section className="flex flex-col  items-center w-full px-4 pt-32">
        {/* <h3 className="text-4xl font-semibold text-gray-800 ">
          Proudly Trusted by Top Retail Stores Around You
        </h3> */}

        <Headers
          text="Proudly Trusted by Top Retail Stores Around You"
          color="text-gray-800"
          size="text-2xl md:text-4xl"
          font='font-semibold'
          element="h3"
          width="max-w-full"
          initial={"hidden"}
          variants={{
            hidden: { opacity: 0, translateX: 90 },
            visible: { opacity: 1, translateX: 0 },
          }}
          transition={{
            type: "spring",
            duration: 0.2,
            damping: 8,
            delay: 0.1,
            stiffness: 100,
          }}
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <div className="w-full flex justify-center md:gap-x-6 md:gap-y-16 gap-y-4 gap-x-4 pt-24 flex-wrap">
          <Image
            src={'/Coca-Cola_logo.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full'

          />
          <Image
            src={'/The_Boston_Beer_Company_Inc.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full'

          />
          <Image
            src={'/ocrolus.svg'}
            width={250}
            height={250}
            alt='Filetext icon'
            className='w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full'

          />
          <Image
            src={'/vitaclay.svg'}
            width={250}
            height={400}
            alt='Filetext icon'
            className='w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full'

          />

        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full px-4 pt-32 rounded-xl">

        <h3 className="text-3xl md:text-4xl font-semibold uppercase text-gray-800 ">
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
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 ">OUR EXPERTISE</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-x-6 md:gap-y-16 gap-y-4 gap-x-4  place-items-center pt-24">

          <Image
            src={'/four-azure.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='w-36 md:w-52 py-2 p-6 rounded-full shadow'

          />
          <Image
            src={'/four-docker.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='w-36 md:w-52 py-2 p-6 rounded-full shadow'

          />
          <Image
            src={'/four-gcp.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='w-36 md:w-52 py-2 p-6 rounded-full shadow'

          />
          <Image
            src={'/four-kubernetes.svg'}
            width={200}
            height={200}
            alt='Filetext icon'
            className='w-36 md:w-52 py-2 p-6 rounded-full shadow'

          />
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-around items-center w-full md:gap-0 gap-8 px-4 pt-32 ">
        <div className="flex flex-col justify-start w-full md:w-[50%] px-4 space-y-4">
          <h3 className="text-3xl md:text-4xl md:max-w-md md:text-start text-center font-semibold text-gray-800 ">
            Powerful Features for Modern Retail
          </h3>
          <p className="text-gray-800 text-lg max-w-xl ">
            We bring together advanced analytics, intuitive dashboards, and cloud-native architecture to empower modern retailers and category teams. From shelf data to strategy, our solutions simplify complexity and drive decisions that matter.
          </p>
          <ul className="text-gray-800 space-y-2 list-disc pl-6">
            <li>Category Management Reinvented</li>
            <li>Data Modeling & ETL Pipelines</li>
            <li>Superset Dashboards</li>
            <li>Category Performance Analytics</li>
            <li>Azure-Based Data Architecture</li>

          </ul>
        </div>
        <div className="flex justify-center rounded-xl  w-full md:w-[50%]">
          <img
            src="/category-management.webp"
            className="w-[75%] rounded-xl"
            alt="Category Management"
          />
        </div>
      </section>
      <section className="flex flex-col bg-black justify-center items-center w-full px-4 mt-32 py-32 rounded-4xl ">
        <h3 className="text-2xl md:text-4xl  font-semibold ">
          Get early access
        </h3>
        <p className="text-lg ">Sign up your team today to be the first to try out our new product to increase your team’s productivity
        </p>
        <form className="flex md:flex-row flex-col items-center justify-center gap-4 py-6 md:px-0 w-full px-4">
          <input
            placeholder="Your Email"
            className="h-10 md:w-96 w-full  border-white border pl-4 md:px-4 md:py-2"
          />
          <button className="border py-1 px-4 md:px-4 md:py-2 w-32 md:w-auto">
            Signup
          </button>
        </form>
      </section>
    </div>
  );
}
