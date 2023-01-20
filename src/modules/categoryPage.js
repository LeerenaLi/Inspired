import { DATA } from "./const";
import { renderGoods } from "./render/renderGoods";
import { renderHero } from "./render/renderHero";
import { renderNavigation } from "./render/renderNavigation";

export const categoryPage = (routerData) => {
    const { gender, category } = routerData.data;
    const params = {gender, category};

    if (routerData.params?.page) {
        params.page = routerData.params.page;
    }

    const title = DATA.navigation[gender].list
        .find(item => item.slug === category).title;
    
    renderNavigation(gender, category);
    renderHero(false);
    renderGoods(title, params);
}