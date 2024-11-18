/* JS加载器 */
function ScriptLoader(){
    /* 脚本加载列表，务必根据下面模板进行你需要插入的JS编写 */ 
    const ScriptNames = ['Current_Time',];
    const scriptMap = {
        /* 不仅是控制台输出 */
        'Current_Time':`console.log('Current_Time is loaded');`,
    };

    ScriptNames.forEach(scriptName =>{
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = scriptMap[scriptName];  
        document.body.appendChild(script);
    })
}
/* ChatGPT 赢了，我是FW。尽管它只是一个很棒的“数据搜索引擎” */