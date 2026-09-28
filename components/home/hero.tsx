import { HeroActions } from "./hero-actions";

export function Hero() {
  return (
    <main className="flex min-h-[calc(100svh-70px)] items-center justify-center border-b-[5px] border-[#6757e8] bg-[linear-gradient(135deg,#f7f4f6_0%,#fafbfe_78%)] px-6 py-20 text-center">
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.99] font-extrabold tracking-[-0.055em] text-[#070d22]">
          Where Wisdom Empowers
          <span className="block bg-linear-to-r from-[#8f1b22] to-[#de1643] bg-clip-text text-transparent">
            Potential
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[670px] text-[18px] leading-[1.45] text-[#455671] sm:text-[19px]">
          Elevate your technical caliber with KAMP 5 Engineering. Streamlined
          interview preparation, specialized curriculum, and proven pathways into
          leading engineering industries.
        </p>
        <HeroActions />
      </div>
    </main>
  );
}
