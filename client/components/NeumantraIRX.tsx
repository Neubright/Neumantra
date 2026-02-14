import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Logo from "@/components/Logo";

export default function NeumantraIRX() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const modalRef = useRef(null);

  const values = ["Experience", "Excellence", "Execution", "Expertise"];

  // Auto-open on page load with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
      setHasOpenedOnce(true);
    }, 2500);
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
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
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
          animation: popIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .pop-out {
          animation: popOut 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .fade-in-backdrop {
          animation: fadeInBackdrop 1s ease-out forwards;
        }

        .fade-out-backdrop {
          animation: fadeOutBackdrop 1s ease-out forwards;
        }
      `}</style>

      {/* Expanded Panel - Centered Modal */}
      {isExpanded && (
        <>
          <div
            className={`fixed inset-0 z-40 ${isClosing ? 'fade-out-backdrop' : 'fade-in-backdrop'} bg-black/30 backdrop-blur-sm`}
            onClick={() => handleClose()}
          />
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 px-4 ${isClosing ? 'pop-out' : 'pop-in'}`}
            onClick={() => handleClose()}
          >
            <div
              ref={modalRef}
              className="w-full max-w-md backdrop-blur-2xl bg-white/60 border-2 border-white/90 rounded-xl p-6 shadow-apple"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => handleClose()}
                  className="text-primary hover:text-accent transition-colors ml-auto"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="text-center space-y-2 mb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-10 w-auto">
                    <Logo />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Neumantra Investor Relations <span className="text-accent">X</span>
                </h3>
                <p className="text-sm text-gray-700 font-medium">X is for…</p>

                <div className="space-y-1 my-4">
                  {values.map((value, index) => (
                    <p
                      key={index}
                      className="text-accent font-semibold"
                      style={{
                        animation: `popIn 0.3s ease-out forwards`,
                        animationDelay: `${index * 0.05}s`,
                      }}
                    >
                      {value}
                    </p>
                  ))}
                </div>

                <div className="border-t border-white/40 pt-4 mt-4">
                  <p className="text-sm text-primary font-semibold leading-relaxed">
                    The integrated investor relations experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
