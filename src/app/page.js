// import Head from "next/head";
import Image from "next/image";
import { constructMetadata } from "./metadata";
import Headers from "./components/reuse/Headers";
import ScrollReveal from "./components/testcases/ScrollReveal";
import React from "react";
import LogoImageComponent from "./components/reuse/LogoImageComponent";
import WhyChoose from "./components/reuse/WhyChoose";
import FAQ from "./components/faq/FAQ";


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
      key: 1,
      title: 'Collaborate, Plan, Forecast & Replenish',
      description: 'Stay ahead with smarter demand planning and streamlined supply chain collaboration.',
    },
    {
      // icon: <FaBroom size={40} />,
      key: 2,
      title: 'Space Planning & Analysis',
      description: 'Maximize shelf efficiency and improve product visibility through intelligent planogram compliance',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      key: 3,
      title: 'Retail Execution',
      description: 'Real-time tracking of merchandising standards, pricing accuracy, and stock availability',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      key: 4,
      title: 'In-Store Audits',
      description: 'Automated insights with image-based analytics for fast, consistent store checks',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      key: 5,
      title: 'Competitive Benchmarking',
      description: 'Understand and outperform competition with real-time market data',
    },
    {
      // icon: <FaTruckMoving size={40} />,
      key: 6,
      title: 'Industry-Leading Technology',
      description: 'Cutting-edge, future-ready solutions built to adapt seamlessly to evolving business needs — ensuring scalability, efficiency, and long-term success.',
    }
  ]

  const partners = [
    {
      key: 1,
      image: '/Coca-Cola_logo.svg',
      width: 250,
      height: 250,
      name: 'Cococola'
    },
    {
      key: 2,
      image: '/The_Boston_Beer_Company_Inc.svg',
      width: 250,
      height: 250,
      name: 'The Boston Beer Company'
    },
    {
      key: 3,
      image: '/ocrolus.svg',
      width: 250,
      height: 250,
      name: 'Ocrolus'
    },
    {
      key: 4,
      image: '/vitaclay.svg',
      width: 250,
      height: 250,
      name: 'Vitaclay'
    },


  ]

  const expertise = [
    {
      key: 1,
      image: '/four-azure.svg',
      width: 250,
      height: 250,
      name: 'azure'
    },
    {
      key: 2,
      image: '/four-docker.svg',
      width: 250,
      height: 250,
      name: 'docker'
    },
    {
      key: 3,
      image: '/four-gcp.svg',
      width: 250,
      height: 250,
      name: 'gcp'
    },
    {
      key: 4,
      image: '/four-kubernetes.svg',
      width: 250,
      height: 250,
      name: 'Kubernetes'
    },
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
            text="Redefining Sales & Distribution with Next-Gen Solutions"
            element="h1"
            classname={'max-w-2xl text-4xl md:text-6xl text-white'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          />
          <Headers
            text="Let’s talk today and explore how Bluecompute software can drive growth, sharpen visibility, and take your business higher."
            element="h1"
            classname={'bg-gradient-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent  max-w-xl pt-4 text-lg'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          />
          <h2 className="">

          </h2>
        </div>
        <div className="relative md:order-none order-first flex w-full md:w-[50%] h-full items-center justify-center">
          {/* Decorative Blob */}
          <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl md:top-28 md:left-24 z-0 animate-pulse" />

          <img
            src="/hero-image.png"
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
          classname={"text-gray-800 text-2xl md:text-4xl max-w-full font-semibold"}
          element="h3"

        />
        <div className="w-full flex justify-center md:gap-x-6 md:gap-y-10 gap-y-4 gap-x-4 pt-24 flex-wrap">
          {
            partners.map(item => (
              <React.Fragment key={item.key}>
                <LogoImageComponent data={item}
                  classname={"w-64 md:w-56 py-2 p-6 border border-gray-300 rounded-full flex justify-center items-center"}
                />
              </React.Fragment>
            ))
          }
        </div>

      </section >
      <section className="flex flex-col justify-center items-center w-full px-4 pt-32 rounded-xl">
        <Headers
          text="Why Choose us ?"
          classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
          element="h3"

        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-stretch pt-24">
          {services.map((service, index) => (
            <React.Fragment key={service.key}>
              <WhyChoose service={service} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-around items-center w-full md:gap-0 gap-8 px-4 pt-32 ">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-5">
            <Headers
              text="Analyze Data for Smarter, Faster Decisions"
              classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
              element="h3"

            />

            <p className="text-gray-600">
              Turn complex data into clear insights with advanced analytics and easy-to-use visual tools.
            </p>

            <ul className=" space-y-3 text-gray-800">
              <li className="flex items-start gap-3 ">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>Transform massive datasets into interactive charts, graphs, and dashboards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>Monitor real-time KPIs to stay ahead of business challenges.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>Track every detail — from stock and orders to promotions, claims, invoicing, and payments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>Build and share interactive reports in minutes, accessible anytime on desktop or mobile.</span>
              </li>
            </ul>
          </div>

          {/* Image area (free space reserved) */}
          <div className="w-full">

            <Image
              width={500}
              height={500}
              src={'/Analyze-Data.webp'}
              alt={'Analyze Data'}
              className="w-full h-auto rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            />

          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-around items-center w-full md:gap-0 gap-8 px-4 ">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-5">
            <Headers
              text="Integrated Solutions, Flexible Deployment"
              classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
              element="h3"

            />

            <p className="text-gray-600">
              Seamlessly connect with your existing ecosystem and deploy in the way that works best for your business.
            </p>

            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>
                  Effortlessly integrate with upstream systems like ERP and downstream
                  platforms such as distributors’ accounting packages.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>
                  Choose your deployment — on the Cloud for scalability or on-premises for
                  complete control.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600 shrink-0"></span>
                <span>
                  Flexible ownership models — opt for subscription-based SaaS or perpetual
                  licensing to suit your strategy.
                </span>
              </li>
            </ul>
          </div>

          {/* Image area (free space reserved) */}
          <div className="w-full">

            <Image
              width={500}
              height={500}
              src={'/Integrated-Solutions.webp'}
              alt={'Analyze Data'}
              className="w-full h-auto rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            />

          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-around items-center w-full md:gap-0 gap-8 px-4">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-5">
            <Headers
              text="Powerful Features for Modern Retail"
              classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
              element="h3"

            />

            <p className="text-gray-600">
              We bring together advanced analytics, intuitive dashboards, and cloud-native
              architecture to empower modern retailers and category teams. From shelf data
              to strategy, our solutions simplify complexity and drive decisions that matter.

            </p>

            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600"></span>
                <span>Category Management Reinvented</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600"></span>
                <span>Data Modeling & ETL Pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600"></span>
                <span>Superset Dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gray-600"></span>
                <span>Azure-Based Data Architecture</span>
              </li>
            </ul>
          </div>

          {/* Image area (free space reserved) */}
          <div className="w-full flex justify-center">
            <Image
              width={500}
              height={500}
              src={'/category-management.webp'}
              alt={'Analyze Data'}
              className="w-96 h-auto rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            />
            {/* <img
              src={'/category-management.webp'}
              alt={'Analyze Data'}
              className="w-full h-auto rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            /> */}

          </div>
        </div>
      </section>

      <section className="flex flex-col justify-around items-center w-full md:gap-0 gap-8 px-4">
        <div className="lg:max-w-4xl text-center py-12">
          <Headers
            text="Access more flexible reports designed to cover key business workflows."
            classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
            element="h3"

          />
        </div>
        <div className="mx-auto max-w-4xl px-6  grid gap-10 md:grid-cols-1 items-center">
          <div className="space-y-5">
            <p className="text-gray-600">
              This report highlights sales results from promotional campaigns, making it easy to assess
              performance across different levels — whether by individual promo, product category,
              or specific SKU. These insights help you optimize promotions and boost ROI.

            </p>

            <p className="text-gray-600">
              This report reviews the results of each store as well as the chain overall.
              It includes key sales metrics to assess profitability and measure each store’s impact on total revenue.
            </p>
          </div>


          {/* <div className="w-full flex justify-center">
            <Image
              width={500}
              height={500}
              src={'/category-management.webp'}
              alt={'Analyze Data'}
              className="w-96 h-auto rounded-xl shadow-lg ring-1 ring-gray-200 object-cover"
            />
            

          </div> */}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full px-4 pt-32 rounded-xl">

        <Headers
          text="Our Expertise"
          classname={"text-gray-800 text-3xl md:text-4xl font-semibold max-w-full"}
          element="h3"

        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-x-6 md:gap-y-16 gap-y-4 gap-x-4  place-items-center pt-24">

          {expertise.map((item, index) => (
            <React.Fragment key={item.key}>
              <LogoImageComponent data={item} classname={'w-36 md:w-44 py-2 p-6 rounded-full shadow'} />
            </React.Fragment>
          ))}

          {/* <Image
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

          /> */}
        </div>
      </section>

      {/* <section className="flex md:flex-row flex-col justify-around items-center w-full md:gap-0 gap-8 px-4 pt-32 ">
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
      </section> */}
      <section className="flex flex-col bg-black
       justify-center items-center w-full px-4 mt-32 py-16 ">
        <FAQ />
      </section>
      <section className="flex flex-col bg-black  justify-center items-center w-full px-4 pb-32 pt-16 rounded-b-4xl border-t border-gray-800">
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

    </div >
  );
}
