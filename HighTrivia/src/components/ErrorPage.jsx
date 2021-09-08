import React from 'react';

function ErrorPage () {
    return (
        <div style={{backgroundColor: "#7289da"}} className="h-screen flex">
            <div className="m-auto">
                <p style={{color: "#001219"}} className="text-9xl text-center mb-6">404 :(</p>
                <h1 style={{color: "#F8F8F8"}} className="text-white text-center mt-6 text-lg">Sorry we can't find page you're looking for</h1>
            </div>
        </div>
    );
}

export default ErrorPage