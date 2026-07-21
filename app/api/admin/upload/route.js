import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";



export async function POST(request) {


  try {


    const formData =
      await request.formData();



    const file =
      formData.get("file");





    if(!file){


      return NextResponse.json(

        {
          error:"No file uploaded"
        },

        {
          status:400
        }

      );


    }






    const text =
      await file.text();






    let json;



    try {


      json =
        JSON.parse(text);



    } catch(error){


      return NextResponse.json(

        {
          error:
          "Only JSON format supported currently"
        },

        {
          status:400
        }

      );


    }






    const supabase =
      await createClient();





    const companies =
      json.companies || [];





    let companyCount = 0;

    let salaryCount = 0;






    for(const company of companies){



      const slug =

        company.company

        .toLowerCase()

        .replace(

          /[^a-z0-9]+/g,

          "-"

        )

        .replace(

          /(^-|-$)/g,

          ""

        );








      const {

        data: savedCompany,

        error:companyError

      } = await supabase

        .from("companies")

        .upsert(

          {

            name:
            company.company,

            slug,

            city:
            company.city || null,

            province:
            company.province || null,

            industry:
            company.industry || null

          },

          {

            onConflict:
            "slug"

          }

        )

        .select()

        .single();







      if(companyError){

        console.log(companyError);

        continue;

      }







      companyCount++;







      const categories =
        company.categories || {};







      for(const roleName in categories){



        const role =
          categories[roleName];







        await supabase

          .from("salary_records")

          .insert({

            company_id:
            savedCompany.id,

            role:
            roleName,

            salary_min:
            role.salary_min || null,

            salary_max:
            role.salary_max || null,

            average_salary:
            role.average_salary || null,

            experience:
            role.experience || null,

            year:
            role.year || new Date().getFullYear()

          });






        salaryCount++;


      }



    }








    return NextResponse.json({

      success:true,

      companiesImported:
      companyCount,

      salaryRecordsImported:
      salaryCount

    });








  } catch(error){


    console.log(error);



    return NextResponse.json(

      {

        error:
        "Upload failed"

      },

      {

        status:500

      }

    );


  }


}