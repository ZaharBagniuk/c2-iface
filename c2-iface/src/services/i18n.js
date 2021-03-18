import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";

import translation from '../locales/en/translation.json';

i18n.use(reactI18nextModule)
    .init({
        resources: {
            en: {
                translation
            }
        },
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;