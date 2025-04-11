import { useEffect, useState } from 'react';
import api from '../utils/api';

type Highlight = {
    id: string;
    text: string;
    source?: string;
    author?: string;
    tags?: string[];
    favorited: boolean;
    createdAt: string;
};

export default function Home() {
    const [highlights, setHighlights] = useState<Highlight[]>([]);

    useEffect(() => {
        api.get('/highlights').then((res) => setHighlights(res.data));
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Highlights</h1>
            {highlights.map((h) => (
                <div key={h.id} className="bg-white rounded-xl shadow p-4 mb-4 border">
                    <p className="text-lg">"{h.text}"</p>
                    {h.source && <p className="text-sm text-gray-600 mt-1">— {h.author} ({h.source})</p>}
                    {h.tags && h.tags?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {h.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
