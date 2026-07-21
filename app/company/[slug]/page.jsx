import Link from "next/link";
import { notFound } from "next/navigation";


// Temporary data
// Replace with Supabase later

const companies = [

  {
    slug:"microsoft",

    name:"Microsoft",

    industry:"Technology",

    location:"Canada",

    average:"$120,000",

    roles:[

      {
        title:"Software Engineer",
        salary:"$110,000 - $150,000"
      },

      {
        title:"Product Manager",
        salary:"$100,000 - $140,000"
      },

      {
        title:"Support Engineer",
        salary:"$75,000 - $100,000"
      }

    ]

  },

  {

    slug:"enbridge",

    name:"Enbridge",

    industry:"Energy",

    location:"Alberta",

    average:"$95,000",

    roles:[

      {
        title:"Field Technician",
        salary:"$75,000 - $95,000"
      },

      {
        title:"Project Manager",
        salary:"$100,000 - $130,000"
      }

    ]

  }

];





async function getCompany(slug){


  return companies.find(

    company =>
      company.slug === slug

  );


}







export async function generateMetadata({params}){


  const company =
    await getCompany(
      params.slug
    );



  if(!company){

    return {

      title:"Company Not Found"

    };

  }




  return {

    title:
    `${company.name} Salary Data | SalaryScope`,

    description:
    `${company.name} salary benchmarks, compensation data, and job pay ranges.`

  };


}









export default async function CompanyPage({params}){


  const company =
    await getCompany(
      params.slug
    );



  if(!company){

    notFound();

  }






  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-5xl">



        <Link

          href="/search"

          className="text-gray-500"

        >

          ← Back to Search

        </Link>







        <div className="mt-8 rounded-3xl bg-white p-10 border shadow-sm">



          <h1 className="text-5xl font-bold">

            {company.name}

          </h1>




          <p className="mt-3 text-gray-600">

            {company.industry}

          </p>



          <p className="text-gray-500">

            {company.location}

          </p>






          <div className="mt-10 rounded-2xl bg-gray-100 p-6">


            <p className="text-gray-500">

              Average Compensation

            </p>


            <p className="mt-2 text-4xl font-bold">

              {company.average}

            </p>


          </div>








          <h2 className="mt-10 text-3xl font-bold">

            Salary By Role

          </h2>







          <div className="mt-6 space-y-5">


            {company.roles.map((role)=>(


              <div

                key={role.title}

                className="rounded-2xl border p-6"

              >


                <h3 className="text-xl font-bold">

                  {role.title}

                </h3>



                <p className="mt-2 text-gray-600">

                  {role.salary}

                </p>


              </div>


            ))}



          </div>





        </div>






      </section>


    </main>

  );

}