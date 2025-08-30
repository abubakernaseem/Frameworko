// src/components/ProjectModal.jsx
import { useState } from "react";

export default function ProjectModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        projectName: "",
        category: "",
        description: "",
        sampleUrl: "",
        pages: "",
        email: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/project-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            alert(result.message || "Form submitted!");

            setFormData({
                name: "",
                category: "",
                description: "",
                sampleWebsite: "",
                pages: "",
                email: "",
            });
            onClose(); // close modal after submit
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">
                    Request Your Website
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="projectName"       // <-- changed from "name"
                        placeholder="Website/App Name"
                        value={formData.projectName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category (e.g., Portfolio, E-commerce)"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Describe how your website should look"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                        rows="3"
                        required
                    />

                    <input
                        type="url"
                        name="sampleUrl"         // <-- changed from "sampleWebsite"
                        placeholder="Sample Website (optional)"
                        value={formData.sampleUrl}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <input
                        type="number"
                        name="pages"
                        placeholder="How many pages?"
                        value={formData.pages}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] dark:from-[#3b3b8c] dark:to-[#1a3b8c] text-white py-3 rounded-lg font-semibold hover:opacity-90"
                    >
                        Submit Project
                    </button>
                </form>
            </div>
        </div>
    );
}
