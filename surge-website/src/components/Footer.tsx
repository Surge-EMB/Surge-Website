import React from "react";

interface FooterProps {
  linkedinUrl?: string;
  instagramUrl?: string;
  emailAddress?: string;
}

const Footer: React.FC<FooterProps> = ({
  linkedinUrl = "https://www.linkedin.com/company/surge-emb/",
  instagramUrl = "https://www.instagram.com/surge.emb/",
  emailAddress = "mailto:surge.emb@gmail.com",
}) => {
  return (
    <footer className="bg-text-yellow py-8 px-6 text-text-blue bg-text-yellow border-y-6 border-text-blue">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 bg-text-yellow">
        {/* Social Media and Email Links */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-24">
          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-blue"
          >
            <div className="w-10 h-10 bg-text-blue rounded flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="#FFBF00"
                className="w-8 h-8"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="text-xl font-medium">LinkedIn</span>
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-blue"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-xl font-medium">Instagram</span>
          </a>

          {/* Mail */}
          <a
            href={emailAddress.startsWith("mailto:") ? emailAddress : `mailto:${emailAddress}`}
            className="flex items-center gap-3 text-text-blue"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-xl font-medium">Mail</span>
          </a>
        </div>

        {/* OCF Hosted Logo */}
        <a href="https://www.ocf.berkeley.edu">
          <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
              alt="Hosted by the OCF" />
        </a>

      </div>
    </footer>
  );
};

export default Footer;