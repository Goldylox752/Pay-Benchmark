"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function SignupPage(){


  const supabase =
    createClient();


  const router =
    useRouter();



  const [email,setEmail] =
    useState("");



  const [password,setPassword] =
    useState("");



  const [loading,setLoading] =
    useState(false);



  const [message,setMessage] =
    useState("");






  async function signup(e){


    e.preventDefault();



    setLoading(true);



    const {

      data,

      error

    } = await supabase.auth.signUp({

      email,

      password,

    });







    if(error){


      setMessage(

        error.message

      );


      setLoading(false);

      return;


    }







    if(data.user){


      setMessage(

        "Account created successfully."

      );


      router.push("/dashboard");


    }





    setLoading(false);


  }








  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-md rounded-3xl bg-white p-8 border shadow-sm">



        <h1 className="text-4xl font-bold">

          Create Account

        </h1>



        <p className="mt-3 text-gray-600">

          Join SalaryScope and access salary intelligence.

        </p>







        <form

          onSubmit={signup}

          className="mt-8 space-y-5"

        >





          <input

            type="email"

            placeholder="Email address"

            required

            value={email}

            onChange={(e)=>

              setEmail(
                e.target.value
              )

            }

            className="w-full rounded-xl border px-4 py-3"

          />







          <input

            type="password"

            placeholder="Password"

            required

            minLength="6"

            value={password}

            onChange={(e)=>

              setPassword(
                e.target.value
              )

            }

            className="w-full rounded-xl border px-4 py-3"

          />








          <button

            disabled={loading}

            className="w-full rounded-xl bg-black py-4 font-bold text-white"

          >

            {loading

            ? "Creating..."

            : "Create Account"

            }

          </button>






        </form>







        {message && (

          <p className="mt-5 text-center text-sm text-gray-600">

            {message}

          </p>

        )}







        <p className="mt-6 text-center text-sm text-gray-500">


          Already have an account?


          <Link

            href="/login"

            className="ml-2 font-semibold text-black"

          >

            Login

          </Link>


        </p>






      </section>


    </main>

  );

}