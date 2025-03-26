"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col items-center justify-center text-white p-4">
      {/* Animated blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-gray-100 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-4s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '-1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-[900px] h-[900px] bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-2/3 right-2/3 w-[400px] h-[400px] bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '-2.5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/logo_isotipe.svg" 
            alt="Tradoxus Logo" 
            className="w-32 h-32 mb-4 opacity-0 animate-fade-in"
          />
          <img 
            src="/tradoxus_imgtp.svg" 
            alt="Tradoxus Text" 
            className="h-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">We're working on something amazing!</p>
      </div>

      {/* Social Links */}
      <div className="relative z-10 flex gap-6 mt-8">
        <a
          href="https://github.com/tradoxus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://x.com/tradoxus_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
