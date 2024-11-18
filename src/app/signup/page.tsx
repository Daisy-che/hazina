export default function RegisterSection() {
    return (
      <div className="w-80px flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-4">
      
        <div className="w-full max-w-2xl bg-transparent rounded-lg text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to Hazina!</h1>
          <p className="text-lg text-white">Create your account to get started.</p>
        </div>
  
       
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-semibold text-center mb-4">Register with</h2>
          
          
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-5 h-5 mr-2" />
            <span className="text-gray-700 font-medium">SIGN UP WITH GOOGLE</span>
          </button>
  
          <p className="text-center text-gray-500 mb-4">or</p>
  
        
          <form action="#" className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring focus:ring-purple-300" />
            <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring focus:ring-purple-300" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring focus:ring-purple-300" />
            <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring focus:ring-purple-300" />
            <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring focus:ring-purple-300" />
            
           
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-purple-500 underline">Terms and Conditions</a>
              </label>
            </div>
  
           
            <button type="submit" className="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg py-2.5 font-semibold hover:from-purple-500 hover:to-blue-600">
              SIGN UP
            </button>
          </form>
  
          
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-purple-500 underline">Sign in</a>
          </p>
        </div>
      </div>
    );
  }
  