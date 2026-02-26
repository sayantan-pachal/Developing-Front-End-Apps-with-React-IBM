import React from 'react'

function Edgecase() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-6 py-12 flex items-center justify-center">
            <section>
                <h2 className="text-4xl font-bold text-center text-gray-900">Not Found</h2>
                <h2 className="text-4xl mt-2 font-bold text-center text-gray-900">Something went wrong !</h2>
                <p className="text-lg max-w-3xl mt-4 mx-auto text-center text-gray-600">
                    The page you are looking for does not exist or an unexpected error has occurred.
                </p>
                <p className="text-lg max-w-3xl mx-auto text-center text-gray-600">
                    Please check the URL or return to the homepage.
                </p>
            </section>
        </div>
    )
}

export default Edgecase