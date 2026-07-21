import Link from "next/link";


export const metadata = {

  title:
    "SalaryScope | Salary Benchmark Intelligence",

  description:
    "Compare salaries, wages, and compensation benchmarks by company, role, and location."

};





export default function HomePage(){


  return (

    <main className="min-h-screen bg-white">


      <section className="px-6 py-20">


        <div className="mx-auto max-w-6xl text-center">


          <h1 className="text-5xl font-bold tracking-tight">

            Know What Jobs Are Really Worth

          </h1>



          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

            SalaryScope helps employees, employers, and recruiters compare compensation data by company, role, industry, and location.

          </p>






          <div className="mt-10 flex justify-center gap-4">


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

              View Plans

            </Link>


          </div>



        </div>


      </section>








      <section className="bg-gray-50 px-6 py-16">


        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">





          <div className="rounded-3xl bg-white p-8 shadow-sm border">


            <h2 className="text-2xl font-bold">

              Company Salaries

            </h2>



            <p className="mt-3 text-gray-600">

              See salary benchmarks for specific companies and industries.

            </p>


          </div>








          <div className="rounded-3xl bg-white p-8 shadow-sm border">


            <h2 className="text-2xl font-bold">

              Role Benchmarks

            </h2>



            <p className="mt-3 text-gray-600">

              Compare pay ranges for different careers and experience levels.

            </p>


          </div>








          <div className="rounded-3xl bg-white p-8 shadow-sm border">


            <h2 className="text-2xl font-bold">

              Location Data

            </h2>



            <p className="mt-3 text-gray-600">

              Understand how salaries change by city and region.

            </p>


          </div>






        </div>


      </section>








      <section className="px-6 py-20">


        <div className="mx-auto max-w-5xl rounded-3xl bg-black p-10 text-center text-white">


          <h2 className="text-4xl font-bold">

            Make Better Career Decisions

          </h2>



          <p className="mt-4 text-gray-300">

            Access reliable compensation insights before negotiating your next opportunity.

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
