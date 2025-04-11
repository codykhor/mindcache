import express from 'express';

export default function highlightRoutes(prisma) {
    const router = express.Router();

    router.get('/', async (req, res) => {
        const highlights = await prisma.highlight.findMany();
        res.json(highlights);
    });

    router.post('/', async (req, res) => {
        const { text, source, author, tags } = req.body;
        const highlight = await prisma.highlight.create({
            data: { text, source, author, tags },
        });
        res.status(201).json(highlight);
    });

    return router;
}
