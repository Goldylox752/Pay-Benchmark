import Link from "next/link";


export const metadata = {

  title:
    "SalaryScope | Find Salary Data & Compensation Benchmarks",

  description:
    "Search salaries by company, role, and location. Compare compensation data and make smarter career decisions."

};





const features = [

  {

    title:"Company Salary Reports",

    description:
    "Explore compensation data from companies and industries."

  },

  {

    title:"Role Benchmarks",

    description:
    "Compare salaries for jobs based on market data."

  },

  {

    title:"Career Insights",

    description:
    "Understand your earning potential and negotiate better."

  }

];






export default function HomePage(){


  return (

    <main className="min-h-screen bg-white">





      <section className="px-6 py-20">


        <div className="mx-auto max-w-6xl text-center">



          <h1 className="text-6xl font-bold tracking-tight">

            Know Your Worth

          </h1>



          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">

            Search salary benchmarks by company, job title, and location.

            Make better career and hiring decisions with SalaryScope.

          </p>







          <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">


            <Link

              href="/search"

              className="rounded-xl bg-black px-8 py-4 font-semibold text-white"

            >

              Search Salaries

            </Link>





            <Link

              href="/pricing"

              className="rounded-xl border px-8 py-4 font-semibold"

            >

              View Pricing

            </Link>



          </div>





        </div>


      </section>








      <section className="bg-gray-50 px-6 py-16">


        <div className="mx-auto max-w-5xl">


          <div className="rounded-3xl bg-white p-10 shadow-sm border">


            <h2 className="text-3xl font-bold">

              Search Salary Data

            </h2>



            <p className="mt-3 text-gray-600">

              Find compensation information for thousands of roles and companies.

            </p>





            <Link

              href="/search"

              className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white"

            >

              Start Searching

            </Link>



          </div>



        </div>


      </section>








      <section className="px-6 py-20">


        <div className="mx-auto max-w-6xl">


          <h2 className="text-center text-4xl font-bold">

            Salary Intelligence Platform

          </h2>





          <div className="mt-12 grid gap-8 md:grid-cols-3">



            {features.map((feature)=>(


              <div

                key={feature.title}

                className="rounded-3xl border p-8"

              >


                <h3 className="text-2xl font-bold">

                  {feature.title}

                </h3>



                <p className="mt-3 text-gray-600">

                  {feature.description}

                </p>


              </div>


            ))}



          </div>


        </div>


      </section>








      <section className="px-6 pb-20">


        <div className="mx-auto max-w-5xl rounded-3xl bg-black p-12 text-center text-white">


          <h2 className="text-4xl font-bold">

            Unlock Advanced Salary Reports

          </h2>



          <p className="mt-4 text-gray-300">

            Get detailed compensation insights, company comparisons, and market trends.

          </p>





          <Link

            href="/signup"

            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"

          >

            Create Free Account

          </Link>



        </div>


      </section>






    </main>

  );

}