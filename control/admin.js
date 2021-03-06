const fs = require('fs');
const {join} = require('path');

exports.index = async ctx => {
    // 判断用户是否登录
    if(ctx.session.isNew) {
        // ctx.status = 404;
        return await ctx.render("404");
    }

    // 用户登录
    const id = ctx.params.id;
    const arr = fs.readdirSync(join(__dirname, "../views/admin"));
    let flag =false;

    arr.forEach(v => {
        const path = v.replace(/^admin\-|(\.pug)$/g, "");
        if(path === id) {
            flag = true;
        }
    });

    if(flag) {
        await ctx.render("admin/admin-" + id, {role: ctx.session.role});
    } else {
        await ctx.render("404");
    }

}














