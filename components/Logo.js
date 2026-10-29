import { useEffect, useRef, useState } from "react";
import { images } from "../data/site";

// Shows /public/images/logo.png (the wide "CPA BOSS Affiliate" wordmark); falls back to a text wordmark if the file is missing.
// Pass `className` to set the size; it replaces the default header size.
export default function Logo({ className = "h-7 w-auto sm:h-8 lg:h-7 xl:h-10" }) {
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
        alt="CPA BOSS Affiliate"
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="text-2xl font-black tracking-wide">
      <span className="text-[#22E07A]">CPA </span>
      <span className="text-[#C8D400]">BOSS </span>
      <span className="text-ink">Affiliate</span>
    </span>
  );
}
