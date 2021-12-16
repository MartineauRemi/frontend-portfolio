import audiophileThumbnail from '../assets/portfolio/audiophile-preview.jpg'
import photosnapThumbnail from '../assets/portfolio/photosnap-preview.jpg'
import pomodoroThumbnail from '../assets/portfolio/pomodoro-preview.jpg'
import dineThumbnail from '../assets/portfolio/dine-preview.jpg'
import easybankThumbnail from '../assets/portfolio/easybank-preview.jpg'
import devfinderThumbnail from '../assets/portfolio/devfinder-preview.jpg'
import galleriaSlideshowThumbnail from '../assets/portfolio/galleria-slideshow-preview.jpg'
import designoThumbnail from '../assets/portfolio/designo-preview.jpg'
import invoiceAppThumbnail from '../assets/portfolio/invoice-app-preview.jpg'
import { IProject } from '../interfaces'

export const data = [
    {
        id: 0,
        title: "Invoice-TrackR",
        subtitle: "",
        overview: "Application web vous permettant de garder une trace de vos facturations.\nCréez et détaillez vos facturations, modifiez ou supprimez les selon vos besoins.",
        stack: ['React', 'Typescript', 'Styled Components' ,'Formik + Yup'],
        github: "https://github.com/MartineauRemi/invoice-app-v2",
        url: "https://martineauremi.github.io/invoice-app-v2/",
        thumbnail: invoiceAppThumbnail
    },
    {
        id: 1,
        title: "Designo-Website",
        subtitle: "Award-winning custom designs & digital branding solutions",
        overview: "Site vitrine 'multipage' d'une agence fictive spécialisée en design digital. Le site inclut un formulaire de contact.",
        stack: ['React', 'React Router DOM','Styled Components' ,'Formik + Yup'],
        github: "https://github.com/MartineauRemi/designo-website",
        url: "https://martineauremi.github.io/designo-website/",
        thumbnail: designoThumbnail
    },
    {
        id: 2,
        title: "Audiophile",
        subtitle: "",
        overview: "Site E-Commerce de matériel audio.",
        stack: ['React', 'React Router','Sass'],
        github: "https://github.com/MartineauRemi/Audiophile",
        url: "https://martineauremi.github.io/Audiophile/",
        thumbnail: audiophileThumbnail
    },
    {
        id: 3,
        title: "Dev-Finder",
        subtitle: '',
        overview: "Application web qui à partir de l'API 'Github-users-API' affiche l'aperçu d'un profil Github selon le nom d'utilisateur.",
        stack: ['React','Styled Components'],
        github: "https://github.com/MartineauRemi/dev-finder",
        url: "https://martineauremi.github.io/dev-finder/",
        thumbnail: devfinderThumbnail
    },
    {
        id: 4,
        title: "Galleria-Slideshow",
        subtitle: "Discover some of the most famous paintings in the world !",
        overview: "Galerie d'art virtuelle. Lancez le diaporama pour en apprendre plus sur chaque oeuvre, et contrôlez le à votre rythme.",
        stack: ['React','Styled Components'],
        github: 'https://github.com/MartineauRemi/galleria-slideshow',
        url: 'https://martineauremi.github.io/galleria-slideshow/',
        thumbnail: galleriaSlideshowThumbnail
    },
    {
        id: 5,
        title: "Photosnap",
        subtitle: "Create and share your photo stories",
        overview: "Site vitrine pour une application de partage de photos.",
        stack: ['HTML', 'Sass', 'Javascript'],
        github: "https://github.com/MartineauRemi/Photosnap",
        url: "https://martineauremi.github.io/Photosnap/",
        thumbnail: photosnapThumbnail
    },
    {
        id: 6,
        title: "Dine",
        subtitle: "Exquisite dining since 1989",
        overview: "Site web d'un restaurant qui se concentre sur un design intéressant et sur la validation d'un formulaire de réservation.",
        stack: ['HTML', 'Sass', 'Javascript'],
        github: "https://github.com/MartineauRemi/Dine",
        url: "https://martineauremi.github.io/Dine/",
        thumbnail: dineThumbnail
    },
    {
        id: 7,
        title: "Easybank",
        subtitle: "Next Generation Digital Banking",
        overview: "Easybank est une page d'accueil fictive pour une banque en ligne.",
        stack: ['HTML', 'Sass', 'Javascript'],
        github: "https://github.com/MartineauRemi/Easybank",
        url: "https://martineauremi.github.io/Easybank/",
        thumbnail: easybankThumbnail
    },
    {
        id: 8,
        title: "Pomodoro",
        subtitle: "Boostez votre productivité !",
        overview: /*PWA (Progressive Web App) pour */"Maîtriser son temps de travail et de pause en adoptant la méthode de productivité 'Pomodoro'.",
        stack: ['React', 'Sass'],
        github: "https://github.com/MartineauRemi/Pomodoro",
        url: "https://martineauremi.github.io/Pomodoro/",
        thumbnail: pomodoroThumbnail
    }
];


export function projectDataValidation(data: IProject){
    return (
        data
        && data.title
        && data.github
        && data.url
    )
}

export const projects = data.filter(project => projectDataValidation(project))