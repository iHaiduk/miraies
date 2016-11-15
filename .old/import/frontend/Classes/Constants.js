/**
 * Created by igor on 13.11.16.
 */
const path = '/import/frontend/';
export default {
    path,
    components: {
        button: `${path}components/button/index`,
        icon: `${path}components/icon/index`,
        text: `${path}components/text/index`
    },
    Element: require(`${path}Classes/Element`).default,
    Elements: require(`${path}Classes/Element`).Elements,

}