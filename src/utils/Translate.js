import i18n from "i18n-js";

import ZH from '../res/translations/zh.json'
import EN from '../res/translations/en.json'

export const translationGetters = {
    'zh': ZH,
    'en': EN,
};

export const defaultkey = 'zh'

export const setI18nConfig = (key = defaultkey) => {
    i18n.translations = { [key]: translationGetters[key] };
    i18n.locale = key;
};