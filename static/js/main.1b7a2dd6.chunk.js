(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a(50)},37:function(e,t,a){e.exports=a.p+"static/media/logo.ae00bd83.png"},38:function(e,t,a){e.exports=a.p+"static/media/CC.7f015617.png"},39:function(e,t,a){e.exports=a.p+"static/media/ubicacion.2c3dba13.png"},40:function(e,t,a){e.exports=a.p+"static/media/facebook.e4afd844.png"},41:function(e,t,a){e.exports=a.p+"static/media/mail.42bc89e8.png"},42:function(e,t,a){e.exports=a.p+"static/media/whatsapp.7e877064.png"},43:function(e,t,a){e.exports=a.p+"static/media/instagram.62840285.png"},44:function(e,t,a){e.exports=a.p+"static/media/telefono.d57ee08f.png"},45:function(e,t,a){e.exports=a.p+"static/media/cintya.5e1d3fff.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/HEMOGLOBINA.a9a73606.png"},47:function(e,t,a){e.exports=a.p+"static/media/PRUEBA.50a9f651.png"},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(22),l=a.n(r),o=a(11),s=a(7),c=a(3),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(o.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(10),u=a(2),v=a.n(u),p=a(20),b=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],o=r[1],s=Object(i.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",E)),b())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",E))},h=Object(p.throttle)((function(){f(),b()}),30),E=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),b()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var f=b,h=a(15),E=a(1),g=a.n(E),N=a(5),w=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},s,{ref:b,className:t,src:a,width:r,height:l,alt:o,onLoad:function(){p(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,D=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=g()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(N.a,{to:"/"},n.a.createElement(O,{src:a(37),alt:"Open",width:75}))))},y=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],f=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",O),document.addEventListener("click",y),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",y),w()}}));var E=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},O=function(e){p&&27===e.keyCode&&w()},y=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&w()},x=g()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:x}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},n.a.createElement(D,null),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{ref:f,className:g()("header-nav",p&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0",onClick:w},"Whatsapp"))),!l&&n.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=y,j=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"}),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Made by ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip/gafe"),". All right reserved")))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var C=j,k=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(C,null))},L=a(14),H=a(6),F={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},z={types:Object(H.a)({},F.types),defaults:Object(H.a)({},F.defaults)},B={types:Object(H.a)({},F.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(H.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(H.a)({},F.types,{pushLeft:v.a.bool}),defaults:Object(H.a)({},F.defaults,{pushLeft:!1})},P=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},q=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var S=q,M=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},b=g()("modal",l&&"is-active",s&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:b,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},s?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:s})):n.a.createElement(n.a.Fragment,null,!o&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};M.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var T=Object(H.a)({},z.defaults),R=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),f=(b[0],b[1],g()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),h=g()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:f}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:h},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200",style:{color:"#002B49"}},"Laboratorios ",n.a.createElement("span",{style:{color:"#0097CE"}},"Humani")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Brindando servicios de diagnostico eficiente, rapido a precios competitivos"),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(P,null,n.a.createElement(S,{tag:"a",style:{backgroundColor:"#0097CE"},wideMobile:!0,href:"https://api.whatsapp.com/send?phone=50236193495"},"Whatsapp"))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",null,n.a.createElement(O,{className:"has-shadow",src:a(38),alt:"imagen de laboratorio clinico",width:896,height:504}))))))};R.defaultProps=T;var I=R,G=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),o=g()("section-header",t),s=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:o}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(s,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};G.defaultProps={children:null,tag:"h2"};var Q=G,U=Object(H.a)({},A.defaults),W=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",o&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(Q,{data:{title:"Cuidando con amor",paragraph:"Laboratorio cl\xednico Humani, con tecnolog\xeda de \xfaltima generaci\xf3n ofrecemos una amplia gama de pruebas. Todos los resultados tienen el respaldo de nuestra profesional qu\xedmico bi\xf3logo Licda. Cintya S\xe1nchez  Ub\xedcanos  sobre la calle A 22-55 zona 3  Quetzaltenango, tel\xe9fono 78722241 y b\xfascanos en redes sociales, como Laboratorios Humani   \xa1Y recuerda la prevenci\xf3n es tu seguro de vida"},className:"center-content"}),n.a.createElement("div",{className:b},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://goo.gl/maps/XL6o1uFR57LTtaBv8",e.preventDefault()}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(39),alt:"ubicacion icono",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Ubicaci\xf3n"),n.a.createElement("p",{className:"m-0 text-sm"},"Ub\xedcanos  sobre la calle A 22-55 zona 3,  Quetzaltenango")))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://www.facebook.com/labohumani",e.preventDefault()}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(40),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Facebook"),n.a.createElement("p",{className:"m-0 text-sm"},"Laboratorios Humani")))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement(N.a,{to:"#",onClick:function(e){window.location.href="mailto:info@humanigt.com",e.preventDefault()}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(41),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Correo Electronico"),n.a.createElement("p",{className:"m-0 text-sm"},"info@humanigt.com")))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://api.whatsapp.com/send?phone=50236193495",e.preventDefault()}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(42),alt:"Features tile icon 04",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Whatsapp"),n.a.createElement("p",{className:"m-0 text-sm"},"3619 3495")))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://www.instagram.com/laboratorioshumani/",e.preventDefault()}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(43),alt:"Features tile icon 05",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Instagram"),n.a.createElement("p",{className:"m-0 text-sm"},"laboratorioshumani")))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},n.a.createElement(O,{src:a(44),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Telefono"),n.a.createElement("p",{className:"m-0 text-sm"},"7872 2241"))))))))};W.defaultProps=U;var _=W,J=Object(H.a)({},B.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=g()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),h=g()("features-split-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},b,{className:f}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(Q,{data:{title:"\xa1Con\xf3cenos un poco m\xe1s!",paragraph:"En laboratorios Humani estamos comprometidos con nuestros pacientes por lo que nos interesa que nos conozcas y darte algunos tips."},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),n.a.createElement("h3",{className:"mt-0 mb-12"},"Profesional a cargo"),n.a.createElement("p",{className:"m-0"},"Qu\xedmica bi\xf3loga egresada de la Universidad de San Carlos, maestr\xeda en administraci\xf3n y Industrial y empresa de servicios, experiencia en el aseguramiento de la calidad de laboratorios cl\xednicos, supervisi\xf3n y mejora de procesos en laboratorio cl\xednico, experiencia en seguridad social.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(O,{src:a(45),alt:"Quimico Biologo",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),n.a.createElement("h3",{className:"mt-0 mb-12"},"\xbfSabes que es la prueba de Hemoglobina Glicosilada?"),n.a.createElement("p",{className:"m-0"},"La prueba de hemoglobina glicosilada es una prueba para monitorear el promedio de la glucosa en sangre durante los \xfaltimos tres meses es \xfatil para el control de la diabetes y de la prediabetes.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(O,{src:a(46),alt:"hemoglobina glicocilada",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),n.a.createElement("h3",{className:"mt-0 mb-12"},"\xbfConocias que existian dos tipos de pruebas de embarazo en sangre?"),n.a.createElement("p",{className:"m-0"},"Actualmente existen dos tipos de pruebas de embarazo en sangre una es la com\xfan que todos conocemos y que se realiza durante las cuatro semanas posteriores a la \xfaltima regla sin embargo hay una prueba m\xe1s espec\xedfica que es la prueba de HCG cuantificada y que mide con exactitud la cantidad de hormona que hay, es \xfatil para detectar embarazos tempranos, embarazos molares o abortos.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement("a",null,n.a.createElement(O,{src:a(47),alt:"prueba de embarazo",width:528,height:396}))))))))};Y.defaultProps=J;var V=Y,X=Object(H.a)({},A.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(Q,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=X;var K=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),o=g()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},l,{className:o,htmlFor:r}),a)};K.defaultProps={children:null,labelHidden:!1,id:null};var Z=K,ee=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),l=g()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:l}),t)};ee.defaultProps={children:null,status:!1};var te=ee,ae=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,l=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=g()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),O="textarea"===l?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(Z,{labelHidden:r,id:E.id},i),n.a.createElement("div",{className:N},n.a.createElement(O,Object.assign({},E,{type:"textarea"!==l?l:null,className:w,name:o,disabled:m,value:d,placeholder:b,rows:"textarea"===l?f:null})),a),h&&n.a.createElement(te,{status:s},h))};ae.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=ae,ne=Object(H.a)({},z.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(ie,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};re.defaultProps=ne;var le=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(L.a,null,n.a.createElement("title",null," Laboratorio Humani"),n.a.createElement("meta",{name:"Laboratorio Humani, es un laboratorio clinico ubicado en Quetzaltenango cuyo principal objetivo es brindar un servicio de calidad y con calidez a nuestros pacientes",content:" En la pagina de laboratorio Humani encontras como contactarte con nosotros y nuestros servicios."})),n.a.createElement(I,{className:"illustration-section-01"}),n.a.createElement(_,null),n.a.createElement(V,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))};h.a.initialize("UA-242581882-1");var oe=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(o.c,null,n.a.createElement(m,{path:"*",component:le,layout:k}),n.a.createElement(L.a,null,n.a.createElement("title",null," Laboratorio Humani"),n.a.createElement("meta",{name:"Laboratorio Humani, es un laboratorio clinico ubicado en Quetzaltenango cuyo principal objetivo es brindar un servicio de calidad y con calidez a nuestros pacientes",content:" En la pagina de laboratorio Humani encontras como contactarte con nosotros y nuestros servicios."})))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48),a(49);var se=Object(s.a)();l.a.render(n.a.createElement(o.b,{history:se},n.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1b7a2dd6.chunk.js.map