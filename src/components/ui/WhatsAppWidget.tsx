"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

/**
 * WhatsAppWidget - Floating WhatsApp chat button with popup
 */
const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "60123456789"; // Malaysia WhatsApp number
    const defaultMessage = "Hello! I would like to inquire about your logistics services.";

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-10 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-white rounded-lg shadow-xl w-72 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <MessageCircle className="text-[#25D366]" size={20} />
                                </div>
                                <div>
                                    <Typography variant="SemiBold_H6" className="text-white">
                                        Visions Support
                                    </Typography>
                                    <Typography variant="Regular_H6" className="text-white/80 text-xs">
                                        Usually replies within minutes
                                    </Typography>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 rounded-full p-1"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-[#ECE5DD]">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <Typography variant="Regular_H6" className="text-gray-700">
                                    👋 Hi there! How can we help you with your logistics needs today?
                                </Typography>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t">
                            <button
                                onClick={openWhatsApp}
                                className="w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Start Chat
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <div className="flex items-center justify-end">

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5A] transition-colors cursor-pointer"
                aria-label="Open WhatsApp chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
            
            </div>

        </div>
    );
};

export default WhatsAppWidget;
