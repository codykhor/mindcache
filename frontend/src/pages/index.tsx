import {useEffect, useState} from 'react';
import api from '../utils/api';
import {Button} from "@geist-ui/react";

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
        <div className="container my-4">
            <h1 className="display-4 mb-4">All Highlights</h1>
            <button className="btn btn-dark mb-3" onClick={() => window.location.href = '/add'}>Add Highlight
            </button>
            {highlights.map((h) => (
                <div key={h.id} className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <p className="blockquote">{`"${h.text}"`}</p>
                        {h.source && (
                            <p className="card-text text-muted">
                                — {h.author} ({h.source})
                            </p>
                        )}
                        {h.tags && h.tags.length > 0 && (
                            <div className="mt-2">
                                {h.tags.map((tag) => (
                                    <span key={tag} className="badge bg-secondary me-2">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
