const LoginPage = () => {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#6F4E37] via-[#A67B5B] to-[#ECB176] flex justify-center items-center">
      <div className="bg-white w-96 h-[390px] rounded-lg">
        <form>
          <div className="flex justify-center pb-5">
            <img
              className="pt-5"
              src="./public/logo-removebg-preview.png"
              alt="starbucks-logo"
              width={120}
            />
          </div>
          <h1 className="text-center pb-5 font-bold">Login</h1>
          <div className="flex justify-center">
            <div className="flex-col space-y-5">
              <input
                type="text"
                placeholder="Email"
                required
                className="border-2 outline-none"
              />
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  required  
                  className="border-2 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <button type="submit" className="bg-green-500 w-48 px-3 py-1 text-white font-bold">
              Login
            </button>
          </div>
          <div className="flex justify-center gap-5 pt-5">
            <a href="#">
              <p className="text-blue-400 text-sm font-semibold">
                <u>Don't have an account?</u>
              </p>
            </a>
            <a href="#">
              <p className="text-blue-400 text-sm font-semibold">
                <u>Forgot password?</u>
              </p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
