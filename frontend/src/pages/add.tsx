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
        <div className="container my-4">
            <h1 className="display-4 mb-4">Add Highlight</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3">
                    <textarea
                        placeholder="Highlight text"
                        className="form-control"
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Source"
                        className="form-control"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Author"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Tags (comma separated)"
                        className="form-control"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <button className="btn btn-dark mt-3">
                    Save
                </button>
            </form>
        </div>
    );
}
