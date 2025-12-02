// pages/login.js
'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-white text-center mb-6"
                >
                    Welcome Back
                </motion.h1>

                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-5"
                >
                    <div>
                        <label className="text-gray-300 text-sm">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 bg-black/30 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 bg-black/30 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Enter your password"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow-lg"
                    >
                        Login
                    </motion.button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-sm text-center mt-4"
                >
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition">
                        Sign Up
                    </Link>
                </motion.p>

            </motion.div>
        </div>
    );
}
