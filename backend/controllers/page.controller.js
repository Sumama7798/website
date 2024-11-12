import Page from '../models/page.model.js';

export const createPage = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.id; // Assume `req.user` is set by `authenticate` middleware

    try {
        const newPage = new Page({
            title,
            content,
            createdBy: userId,
        });

        await newPage.save();

        res.status(201).json({
            message: 'Page created successfully',
            page: newPage,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create page', error: error.message });
    }
};

export const getAllPages = async (req, res) => {
    try {
        const pages = await Page.find().populate('createdBy','name email');
        res.status(200).json(pages);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pages', error: error.message });
    }
};  