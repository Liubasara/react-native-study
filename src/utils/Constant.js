import { Platform, Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const isIOS = Platform.OS === "ios" ? true : false;
export const isIphoneX = (width == 375 && height == 812) ||
    (width == 414 && height == 896);
const UI_STANDARD = 375;

export default class {
    /**
     * 屏幕比例换算
     * @param {*} width
     */
    static scale(width) {
        return (Dimensions.get("window").width / UI_STANDARD) * width;
    }

    static isIOS() {
        return Platform.OS === "ios";
    }

    /**
     * 字体换算
     * @param {*} size
     */
    static scaleFontSizeFunc(size) {
        if (Platform.OS === "ios" && Dimensions.get("window").width === 320) {
            //iphone 5s
            return size - 1;
        }
        return size;
    }

    /****************字体颜色************/
    static blodText = '#221815';
    static blackText = "#595757";
    static grayText = "#666464";
    static lightText = "#898989";
    static themeText = "#0096EB";

    /****************字体大小************/
    static miniSize = this.scaleFontSizeFunc(10);
    static smallSize = this.scaleFontSizeFunc(12);
    static normalSize = this.scaleFontSizeFunc(14);
    static largeSize = this.scaleFontSizeFunc(16);
    static avatarSize = this.scaleFontSizeFunc(36);
    static maxSize = this.scaleFontSizeFunc(38);

    static borderColor = '#C9CACA';
    static backgroundColor = "#282B3B"

    static normalMargin = this.scale(15);

    static lineWidth = StyleSheet.hairlineWidth;
    static lineColor = "#cccccc";

    static itemHeight = this.scale(38);

    static paddingIPXBottom = isIphoneX ? 17 : 0;
    static sizeHeaderMarginTop = Platform.OS === "ios" && isIphoneX ? 35 : Platform.OS === "ios" ? 20 : 0;
    static sizeHeaderContent = Platform.OS === "ios" ? 44 : 50;
    static sizeHeader = Platform.OS === "ios" && isIphoneX ? 84 : Platform.OS === "ios" ? 64 : 50;
}


