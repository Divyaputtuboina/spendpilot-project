"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {

  const router = useRouter();

  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Free");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleGenerate = () => {

    if (!monthlySpend || !teamSize) {
      alert("Please fill all fields.");
      return;
    }

    const auditData = {
      tool,
      plan,
      monthlySpend,
      teamSize,
      timestamp: Date.now(),
    };

    localStorage.setItem(
      "auditData",
      JSON.stringify(auditData)
    );

    router.push("/results");
  };

  return (
    <main className="min-h-screen px-6 py-16 text-white">

      <div className="max-w-3xl mx-auto">

        <button
          onClick={() => router.push("/")}
          className="mb-8 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          ← Back
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-bold text-center leading-tight">
            Optimize Your
            <span className="text-purple-400"> AI Spending</span>
          </h1>

          <p className="text-center text-gray-400 mt-5 text-lg">
            Discover hidden savings opportunities across your AI stack.
          </p>

          <div className="mt-12 space-y-6">

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                AI Tool
              </label>

              <select
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10"
              >
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>Cursor</option>
                <option>Gemini</option>
                <option>GitHub Copilot</option>
                <option>OpenAI API</option>
                <option>Anthropic API</option>
                <option>Windsurf</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Current Plan
              </label>

              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10"
              >
                <option>Free</option>
                <option>Plus</option>
                <option>Pro</option>
                <option>Team</option>
                <option>Business</option>
                <option>Enterprise</option>
                <option>API</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Monthly Spend ($)
              </label>

              <input
                type="number"
                placeholder="500"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Team Size
              </label>

              <input
                type="number"
                placeholder="10"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10"
              />
            </div>

            <button
              onClick={handleGenerate}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-lg hover:scale-[1.02] transition"
            >
              Generate AI Audit
            </button>

          </div>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          Built with Next.js • SpendPilot AI Audit Platform
        </footer>

      </div>
    </main>
  );
}