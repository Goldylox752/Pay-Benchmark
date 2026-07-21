import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export const metadata = {

  title:
    "Dashboard | SalaryScope",

  description:
    "Manage your salary reports and account."

};





async function getProfile(userId){

  const supabase =
    await createClient();


  const {

    data: profile

  } = await supabase

    .from("profiles")

    .select(`

      id,

      email,

      plan

    `)

    .eq(

      "id",

      userId

    )

    .single();



  return profile;

}






export default async function DashboardPage(){


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






  const profile =
    await getProfile(
      user.id
    );







  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-6xl">


        <h1 className="text-4xl font-bold">

          Welcome Back

        </h1>



        <p className="mt-3 text-gray-600">

          Manage your salary research and reports.

        </p>







        <div className="mt-10 grid gap-6 md:grid-cols-3">





          <div className="rounded-3xl bg-white p-8 border">


            <h2 className="text-gray-500">

              Account Plan

            </h2>



            <p className="mt-3 text-2xl font-bold">

              {profile?.plan || "Free"}

            </p>


          </div>







          <div className="rounded-3xl bg-white p-8 border">


            <h2 className="text-gray-500">

              Saved Reports

            </h2>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>







          <div className="rounded-3xl bg-white p-8 border">


            <h2 className="text-gray-500">

              Searches

            </h2>



            <p className="mt-3 text-4xl font-bold">

              0

            </p>


          </div>





        </div>








        <div className="mt-10 grid gap-6 md:grid-cols-2">





          <Link

            href="/search"

            className="rounded-3xl bg-white p-8 border hover:shadow-lg"

          >

            <h2 className="text-2xl font-bold">

              Search Salaries

            </h2>



            <p className="mt-3 text-gray-600">

              Find company and role benchmarks.

            </p>


          </Link>








          <Link

            href="/pricing"

            className="rounded-3xl bg-black p-8 text-white hover:opacity-90"

          >

            <h2 className="text-2xl font-bold">

              Upgrade Plan

            </h2>



            <p className="mt-3 text-gray-300">

              Unlock advanced salary intelligence.

            </p>


          </Link>






        </div>







        <section className="mt-10 rounded-3xl bg-white p-8 border">


          <h2 className="text-2xl font-bold">

            Recent Salary Reports

          </h2>



          <p className="mt-3 text-gray-600">

            Your saved reports will appear here.

          </p>



        </section>






      </section>


    </main>

  );

}