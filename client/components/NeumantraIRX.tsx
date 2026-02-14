import { useState, useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";

export default function NeumantraIRX() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const modalRef = useRef(null);

  const values = ["Experience", "Excellence", "Execution", "Expertise"];

  // Auto-open on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
      setHasOpenedOnce(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenIRX = () => {
      setIsExpanded(true);
      setIsClosing(false);
      setHasOpenedOnce(true);
    };

    window.addEventListener('openIRXWidget', handleOpenIRX);
    return () => window.removeEventListener('openIRXWidget', handleOpenIRX);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsClosing(false);
    }, 600);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popOut {
          0% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
          100% {
            opacity: 0;
            transform: scale(0.3) translate(calc(100vw - 80px), calc(-100vh + 80px));
          }
        }

        @keyframes fadeOutBackdrop {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .pop-in {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .pop-out {
          animation: popOut 0.6s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .fade-in-backdrop {
          animation: fadeInBackdrop 0.3s ease-out forwards;
        }

        .fade-out-backdrop {
          animation: fadeOutBackdrop 0.6s ease-in forwards;
        }
      `}</style>

      {/* Expanded Panel - Centered Modal */}
      {isExpanded && (
        <>
          <div
            className={`fixed inset-0 z-40 ${isClosing ? 'fade-out-backdrop' : 'fade-in-backdrop'} bg-black/30 backdrop-blur-sm`}
            onClick={() => handleClose()}
          />
          <div className={`fixed inset-0 flex items-center justify-center z-50 px-4 ${isClosing ? 'pop-out' : 'pop-in'}`}>
            <div 
              ref={modalRef}
              className="w-full max-w-md backdrop-blur-2xl bg-white/40 border-2 border-white/90 rounded-xl p-6 shadow-apple"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-primary">
                  Neumantra IR<span className="text-accent">X</span>
                </h3>
                <button
                  onClick={() => handleClose()}
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
                      animation: `popIn 0.3s ease-out forwards`,
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
                onClick={() => handleClose()}
                className="w-full mt-4 flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors group"
              >
                Close
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
