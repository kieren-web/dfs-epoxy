"use client";

import { useState } from "react";
import Image from "next/image";
import { GOOGLE_REVIEW_URL } from "@/lib/config";

type Stage = "stars" | "feedback" | "thanks";

export default function ReviewPage() {
  const [stage, setStage] = useState<Stage>("stars");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleStarClick(star: number) {
    setSelectedStar(star);
    if (star === 5) {
      window.location.href = GOOGLE_REVIEW_URL;
    } else {
      setStage("feedback");
    }
  }

  async function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await fetch("/api/review-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, rating: selectedStar }),
      });
      setStage("thanks");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const activeStars = hoveredStar || selectedStar;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: "var(--dfs-bg)" }}>

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/images/logo.png"
          alt="Dynamic Flooring Solutions"
          width={180}
          height={60}
          className="h-14 w-auto object-contain"
          priority
        />
      </div>

      {/* ── Stage: Stars ─────────────────────────────────────────────────── */}
      {stage === "stars" && (
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-2">How did we do?</h1>
          <p className="text-gray-400 mb-8">
            Your feedback means everything to us. Tap the stars to rate your experience.
          </p>

          {/* Star row */}
          <div
            className="flex justify-center gap-3 mb-6"
            onMouseLeave={() => setHoveredStar(0)}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoveredStar(star)}
                className="transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-14 h-14 transition-colors duration-100"
                  fill={star <= activeStars ? "var(--dfs-gold)" : "none"}
                  stroke={star <= activeStars ? "var(--dfs-gold)" : "#555"}
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            5 stars? You&apos;ll be taken straight to Google to leave your review.
          </p>
        </div>
      )}

      {/* ── Stage: Private Feedback Form ────────────────────────────────── */}
      {stage === "feedback" && (
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            {/* Show selected rating */}
            <div className="flex justify-center gap-1.5 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill={star <= selectedStar ? "var(--dfs-gold)" : "none"}
                  stroke={star <= selectedStar ? "var(--dfs-gold)" : "#555"}
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">
              We&apos;re sorry to hear that.
            </h2>
            <p className="text-gray-400 text-sm">
              Please tell us what went wrong. We&apos;ll make it right.
            </p>
          </div>

          <form
            onSubmit={handleFeedbackSubmit}
            className="space-y-4"
            style={{
              background: "var(--dfs-surface)",
              border: "1px solid var(--dfs-border)",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <div>
              <input
                type="text"
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                style={{
                  background: "var(--dfs-bg)",
                  border: "1px solid var(--dfs-border)",
                }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone or email (optional)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                style={{
                  background: "var(--dfs-bg)",
                  border: "1px solid var(--dfs-border)",
                }}
              />
            </div>

            <div>
              <textarea
                placeholder="What could we have done better? *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors text-sm resize-none"
                style={{
                  background: "var(--dfs-bg)",
                  border: "1px solid var(--dfs-border)",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="dfs-btn w-full py-3 text-sm disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Feedback"}
            </button>

            <button
              type="button"
              onClick={() => { setStage("stars"); setSelectedStar(0); }}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-300 transition-colors pt-1"
            >
              ← Go back and change rating
            </button>
          </form>
        </div>
      )}

      {/* ── Stage: Thank You ────────────────────────────────────────────── */}
      {stage === "thanks" && (
        <div className="w-full max-w-md text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: "rgba(201, 168, 112, 0.15)" }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="var(--dfs-gold)" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Thanks for your feedback</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We appreciate you letting us know. Carl &amp; Santiago will personally review your
            feedback and reach out if needed.
          </p>
        </div>
      )}

    </div>
  );
}
