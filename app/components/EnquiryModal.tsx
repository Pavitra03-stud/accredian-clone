"use client";

import { useState } from "react";
import { X } from "lucide-react";

type EnquiryModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function EnquiryModal({
    isOpen,
    onClose,
}: EnquiryModalProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;

        const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            company: (form.elements.namedItem("company") as HTMLInputElement).value,
            candidates: (form.elements.namedItem("candidates") as HTMLInputElement).value,
            location: (form.elements.namedItem("location") as HTMLInputElement).value,
        };

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);

                setTimeout(() => {
                    setSuccess(false);
                    onClose();
                }, 1500);
            }
        } catch (err) {
            console.error("Submission error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

            {/* Modal */}
            <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row shadow-xl">

                {/* LEFT IMAGE */}
                <div className="hidden md:block w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="team"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full md:w-1/2 p-6 relative">

                    {/* CLOSE */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    >
                        <X size={22} />
                    </button>

                    <h2 className="text-xl font-semibold mb-6 text-gray-900">
                        Enquire Now
                    </h2>

                    {/* SUCCESS MESSAGE */}
                    {success ? (
                        <div className="text-green-600 font-medium text-center py-10">
                            ✅ Submitted Successfully!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                                required
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                required
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <input
                                name="phone"
                                type="text"
                                placeholder="+91 Phone Number"
                                required
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <input
                                name="company"
                                type="text"
                                placeholder="Enter company name"
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <select
                                name="domain"
                                className="w-full border-b border-gray-300 py-2 text-gray-900 focus:outline-none bg-transparent"
                            >
                                <option value="">Select Domain</option>
                                <option>Product Management</option>
                                <option>Data Science</option>
                                <option>Artificial Intelligence</option>
                                <option>Human Resource</option>
                                <option>Strategy & Leadership</option>
                                <option>Finance</option>
                            </select>

                            <input
                                name="candidates"
                                type="text"
                                placeholder="Enter No. of candidates"
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <select
                                name="mode"
                                className="w-full border-b border-gray-300 py-2 text-gray-900 focus:outline-none bg-transparent"
                            >
                                <option value="">Select Mode of Delivery</option>
                                <option>Online</option>
                                <option>Offline</option>
                            </select>

                            <input
                                name="location"
                                type="text"
                                placeholder="Eg: Gurgaon, Delhi, India"
                                className="w-full border-b border-gray-300 focus:outline-none py-2 text-gray-900"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}