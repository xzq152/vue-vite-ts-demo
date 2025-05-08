/**
 * @description 获取浏览器默认语言
 * @returns {string} 返回 'zh' 或 'en' 表示中文或英文
 */
export function getBrowserLang(): string {
  const browserLang = navigator.language.toLowerCase();
  const langMap: Record<string, string> = {
    zh: "zh",
    "zh-cn": "zh",
    "zh-tw": "zh",
    cn: "zh",
    en: "en",
    "en-us": "en",
    "en-gb": "en"
  };

  return langMap[browserLang] || "en";
}
