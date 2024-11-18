import React from 'react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-300 via-pink-200 to-blue-900">
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
        
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-2">Welcome back</h2>
            <p className="text-gray-600">Enter your credentials to sign in</p>
          </div>

         
          <form className="space-y-6">
           
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2.5 px-4 hover:bg-gray-50 transition duration-150">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-700">Sign in with Google</span>
            </button>

         
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>

           
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
            </div>

          
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>

            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-150">
              SIGN IN
            </button>

          
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
              <a href="#" className="block text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-900"></div>
    </div>
  );
};

export default SignInPage;