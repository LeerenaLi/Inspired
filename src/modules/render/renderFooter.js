import { createElement } from "../createElement";
import { dataNavigation } from "../dataNavigation";

const vkLink = createElement('a', {
    className: 'footer-social__link footer-social__link_vk footer__link',
    innerHTML: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z" />
        </svg>
    `,
    href: 'vk'
})

const tgLink = createElement('a', {
    className: 'footer-social__link footer-social__link_tg footer__link',
    innerHTML: `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
        </svg>
    `,
    href: 'tg'
})

const container = createElement('div', 
    {
        className: 'container'
    }
)

const footerContainer = createElement('div', 
    {
        className: 'footer__container'
    }, 
    {
        parent: container,
    }
)

const footerCategory = createElement('div', 
    {
        className: 'footer__item footer__item_category footer-category'
    }, 
    {
        parent: footerContainer,
        append: createElement('h2', {
            className: 'footer__title footer-category__title',
            textContent: '??????????????'
        })
    }
)

const footerCategoryList = createElement('ul', 
    {
        className: 'footer-category__list'
    },
    {
        parent: footerCategory,
    }
)

for (const genders in dataNavigation) {
    createElement('li', 
        {
            className: 'footer-category__item',
        },
        {
            parent: footerCategoryList,
            appends: [
                createElement('h3', 
                    {
                        className: 'footer-category__subtitle',
                        textContent: dataNavigation[genders].title
                    }
                ),
                createElement('ul', 
                    {
                        className: `footer-category__sublist`
                    },
                )
            ]
        }
    )
}


const footerSocial = createElement('div', 
    {
        className: 'footer__item footer__item_social footer-social'
    },
    {
        parent: footerContainer,
        appends: [
            createElement('h2', {
                className: 'footer__title footer-social__title',
                textContent: '?????????????????? ?? ????????'
            }),
            createElement('p', {
                className: 'footer-social__subtitle',
                textContent: '???????????????? ?? ???????????? ??????????????????'
            }),
            createElement('ul', {
                className: 'footer-social__list'
            },
            {
                appends: [
                    createElement('li', {
                        className: 'footer-social__item'
                    },
                    {
                        append: vkLink,
                    }),
                    createElement('li', {
                        className: 'footer-social__item'
                    },
                    {
                        append: tgLink,
                    })
                ]
            })
            
        ]
    }
)

const footerContacts = createElement('div', 
    {
        className: 'footer__item footer__item_contacts footer-contacts'
    },
    {
        parent: footerContainer,
        appends: [
            createElement('a', {
                className: 'footer__link',
                textContent: 'Inspired@gmail.com',
                href: 'mailto:Inspired@gmail.com'
            }),
            createElement('a', {
                className: 'footer__link',
                textContent: '8 930 490 26 20',
                href: 'tel:89304902620'
            })
        ]
    }
)

const footerCopyright = createElement('div', 
    {
        className: 'footer__item footer__item_copyright footer-copyright',
    },
    {   
        parent: footerContainer,
        append: createElement('p', {
            textContent: '?? INSPIRED, 2023'
        })
    }
)

const footerDevlopment = createElement('div', 
    {
        className: 'footer__item footer__item_development footer-development'
    },
    {
        parent: footerContainer,
        append: createElement('ul', 
            {
                className: 'footer-development__list'
            },
            {
                appends: [
                    createElement('li', 
                        {
                            className: 'footer-development__item',
                            textContent: 'Designer: '
                        },
                        {
                            append: createElement('a', {
                                textContent: 'Anastasia Ilina',
                                href: 'https://t.me/Mrshmallowww'
                            })
                        }
                    ),
                    createElement('li', 
                        {
                            className: 'footer-development__item',
                            textContent: 'Developer: '
                        },
                        {
                            append: createElement('a', {
                                textContent: 'Elena Shipilevskaya',
                                href: 'https://vk.com/leerena_li'
                            })
                        }
                    )
                ]
            }
        )
    }
)



export const renderFooter = () => {
    const footer = document.querySelector('.footer');

    footer.textContent = '';

    footer.append(container);
   

    const footerCategoryWomenItems = dataNavigation.women.list.map((item) =>
        createElement('li', 
            {
                className: 'footer-category__subitem',
            },
            {
                parent: document.querySelectorAll('.footer-category__sublist')[0],
                append: createElement('a', 
                    {
                        className: 'footer__link',
                        textContent: item.title,
                        href: `#/women/${item.slug}`,
                    }
                )
            }
        )
    )

    const footerCategoryMenTtems = dataNavigation.men.list.map((item) =>
        createElement('li', 
            {
                className: 'footer-category__subitem',
            },
            {
                parent: document.querySelectorAll('.footer-category__sublist')[1],
                append: createElement('a', 
                    {
                        className: 'footer__link',
                        textContent: item.title,
                        href: `#/men/${item.slug}`,
                    }
                )
            }
        )   
    )
};