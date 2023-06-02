'use client'

const Navbar = () => {
    
  return (
    <div className="fixed flex w-screen justify-between p-5 navbar bg-white z-10">
        <div className="logo">
        <img src="logo1.svg" height={50} width={50} alt="text"/>
        </div>
        <div className="links flex justify-between gap-10 m-3 font-semibold">
        <p>Emotions</p>
        <p>Manifesto</p>
        <p>Self-awareness test</p>
        <p>Work With Us</p>
        </div>
        <div className="m-1 bg-black text-white rounded-full justify-center py-3 px-6">
        <button>  Download app  </button>
        </div>
    </div>
  )
}

export default Navbar