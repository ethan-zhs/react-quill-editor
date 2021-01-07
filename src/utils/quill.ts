/**
 * 注册quill style模块
 *
 * @param {Object} Quill quill 全局变量
 * @param {Array<Object>} moduleList 模块列表
 */
export function moduleRegister(Quill: any, moduleList: any = []) {
    const Parchment = Quill.import('parchment')

    moduleList.forEach((m: any) => {
        const config = {
            scope: m.scope ? Parchment.Scope[m.scope] : Parchment.Scope.BLOCK,
            whitelist: m.whitelist || []
        }

        const moduleStyle = new Parchment.Attributor.Style(m.moduleName, m.styleName, config)
        Quill.register({ [`formats/${m.moduleName}`]: moduleStyle }, true)
    })
}
