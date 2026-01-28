import { useEffect } from "react";

export function usePageLoadScroll() {
  useEffect(() => {
    // Reset scroll to top immediately
    window.scrollTo(0, 0);

    // Custom easing function (ease-out cubic)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    // Smooth scroll animation function
    const smoothScroll = (targetScroll: number, duration: number, startDelay: number) => {
      const startTimer = setTimeout(() => {
        const startScroll = window.scrollY;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);
          const currentScroll = startScroll + (targetScroll - startScroll) * easedProgress;

          window.scrollTo(0, currentScroll);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, startDelay);

      return startTimer;
    };

    // Scroll down after 300ms with 500ms duration
    const scrollDownTimer = smoothScroll(150, 500, 300);

    // Scroll back up after 1.3s total with 500ms duration
    const scrollUpTimer = smoothScroll(0, 500, 1300);

    return () => {
      clearTimeout(scrollDownTimer);
      clearTimeout(scrollUpTimer);
    };
  }, []);
}
