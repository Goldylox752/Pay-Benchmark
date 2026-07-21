import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";



export async function GET(request) {


  try {


    const { searchParams } =
      new URL(request.url);



    const company =
      searchParams.get("company");

    const role =
      searchParams.get("role");

    const city =
      searchParams.get("city");





    const supabase =
      await createClient();






    let query = supabase

      .from("salary_records")

      .select(`

        id,

        role,

        salary_min,

        salary_max,

        average_salary,

        experience,

        year,

        companies (

          name,

          slug,

          industry,

          city,

          province

        )

      `);







    if(company){


      query = query.ilike(

        "companies.name",

        `%${company}%`

      );


    }







    if(role){


      query = query.ilike(

        "role",

        `%${role}%`

      );


    }







    if(city){


      query = query.ilike(

        "companies.city",

        `%${city}%`

      );


    }








    const {

      data,

      error

    } = await query;







    if(error){


      console.log(error);


      return NextResponse.json(

        {

          error:
          "Search failed"

        },

        {

          status:500

        }

      );


    }







    return NextResponse.json({

      results:data || [],

      count:
      data?.length || 0

    });








  } catch(error){


    console.log(error);



    return NextResponse.json(

      {

        error:
        "Server error"

      },

      {

        status:500

      }

    );


  }


}