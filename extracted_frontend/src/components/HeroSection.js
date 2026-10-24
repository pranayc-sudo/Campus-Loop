import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#080a0c] text-[#F2F4F7] flex flex-col justify-between selection:bg-[#D1FF4D] selection:text-[#090A0C] select-none">
      {/* Volumetric background glow behind the phone on the right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 55% at 76% 42%, rgba(209, 255, 77, 0.22) 0%, rgba(20, 36, 12, 0.42) 36%, rgba(8, 10, 12, 0.98) 74%),
            radial-gradient(circle at 12% 18%, rgba(209, 255, 77, 0.05) 0%, transparent 35%)
          `
        }}
      />

      {/* Main 2-Column Split Content */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-center min-h-0 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 xl:gap-12 items-center flex-1 min-h-0">
          
          {/* LEFT COLUMN: Mission & Live Pitch Copy */}
          <div className="flex flex-col justify-center text-left py-2">
            
            {/* CampusLoop Brand Signature (Top-Left) */}
            <div className="mb-5 sm:mb-7">
              <div className="flex items-center gap-3">
                <svg width="30" height="30" viewBox="0 0 32 32" className="shrink-0" aria-hidden="true">
                  <rect x="1" y="1" width="30" height="30" fill="none" stroke="#22262B" strokeWidth="1.2" />
                  <path d="M8 16a8 8 0 1 1 8 8" fill="none" stroke="#D1FF4D" strokeWidth="3" strokeLinecap="square" />
                  <rect x="6" y="20" width="6" height="6" fill="#D1FF4D" />
                </svg>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  Campus<span className="text-[#D1FF4D]">Loop</span>
                </span>
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-[#D1FF4D] uppercase tracking-[0.22em] font-bold mt-2">
                CAMPUS WASTE INTELLIGENCE / CIRCULAR ECONOMY OS
              </div>
            </div>

            {/* Overline / Status */}
            <div className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-[#8B949E] uppercase mb-4 flex items-center gap-2">
              <span>DEPLOYMENT READY</span>
              <span className="text-mute/60">•</span>
              <span>LIVE DEMO</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[80px] leading-[0.96] uppercase text-white tracking-tight">
              CLOSING<br />
              THE LOOP ON<br />
              CAMPUS WASTE
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#CBD5E1] font-normal leading-relaxed max-w-xl">
              Interactive digital twin and edge scanner operational right now.
            </p>

            <div className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              <span>Experience the live web app and inspection console:</span><br />
              <a 
                href="https://campus-loop-dg0.pages.dev/login" 
                onClick={() => { window.location.href = "https://campus-loop-dg0.pages.dev/login"; }}
                className="text-white font-mono font-semibold hover:text-[#D1FF4D] transition-colors inline-block mt-0.5 cursor-pointer"
              >
                https://campus-loop-dg0.pages.dev/login
              </a>
            </div>

            <div className="mt-6 sm:mt-8 text-xs font-mono text-[#64748B]">
              Sociothon 2026 Showcase • Autonomous Waste Intelligence
            </div>
          </div>

          {/* RIGHT COLUMN: CAMPUSLOOP Brand Title + Tilted 3D Smartphone */}
          <div className="flex flex-col items-center justify-center relative min-h-0">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-none uppercase text-[#D1FF4D] text-center tracking-tight mb-1 sm:mb-2 shrink-0">
              <span>CAMPUS</span>
              <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]">LOOP</span>
            </h2>

            <div className="w-full flex justify-center items-center flex-1 min-h-0" style={{ perspective: "1200px" }}>
              <div 
                className="w-[280px] sm:w-[310px] md:w-[320px] rounded-[44px] bg-[#090A0C] p-3 border-[3px] border-[#252c1e] relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  transform: "translateY(-18px) rotateX(20deg) rotateY(-12deg) rotateZ(16deg)",
                  boxShadow: "0 35px 80px -15px rgba(0,0,0,0.95), 0 0 70px 12px rgba(209,255,77,0.32), inset 0 0 0 1px rgba(209,255,77,0.35)"
                }}
              >
                <div className="w-full h-[460px] sm:h-[500px] md:h-[530px] rounded-[34px] bg-gradient-to-b from-[#D8FF55] via-[#C5FF2E] to-[#B0FA14] text-[#090A0C] p-5 flex flex-col justify-between relative shadow-inner">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 sm:h-6 bg-black rounded-full flex items-center justify-end px-3">
                    <div className="w-2 h-2 rounded-full bg-[#D1FF4D]" />
                  </div>

                  {/* Mobile Header */}
                  <div className="pt-5 flex justify-between items-center font-mono text-[10px] sm:text-[11px] font-bold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#090A0C] animate-pulse" />
                      <span className="tracking-wider uppercase">CAMPUSLOOP</span>
                    </div>
                    <div className="bg-black/15 px-2 py-0.5 rounded text-[10px]">CAMPUS OPS</div>
                  </div>

                  {/* Balance */}
                  <div className="mt-2 text-left">
                    <div className="text-[10px] sm:text-[11px] uppercase font-mono font-bold tracking-wider opacity-75">
                      Eco Tokens & Impact
                    </div>
                    <div className="text-4xl sm:text-5xl font-display font-black tracking-tight mt-1">
                      4,850 <span className="text-base sm:text-lg font-mono font-bold">PTS</span>
                    </div>
                    <div className="text-xs font-mono mt-0.5 opacity-85 font-semibold">
                      ↑ 1,284.6 KG Diverted
                    </div>
                  </div>

                  {/* Node Card */}
                  <div className="bg-black/10 backdrop-blur-sm border border-black/10 rounded-xl p-3 my-1.5 text-left">
                    <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                      <span className="opacity-70">NODE: HOSTEL 4 HUB</span>
                      <span className="bg-[#090A0C] text-[#D1FF4D] px-2 py-0.5 rounded text-[9px]">99.4% SORT</span>
                    </div>
                    <div className="font-display font-bold text-sm mt-0.5">AI SENSOR ARRAY #08</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 my-1.5">
                    <a 
                      href="https://campus-loop-dg0.pages.dev/login" 
                      onClick={() => { window.location.href = "https://campus-loop-dg0.pages.dev/login"; }}
                      className="bg-[#090A0C] hover:bg-[#121418] text-[#D1FF4D] p-2.5 rounded-xl flex flex-col items-center justify-center text-center shadow transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 mb-1 text-[#D1FF4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H5a2 2 0 01-2-2v-2" />
                      </svg>
                      <span className="font-mono font-bold text-xs">SCAN BIN ↗</span>
                    </a>
                    <a 
                      href="https://campus-loop-dg0.pages.dev/login" 
                      onClick={() => { window.location.href = "https://campus-loop-dg0.pages.dev/login"; }}
                      className="bg-black/15 hover:bg-black/25 text-[#090A0C] p-2.5 rounded-xl flex flex-col items-center justify-center text-center font-bold transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-mono font-bold text-xs">REWARDS ⚡</span>
                    </a>
                  </div>

                  {/* Bottom Tabs */}
                  <div className="bg-[#090A0C] text-white rounded-xl py-1.5 px-4 flex justify-between items-center text-[10px] sm:text-[11px] font-mono font-semibold">
                    <span className="text-[#D1FF4D]">LIVE TWIN</span>
                    <span className="opacity-60">SCANNER</span>
                    <span className="opacity-60">WALLET</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Docked Action Bar */}
      <div className="w-full z-30 shrink-0 pb-0">
        <div className="w-full flex justify-end">
          <div className="flex items-stretch h-14 sm:h-16 md:h-[64px] w-full lg:w-[48%] shadow-2xl">
            <a
              href="https://campus-loop-dg0.pages.dev/login"
              onClick={() => { window.location.href = "https://campus-loop-dg0.pages.dev/login"; }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#D1FF4D] hover:bg-[#CCFF00] text-[#090A0C] font-display font-black text-sm sm:text-base md:text-lg tracking-wider uppercase rounded-tl-xl sm:rounded-tl-2xl transition-all duration-150 transform active:scale-[0.99] border-t-2 border-l-2 border-[#D1FF4D] hover:shadow-[0_-8px_30px_rgba(209,255,77,0.35)] cursor-pointer"
            >
              <span>GO TO WEBSITE</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="/CampusLoop_Pitch_Deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#15171C] hover:bg-[#1D2128] text-white font-display font-extrabold text-sm sm:text-base md:text-lg tracking-wider uppercase rounded-tr-xl sm:rounded-tr-2xl transition-all duration-150 border-t-2 border-r-2 border-[#22262B] hover:border-[#D1FF4D]/50 group cursor-pointer"
            >
              <span className="group-hover:text-[#D1FF4D] transition-colors">LEARN MORE</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] text-white group-hover:text-[#D1FF4D] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for LEARN MORE */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-[#121418] border border-[#22262B] w-full max-w-2xl rounded-2xl p-6 sm:p-8 text-left relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalOpen(false)} 
              className="absolute top-5 right-5 text-[#8B949E] hover:text-white p-2 rounded-lg bg-[#090A0C] border border-[#22262B] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#D1FF4D] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D1FF4D]" />
              <span>CampusLoop Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">How CampusLoop Works</h3>
            <p className="text-sm text-[#8B949E] mt-2">
              A tactical circular economy platform transforming institutional campuses into zero-waste ecosystems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
              <div className="bg-[#090A0C] border border-[#22262B] p-4 rounded-xl">
                <div className="font-mono text-xs text-[#00E676] font-bold">01 / AI SCANNER</div>
                <div className="font-display font-bold text-base text-white mt-1">Multi-Class Vision</div>
                <p className="text-xs text-[#8B949E] mt-1">Classifies Organic, Recyclable, and Reject streams with real-time feedback.</p>
              </div>

              <div className="bg-[#090A0C] border border-[#22262B] p-4 rounded-xl">
                <div className="font-mono text-xs text-[#00BFFF] font-bold">02 / DIGITAL TWIN</div>
                <div className="font-display font-bold text-base text-white mt-1">Live Campus Grid</div>
                <p className="text-xs text-[#8B949E] mt-1">Full 3D campus mapping with real-time bin sensors and dispatch routing.</p>
              </div>

              <div className="bg-[#090A0C] border border-[#22262B] p-4 rounded-xl">
                <div className="font-mono text-xs text-[#D1FF4D] font-bold">03 / ECO TOKENOMICS</div>
                <div className="font-display font-bold text-base text-white mt-1">Proof-of-Sort</div>
                <p className="text-xs text-[#8B949E] mt-1">Earn verified green points redeemable for campus perks and cafeteria credits.</p>
              </div>

              <div className="bg-[#090A0C] border border-[#22262B] p-4 rounded-xl">
                <div className="font-mono text-xs text-white font-bold">04 / ESG & AUDIT</div>
                <div className="font-display font-bold text-base text-white mt-1">Institutional ROI</div>
                <p className="text-xs text-[#8B949E] mt-1">Automated compliance reporting, carbon diversion metrics, and cost savings.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-[#22262B]">
              <a 
                href="https://campus-loop-dg0.pages.dev/login" 
                onClick={() => { window.location.href = "https://campus-loop-dg0.pages.dev/login"; }}
                className="w-full sm:w-auto flex-1 bg-[#D1FF4D] hover:bg-[#CCFF00] text-[#090A0C] font-display font-bold text-sm text-center py-3 px-5 rounded-lg transition-colors cursor-pointer"
              >
                Go To Website (Login) ↗
              </a>
              <a 
                href="https://campus-loop-dg0.pages.dev/twin" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 bg-[#1A1D24] hover:bg-[#222630] text-white border border-[#22262B] font-display font-bold text-sm text-center py-3 px-5 rounded-lg transition-colors"
              >
                Open Live Digital Twin ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
