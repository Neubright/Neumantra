export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4 sm:my-6">
      <div
        className="flex-grow h-px flex-shrink-0"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgb(220, 38, 38) 100%)",
        }}
      ></div>
      <div className="w-2 h-2 bg-accent rotate-45 flex-shrink-0"></div>
      <div
        className="flex-grow h-px flex-shrink-0"
        style={{
          background:
            "linear-gradient(to right, rgb(220, 38, 38) 0%, transparent 100%)",
        }}
      ></div>
    </div>
  );
}
