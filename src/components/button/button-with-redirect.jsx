import { navigate } from 'astro:transitions/client';

export default function GoBackButton({label,path}) {
    return (
        <button
            className="btn bg-linear-to-t from-stone-100 to-stone-200 border border-stone-200"
            onClick={() => navigate(path)}
        >
            {label}
        </button>
    );
}
