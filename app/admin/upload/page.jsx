"use client";

import { useState } from "react";



export default function UploadPage(){


  const [file,setFile] =
    useState(null);


  const [message,setMessage] =
    useState("");



  const [loading,setLoading] =
    useState(false);






  async function uploadFile(){


    if(!file){

      setMessage(
        "Select a file first"
      );

      return;

    }




    setLoading(true);





    const formData =
      new FormData();


    formData.append(

      "file",

      file

    );







    const response =
      await fetch(

        "/api/admin/upload",

        {

          method:"POST",

          body:formData

        }

      );







    const data =
      await response.json();







    if(data.success){


      setMessage(

        "Salary data uploaded successfully"

      );


    } else {


      setMessage(

        data.error ||
        "Upload failed"

      );


    }







    setLoading(false);


  }









  return (

    <main className="min-h-screen bg-gray-50 px-6 py-16">


      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-10 border shadow-sm">


        <h1 className="text-4xl font-bold">

          Upload Salary Dataset

        </h1>



        <p className="mt-3 text-gray-600">

          Import company salary benchmarks into SalaryScope.

        </p>







        <div className="mt-8">


          <input

            type="file"

            accept=".json,.csv"

            onChange={(e)=>

              setFile(
                e.target.files[0]
              )

            }

            className="w-full rounded-xl border p-4"

          />



        </div>







        <button

          onClick={uploadFile}

          disabled={loading}

          className="mt-6 w-full rounded-xl bg-black py-4 font-bold text-white"

        >

          {loading

          ? "Uploading..."

          : "Upload Dataset"

          }

        </button>








        {message && (

          <p className="mt-5 text-center text-gray-600">

            {message}

          </p>

        )}







        <div className="mt-10 rounded-2xl bg-gray-100 p-6">


          <h2 className="font-bold">

            Expected JSON Format

          </h2>



          <pre className="mt-4 overflow-auto text-sm">


{`{
 "companies":[
  {
   "company":"Example Corp",
   "city":"Edmonton",
   "categories":{
    "Engineer":{
     "count":20,
     "index":120
    }
   }
  }
 ]
}`}



          </pre>



        </div>






      </section>


    </main>

  );

}