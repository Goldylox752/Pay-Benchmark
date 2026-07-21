import Link from "next/link";


export const metadata = {

  title:
    "Search Salaries | SalaryScope",

  description:
    "Search salary benchmarks by company, role, and location."

};





const popularSearches = [

  "Software Engineer",

  "Project Manager",

  "Electrician",

  "Construction Manager",

  "Sales Representative"

];







export default function SearchPage(){


  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-5xl">


        <div className="rounded-3xl bg-white p-10 shadow-sm border">


          <h1 className="text-4xl font-bold">

            Search Salary Data

          </h1>



          <p className="mt-3 text-gray-600">

            Find compensation benchmarks by company, job title, and location.

          </p>







          <form

            action="/search"

            className="mt-8 grid gap-4 md:grid-cols-3"

          >



            <input

              name="company"

              placeholder="Company"

              className="rounded-xl border px-4 py-3"

            />





            <input

              name="role"

              placeholder="Job Title"

              className="rounded-xl border px-4 py-3"

            />





            <input

              name="location"

              placeholder="City"

              className="rounded-xl border px-4 py-3"

            />







            <button

              className="rounded-xl bg-black px-6 py-3 font-semibold text-white md:col-span-3"

            >

              Search Salaries

            </button>



          </form>




        </div>









        <section className="mt-10">


          <h2 className="text-2xl font-bold">

            Popular Searches

          </h2>





          <div className="mt-5 flex flex-wrap gap-3">



            {popularSearches.map((item)=>(


              <Link

                key={item}

                href={`/roles/${item
                  .toLowerCase()
                  .replaceAll(" ","-")}`}

                className="rounded-full border bg-white px-5 py-3"

              >

                {item}

              </Link>


            ))}



          </div>



        </section>








        <section className="mt-12 rounded-3xl bg-black p-10 text-white">


          <h2 className="text-3xl font-bold">

            Need Advanced Salary Reports?

          </h2>



          <p className="mt-3 text-gray-300">

            Upgrade for detailed company comparisons, hiring insights, and market reports.

          </p>



          <Link

            href="/pricing"

            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"

          >

            View Plans

          </Link>



        </section>





      </section>


    </main>

  );

}