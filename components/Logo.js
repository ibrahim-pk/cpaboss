import { useEffect, useRef, useState } from "react";
import { images } from "../data/site";

// Shows /public/images/logo.png (a wide icon + wordmark lockup); falls back to a text wordmark if the file is missing.
// Pass `className` to set the size; it replaces the default header size.
export default function Logo({ className = "h-9 w-auto sm:h-10 md:h-11" }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  // The image can fail before React hydrates, so check it once on mount too.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={imgRef}
        src={images.logo}
        alt="Cpabossaffiliate"
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="text-2xl font-semibold tracking-wide">
      <span className="text-[#143A6E]">Cpaboss</span>
      <span className="text-[#6E7F96]">affiliate</span>
    </span>
  );
}
