"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {

  const router = useRouter();

  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Free");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  useEffect(() => {

    const savedTool = localStorage.getItem("tool");
    const savedPlan = localStorage.getItem("plan");
    const savedSpend = localStorage.getItem("monthlySpend");
    const savedTeam = localStorage.getItem("teamSize");

    if (savedTool) setTool(savedTool);
    if (savedPlan) setPlan(savedPlan);
    if (savedSpend) setMonthlySpend(savedSpend);
    if (savedTeam) setTeamSize(savedTeam);

  }, []);

  const handleGenerate = () => {

    localStorage.setItem("tool", tool);
    localStorage.setItem("plan", plan);
    localStorage.setItem("monthlySpend", monthlySpend);
    localStorage.setItem("teamSize", teamSize);

    router.push("/results");

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <main className="min-h-screen px-6 py-16 text-white">

      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mb-8 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          ← Back
        </button>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-bold text-center leading-tight">
            Optimize Your
            <span className="text-purple-400"> AI Spending</span>
          </h1>

          <p className="text-center text-gray-400 mt-5 text-lg">
            Discover hidden savings opportunities across your AI subscriptions.
          </p>

          <div className="mt-12 space-y-6">

            {/* AI Tool */}
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

            {/* Current Plan */}
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

            {/* Monthly Spend */}
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

            {/* Team Size */}
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

            {/* Generate Button */}
            <button
              type="button"
              onClick={handleGenerate}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-lg hover:scale-[1.02] transition"
            >
              Generate AI Audit
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}