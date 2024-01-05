import { useNavigate } from "react-router-dom";


const Page404Container = () => {

    const navigate = useNavigate();


    return (

        <div>
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">

                <button onClick={() => navigate('/')} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-current="page">Go Back Home</button>

                {/* <button onClick={() => navigate('/')} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Go Back Home</button> */}

                </div>
            </div>

        </div>            



    )
}

export default Page404Container