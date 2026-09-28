import React from 'react';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Calculator, CheckCircle2, 
  HelpCircle, AlertTriangle, FileText, DollarSign, Home, 
  Sparkles, Layers, Hammer, Wind, Check, PhoneCall
} from 'lucide-react';

export default function Blog({ onNavigateHome, onOpenTerritoryModal }) {
  return (
    <article className="min-h-screen bg-fresh-black text-slate-100 font-sans selection:bg-fresh-orange selection:text-white pb-24">
      
      {/* Blog Top Header Bar */}
      <header className="sticky top-0 z-40 bg-fresh-black/90 backdrop-blur-md border-b border-fresh-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button 
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-fresh-orange transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="tel:2148314653"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-xs font-bold text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-fresh-orange" />
              <span>(214) 831-4653</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenTerritoryModal({ volume: 'Free Roof Estimate Request (From Blog)' })}
              className="px-4 py-2 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-orange-sm cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li>
              <button 
                type="button"
                onClick={onNavigateHome} 
                className="hover:text-fresh-orange transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li>
              <span className="text-slate-300">Blog</span>
            </li>
            <li>/</li>
            <li className="text-fresh-orange truncate max-w-[200px] sm:max-w-none">
              Roof Replacement Cost Guide (2026)
            </li>
          </ol>
        </nav>

        {/* Article Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange">
            <Calculator className="w-3.5 h-3.5 text-fresh-orange" />
            <span>2026 Homeowner & Contractor Pricing Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            The Definitive Guide to Roof Replacement Costs: <br className="hidden sm:inline" />
            <span className="orange-gradient-text">2026 Price Calculator, Material Teardowns, and Hidden Estimates</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-b border-fresh-border pb-6">
            <span>By <strong>FreshLeads Industry Analysis Team</strong></span>
            <span>•</span>
            <span>Updated for 2026 Construction Season</span>
            <span>•</span>
            <span>12 Min Read</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Fact-Checked
            </span>
          </div>
        </div>

        {/* Quick AI Search Summary Box */}
        <section aria-labelledby="ai-summary-heading" className="p-6 rounded-2xl bg-fresh-card border-2 border-fresh-orange/40 shadow-orange-glow mb-12">
          <div className="flex items-center gap-2 text-fresh-orange font-black uppercase tracking-wider text-xs mb-2.5">
            <Sparkles className="w-4 h-4 text-fresh-orange" />
            <h2 id="ai-summary-heading" className="text-xs font-black uppercase tracking-wider">Quick AI Search Summary</h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            In 2026, the nationwide average cost to tear off and replace a roof on a standard single-family home (2,000 to 2,500 sq. ft.) ranges between <strong>$8,200 and $16,400</strong>, with most homeowners spending approximately <strong>$11,500 for architectural asphalt shingles</strong>. Costs typically range from <strong>$3.75 to $6.50 per square foot</strong> ($375 to $650 per roofing square) for asphalt, <strong>$9.00 to $16.50 per square foot</strong> for standing seam metal, and <strong>$14.00 to $30.00+ per square foot</strong> for natural slate, cedar shake, or clay tile. Project pricing depends on surface area (roofing squares), pitch steepness, number of tear-off layers, decking rot, flashing replacement, and regional permit requirements.
          </p>
        </section>

        {/* Section 1: Quick Estimator */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">1</span>
            <span>Quick Estimator: Roof Replacement Cost by Home Size</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Roofers price residential projects using <strong className="text-white">"roofing squares."</strong> One roofing square equals 100 square feet of roof surface.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Because of architectural slopes, overhangs, eaves, and dormers, your roof's actual surface area is always <strong>15% to 40% larger</strong> than the interior ground-level footprint of your home. A single-story ranch home has a vastly different roof footprint than a multi-level colonial of the same square footage.
          </p>

          <p className="text-slate-300 leading-relaxed">
            The benchmark costs below reflect a standard complete project: tear-off of one old layer, new synthetic underlayment, ice and water shields in valleys/eaves, drip edge, ridge vent installation, cleanup, and standard architectural shingles.
          </p>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-fresh-border bg-fresh-card shadow-card-dark">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-fresh-dark border-b border-fresh-border text-slate-300 uppercase font-extrabold text-[11px] tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Home Interior Area</th>
                  <th scope="col" className="p-3.5 sm:p-4">Typical Roof Surface Area</th>
                  <th scope="col" className="p-3.5 sm:p-4">Roofing Squares</th>
                  <th scope="col" className="p-3.5 sm:p-4 text-fresh-orange">Architectural Shingles ($4.25–$6.50/sq ft)</th>
                  <th scope="col" className="p-3.5 sm:p-4">Standing Seam Metal ($9.50–$16.00/sq ft)</th>
                  <th scope="col" className="p-3.5 sm:p-4">Premium Slate / Tile ($15.00–$28.00/sq ft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-fresh-border text-slate-300">
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">1,000 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">1,200 – 1,400 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">12 – 14 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$5,100 – $9,100</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$11,400 – $22,400</td>
                  <td className="p-3.5 sm:p-4">$18,000 – $39,200</td>
                </tr>
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">1,500 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">1,750 – 2,100 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">18 – 21 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$7,430 – $13,650</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$16,625 – $33,600</td>
                  <td className="p-3.5 sm:p-4">$26,250 – $58,800</td>
                </tr>
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">2,000 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">2,300 – 2,800 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">23 – 28 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$9,775 – $18,200</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$21,850 – $44,800</td>
                  <td className="p-3.5 sm:p-4">$34,500 – $78,400</td>
                </tr>
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">2,500 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">2,900 – 3,500 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">29 – 35 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$12,325 – $22,750</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$27,550 – $56,000</td>
                  <td className="p-3.5 sm:p-4">$43,500 – $98,000</td>
                </tr>
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">3,000 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">3,500 – 4,200 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">35 – 42 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$14,875 – $27,300</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$33,250 – $67,200</td>
                  <td className="p-3.5 sm:p-4">$52,500 – $117,600</td>
                </tr>
                <tr className="hover:bg-fresh-dark/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-white">3,500 sq. ft.</td>
                  <td className="p-3.5 sm:p-4">4,100 – 4,900 sq. ft.</td>
                  <td className="p-3.5 sm:p-4 font-mono">41 – 49 Squares</td>
                  <td className="p-3.5 sm:p-4 font-bold text-fresh-orange">$17,425 – $31,850</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-200">$38,950 – $78,400</td>
                  <td className="p-3.5 sm:p-4">$61,500 – $137,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Material Teardown */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">2</span>
            <span>Roofing Material Teardown: Price, Lifespan, and ROI</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Material choice represents roughly <strong>40% of your total project estimate</strong> (labor and disposal make up the remaining 60%). Each material brings unique trade-offs across wind resistance, weight limitations, maintenance demands, and resale ROI.
          </p>

          {/* Summary Box */}
          <div className="p-5 rounded-xl bg-fresh-dark border border-fresh-border font-mono text-xs sm:text-sm text-slate-200 space-y-1.5 leading-relaxed overflow-x-auto">
            <div className="text-fresh-orange font-bold font-sans uppercase tracking-wider text-xs mb-2">
              MATERIAL COST PER ROOFING SQUARE (Installed Labor + Materials)
            </div>
            <div>├─ 3-Tab Asphalt Shingles:        <span className="text-white font-bold">$325 – $475</span> / square  (15–20 yr lifespan)</div>
            <div>├─ Architectural Shingles:        <span className="text-fresh-orange font-bold">$425 – $650</span> / square  (25–30 yr lifespan)</div>
            <div>├─ Class 4 Impact Shingles:       <span className="text-white font-bold">$525 – $825</span> / square  (30–50 yr lifespan)</div>
            <div>├─ Screw-Down Metal (Corrugated): <span className="text-white font-bold">$650 – $950</span> / square  (25–35 yr lifespan)</div>
            <div>├─ Standing Seam Metal:           <span className="text-white font-bold">$950 – $1,650</span> / square (50+ yr lifespan)</div>
            <div>├─ Cedar Wood Shakes:             <span className="text-white font-bold">$1,100 – $1,900</span> / square (30–40 yr lifespan)</div>
            <div>├─ Concrete Roof Tile:            <span className="text-white font-bold">$1,000 – $1,800</span> / square (50+ yr lifespan)</div>
            <div>└─ Natural Slate:                 <span className="text-white font-bold">$1,500 – $3,200+</span> / square (75–100+ yr lifespan)</div>
          </div>

          {/* Material Cards */}
          <div className="space-y-6 pt-2">
            
            {/* 1. 3-Tab */}
            <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="text-lg font-bold text-white mb-2">1. Traditional 3-Tab Asphalt Shingles</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-white">$3.25 to $4.75 / sq. ft.</strong> ($325 to $475 / square)</span>
                <span>Lifespan: <strong className="text-white">15 to 20 years</strong></span>
                <span>Wind Rating: <strong className="text-white">Up to 60–70 mph</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Lowest initial purchase price; readily available everywhere; lightweight (requires no structural reinforcement).</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> Thin single-layer construction; vulnerable to curling, blow-offs, and granule erosion; flat aesthetic profile; depreciates faster than heavier alternatives.</p>
            </div>

            {/* 2. Architectural */}
            <div className="p-6 rounded-xl bg-fresh-card border-2 border-fresh-orange/50 shadow-orange-sm">
              <div className="inline-block px-2.5 py-0.5 rounded bg-fresh-orange text-slate-950 font-black text-[10px] uppercase mb-2">
                Industry Benchmark (80% of All Installs)
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Architectural (Laminated / Dimensional) Shingles</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-fresh-orange">$4.25 to $6.50 / sq. ft.</strong> ($425 to $650 / square)</span>
                <span>Lifespan: <strong className="text-white">25 to 30 years</strong></span>
                <span>Wind Rating: <strong className="text-white">Up to 110–130 mph</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Today’s residential building benchmark (roughly 80% of all installs). Two bonded layers create shadow lines that emulate cedar shakes; enhanced tear resistance; supported by robust 30- to 50-year limited manufacturer warranties (e.g., GAF Timberline HDZ, Owens Corning Duration).</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> Slightly heavier than 3-tab; moderate algae vulnerability in humid climates unless coated with copper/zinc granules.</p>
            </div>

            {/* 3. Class 4 */}
            <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="text-lg font-bold text-white mb-2">3. Class 4 Impact-Resistant (IR) Shingles</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-white">$5.25 to $8.25 / sq. ft.</strong> ($525 to $825 / square)</span>
                <span>Lifespan: <strong className="text-white">30 to 50 years</strong></span>
                <span>Wind Rating: <strong className="text-white">Up to 130 mph; UL 2218 Class 4 steel ball drop certified</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Built with SBS (styrene-butadiene-styrene) polymer-modified asphalt for rubberized flexibility. Shingles absorb direct strikes from 2-inch hail without fracturing the fiberglass matting. Most insurance companies grant an annual 10% to 28% homeowners insurance premium reduction in hail zones.</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> 15% to 30% higher material cost than standard dimensional shingles.</p>
            </div>

            {/* 4. Standing Seam Metal */}
            <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="text-lg font-bold text-white mb-2">4. Standing Seam Metal Roofing</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-white">$9.50 to $16.50 / sq. ft.</strong> ($950 to $1,650 / square)</span>
                <span>Lifespan: <strong className="text-white">50 to 75+ years</strong></span>
                <span>Wind Rating: <strong className="text-white">Up to 140–160 mph</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Concealed fasteners run under continuous vertical interlocking seams, eliminating leak paths caused by backing-out screws. Reflects solar radiant heat (reducing summer attic temperatures by 15°F to 25°F). Non-combustible Class A fire rating.</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> Substantially higher upfront capital expense; requires specialized sheet metal contractors; oil canning (slight visual rippling) can occur if expansion joints are improperly secured.</p>
            </div>

            {/* 5. Concrete & Clay */}
            <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="text-lg font-bold text-white mb-2">5. Concrete & Clay Tiles</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-white">$10.00 to $18.00 / sq. ft.</strong> ($1,000 to $1,800 / square)</span>
                <span>Lifespan: <strong className="text-white">50 to 100 years</strong></span>
                <span>Wind Rating: <strong className="text-white">Up to 125–150 mph</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Iconic Southwestern/Spanish architecture; completely rot-proof, impervious to insects, and highly fire-resistant.</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> Extremely heavy (800 to 1,200 lbs per square). Requires a certified structural engineer to inspect roof trusses before installation; prone to cracking if walked on during gutter cleanings or chimney work.</p>
            </div>

            {/* 6. Natural Slate */}
            <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="text-lg font-bold text-white mb-2">6. Natural Slate Roofing ("The Forever Roof")</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 mb-3 font-semibold">
                <span>Installed Cost: <strong className="text-white">$15.00 to $32.00+ / sq. ft.</strong> ($1,500 to $3,200+ / square)</span>
                <span>Lifespan: <strong className="text-white">75 to 125+ years</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-2"><strong className="text-emerald-400">Pros:</strong> Quarried natural stone offering unmatched natural beauty and permanence; totally unaffected by freeze-thaw cycles or moisture rot.</p>
              <p className="text-xs sm:text-sm text-slate-300"><strong className="text-rose-400">Cons:</strong> Extremely heavy (up to 1,500 lbs per square); requires specialized historical preservation craftsmen; astronomical replacement costs if damaged by falling trees.</p>
            </div>

          </div>
        </section>

        {/* Section 3: Structural Cost Drivers */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">3</span>
            <span>Structural Cost Drivers: Why Estimates Vary by Thousands</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            When three different contractors inspect the same home, their bids can vary by <strong>$3,000 to $7,000</strong>. These discrepancies stem from technical site variables that are invisible from the street:
          </p>

          {/* Budget Breakdown Table */}
          <div className="p-5 rounded-xl bg-fresh-dark border border-fresh-border">
            <h3 className="text-xs uppercase font-extrabold text-fresh-orange tracking-wider mb-3">
              Typical Roofing Project Budget Breakdown
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-lg bg-fresh-card border border-fresh-border">
                <span className="text-2xl font-black text-white block">45%–55%</span>
                <span className="text-xs text-slate-300">Labor & Crew</span>
              </div>
              <div className="p-3 rounded-lg bg-fresh-card border border-fresh-border">
                <span className="text-2xl font-black text-white block">25%–35%</span>
                <span className="text-xs text-slate-300">Shingles & Fasteners</span>
              </div>
              <div className="p-3 rounded-lg bg-fresh-card border border-fresh-border">
                <span className="text-2xl font-black text-white block">10%–15%</span>
                <span className="text-xs text-slate-300">Flashing, Vents, Ice/Water</span>
              </div>
              <div className="p-3 rounded-lg bg-fresh-card border border-fresh-border">
                <span className="text-2xl font-black text-white block">5%–10%</span>
                <span className="text-xs text-slate-300">Dumpster & Permits</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-sm text-slate-300 leading-relaxed">
            <div>
              <h3 className="font-bold text-white text-base mb-1">1. Roof Pitch and Incline Complexity</h3>
              <p>Roof slope is measured as vertical rise over a 12-inch horizontal run (e.g., "6/12" means a 6-inch rise every 12 inches).</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-xs sm:text-sm">
                <li><strong>Flat to Low Slope (0/12 to 3/12):</strong> Cannot shed water fast enough for standard shingles. Requires rolled membrane systems (TPO, EPDM, or modified bitumen).</li>
                <li><strong>Walkable Standard Pitch (4/12 to 7/12):</strong> Standard labor rates. Crews can move without safety scaffolding.</li>
                <li><strong>Steep Pitch (8/12 to 10/12):</strong> Labor increases 15% to 25%. Crews must install roof brackets, staging boards, and harness arrest lines.</li>
                <li><strong>Extreme Pitch (11/12+ or Mansard):</strong> Labor increases 30% to 50%. Materials cannot be staged directly on the roof deck; workers operate out of lifts or permanent ropes.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">2. Tear-Off of Existing Layers</h3>
              <p>Most building codes allow a maximum of two layers of shingles before mandating a complete strip-down to the wood decking.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-xs sm:text-sm">
                <li>Removing one layer of asphalt shingles costs roughly <strong>$1.00 to $1.75 per square foot</strong> in labor, dump fees, and hauling.</li>
                <li>If your roof already has two layers or old cedar shakes underneath modern shingles, tear-off costs double to <strong>$2.00 to $3.50 per square foot</strong> due to the sheer tonnage involved.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">3. Rotten Plywood Decking (Sheathing) Replacement</h3>
              <p>Installers cannot nail fresh shingles into rotted, waterlogged, or delaminating wood decking.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-xs sm:text-sm">
                <li>Most contracts include a clause stating that any rotted OSB (oriented strand board) or CDX plywood discovered post-tear-off will be billed per sheet.</li>
                <li><strong>Standard Going Rate:</strong> $75 to $135 per 4x8 sheet (materials, cutting, installation, and disposal).</li>
                <li>Older homes (pre-1970s) built with spaced 1x6 tongue-and-groove plank boards often have gaps wider than 1/4 inch, requiring a complete redeck with modern 7/16" OSB across the entire roof surface.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">4. Flashing and Chimney Crickets</h3>
              <p>Flashing protects the critical junctions where your roof intersects walls, chimneys, dormers, and vent pipes. Reusing old, pitted aluminum flashing is the #1 cause of new-roof leaks.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-xs sm:text-sm">
                <li>Chimney Flashing Kit & Counter-Flashing: <strong>$350 – $800</strong></li>
                <li>Chimney Cricket Installation (diverts water on chimneys wider than 30 inches): <strong>$450 – $1,000</strong></li>
                <li>Skylight Replacement & Flashing: <strong>$800 – $1,800</strong> per skylight (best done concurrently with the roof).</li>
                <li>Plumbing Pipe Boots (Perma-Boot / Silicone): <strong>$75 – $150</strong> each.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">5. Attic Ventilation System Optimization</h3>
              <p>A roof needs to "breathe" to avoid cooking shingles from underneath and to prevent winter moisture buildup.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-xs sm:text-sm">
                <li>Ridge Vent Installation: <strong>$8 to $15</strong> per linear foot.</li>
                <li>Intake Soffit Vents: <strong>$20 to $40</strong> per vent if baffles are missing or attic airflow is obstructed.</li>
                <li>Solar-Powered Attic Gable Fans: <strong>$550 to $1,100</strong> installed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Decision Matrix */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">4</span>
            <span>Roof Repair vs. Full Replacement: A Practical Decision Matrix</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Homeowners often agonize over whether to patch a section or fund a complete tear-off. Use this operational checklist to evaluate your roof's condition:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-fresh-card border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>When a Professional Repair Suffices</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li>• The roof is under 15 years old and shingles remain supple and securely sealed.</li>
                <li>• Damage is localized to a discrete leak source (such as a cracked rubber pipe boot, a loose valley metal joint, or a dislodged piece of step flashing).</li>
                <li>• Fewer than 5 to 10 shingles were blown off during an isolated wind event, and identical replacement shingles are available for color matching.</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-fresh-border text-sm font-bold text-white">
                Typical Cost: <span className="text-emerald-400">$350 to $1,200</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-fresh-card border border-rose-500/30">
              <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>When Full Replacement is Mandatory</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li>• The roof is 20+ years old and reaching the end of its design life.</li>
                <li>• Granule loss is extensive: downspouts filled with sandy granules, exposing the black fiberglass mat.</li>
                <li>• Curling, cupping, or clawing shingles indicating dried asphalt binder.</li>
                <li>• Spongy decking: soft or springy feel underfoot indicating structural rot.</li>
                <li>• Multiple ongoing leaks across distinct rooms during heavy rain.</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-fresh-border text-sm font-bold text-white">
                Typical Cost: <span className="text-fresh-orange">$8,000 to $18,000+</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Insurance Claims */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">5</span>
            <span>Insurance Claims for Roof Damage: What Every Homeowner Must Know</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Storm damage claims operate on entirely different financial rules than planned retail replacements.
          </p>

          {/* Workflow Diagram */}
          <div className="p-6 rounded-xl bg-fresh-dark border border-fresh-border space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-fresh-orange tracking-wider mb-2">
              Storm Damage Workflow: From Hail Event to Final Depreciation Payment
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span><strong>Wind/Hail Storm Hits</strong> — Document date of loss immediately.</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span><strong>Certified Drone/Roof Inspection</strong> — Document hail dents, bruised mats, broken seals.</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">3</span>
                <span><strong>File Claim with Insurer</strong> — Keep photo-verified timestamp documentation.</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">4</span>
                <span><strong>Adjuster On-Site Inspection</strong> — Contractor meets adjuster to mark test squares (10'x10').</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">5</span>
                <span><strong>Summary of Loss Approved</strong> — ACV (Actual Cash Value) Check Cut.</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-fresh-orange text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">6</span>
                <span><strong>Roof Install Completed</strong> — Contractor submits Certificate of Completion.</span>
              </div>
              <div className="p-2.5 rounded bg-fresh-card border border-fresh-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">7</span>
                <span><strong>Recoverable Depreciation Paid</strong> — Final check released (Homeowner pays only deductible).</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-lg font-bold text-white">The Difference Between ACV and RCV Policies</h3>
            <p>
              <strong>Actual Cash Value (ACV):</strong> The insurance company calculates the replacement cost of your roof, subtracts years of depreciation, and only pays the current "depreciated" value. You must fund the difference out of pocket, which can leave you with thousands in unpaid expenses on an older roof.
            </p>
            <p>
              <strong>Replacement Cost Value (RCV):</strong> The insurer covers the full cost to install a new roof of like kind and quality in today’s dollars. The insurer cuts an initial check for the ACV amount, and upon completion of the work, cuts a second check for the recoverable depreciation, meaning your only out-of-pocket expense is your policy deductible (typically $1,000 to $2,500).
            </p>
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm">
              <strong className="text-rose-400 font-bold block mb-1">Crucial Warning on Deductibles:</strong>
              Be cautious of any door-to-door contractor who offers to "waive," "absorb," or "rebate" your insurance deductible. In nearly all 50 states, this practice constitutes insurance fraud under state penal codes. Legitimate, certified contractors will always require payment of your statutory deductible.
            </div>
          </div>
        </section>

        {/* Section 6: 4-Step Formula */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">6</span>
            <span>How to Calculate Your Roof Replacement Cost in 4 Steps</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Want a reliable ballpark figure before inviting sales reps into your living room? Follow this formula:
          </p>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white mb-1">Step 1: Calculate Your Home's Base Footprint</h3>
              <p>Find the exterior ground-level square footage of your home. For a single-story ranch measuring 40 ft by 50 ft: <code className="text-fresh-orange font-bold font-mono">Footprint = 40 × 50 = 2,000 sq. ft.</code> (For two-story homes, use only the first-floor footprint area.)</p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white mb-1">Step 2: Add Pitch and Overhang Pitch Multipliers</h3>
              <p className="mb-2">Roofs are pitched, which increases their true surface area. Multiply your base footprint by the pitch factor below:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm mb-2">
                <li>Low Pitch (3/12 to 4/12): Multiply by 1.15</li>
                <li>Medium Pitch (5/12 to 7/12): Multiply by 1.25</li>
                <li>Steep Pitch (8/12 to 10/12): Multiply by 1.40</li>
                <li>High Architectural Complexity (Hips, Valleys, Dormers): Add another 0.10</li>
              </ul>
              <p className="text-xs text-fresh-orange font-mono font-bold">Example (2,000 sq ft home with 6/12 pitch): 2,000 sq. ft. × 1.25 = 2,500 sq. ft. of surface area</p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white mb-1">Step 3: Add the Contractor Waste Factor (10% to 15%)</h3>
              <p className="mb-2">Crews must cut shingles diagonally along valleys, rakes, hips, and flashing lines, rendering cut remnants unusable. Always add 10% for simple gable roofs or 15% for complex hips and valleys.</p>
              <p className="text-xs text-fresh-orange font-mono font-bold">Calculation: 2,500 sq. ft. × 1.12 = 2,800 total sq. ft. needed (28 roofing squares)</p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white mb-1">Step 4: Multiply by the Material Unit Rate</h3>
              <p className="mb-2">Multiply your total squares by your preferred material rate:</p>
              <ul className="space-y-1 text-xs sm:text-sm font-mono text-slate-200">
                <li>• Standard Architectural Shingles ($450/square): <strong className="text-fresh-orange">28 × $450 = $12,600</strong></li>
                <li>• Standing Seam Metal ($1,250/square): <strong className="text-fresh-orange">28 × $1,250 = $35,000</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: 7 Ways to Save */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">7</span>
            <span>7 Ways Homeowners Can Save Real Money on a New Roof</span>
          </h2>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">1. Schedule in the Off-Peak Season (Late Fall / Late Winter)</h3>
              <p>Roofing companies face peak demand between June and October. Booking in November through February (weather permitting in southern/moderate climates) often nets a 5% to 10% labor discount to keep crews working.</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">2. Obtain Multiple Bids with Exact Material Specs</h3>
              <p>Ensure all competing bids specify the identical brand of underlayment, ice/water shield, and shingle lines. Comparing a "mystery contractor's" bid to an elite manufacturer-certified roofer's bid is apples to oranges.</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">3. Upgrade to Impact-Resistant Shingles for Insurance Discounts</h3>
              <p>Spending an extra $1,200 upfront for Class 4 shingles can save you $300 to $600 per year on homeowners insurance premiums, paying for itself in under four years while fortifying your home against storm damage.</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">4. Bundle Siding, Gutter, and Skylight Work</h3>
              <p>Erecting scaffolding, renting trash dumpsters, and scheduling roll-off permits costs contractors substantial overhead. You will secure significantly lower rates per trade by having gutters, skylights, and fascia boards repaired at the exact same time as the roof.</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">5. Check Federal Inflation Reduction Act (IRA) Energy Credits</h3>
              <p>Installing certain energy-efficient cool metal roofs or integrated solar shingles may qualify you for federal tax credits under the Energy Efficient Home Improvement Credit (Section 25C).</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">6. Finance via Low-Interest Home Equity Loans (HELOC)</h3>
              <p>Contractor-provided financing packages often carry high dealer fees (between 6% and 14% charged directly to the contractor, which gets built right into your quote). Using your own credit union loan or HELOC can save you substantial interest.</p>
            </div>
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-1">7. Never Pay the Full Contract Upfront</h3>
              <p>Legitimate contractors typically ask for 10% to 33% at contract signing/material drop, with the final balance due only upon complete installation, clean sweep with a magnetic nail sweeper, and delivery of lien waivers.</p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-fresh-orange text-slate-950 font-black text-base flex items-center justify-center shrink-0">8</span>
            <span>Frequently Asked Questions (FAQ)</span>
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-2">What is the average lifespan of a new asphalt shingle roof?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A standard 3-tab shingle roof lasts 15 to 20 years. Modern architectural (dimensional) shingles typically last 25 to 30 years under normal conditions. In areas with intense UV exposure, extreme freeze-thaw cycles, or frequent hail storms, lifespan may be reduced by 20%.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-2">How long does a full roof replacement project take?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For an average residential home (1,800 to 2,600 square feet), a professional 5- to 7-person roofing crew typically completes tear-off, decking prep, and new installation in 1 to 2 working days. Larger homes or projects involving tile, slate, or complex standing seam metal can take 3 to 6 days.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-2">Can I just roof over my existing shingles to save money?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                While building codes in many areas allow up to two layers of asphalt shingles, doing a "roof-over" or "layover" is generally discouraged. It saves roughly $1,000 to $2,000 in immediate tear-off costs, but it prevents the roofer from inspecting the wooden deck for hidden rot, traps excess heat that degrades the new shingles, voids many manufacturer warranties, and roughly doubles your future tear-off expenses.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border">
              <h3 className="font-bold text-white text-base mb-2">What should be included in a professional roofing contract?</h3>
              <ul className="text-xs sm:text-sm text-slate-300 leading-relaxed list-disc pl-5 space-y-1 mt-2">
                <li>The exact shingle brand, model, and color (e.g., GAF Timberline HDZ in Charcoal).</li>
                <li>Specific underlayment brand (synthetic felt vs. cheap 15# tar paper).</li>
                <li>Linear footage of ice and water shield on eaves and valleys.</li>
                <li>A specific price per sheet for rotten plywood replacement if discovered.</li>
                <li>Permitting fees, dumpster haul-away, and magnetic yard cleanup for stray nails.</li>
                <li>Manufacturer warranty documentation and a separate written workmanship warranty from the contractor (minimum 5 to 10 years).</li>
                <li>Proof of active General Liability Insurance and Workers' Compensation coverage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: CTA Generator Box */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/50 shadow-orange-glow text-center space-y-6 my-16">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-fresh-orange block">
              Free Estimate Generator
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Get an Accurate, Zero-Obligation Roof Inspection
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every home's pitch, decking condition, and ventilation layout are unique. Don't rely exclusively on broad regional estimates when making one of the most important structural investments in your property.
            </p>
            <p className="text-sm text-slate-300">
              Connect with a top-rated, manufacturer-certified, and insured local roofing specialist to schedule an itemized on-site inspection.
            </p>
          </div>

          <div className="max-w-md mx-auto p-5 rounded-xl bg-fresh-dark border border-fresh-border text-left space-y-2 text-xs text-slate-200 font-semibold">
            <div className="flex items-center gap-2 text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>100% Free 21-Point Drone & Attic Inspection</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Complete Itemized Price Breakdown (No Surprises)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Verified Manufacturer Workmanship Warranties</span>
            </div>
          </div>

          {/* Requested Clickable Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenTerritoryModal({ volume: 'Free Itemized Roof Replacement Estimate (Blog Reader)' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-orange-glow hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>👉 Click Here to Get a Free, Itemized Roof Replacement Estimate in Your Area</span>
              <ArrowRight className="w-5 h-5 text-slate-950 shrink-0" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>Prefer to call for your estimate? Call our dispatch line:</span>
            <a href="tel:2148314653" className="text-fresh-orange hover:text-white font-extrabold underline inline-flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 inline" />
              <span>(214) 831-4653</span>
            </a>
          </div>
        </section>

        {/* Back to Home Button at bottom of article */}
        <div className="text-center pt-8 border-t border-fresh-border">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-300 hover:text-white font-bold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to FreshLeads.llc Homepage</span>
          </button>
        </div>

      </main>

    </article>
  );
}
