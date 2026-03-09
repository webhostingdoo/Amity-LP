"use client";

interface TestimonialQuoteProps {
  quote?: string;
  author?: string;
  authorTitle?: string;
}

export default function TestimonialQuote(props: TestimonialQuoteProps) {
  const {
    quote = "\u201CThe fear of withdrawal keeps more people sick than withdrawal itself ever could. We built our detox protocol specifically to change that.\u201D",
    author = "Mitchell Naficy, MD",
    authorTitle = "Medical Director",
  } = props;

  return (
    <div className="quote-section">
      <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="quote-text">
          {quote}
        </blockquote>
        <div>
          <div className="quote-name">{author}</div>
          <div className="quote-title">{authorTitle}</div>
        </div>
      </div>
    </div>
  );
}
