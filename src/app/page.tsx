export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-xl p-8 rounded-2xl border border-slate-800 shadow-lg shadow-slate-900/40">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">
          AgathaIQ — Persona Project MVP
        </h1>
        <p className="text-sm text-slate-300 mb-4">
          This is the starting shell for the AgathaIQ platform. From here, we&apos;ll
          connect a database, ingest events from a snippet, and build the first
          dashboard view.
        </p>
        <p className="text-xs text-slate-500">
          Status:{" "}
          <span className="text-emerald-400 font-medium">
            Local dev up and running
          </span>
        </p>
      </div>
    </main>
  );
}

