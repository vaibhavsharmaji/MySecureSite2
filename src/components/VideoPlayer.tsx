export default function VideoPlayer() {
  return (
    <div className="relative rounded overflow-hidden border border-gray-700">
      {/* Time Stamp */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-2 py-1 text-sm rounded">
        11/7/2025 - 03:12:37
      </div>

      {/* Main video placeholder */}
      <img src="/video-placeholder.jpg" alt="Camera Feed" className="w-full h-[400px] object-cover" />

      {/* Camera name */}
      <div className="absolute bottom-2 left-2 bg-red-600 px-3 py-1 text-sm rounded">
        Camera - 01
      </div>
    </div>
  );
}
