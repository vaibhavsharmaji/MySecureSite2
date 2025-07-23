import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed Cameras
  await prisma.camera.createMany({
    data: [
      { name: 'Cam 01', ipAddress: '192.168.1.1', location: 'Camera 01' },
      { name: 'Cam 02', ipAddress: '192.168.1.2', location: 'Camera 02' },
      { name: 'Cam 03', ipAddress: '192.168.1.3', location: 'Camera 03' },
      { name: 'Cam 04', ipAddress: '192.168.1.4', location: 'Camera 04' },
      { name: 'Cam 05', ipAddress: '192.168.1.5', location: 'Camera 05' },
      { name: 'Cam 06', ipAddress: '192.168.1.6', location: 'Camera 06' },
      { name: 'Cam 07', ipAddress: '192.168.1.7', location: 'Camera 07' },
      { name: 'Cam 08', ipAddress: '192.168.1.8', location: 'Camera 08' },
    ],
  });

  // Get the created cameras to use their IDs safely
  const cameras = await prisma.camera.findMany();

  await prisma.incident.createMany({
    data: [
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-22T10:00:00Z'),
        tsEnd: new Date('2025-07-22T10:05:00Z'),
        cameraId: cameras[0].id,
        resolved: false,
      },
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-22T11:00:00Z'),
        tsEnd: new Date('2025-07-22T11:15:00Z'),
        cameraId: cameras[2].id,
        resolved: false,
      },
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-22T12:00:00Z'),
        tsEnd: new Date('2025-07-22T12:10:00Z'),
        cameraId: cameras[5].id,
        resolved: true,
      },
    ],
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
