"use client";

export default function TestimonialQuote() {
  return (
    <div className="quote-section">
      <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="quote-text">
          &ldquo;The <strong>fear of withdrawal</strong> keeps more people sick than withdrawal itself ever could. We built our{" "}
          <strong>detox protocol</strong> specifically to{" "}
          <strong>change that</strong>.&rdquo;
        </blockquote>
        <div>
          <div className="quote-name">Mitchell Naficy, MD</div>
          <div className="quote-title">Medical Director</div>
        </div>
      </div>
    </div>
  );
}
