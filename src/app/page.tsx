import Navbar from '@/components/Navbar';
import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentList from '@/components/IncidentList';


export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Video Player (approx 70%) */}
        <div className="w-[100%] border-r overflow-auto">
          <IncidentPlayer />
        </div>

        {/* Right: Incident List (approx 30%) */}
        <div className="w-[50%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <IncidentList />
          </div>
          <div className="max-h-[40%] border-t overflow-y-auto">
            
          </div>
        </div>
      </div>
    </div>
  );
}
