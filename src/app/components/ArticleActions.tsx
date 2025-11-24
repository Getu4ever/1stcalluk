"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
  FaThumbsUp,
} from "react-icons/fa";

export default function ArticleActions({ title }: { title: string }) {
  const [liked, setLiked] = useState(false);
  const pathname = usePathname();

  // Change to your real domain when live
  const domain = "https://www.1stcallukimmigration.co.uk";

  // Always correct — includes slug
  const pageUrl = `${domain}${pathname}`;

  // Encoded versions for sharing
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  // Like Handler
  const handleLike = () => {
    setLiked(true);
    setTimeout(() => setLiked(false), 1500);
  };
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(pageUrl);
    alert("Link copied!");
  } catch (err) {
    // Fallback for older browsers
    const temp = document.createElement("input");
    temp.value = pageUrl;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("Link copied!");
  }
}

  return (
    <div className="mt-12 border-t pt-8">
      {/* LIKE BUTTON */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition 
          ${
            liked
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
      >
        <FaThumbsUp size={16} />
        {liked ? "Thanks!" : "Like"}
      </button>

      {/* SHARE SECTION */}
      <div className="mt-6">
        <p className="font-semibold text-gray-700 mb-3">Share</p>

        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaFacebookF size={18} />
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
          >
            <FaTwitter size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodedTitle}%20-%20${encodedUrl}`}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            <FaWhatsapp size={18} />
          </a>

          {/* Copy Link */}
          <button
  onClick={copyToClipboard}
  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
>
  <FaLink size={18} />
</button>

        </div>
      </div>
    </div>
  );
}
