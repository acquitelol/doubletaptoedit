function a(e){window.enmity.plugins.registerPlugin(e)}function i(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function r(e){return window.enmity.patcher.create(e)}var c="NoEmbedFail",d="0.1.1",s="Fixes any Embed Fails you might have.",l=[{name:"acquite",id:"581573474296791211"}],p={name:c,version:d,description:s,authors:l};const o=r("no-embed-fail"),m=i("sendMessage"),u=i("uploadLocalFiles"),g={...p,onStart(){o.before(m,"sendMessage",(e,n,t)=>{n[1].content=n[1].content.replaceAll("media.discordapp.net","cdn.discordapp.com")}),o.before(u,"uploadLocalFiles",(e,n,t)=>{n[3].content=n[3].content.replaceAll("media.discordapp.net","cdn.discordapp.com")})},onStop(){o.unpatchAll()}};a(g);
