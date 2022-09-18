const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const a=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const p=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function b(o){window.enmity.plugins.registerPlugin(o)}const s={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function r(...o){return window.enmity.modules.bulk(...o)}function h(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function S(o){return window.enmity.patcher.create(o)}var F="Dislate",c="1.0.0",f="Allows you to translate text into a different language.",d="development",T=[{name:"acquite",id:"581573474296791211"}],v="#ff1f84",C={name:F,version:c,description:f,release:d,authors:T,color:v};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const E=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const P=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const i=e.FormRow,u=e.FormSection;e.FormSelect,e.FormSubLabel;const D=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function l(o){return window.enmity.assets.getIDByName(o)}const[A,L]=r(s.byProps("transitionToGuild"),s.byProps("setString"));var N=({settings:o})=>{const t=l("ic_selection_checked_24px"),m=p.createThemedStyleSheet({icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL}});return n.createElement(n.Fragment,null,n.createElement(E,null,n.createElement(u,{title:"Disable Entire Plugin"},n.createElement(i,{label:"Disable Plugin",leading:n.createElement(i.Icon,{style:m.icon,source:l("ic_rulebook_16px")}),trailing:n.createElement(D,{value:o.getBoolean("masterDisable",!1),onValueChange:()=>{o.toggle("masterDisable",!1),a.open({content:`Successfully ${o.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo.`,source:t})}})})),n.createElement(P,null),n.createElement(u,{title:"Source Code"},n.createElement(i,{label:"Download",subLabel:"Copy the link of the plugin to Clipboard",leading:n.createElement(i.Icon,{style:m.icon,source:l("toast_copy_link")}),trailing:i.Arrow,onPress:()=>{L.setString("https://raw.githubusercontent.com/acquitelol/dislate/main/dist/Dislate.js"),a.open({content:"Copied to clipboard",source:l("pending-alert")})}}),n.createElement(i,{label:"Source",subLabel:"Open the Repo of the Plugin Externally",leading:n.createElement(i.Icon,{style:m.icon,source:l("ic_leave_stage")}),trailing:i.Arrow,onPress:()=>{A.openURL("https://github.com/acquitelol/dislate")}})),n.createElement(i,{label:`Plugin Version: ${c}
Release Channel: ${d}`})))};function I(o,t,m){return window.enmity.settings.getBoolean(o,t,m)}const[x,k]=r(s.byProps("setString"),s.byProps("openLazy")),w=S("dislate");h("getStatus","getState");const B={...C,onStart(){w.instead(k,"openLazy",(o,t,m)=>{let y=I("AccountInfo","masterDisable",!1);return console.log(t),console.log("some change"),n.createElement(n.Fragment,null,m.apply(o,t))})},onStop(){w.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(N,{settings:o})}};b(B);
