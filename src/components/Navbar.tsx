import { useState, useEffect } from 'react';

const navItems = [
  { name: '首页', href: '#home' },
  { name: '关于我们', href: '#about' },
  { name: '服务项目', href: '#services' },
  { name: '联系我们', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-serif text-xl">清</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-stone-800 tracking-wide">清源小院</span>
              <span className="text-xs text-stone-500 tracking-wider -mt-0.5">QINGYUAN</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 text-stone-600 hover:text-emerald-600 font-medium transition-all duration-200 rounded-full hover:bg-emerald-50/80 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              预约咨询
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-stone-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 px-4 -mx-4 bg-white/95 backdrop-blur-xl border-t border-stone-100">
            <div className="space-y-1 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/50 font-medium rounded-full transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="block text-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  预约咨询
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
