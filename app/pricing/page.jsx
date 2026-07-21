import Link from "next/link";


export const metadata = {

  title:
    "Pricing | SalaryScope",

  description:
    "Access salary benchmarks, compensation reports, and workforce analytics."

};





const plans = [

  {

    name:"Free",

    price:"$0",

    description:
    "Explore basic salary information.",

    features:[

      "Basic salary searches",

      "Role benchmarks",

      "Limited company data"

    ]

  },



  {

    name:"Pro",

    price:"$19/month",

    description:
    "For professionals negotiating pay.",

    features:[

      "Unlimited salary searches",

      "Company comparisons",

      "Salary reports",

      "Career insights"

    ]

  },



  {

    name:"Business",

    price:"$199/month",

    description:
    "For companies and recruiters.",

    features:[

      "Hiring benchmarks",

      "Market compensation data",

      "Workforce analytics",

      "Export reports"

    ]

  }

];








export default function PricingPage(){


  return (

    <main className="min-h-screen bg-white px-6 py-16">


      <section className="mx-auto max-w-6xl text-center">


        <h1 className="text-5xl font-bold">

          Simple Pricing

        </h1>



        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">

          Get the salary intelligence you need to make better career and hiring decisions.

        </p>








        <div className="mt-12 grid gap-8 md:grid-cols-3">



          {plans.map((plan)=>(


            <div

              key={plan.name}

              className={`rounded-3xl border p-8 text-left shadow-sm ${
                
                plan.name === "Pro"
                ? "border-black"
                : ""

              }`}

            >




              <h2 className="text-2xl font-bold">

                {plan.name}

              </h2>





              <p className="mt-4 text-4xl font-bold">

                {plan.price}

              </p>





              <p className="mt-3 text-gray-600">

                {plan.description}

              </p>








              <ul className="mt-6 space-y-3 text-gray-600">


                {plan.features.map((feature)=>(


                  <li key={feature}>

                    ✓ {feature}

                  </li>


                ))}



              </ul>








              <Link

                href="/signup"

                className={`mt-8 block rounded-xl px-6 py-4 text-center font-semibold ${
                  
                  plan.name === "Business"

                  ? "bg-black text-white"

                  : "border"

                }`}

              >

                Get Started

              </Link>






            </div>


          ))}




        </div>





      </section>





      <section className="mx-auto mt-20 max-w-5xl rounded-3xl bg-black p-10 text-center text-white">


        <h2 className="text-3xl font-bold">

          Build Smarter Hiring Decisions

        </h2>



        <p className="mt-4 text-gray-300">

          Companies use SalaryScope to understand market pay and attract better talent.

        </p>



        <Link

          href="/contact"

          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"

        >

          Contact Sales

        </Link>



      </section>




    </main>

  );

}