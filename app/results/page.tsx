"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultsPage() {

  const router = useRouter();

  const [data, setData] = useState<any>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {

    const storedData = localStorage.getItem("auditData");

    if (storedData) {
      setData(JSON.parse(storedData));
    }

  }, []);

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  const {
    tool,
    plan,
    monthlySpend,
    teamSize,
  } = data;

  const spend = Number(monthlySpend);

  let optimizationRate = 0.15;

  switch (tool) {
    case "ChatGPT":
      optimizationRate = 0.25;
      break;
    case "Claude":
      optimizationRate = 0.22;
      break;
    case "Cursor":
      optimizationRate = 0.35;
      break;
    case "Gemini":
      optimizationRate = 0.18;
      break;
    case "GitHub Copilot":
      optimizationRate = 0.30;
      break;
    case "OpenAI API":
      optimizationRate = 0.40;
      break;
    case "Anthropic API":
      optimizationRate = 0.32;
      break;
    case "Windsurf":
      optimizationRate = 0.28;
      break;
  }

  const monthlySavings = spend * optimizationRate;
  const yearlySavings = monthlySavings * 12;
  const optimizedSpend = spend - monthlySavings;

  return (
    <main className="min-h-screen px-6 py-16 text-white">

      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => router.push("/audit")}
          className="mb-8 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          ← Back to Audit
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-bold text-center">
            AI Spend Audit Report
          </h1>

          <p className="text-center text-gray-400 mt-5 text-lg">
            Personalized optimization insights for your AI stack.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-gray-400 text-sm">
              Monthly Savings
            </h2>

            <p className="text-4xl font-bold mt-3 text-green-400">
              ${monthlySavings.toFixed(0)}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-gray-400 text-sm">
              Optimized Spend
            </h2>

            <p className="text-4xl font-bold mt-3 text-blue-400">
              ${optimizedSpend.toFixed(0)}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-gray-400 text-sm">
              Yearly Savings
            </h2>

            <p className="text-4xl font-bold mt-3 text-purple-400">
              ${yearlySavings.toFixed(0)}
            </p>
          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mt-10">

          <h2 className="text-3xl font-semibold mb-6">
            Audit Summary
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Your team of
            <span className="text-white font-semibold"> {teamSize} </span>
            members currently uses
            <span className="text-purple-400 font-semibold"> {tool} </span>
            on the
            <span className="text-blue-400 font-semibold"> {plan} </span>
            plan with a monthly spend of
            <span className="text-green-400 font-semibold"> ${spend}</span>.

            SpendPilot identified
            <span className="text-green-400 font-semibold">
              {" "} ${monthlySavings.toFixed(0)}
            </span>
            in potential monthly optimization savings.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mt-10">

          <h2 className="text-2xl font-semibold mb-5">
            Save Audit Report
          </h2>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10"
          />

          <button
            onClick={() => {
              alert("Audit report saved successfully!");
            }}
            className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-lg"
          >
            Save Report
          </button>

        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          Built with Next.js • SpendPilot AI Audit Platform
        </footer>

      </div>
    </main>
  );
}