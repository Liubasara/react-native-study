export default class RegUtils {

    static isPhoneCn(str) {
        return str.replace(/[^\d]/g, "").length === 11;
    }

    static isNumber(str) {
        return str.replace(/[^\d]/g, "");
    }

}