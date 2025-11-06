"use client";

import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react"; // npm install lucide-react

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [message, setMessage] = useState("");

  // Generate captcha numbers
  function generateCaptcha() {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaAnswer("");
  }

  useEffect(() => {
    generateCaptcha();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    // Verify captcha
    if (parseInt(captchaAnswer) !== num1 + num2) {
      setMessage("❌ Wrong captcha. Try again!");
      generateCaptcha();
      return;
    }

    setMessage("Checking credentials...");

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful!");
        window.location.href = "/app/dashboard"; // redirect after login
      } else {
        setMessage(`❌ ${data.error}`);
        generateCaptcha();
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("❌ Server error");
      generateCaptcha();
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* CAPTCHA */}
        <div className="flex items-center justify-between border p-2 rounded bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">
              {num1} + {num2} = ?
            </span>
            <button
              type="button"
              onClick={generateCaptcha}
              className="text-blue-600 hover:text-blue-800"
              title="Refresh Captcha"
            >
              <RefreshCw size={18} />
            </button>
          </div>

          <input
            type="number"
            placeholder="Answer"
            className="border p-1 w-16 text-center rounded"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {message && (
          <p className="text-center text-sm mt-2 text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
