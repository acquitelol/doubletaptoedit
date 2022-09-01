const a=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const T=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const N=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const E=window.enmity.modules.common.Moment,{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal;const I=e.Pressable;e.RefreshControl;const z=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const h=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const F=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const C=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const l=e.FormRow,K=e.FormSection;e.FormSelect,e.FormSubLabel;const _=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function X(t){window.enmity.plugins.registerPlugin(t)}function y(t){return window.enmity.assets.getIDByName(t)}const d={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:(t,n)=>window.enmity.modules.filters.byName(t,n),byTypeName:(t,n)=>window.enmity.modules.filters.byTypeName(t,n),byDisplayName:(t,n)=>window.enmity.modules.filters.byDisplayName(t,n)};function j(...t){return window.enmity.modules.bulk(...t)}function q(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;function W(t){return window.enmity.patcher.create(t)}var J="AccountInfo",Q="Test 1.2.1",Z="Shows Account Information and Account Assets.",ee=[{name:"acquite",id:"581573474296791211"}],oe="#ff1f84",te={name:J,version:Q,description:Z,authors:ee,color:oe},ne=({settings:t})=>{const n=N.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:a.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:a.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:a.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:a.ThemeColorMap.TEXT_MUTED},icon:{color:a.ThemeColorMap.INTERACTIVE_NORMAL}});return o.createElement(o.Fragment,null,o.createElement(z,{style:n.container},o.createElement(K,{title:"Enable Dedicated Buttons"},o.createElement(l,{label:"Profile Picture",trailing:o.createElement(_,{value:t.getBoolean("pfpBtn",!1),onValueChange:()=>t.toggle("pfpBtn")})}),o.createElement(C,null),o.createElement(l,{label:"Status",trailing:o.createElement(_,{value:t.getBoolean("statusBtn",!1),onValueChange:()=>t.toggle("statusBtn")})}),";")))};function D(t,n,r){return window.enmity.settings.getBoolean(t,n,r)}const[ie,me,re,M,x,ae,le]=j(d.byDisplayName("UserProfileHeader",!1),d.byProps("getMember"),d.byProps("getGuild"),d.byProps("transitionToGuild"),d.byProps("setString"),d.byName("HeaderAvatar",!1),d.byName("HeaderStatus",!1)),S=W("account-info"),U=q("getStatus","getState");let v=D("AccountInfo","pfpBtn",!0),A=D("AccountInfo","statusBtn",!0);const se={...te,onStart(){S.instead(ie,"default",(t,n,r)=>{var c,s,u,g;const[{user:i,channel:p,type:V}]=n;if(V!==0)return r.apply(t,n);const m=N.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:a.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:a.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:a.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:a.ThemeColorMap.TEXT_MUTED},icon:{color:a.ThemeColorMap.INTERACTIVE_NORMAL}}),k=y("img_nitro_profile_banner"),O=y("pending-alert"),H=y("toast_copy_link"),R=y("ic_header_members_add_24px"),L=y("ic_leave_24px"),f=p==null?void 0:p.guild_id,w=f&&me.getMember(p.guild_id,i.id),P=f&&re.getGuild(p.guild_id),b=f?((c=w==null?void 0:w.getAvatarURL)==null?void 0:c.call(w,!1,4096,!0))||((s=i==null?void 0:i.getAvatarURL)==null?void 0:s.call(i,!1,4096,!0)):(u=i==null?void 0:i.getAvatarURL)==null?void 0:u.call(i,!1,4096,!0);if(!b)return r.apply(t,n);const G=i.discriminator%5,Y=typeof b=="number"?`https://cdn.discordapp.com/embed/avatars/${G}.png`:b==null?void 0:b.replace(".webp",".png"),B=U.getActivities(i.id).find($=>$.type===4);return o.createElement(o.Fragment,null,r.apply(t,n),o.createElement(F,{style:m.container},o.createElement(h,{style:m.header},"Account Information"),o.createElement(F,{style:m.information},o.createElement(l,{label:"Created",leading:o.createElement(l.Icon,{style:m.icon,source:R}),onPress:()=>{T.open({content:E(i.createdAt).format("LLL"),source:R})},trailing:()=>o.createElement(h,{style:m.item},E(i.createdAt).fromNow())}),f&&w&&o.createElement(o.Fragment,null,o.createElement(C,null),o.createElement(l,{label:`Joined ${(g=P==null?void 0:P.name)!=null?g:""}`,leading:o.createElement(l.Icon,{style:m.icon,source:L}),onPress:()=>{T.open({content:E(w.joinedAt).format("LLL"),source:L})},trailing:()=>o.createElement(h,{style:m.item},E(w.joinedAt).fromNow())}))),v||A?o.createElement(o.Fragment,null,o.createElement(h,{style:m.header},"Account Assets"),o.createElement(F,{style:m.information},v&&o.createElement(l,{label:`View ${i.username}'s Profile Picture`,leading:o.createElement(l.Icon,{style:m.icon,source:k}),onPress:()=>{M.openURL(Y)}}),v&&A&&o.createElement(C,null),B&&A&&o.createElement(o.Fragment,null,o.createElement(l,{label:`Copy ${i.username}'s Status`,leading:o.createElement(l.Icon,{style:m.icon,source:H}),onPress:()=>{x.setString(B.state),T.open({content:"Copied to clipboard",source:O})}})))):""))}),v||S.after(ae,"default",(t,[{user:n}],r)=>{var c;const s=(c=n==null?void 0:n.getAvatarURL)==null?void 0:c.call(n,!1,4096,!0);if(!s)return r;const u=n.discriminator%5,g=typeof s=="number"?`https://cdn.discordapp.com/embed/avatars/${u}.png`:s==null?void 0:s.replace(".webp",".png");return o.createElement(I,{onPress:()=>M.openURL(g)},r)}),A||S.after(le,"default",(t,[{user:n}],r)=>{const c=y("pending-alert"),s=U.getActivities(n.id).find(u=>u.type===4);return o.createElement(I,{onPress:()=>{x.setString(s.state),T.open({content:"Copied to clipboard",source:c})}},r)})},onStop(){S.unpatchAll()},getSettingsPanel({settings:t}){return o.createElement(ne,{settings:t})}};X(se);
