import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

export default function NeumantraIRX() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [autoCollapse, setAutoCollapse] = useState(true);

  const values = ["Experience", "Excellence", "Execution", "Expertise"];

  useEffect(() => {
    if (isVisible && !isExpanded && autoCollapse) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isExpanded, autoCollapse]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .pop-in {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.4s ease-out forwards;
        }
      `}</style>

      {/* Collapsed Button - Left Sidebar */}
      {!isExpanded && (
        <button
          onClick={() => {
            setIsExpanded(true);
            setAutoCollapse(false);
          }}
          className="pop-in fixed left-4 bottom-20 md:left-6 lg:left-8 z-40 backdrop-blur-2xl bg-primary hover:bg-primary/90 text-white rounded-full p-4 flex items-center justify-center shadow-apple hover:shadow-lg transition-all duration-300 group"
          title="Neumantra IRX"
        >
          <span className="font-bold text-lg">IR</span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/95 text-white text-xs whitespace-nowrap px-2 py-1 rounded ml-12">
            Neumantra IRX
          </span>
        </button>
      )}

      {/* Expanded Panel - Left Sidebar */}
      {isExpanded && (
        <div className="slide-in-left fixed left-4 bottom-20 md:left-6 lg:left-8 z-40 w-80 max-h-96 backdrop-blur-2xl bg-white/40 border-2 border-white/90 rounded-xl p-6 shadow-apple">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-primary">
              Neumantra IR<span className="text-accent">X</span>
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-primary hover:text-accent transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-xs text-gray-700 mb-4 font-medium">X is for…</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-lg p-2 text-center hover:shadow-apple transition-all duration-300"
                style={{
                  animation: `slideInLeft 0.3s ease-out forwards`,
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <p className="text-primary font-bold text-xs">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/40 pt-3">
            <p className="text-xs text-primary font-semibold text-center leading-relaxed">
              The integrated investor relations experience.
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(false)}
            className="w-full mt-4 flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors group"
          >
            Close
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      )}
    </>
  );
}
