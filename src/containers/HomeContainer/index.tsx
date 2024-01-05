import { useNavigate } from "react-router-dom";


const HomeContainer = () => {

    const navigate = useNavigate();


    return (
        

        <div>
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Welcome to Website</h1>
                
                <div className="mt-10 items-center justify-center gap-x-6">

                <button onClick={() => navigate('/login')} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-current="page">Sign in here</button>

                <p className="mt-4 mb-4 font-semibold text-base leading-7 text-gray-600">Or</p>

                <button onClick={() => navigate('/register')} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-current="page">Register</button>



                {/* <button onClick={() => navigate('/')} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Go Back Home</button> */}

                </div>
            </div>

        </div>            



    )
}

export default HomeContainer