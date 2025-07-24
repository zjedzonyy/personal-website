export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center space-y-0">
          {/* Name/Brand */}
          <div className="text-center">
            <h3 className="text-l italic bg-gradient-to-r font-serif from-emerald-400 to-emerald-600 bg-clip-text text-transparent pr-4">
              zjedzonyy
            </h3>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

          {/* Info */}
          <div className="text-center pt-2">
            <p className="text-gray-500 text-xs">Built with React & Tailwind CSS </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
