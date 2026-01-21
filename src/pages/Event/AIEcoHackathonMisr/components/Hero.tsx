import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-teal-300 text-sm font-medium mb-4">
            February, 2026 | Cairo, Egypt
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Innovate for the Future.
            <br />
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Smart & Sustainable Cities.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join 300+ visionaries at the heart of Cairo to bridge ancient wisdom with modern tech.
            Solve the urging challenge for a sustainable Mediterranean future.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/90 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-teal-300" />
              <span>From Egypt to the Euro-Med Region</span>
            </div>
            <span className="text-white/40">•</span>
            <span>Water-Energy-Agriculture</span>
            <span className="text-white/40">•</span>
            <span>A gateway to international experience</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Join the Hackathon</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Stay Tuned
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
