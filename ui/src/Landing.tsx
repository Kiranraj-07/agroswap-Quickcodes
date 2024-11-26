import { ArrowRightLeft, Shield, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    icon: <ArrowRightLeft className="h-10 w-10" />,
    title: 'Cross-Chain Swaps',
    description: 'Effortlessly swap tokens across different blockchain networks.',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Secure Transactions',
    description: 'Advanced security measures to protect your assets and data.',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Lightning Fast',
    description: 'Experience quick and efficient token swaps with minimal waiting times.',
  },
]

function Landing() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100">
      <header className="border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <span className="text-2xl font-bold text-purple-400">
          AgroSwap
        </span>
        <nav>
          <ul className="flex space-x-4">
            <li><span className="hover:text-purple-400">Features</span></li>
            <li><span className="hover:text-purple-400">Docs</span></li>
            <li><span className="hover:text-purple-400">About</span></li>
          </ul>
        </nav>
        <button onClick={()=>{
            navigate("/swap")
        }} className="p-3 rounded-3xl border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900">
          Launch App
        </button>
      </div>
    </header>
      <main>
      <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-5xl font-bold leading-tight">
          Cross-Chain Token Swaps Made <span className="text-purple-400">Easy</span>
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Seamlessly swap tokens across multiple blockchains with AgroSwap's intuitive platform.
        </p>
        <button onClick={()=>{
            navigate("/swap")
        }} className="p-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
          Get Started
        </button>
      </div>
    </section>
    <section id="features" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold text-center">Why Choose AgroSwap?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-3 text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold">Ready to Start Swapping?</h2>
        <p className="mb-8 text-xl">
          Join thousands of users already benefiting from AgroSwap's cross-chain capabilities.
        </p>
        <button onClick={()=>{
            navigate("/swap")
        }} className="p-3 rounded-md bg-white text-purple-500 hover:bg-gray-100">
          Launch App
        </button>
      </div>
    </section>
      </main>
      <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-purple-400">
              AgroSwap
            </span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><span className="hover:text-purple-400">Terms</span></li>
              <li><span className="hover:text-purple-400">Privacy</span></li>
              <li><span className="hover:text-purple-400">Support</span></li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-gray-400">
          © {new Date().getFullYear()} AgroSwap. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Landing