import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// Configure Cloudinary (do this once at the top-level of your app)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const Upload = async (req, res) => {
    try {
        // Ensure a file URL is provided in the request (or modify for file handling)
        const fileUrl = req.body.fileUrl; // Use this if you're accepting URLs or modify for `req.file.path`

        if (!fileUrl) {
            return res.status(400).json({ message: 'File URL is required' });
        }

        // Upload an image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(fileUrl, {
            folder: 'websiteUploads',
            resource_type: 'auto',
        });

        // Log and return the upload result
        console.log(uploadResult);
        res.status(200).json({
            message: 'File uploaded successfully',
            result: uploadResult,
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: 'error in upload controller', error: error.message });
    }
};
