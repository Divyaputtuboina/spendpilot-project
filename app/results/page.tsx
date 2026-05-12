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

  // Smart Optimization Logic
  let optimizationRate = 0.12;

  switch (tool) {

    case "ChatGPT":
      optimizationRate = plan === "Enterprise" ? 0.30 : 0.22;
      break;

    case "Claude":
      optimizationRate = plan === "Business" ? 0.26 : 0.20;
      break;

    case "Cursor":
      optimizationRate = 0.35;
      break;

    case "Gemini":
      optimizationRate = 0.18;
      break;

    case "GitHub Copilot":
      optimizationRate = Number(teamSize) > 20 ? 0.32 : 0.24;
      break;

    case "OpenAI API":
      optimizationRate = spend > 50000 ? 0.42 : 0.30;
      break;

    case "Anthropic API":
      optimizationRate = 0.28;
      break;

    case "Windsurf":
      optimizationRate = 0.25;
      break;

    default:
      optimizationRate = 0.15;
  }

  const monthlySavings = Math.round(spend * optimizationRate);

  const yearlySavings = monthlySavings * 12;

  const optimizedSpend = spend - monthlySavings;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen px-6 py-16 text-white">

      <div className="max-w-4xl w-full mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.push("/audit")}
          className="mb-8 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          ← Back to Audit
        </button>

        {/* Header */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">

          <h1 className="text-3xl md:text-5xl font-bold text-center">
            AI Spend Audit Report
          </h1>

          <p className="text-center text-gray-400 mt-5 text-base md:text-lg">
            Personalized optimization insights for your AI stack.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-gray-400 text-sm">
              Monthly Savings
            </h2>

            <p className="text-3xl md:text-4xl font-bold mt-3 text-green-400 break-words">
              {formatCurrency(monthlySavings)}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-gray-400 text-sm">
              Optimized Spend
            </h2>

            <p className="text-3xl md:text-4xl font-bold mt-3 text-blue-400 break-words">
              {formatCurrency(optimizedSpend)}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-gray-400 text-sm">
              Yearly Savings
            </h2>

            <p className="text-3xl md:text-4xl font-bold mt-3 text-purple-400 break-words">
              {formatCurrency(yearlySavings)}
            </p>
          </div>

        </div>

        {/* Summary */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mt-10">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Audit Summary
          </h2>

          <p className="text-gray-300 leading-8 text-base md:text-lg">

            Your team of
            <span className="text-white font-semibold">
              {" "} {teamSize} {" "}
            </span>

            members currently uses
            <span className="text-purple-400 font-semibold">
              {" "} {tool} {" "}
            </span>

            on the
            <span className="text-blue-400 font-semibold">
              {" "} {plan} {" "}
            </span>

            plan with a monthly spend of
            <span className="text-green-400 font-semibold">
              {" "} {formatCurrency(spend)}
            </span>.

            SpendPilot identified potential monthly optimization savings of

            <span className="text-green-400 font-semibold">
              {" "} {formatCurrency(monthlySavings)}
            </span>.

          </p>

        </div>

        {/* Email Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mt-10">

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
            className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-base md:text-lg hover:scale-[1.02] transition"
          >
            Save Report
          </button>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <center>Built with Next.js • SpendPilot AI Audit Platform</center>
        </footer>

      </div>

    </main>
  );
}