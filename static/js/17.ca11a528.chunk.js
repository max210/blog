(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[17],{178:function(n,t){n.exports=" \u5f90\u8001\u5e08\u8bf4\u8fc7\u8981\u81ea\u5df1\u957f\u671f\u7ef4\u62a4\u4e00\u4e2a\u81ea\u5df1\u7684\u9879\u76ee\uff0c\u6162\u6162\u8fed\u4ee3\uff0c\u8fd9\u6837\u4f1a\u53d1\u73b0\u81ea\u5df1\u7684\u5c0f\u9879\u76ee\u4f1a\u8d8a\u6765\u6108\u5927\uff0c\u529f\u80fd\u8d8a\u6765\u8d8a\u4e30\u5bcc\u3002\u5728\u505a\u5176\u4ed6\u9879\u76ee\u7684\u65f6\u5019\uff0c\u9047\u5230\u6709\u548c\u81ea\u5df1\u9879\u76ee\u7684\u7c7b\u4f3c\u529f\u80fd\u65f6\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u529f\u80fd\u3002\n\n\u6211\u81ea\u5df1\u4e5f\u662f\u5199\u4e86\u4e00\u4e2a\u9879\u76ee\uff0c\u540e\u7aef`express`\u63d0\u4f9b`API`\u63a5\u53e3\uff0c\u524d\u7aef\u7528vue\uff0c\u867d\u7136\u529f\u80fd\u6bd4\u8f83\u5355\u4e00\uff0c\u4f46\u662f\u4e5f\u90fd\u7528\u5230\u4e86`vue-router`\uff0c`vuex`\u7b49\uff0c\u4f46\u5f53\u65f6\u60f3\u7740\u5148\u628a\u9879\u76ee\u8dd1\u8d77\u6765\u518d\u8bf4\uff0c\u4ee3\u7801\u5199\u7684\u6709\u70b9\u7c97\u7cd9\uff0c\u6700\u8fd1\u60f3\u7740\u597d\u597d\u6574\u7406\u4e00\u4e0b\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u4ee5\u540e\u5c31\u7ef4\u62a4\u8fd9\u4e2a\u9879\u76ee\u3002\u81ea\u5df1\u8981\u4e86\u89e3\u4e00\u4e9b`koa`\uff0c\u5c31\u60f3\u7740\u628a\u63a5\u53e3\u7528`koa`\u518d\u5199\u4e00\u904d\uff0c\u524d\u7aef\u7684\u8bf7\u6c42\u6362\u7528`axios`\uff08\u4e4b\u524d\u7528\u7684`vue-resource`\uff09\uff0c\u8de8\u57df\u7528`CORS`\u6765\u4ee3\u66ff\u4e4b\u524d\u7528\u7684\u4ee3\u7406\u7684\u65b9\u5f0f\uff0c\u628a\u81ea\u5df1\u4ee3\u7801\u6574\u7406\u4e86\u4e00\u756a\u3002\u6574\u7406\u540e\u7684\u524d\u540e\u7aef\u4ee3\u7801\u90fd\u653e\u5230\u4e86`github`[https://github.com/max210]('https://github.com/max210')\u4e0a\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u770b\u4e00\u4e0b\uff0c\u6b22\u8fce\u63d0\u5efa\u8bae\uff5e\n\n\u8fd9\u5468\u672b\u60f3\u589e\u52a0\u4e00\u4e2a\u529f\u80fd\uff0c`GitHub`\u7b2c\u4e09\u65b9\u767b\u5f55\uff0c\u770b\u4e86\u8001\u5e08\u7684`community`\u9879\u76ee\uff0c\u7f51\u4e0a\u67e5\u4e86\u8d44\u6599\uff0c\u7ec8\u4e8e\u5b9e\u73b0\u4e86\u3002\n\n\u5927\u81f4\u6d41\u7a0b\u5c31\u662f\u7528\u6237\u540c\u610f\u6388\u6743`github`\u4ee5\u540e\uff0cgithub\u4f1a\u7ed9\u5230\u4e00\u4e2a`code`\uff0c\u62ff\u5230\u8fd9\u4e2a`code`\u53bb\u8bf7\u6c42`github`\u7684\u63a5\u53e3\uff0c\u7136\u540e\u83b7\u5f97`access_token`\uff0c\u7136\u540e\u5229\u7528`access_token`\u518d\u8bf7\u6c42`GitHub`\u7684\u4e00\u4e2a\u63a5\u53e3\u5c31\u53ef\u4ee5\u83b7\u5f97\u7528\u6237\u7684\u4fe1\u606f\u4e86\u3002\n\n\u9996\u5148\u53bb`GitHub`\u4e0a\u9762\u6ce8\u518c`Oauth application`\uff0c\u674e\u9e4f\u540c\u5b66\u5df2\u7ecf\u6709\u4e86[\u6559\u7a0b]('http://xugaoyang.com/post/5ae3258a90919f7d042209c2')\uff0c\u6ce8\u518c\u4ee5\u540e\u4f1a\u5f97\u5012`Client ID`\u548c`Client Secret   `\n\u81f3\u4e8e`Authorization callback URL` \u7684\u610f\u601d\u662f\u7528\u6237\u540c\u610f`GitHub`\u6388\u6743\u4ee5\u540e\u8981\u8df3\u8f6c\u5230\u7684\u9875\u9762\u3002\u6211\u662f\u5728`vue`\u9879\u76ee\u4e2d\u65b0\u5199\u4e86\u4e00\u4e2a`callback`\u9875\u9762\uff0c\u6240\u4ee5\u6211\u586b\u5165\u7684\u5730\u5740\u662f`http://localhost:8080/callback`\uff0c\u8fdb\u884c\u672c\u5730\u8c03\u8bd5\u3002\n\n\u9996\u5148\u5728\u6211\u7684\u6ce8\u518c\u7684\u9875\u9762\u589e\u52a0\u4e00\u4e2a`GitHub`\u7684\u56fe\u6807\uff0c\u7528\u4e00\u4e2a`a`\u94fe\u63a5\u5305\u88f9\uff0c`a`\u94fe\u63a5\u7684\u5730\u5740\u4e3a`https://github.com/login/oauth/authorize?client_id=xxx`\uff0c`client_id`\u5c31\u662f\u6ce8\u518c\u5f97\u5230\u7684`Client ID`\uff0c\u7528\u6237\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\u4f1a\u8df3\u8f6c\u5230`GitHub`\u63d0\u4f9b\u7684\u540c\u610f\u6388\u6743\u9875\u9762\uff0c\u5f53\u7528\u6237\u540c\u610f\u6388\u6743\u4ee5\u540e\uff0c\u4f1a\u8df3\u8f6c\u5230\u6211\u4eec\u586b\u5199\u7684`Authorization callback URL`\u5730\u5740\uff0c\u6211\u4e2a\u4eba\u5199\u4e86\u540d\u5b57\u4e3acallback\u9875\u9762\uff0c\u8df3\u8f6c\u7684`url`\u4e2d\u4f1a\u643a\u5e26\u4e00\u4e2a`code`\u53c2\u6570\uff0c\u63a5\u4e0b\u91cc\u6211\u5728`callback.vue`\u6587\u4ef6\u4e2d\uff0c\u94a9\u5b50\u51fd\u6570`mounted`\u4e2d\u62ff\u5230`code`\uff0c\u7136\u540e\u5229\u7528`axios`\u53d1\u9001\u8bf7\u6c42\u7ed9\u6211\u7684\u540e\u7aef\u3002\u4ee3\u7801\u5982\u4e0b\n\n```\nimport * as R from 'ramda'\n\nasync mounted () {\n  const url = window.location.href\n  const code = R.pipe(R.split('?'), R.last, R.split('='), R.last)(url)\n\n  try {\n    const res = await this.axios.post(`${this.globalData.host}/user/github/third-login`, { code })\n    if (res.data.status === 0) {                // \u6210\u529f\n      this.username(res.data.name)              // \u8bbe\u7f6e\u62ff\u5230\u7684username\n      this.$router.push({ name: 'GoodIndex' })  // \u8df3\u8f6c\u5230\u9996\u9875\n    } else {\n      //\u51fa\u9519\u4e86\n    }\n  } catch (e) {\n    //\u51fa\u9519\u4e86\n  }\n}\n```\n\n\u540e\u7aef\u901a\u8fc7\u63a5\u53e3\u62ff\u5230`code`\uff0c\u7136\u540e`POST`\u8bf7\u6c42`https://github.com/login/oauth/access_token`\u8fd9\u4e2a\u63a5\u53e3\uff0c\u4ee5\u83b7\u5f97access_token\uff0c\u8bf7\u6c42\u53c2\u6570\u6709`client_id`,`client_secret`,`code`,\u6210\u529f\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u62ff\u5230`access_token`\uff0c\u7136\u540e`GET`\u8bf7\u6c42`https://api.github.com/user`\uff0c\u53c2\u6570\u4e3a`access_token`\uff0c\u6210\u529f\u56de\u8c03\u540e\uff0c\u5c31\u53ef\u4ee5\u83b7\u5f97\u7528\u6237\u7684\u4fe1\u606f\u4e86\u3002\u4ee3\u7801\u5982\u4e0b\n\n```\n//\u7b2c\u4e09\u65b9\u767b\u5f55\uff08GitHub\uff09\nexport const thirdLogin = async (ctx, next) => {\n  // \u83b7\u5f97\u524d\u7aef\u8bf7\u6c42\u643a\u5e26\u7684code\u53c2\u6570\n  const code = ctx.request.body.code\n\n  try {\n    const params = {\n      client_id: 'xxx',\n      client_secret: 'xxx',\n      code\n    }\n    const res = await axios.post(`https://github.com/login/oauth/access_token`, params) // \u83b7\u53d6access_token\n    const access_token = R.pipe(R.split('&'), R.head, R.split('='), R.last)(res.data)\n    const userData = await axios.get(`https://api.github.com/user`, { params: { access_token } }) // \u83b7\u53d6GitHub\u7528\u6237\u4fe1\u606f\n\n    // \u5b58\u5165\u6570\u636e\u5e93\n    const name = userData.data.login\n    const email = userData.data.email\n\n    const user = new User({ name, email })\n    await user.save()\n\n    // \u83b7\u53d6_id\n    const findUser = await User.findOne({ name }).exec()\n\n    const payload = {\n      _id: findUser._id,\n      name: findUser.name\n    }\n    // \u7528jwt\u751f\u6210token\n    const token = jwt.encode(payload, config.jwtSecret)\n\n    const opts = {\n      path: '/',\n      maxAge: 1000 * 60 * 60 * 24 * 30,\n      signed: true,\n      httpOnly: true\n    }\n\n     ctx.cookies.set(config.cookieName, token, opts)  //\u53d1\u9001cookie\n     ctx.body = { status: 0, msg: '\u767b\u5f55\u6210\u529f', name: findUser.name, token }   //\u8fd4\u56detoken \u4ee5\u5907\u5ba2\u6237\u7aef\u9700\u8981\n  } catch (e) {\n    ctx.body = { status: 1, msg: '\u767b\u5f55\u5931\u8d25'}\n  }\n}\n\n```\n"}}]);