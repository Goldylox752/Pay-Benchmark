import Link from "next/link";
import "./globals.css";



export const metadata = {

  title:
    "SalaryScope | Salary Benchmark Intelligence",

  description:
    "Compare salaries, compensation data, and market benchmarks by company, role, and location."

};





export default function RootLayout({children}){


  return (

    <html lang="en">


      <body className="bg-white text-black">



        <header className="border-b bg-white">


          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


            <Link

              href="/"

              className="text-2xl font-bold"

            >

              SalaryScope

            </Link>





            <div className="flex items-center gap-6 text-sm font-medium">


              <Link href="/search">

                Search

              </Link>



              <Link href="/pricing">

                Pricing

              </Link>



              <Link href="/dashboard">

                Dashboard

              </Link>



              <Link

                href="/login"

                className="rounded-xl bg-black px-5 py-2 text-white"

              >

                Login

              </Link>



            </div>



          </nav>


        </header>







        {children}








        <footer className="mt-20 border-t bg-gray-50">


          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:justify-between">


            <div>


              <h2 className="font-bold">

                SalaryScope

              </h2>



              <p className="mt-2 text-sm text-gray-600">

                Salary intelligence for smarter career and hiring decisions.

              </p>


            </div>






            <div className="flex gap-6 text-sm text-gray-600">


              <Link href="/search">

                Search Salaries

              </Link>



              <Link href="/pricing">

                Pricing

              </Link>



              <Link href="/contact">

                Contact

              </Link>


            </div>





          </div>





        </footer>





      </body>


    </html>

  );

}