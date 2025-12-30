import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

export function uploadStationImage(buffer, stationId) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: 'oopsify/stations',
                public_id: `station_${stationId}`,
                overwrite: true,
                resource_type: 'image',
            },
            (err, result) => {
                if (err) reject(err)
                else resolve(result)
            }
        ).end(buffer)
    })
}