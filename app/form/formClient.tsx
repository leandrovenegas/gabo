'use client'

import { useState } from "react";
import Link from "next/link";
import { redirect } from 'next/navigation'

export default function FormClient({ questions }: { questions: any }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // 🔹 Save answers to state
  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  // 🔹 Next button
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // 🔹 Previous button
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // 🔹 Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", answers);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      if (!res.ok) throw new Error("Failed to save data");

      alert("✅ Contact saved successfully!");
      setAnswers({});
      setCurrentStep(0);
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred while saving the data");
    }
  };

  const q = questions[currentStep];

  return (
    <main className="p-6 md:p-10 max-w-2xl mx-auto flex flex-col justify-center min-h-screen bg-[url('/img/malla.svg')]/20 bg-cover ">
      <Link href="/">
        <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-6 block text-center">
          Next-Lights
        </span>
      </Link>

      <div className="bg-stone-900 w-full p-6 md:p-10 rounded-2xl shadow-lg flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-8 min-h-[60vh]"
        >
          {/* Question Title */}
          <p className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-indigo-600 to-pink-500 p-3 rounded-lg shadow">
            {q.text}
          </p>

          {/* Dynamic Input Field */}
          <div key={q.id} className="flex flex-col gap-4 text-lg md:text-xl">
            {q.type === "text" && (
              <input
                type="text"
                name={q.id}
                className="border border-gray-600 bg-stone-800 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                value={answers[q.id] || ""}
                placeholder="Enter your answer..."
              />
            )}

            {q.type === "number" && (
              <input
                type="number"
                name={q.id}
                className="border border-gray-600 bg-stone-800 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                value={answers[q.id] || ""}
                placeholder="Enter a number..."
              />
            )}

            {q.type === "radio" &&
              q.options?.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 text-white cursor-pointer"
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    className="accent-pink-500 w-5 h-5"
                    checked={answers[q.id] === opt}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {opt}
                </label>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-600 hover:bg-gray-700 transition-all duration-200 text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto"
              >
                ← Back
              </button>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={!answers.name || !answers.email}
                className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto disabled:opacity-50"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
