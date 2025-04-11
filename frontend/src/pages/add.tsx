import { useState } from 'react';
import api from '../utils/api';
import { useRouter } from 'next/router';

export default function AddHighlight() {
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post('/highlights', {
            text,
            source,
            author,
            tags: tags.split(',').map((tag) => tag.trim()),
        });
        router.push('/');
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Highlight</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
            placeholder="Highlight text"
            className="w-full border p-2 rounded"
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
        />
                <input
                    type="text"
                    placeholder="Source"
                    className="w-full border p-2 rounded"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    className="w-full border p-2 rounded"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="w-full border p-2 rounded"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Save Highlight
                </button>
            </form>
        </div>
    );
}
