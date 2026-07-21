import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export const metadata = {

  title:
    "Admin Dashboard | SalaryScope",

  description:
    "Manage SalaryScope salary data and users."

};





async function checkAdmin(){


  const supabase =
    await createClient();



  const {

    data:{
      user

    }

  } = await supabase.auth.getUser();





  if(!user){

    redirect("/login");

  }





  // Replace later with admin role check

  return user;

}









export default async function AdminPage(){


  await checkAdmin();





  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-6xl">


        <h1 className="text-4xl font-bold">

          SalaryScope Admin

        </h1>



        <p className="mt-3 text-gray-600">

          Manage salary data, companies, and platform settings.

        </p>








        <div className="mt-10 grid gap-6 md:grid-cols-4">





          <div className="rounded-3xl bg-white p-6 border">


            <p className="text-gray-500">

              Companies

            </p>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>







          <div className="rounded-3xl bg-white p-6 border">


            <p className="text-gray-500">

              Salary Records

            </p>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>







          <div className="rounded-3xl bg-white p-6 border">


            <p className="text-gray-500">

              Users

            </p>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>







          <div className="rounded-3xl bg-white p-6 border">


            <p className="text-gray-500">

              Subscribers

            </p>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>





        </div>









        <div className="mt-10 grid gap-6 md:grid-cols-3">






          <Link

            href="/admin/companies"

            className="rounded-3xl bg-white p-8 border hover:shadow-lg"

          >

            <h2 className="text-xl font-bold">

              Manage Companies

            </h2>



            <p className="mt-2 text-gray-600">

              Add and edit company salary profiles.

            </p>


          </Link>








          <Link

            href="/admin/upload"

            className="rounded-3xl bg-white p-8 border hover:shadow-lg"

          >

            <h2 className="text-xl font-bold">

              Upload Salary Data

            </h2>



            <p className="mt-2 text-gray-600">

              Import CSV or JSON salary datasets.

            </p>


          </Link>








          <Link

            href="/admin/users"

            className="rounded-3xl bg-black p-8 text-white"

          >

            <h2 className="text-xl font-bold">

              Manage Users

            </h2>



            <p className="mt-2 text-gray-300">

              Review accounts and subscriptions.

            </p>


          </Link>






        </div>








        <section className="mt-10 rounded-3xl bg-white p-8 border">


          <h2 className="text-2xl font-bold">

            Salary Data Import

          </h2>



          <p className="mt-3 text-gray-600">

            Upload your salary_data.json or CSV files to update benchmarks.

          </p>





          <button

            className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white"

          >

            Upload Dataset

          </button>



        </section>







      </section>


    </main>

  );

}