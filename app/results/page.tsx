"use client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function ResultsPage() {
    const router = useRouter();
  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState(0);
  const [teamSize, setTeamSize] = useState(0);
  const [plan, setPlan] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const savedTool = localStorage.getItem("tool") || "";
    const savedSpend = Number(localStorage.getItem("monthlySpend")) || 0;
    const savedTeam = Number(localStorage.getItem("teamSize")) || 0;
    const savedPlan = localStorage.getItem("plan") || "";

    setTool(savedTool);
    setMonthlySpend(savedSpend);
    setTeamSize(savedTeam);
    setPlan(savedPlan);

  }, []);

  let recommendedSpend = monthlySpend;
  let recommendation = "";
  let aiSummary = "";

  if (tool === "ChatGPT") {

    if (teamSize <= 3) {

      recommendedSpend = monthlySpend * 0.7;

      recommendation =
        "Your team is small enough that ChatGPT Team may be unnecessary. ChatGPT Plus plans could reduce costs significantly.";

      aiSummary =
        "Your organization appears to be overspending on collaborative AI plans relative to team size. Optimizing plan allocation and reducing unnecessary premium subscriptions could significantly lower operational costs while maintaining productivity.";

    }

  } else if (tool === "Claude") {

    recommendedSpend = monthlySpend * 0.75;

    recommendation =
      "Claude subscriptions are often over-provisioned for smaller research teams. Optimizing plan allocation could reduce spending.";

    aiSummary =
      "Claude usage patterns suggest that your current subscription mix may exceed actual workload requirements. Adjusting plan tiers and consolidating usage could improve efficiency and reduce monthly AI expenses.";

  } else if (tool === "Cursor") {

    recommendedSpend = monthlySpend * 0.65;

    recommendation =
      "Cursor Business plans can become expensive for growing engineering teams. Lower-tier plans may provide similar value.";

    aiSummary =
      "Engineering-focused AI tooling costs can scale rapidly as teams grow. Your current Cursor spending indicates potential savings through better seat allocation and optimized subscription planning.";

  } else {

    recommendedSpend = monthlySpend * 0.8;

    recommendation =
      "Your current AI stack may have optimization opportunities through lower-cost plans and better usage allocation.";

    aiSummary =
      "Your current AI spending profile shows opportunities for optimization through smarter plan selection, reduced overlap between tools, and improved subscription efficiency.";
  }

  const monthlySavings = monthlySpend - recommendedSpend;
  const yearlySavings = monthlySavings * 12;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
        <button
  onClick={() => router.push("/audit")}
  className="mb-8 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
>
  ← Back to Audit
</button>

      <h1 className="text-5xl font-bold text-center">
        Your AI Audit Report
      </h1>

      <div className="max-w-3xl mx-auto mt-16 space-y-8">

        {/* Savings Card */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-6">
            Total Savings
          </h2>

          <p className="text-2xl text-green-400">
            ${monthlySavings.toFixed(0)}/month
          </p>

          <p className="text-gray-400 mt-2">
            ${yearlySavings.toFixed(0)}/year
          </p>

        </div>

        {/* Recommendation Card */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-2xl font-semibold mb-4">
            Audit Recommendation
          </h2>

          <p className="text-gray-300 leading-8">
            {recommendation}
          </p>

        </div>

        {/* AI Summary Card */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-2xl font-semibold mb-4">
            AI Generated Summary
          </h2>

          <p className="text-gray-300 leading-8">
            {aiSummary}
          </p>

        </div>

        {/* Email Capture */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-2xl font-semibold mb-4">
            Save Your Audit Report
          </h2>

          <p className="text-gray-400 mb-6">
            Get your personalized report delivered to your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700"
          />

          <button
            onClick={() => {

              localStorage.setItem("userEmail", email);

              alert("Report saved successfully!");

            }}

            className="w-full mt-4 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Save Report
          </button>

        </div>

      </div>

    </main>
  );
}