import { useState } from "react";
import chatIcon from "../assets/chatbot.jpg";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">

      {/* CHAT WINDOW */}
      {open && (
        <div className="w-[280px] sm:w-80 h-[340px] sm:h-96 
                        bg-black/90 border border-white/10 
                        rounded-2xl shadow-xl flex flex-col 
                        overflow-hidden backdrop-blur-xl animate-fade-in">

          {/* HEADER */}
          <div className="p-3 border-b border-white/10 flex justify-between items-center">
            <h3 className="text-sm font-semibold">💬 Ask Fidha</h3>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 p-3 space-y-3 text-sm overflow-y-auto">

            <div className="bg-white/10 p-2 rounded-lg w-fit">
              👋 Hi! Have a question or want to discuss a project?
            </div>

            <div className="bg-white/10 p-2 rounded-lg w-fit">
              Let’s connect on WhatsApp ⚡
            </div>

            <a
              href="https://wa.me/12269783112"
              target="_blank"
              rel="noreferrer"
              className="block bg-green-500/20 hover:bg-green-500/30 p-2 rounded-lg text-center mt-4"
            >
              💬 WhatsApp Chat
            </a>

          </div>
        </div>
      )}

      {/* FLOATING BUTTON (RESPONSIVE SIZE) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   rounded-full overflow-hidden 
                   shadow-lg hover:scale-110 transition"
      >
        <img
          src={chatIcon}
          alt="Chat"
          className="w-full h-full object-cover"
        />
      </button>

    </div>
  );
}