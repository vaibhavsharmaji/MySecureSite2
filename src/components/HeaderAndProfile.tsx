export default function HeaderAndProfile() {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-bold">15 Unresolved Incidents</h2>
        <button className="text-sm mt-1 text-blue-400 underline">+ 4 resolved incidents</button>
      </div>
      <div className="flex items-center gap-3">
        <img src="/profile.jpg" className="w-10 h-10 rounded-full object-cover" />
        <div className="text-sm leading-tight">
          <div className="font-semibold">Mohammed Ajhas</div>
          <div className="text-gray-400 text-xs">ajhas@mandlac.com</div>
        </div>
      </div>
    </div>
  );
}
