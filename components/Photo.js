// Background-image box with a gradient fallback, so layout looks finished
// even before the real photos are added to /public/images.
// The photo zooms in slightly when a parent with the `group` class is hovered.
export default function Photo({ src, alt, className = "", gradient = "from-sky-100 via-white to-lime-100", ...rest }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      {...rest}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
}
