import { createElement } from "../createElement";

const container = createElement('div', 
    {
        className: 'container'
    },
);

const heroContent = createElement('div', 
    {
        className: 'hero__content'
    },
    {
        parent: container
    }
);

const heroTitle = createElement('h2', 
    {
        className: `hero__title`,
        textContent: ''
    },
    {
        parent: heroContent
    }
);

const heroLink = createElement('a', 
    {
        className: 'hero__link',
        textContent: 'Перейти',
        href: ``
    },
    {
        parent: heroContent
    }
);

export const renderHero = (gender) => {
    const hero = document.querySelector('.hero');

    if (!gender) {
        hero.style.display = 'none';
        return;
    }

    hero.style.display = '';

    hero.className = `hero hero_${gender}`;

    hero.append(container);

    heroTitle.textContent = `${gender === 'women' ? 'Новая коллекция Бюстгальтер-балконет' : 'Боксеры из новой коллекции'}`;
    heroLink.href = `colection${gender}`;
};