import { navigate } from 'astro:transitions/client';

document.addEventListener('keydown', (event) => {
    if (event.altKey) {
        let path = null;

        switch(event.key) {
            case 'h':
                path = '/home';
                break;
            case 'p':
                path = '/projects';
                break;
            case 'b':
                path = '/blog';
                break;
            case 'c':
                path = '/certifications';
                break;
        }

        if (path) {
            event.preventDefault();
            navigate(path);
        }
    }
});