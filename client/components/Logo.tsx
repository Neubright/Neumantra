interface LogoProps {
  variant?: "dark" | "white";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F0b27405b6ba144e189319268af836d65%2Fdf20c9ef411a4d3295cc3ac80ab91e9b?format=webp&width=800&height=1200"
      alt="Neumantra Logo"
      className={`h-6 w-auto ${variant === "white" ? "brightness-0 invert" : ""}`}
    />
  );
}
