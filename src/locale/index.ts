import zhCN from './zh-CN'
import enUS from './en-US'

export default function getLocales(language: string) {
    const locale: any = {
        'zh-CN': zhCN,
        'en-US': enUS
    }

    return locale[language]
}
