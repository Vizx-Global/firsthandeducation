import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  MessageCircle, 
  Phone,
  X,
  Users,
  Heart
} from "lucide-react";

const SimpleChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      text: "Call Us",
      description: "Speak directly with our team",
      action: () => window.open('tel:281-747-6757', '_self'),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: MessageCircle,
      text: "Message Us", 
      description: "Send us an email",
      action: () => window.open('mailto:info@firsthandhealthcare.com', '_self'),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      text: "Apply Now",
      description: "Start your healthcare career",
      action: () => window.open('/healthcare-staffing-for-job-seekers', '_self'),
      color: "from-corporate-red to-red-600",
      bgColor: "bg-corporate-red/10"
    }
  ];

  return (
    <>
      {/* Main Chat Bubble Trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-corporate-red to-red-600 rounded-full shadow-2xl shadow-red-500/30 flex items-center justify-center text-white hover:shadow-red-500/50 transition-all duration-300 group"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulsing Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-corporate-red/20 border-2 border-corporate-red/30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Quick Actions Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            
            {/* Actions Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden backdrop-blur-sm"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-corporate-red to-red-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Contact FirstHand</h3>
                    <p className="text-red-100 text-sm">Healthcare Staffing Experts</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center hover:scale-110"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 space-y-3">
                {actions.map((action, index) => (
                  <motion.button
                    key={action.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.action}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:border-white/60 transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold text-gray-900 group-hover:text-corporate-red transition-colors duration-200">
                        {action.text}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {action.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-gray-50/80 backdrop-blur-sm border-t border-white/40">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <Heart className="w-3 h-3 text-corporate-red" />
                  <span>24/7 Healthcare Staffing Support</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SimpleChatBubble;