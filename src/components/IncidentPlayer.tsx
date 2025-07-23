import Image from 'next/image';

export default function IncidentPlayer() {
  return (
    <div className="w-full p-4">
      <div className="w-full h-[600px] relative">
        <Image
          src="/123456.webp"
          alt="Video"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
