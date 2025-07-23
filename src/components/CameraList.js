'use client';

export default function CameraList() {
  const cameras = [
    { id: 'Camera 1', image: '/camera1.jpg' },
    { id: 'Camera 2', image: '/camera2.jpg' },
    { id: 'Camera 3', image: '/camera3.jpg' },
    { id: 'Camera 4', image: '/camera4.jpg' }, // New camera added
  ];

  return (
    <div className="p-4 bg-black shadow rounded w-full text-white">
      <h2 className="text-lg font-bold mb-4">Camera Feeds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            className="bg-gray-900 p-3 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-md font-semibold mb-2">{cam.id}</h3>
            <img
              src={cam.image}
              alt={cam.id}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
