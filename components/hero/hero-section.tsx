{/* Right Column (Narrowed) */ }
<div className={cn(
  "relative flex flex-col items-center justify-center gap-6 transition-all duration-700 delay-200",
  /* ADDED: lg:px-12 to push the content inward from the grid edges */
  "w-full lg:px-12",
  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
)}>

  {/* Ambient Glow */}
  <div className="absolute -inset-4 rounded-[48px] bg-white/5 blur-3xl" />

  {/* The Main Image Box - CHANGED max-w-lg to max-w-md */}
  <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
      <Image src="/images/landscape2.webp" alt="Landscaping" fill className="object-cover" priority />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="mt-4 flex items-center justify-between px-3 pb-2">
      <div className="max-w-[60%]">
        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-tight">Modern luxury Greenwich Estate</p>
        <p className="text-[9px] text-white/50 uppercase font-bold tracking-widest mt-1">Connecticut</p>
      </div>
      <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[9px] font-black text-white uppercase tracking-tighter">Featured</span>
    </div>
  </div>

  {/* The Stat Box - CHANGED max-w-lg to max-w-md to match image */}
  <div className={cn(
    "flex flex-col items-center justify-center text-center",
    "rounded-[24px] border border-white/10 bg-white/5 shadow-3xl backdrop-blur-xl",
    "w-full max-w-md p-6" /* Narrowed to match the image box above */
  )}>
    <p className="text-3xl font-black text-white leading-none tracking-tighter">
      {businessConfig.projectsCompleted}+
    </p>
    <p className="mt-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
      Estates Transformed
    </p>
  </div>
</div>