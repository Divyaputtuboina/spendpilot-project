import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">SpendPilot</h1>

        <Link href="/audit">
  <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
    Start Audit
  </button>
</Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Audit Your AI Spending
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-xl">
          Discover how much your startup can save on ChatGPT,
          Claude, Cursor, Gemini, and more.
        </p>

        <Link href="/audit">
  <button className="mt-10 bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
    Start Free Audit
  </button>
</Link>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="border border-gray-800 p-6 rounded-2xl bg-gray-950">
          <h2 className="text-2xl font-semibold mb-4">
            Smart Recommendations
          </h2>

          <p className="text-gray-400">
            Find cheaper AI plans and better alternatives instantly.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-2xl bg-gray-950">
          <h2 className="text-2xl font-semibold mb-4">
            Save Money
          </h2>

          <p className="text-gray-400">
            Calculate monthly and yearly savings for your team.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-2xl bg-gray-950">
          <h2 className="text-2xl font-semibold mb-4">
            Share Reports
          </h2>

          <p className="text-gray-400">
            Generate beautiful shareable audit reports instantly.
          </p>
        </div>

      </section>
      

    </main>
  );
}