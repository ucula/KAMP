export default function InterviewLoading() {
  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] px-6 py-16 font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <div role="status" className="mx-auto flex max-w-[1220px] items-center gap-3 text-[#6d6263]">
        <span
          aria-hidden="true"
          className="size-6 animate-spin rounded-full border-[3px] border-[#eadfdf] border-t-[#ad1425]"
        />
        Loading interview prep…
      </div>
    </main>
  );
}
