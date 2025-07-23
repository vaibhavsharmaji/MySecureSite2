'use client'
import { useState } from 'react'
import Image from 'next/image'
import {
  AlertTriangle,
  Siren,
  AlertCircle
} from 'lucide-react'

const initialIncidents = [
  {
    id: '#INC123',
    location: 'Camera 01',
    type: 'warning',
    title: 'Unauthorised Access',
    titleType: 'unauthorized',
    thumbnail: '/1.jpg',
    startTime: '10:00 AM',
    endTime: '10:05 AM'
  },
  {
    id: '#INC124',
    location: 'Camera 02',
    type: 'error',
    title: 'Gun Threat',
    titleType: 'gun-threat',
    thumbnail: '/2.jpg',
    startTime: '11:00 AM',
    endTime: '11:30 AM'
  },
  {
    id: '#INC125',
    location: 'Camera 03',
    type: 'warning',
    title: 'Unauthorised Access',
    titleType: 'unauthorized',
    thumbnail: '/3.jpeg',
    startTime: '01:00 PM',
    endTime: '01:15 PM'
  },
  {
    id: '#INC126',
    location: 'Camera 04',
    type: 'error',
    title: 'Gun Threat',
    titleType: 'gun-threat',
    thumbnail: '/4.jpeg',
    startTime: '02:00 PM',
    endTime: '02:10 PM'
  },
  {
    id: '#INC127',
    location: 'Camera 05',
    type: 'warning',
    title: 'Unauthorised Access',
    titleType: 'unauthorized',
    thumbnail: '/5.jpeg',
    startTime: '03:30 PM',
    endTime: '03:45 PM'
  },
  {
    id: '#INC128',
    location: 'Camera 06',
    type: 'error',
    title: 'Gun Threat',
    titleType: 'gun-threat',
    thumbnail: '/6.jpg',
    startTime: '04:00 PM',
    endTime: '04:20 PM'
  },
  {
    id: '#INC129',
    location: 'Camera 07',
    type: 'warning',
    title: 'Unauthorised Access',
    titleType: 'unauthorized',
    thumbnail: '/7.jpeg',
    startTime: '05:00 PM',
    endTime: '05:10 PM'
  },
  {
    id: '#INC130',
    location: 'Camera 08',
    type: 'error',
    title: 'Gun Threat',
    titleType: 'gun-threat',
    thumbnail: '/8.jpg',
    startTime: '06:00 PM',
    endTime: '06:30 PM'
  }
]

export default function IncidentList() {
  const [incidents, setIncidents] = useState(initialIncidents)
  const [resolvedCount, setResolvedCount] = useState(0)

  const resolveIncident = (id: string) => {
    setIncidents((prev) => prev.filter((inc) => inc.id !== id))
    setResolvedCount((prev) => prev + 1)
    setTimeout(() => console.log(`Resolved ${id}`), 1000)
  }

  return (
    <div className="w-full p-4 space-y-4">
      {/* Resolved Counter */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Incidents</h2>
        <p className="text-green-600 font-medium text-lg">
          Resolved: {resolvedCount}
        </p>
      </div>

      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="flex items-center justify-between bg-lightBlue shadow-md rounded-xl p-4 transition-opacity duration-500 hover:shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <Image
              src={incident.thumbnail}
              alt="Thumbnail"
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
            <div>
              {/* Small Heading Title */}
              <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                {incident.titleType === 'unauthorized' && (
                  <>
                    <AlertTriangle className="text-orange-400 w-4 h-4" />
                    <span className="text-orange-400">{incident.title}</span>
                  </>
                )}
                {incident.titleType === 'gun-threat' && (
                  <>
                    <Siren className="text-red-500 w-4 h-4" />
                    <span className="text-red-500">{incident.title}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {incident.type === 'warning' && <AlertCircle className="text-yellow-500" />}
                {incident.type === 'error' && <AlertCircle className="text-red-500" />}
                <p className="font-semibold">{incident.location}</p>
              </div>
              <p className="text-sm text-gray-500">
                {incident.startTime} – {incident.endTime}
              </p>
            </div>
          </div>

          <button
            onClick={() => resolveIncident(incident.id)}
            className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  )
}
