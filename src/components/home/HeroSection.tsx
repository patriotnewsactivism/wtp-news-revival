import heroImage from '@/assets/hero-eagle.jpg';

export function HeroSection() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={heroImage}
        alt="We The People News - American Eagle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider mb-4 animate-fade-in">
              Independent Journalism
            </span>
            <h1 className="masthead-text text-white mb-4 text-balance animate-fade-in animation-delay-100">
              Truth in Every Story
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-2xl animate-fade-in animation-delay-200">
              Fearless reporting on the issues that matter. We deliver unbiased news for the people, by the people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
