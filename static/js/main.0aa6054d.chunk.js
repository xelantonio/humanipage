(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(47)},34:function(e,t,a){e.exports=a.p+"static/media/logo.ae00bd83.png"},35:function(e,t,a){e.exports=a.p+"static/media/CC.7f015617.png"},36:function(e,t,a){e.exports=a.p+"static/media/ubicacion.2c3dba13.png"},37:function(e,t,a){e.exports=a.p+"static/media/facebook.e4afd844.png"},38:function(e,t,a){e.exports=a.p+"static/media/mail.42bc89e8.png"},39:function(e,t,a){e.exports=a.p+"static/media/whatsapp.7e877064.png"},40:function(e,t,a){e.exports=a.p+"static/media/instagram.62840285.png"},41:function(e,t,a){e.exports=a.p+"static/media/telefono.d57ee08f.png"},42:function(e,t,a){e.exports=a.p+"static/media/cintya.5e1d3fff.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/HEMOGLOBINA.a9a73606.png"},44:function(e,t,a){e.exports=a.p+"static/media/PRUEBA.50a9f651.png"},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(21),n=a.n(l),s=a(11),o=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(17),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(d.a)(a,2),n=l[0],s=l[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(13),E=a(1),g=a.n(E),N=a(5),O=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,D=function(e){var t=e.className,i=Object(c.a)(e,["className"]),l=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(w,{src:a(34),alt:"Open",width:75}))))},y=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],h=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",y),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",y),O()}}));var E=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},w=function(e){p&&27===e.keyCode&&O()},y=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&O()},x=g()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:x}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",o&&"has-bottom-divider")},r.a.createElement(D,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:h,className:g()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",onClick:O},"Whatsapp"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=y,j=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(c.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"}),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://cruip.com"},"Cruip/gafe"),". All right reserved")))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var C=j,k=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(C,null))},L=a(6),F={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},H={types:Object(L.a)({},F.types),defaults:Object(L.a)({},F.defaults)},P={types:Object(L.a)({},F.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(L.a)({},F.types,{pushLeft:v.a.bool}),defaults:Object(L.a)({},F.defaults,{pushLeft:!1})},B=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},S=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};S.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var z=S,q=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},b=g()("modal",n&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};q.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var T=Object(L.a)({},H.defaults),_=function(e){var t=e.className,l=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),h=(b[0],b[1],g()("hero section center-content",l&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),f=g()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:h}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:f},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200",style:{color:"#002B49"}},"Laboratorios ",r.a.createElement("span",{style:{color:"#0097CE"}},"Humani")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Brindando servicios de diagnostico eficiente, rapido a precios competitivos"),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(B,null,r.a.createElement(z,{tag:"a",style:{backgroundColor:"#0097CE"},wideMobile:!0,href:"https://api.whatsapp.com/send?phone=50236193495"},"Whatsapp"),r.a.createElement(z,{tag:"a",style:{backgroundColor:"#F2CD00"},wideMobile:!0,href:"https://treinta.shop/cintyasnchez"},"Catalogo de Precios de referencia"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",null,r.a.createElement(w,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))))))};_.defaultProps=T;var R=_,M=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(c.a)(e,["className","data","children","tag"]),s=g()("section-header",t),o=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};M.defaultProps={children:null,tag:"h2"};var I=M,W=Object(L.a)({},A.defaults),G=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(I,{data:{title:"Cuidando con amor",paragraph:"Laboratorio cl\xednico Humani, con tecnolog\xeda de \xfaltima generaci\xf3n ofrecemos una amplia gama de pruebas. Todos los resultados tienen el respaldo de nuestra profesional qu\xedmico bi\xf3logo Licda. Cintya S\xe1nchez  Ub\xedcanos  sobre la calle A 22-55 zona 3  Quetzaltenango, tel\xe9fono 78722241 y b\xfascanos en redes sociales, como Laboratorios Humani   \xa1Y recuerda la prevenci\xf3n es tu seguro de vida"},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://goo.gl/maps/XL6o1uFR57LTtaBv8",e.preventDefault()}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Ubicaci\xf3n"),r.a.createElement("p",{className:"m-0 text-sm"},"Ub\xedcanos  sobre la calle A 22-55 zona 3,  Quetzaltenango")))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://www.facebook.com/labohumani",e.preventDefault()}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Facebook"),r.a.createElement("p",{className:"m-0 text-sm"},"Laboratorios Humani")))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement(N.a,{to:"#",onClick:function(e){window.location.href="mailto:info@humanigt.com",e.preventDefault()}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Correo Electronico"),r.a.createElement("p",{className:"m-0 text-sm"},"info@humanigt.com")))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://api.whatsapp.com/send?phone=50236193495",e.preventDefault()}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Whatsapp"),r.a.createElement("p",{className:"m-0 text-sm"},"3619 3495")))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement(N.a,{target:"_blank",to:"#",onClick:function(e){window.location.href="https://www.instagram.com/laboratorioshumani/",e.preventDefault()}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(40),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Instagram"),r.a.createElement("p",{className:"m-0 text-sm"},"laboratorioshumani")))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16",style:{backgroundColor:"#D9D8D6"}},r.a.createElement(w,{src:a(41),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Telefono"),r.a.createElement("p",{className:"m-0 text-sm"},"7872 2241"))))))))};G.defaultProps=W;var U=G,K=Object(L.a)({},P.defaults),Q=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=g()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(I,{data:{title:"\xa1Con\xf3cenos un poco m\xe1s!",paragraph:"En laboratorios Humani estamos comprometidos con nuestros pacientes por lo que nos interesa que nos conozcas y darte algunos tips."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),r.a.createElement("h3",{className:"mt-0 mb-12"},"Profesional a cargo"),r.a.createElement("p",{className:"m-0"},"Qu\xedmica bi\xf3loga egresada de la Universidad de San Carlos, maestr\xeda en administraci\xf3n y Industrial y empresa de servicios, experiencia en el aseguramiento de la calidad de laboratorios cl\xednicos, supervisi\xf3n y mejora de procesos en laboratorio cl\xednico, experiencia en seguridad social.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(42),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),r.a.createElement("h3",{className:"mt-0 mb-12"},"\xbfSabes que es la prueba de Hemoglobina Glicosilada?"),r.a.createElement("p",{className:"m-0"},"La prueba de hemoglobina glicosilada es una prueba para monitorear el promedio de la glucosa en sangre durante los \xfaltimos tres meses es \xfatil para el control de la diabetes y de la prediabetes.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(43),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),r.a.createElement("h3",{className:"mt-0 mb-12"},"\xbfConocias que existian dos tipos de pruebas de embarazo en sangre?"),r.a.createElement("p",{className:"m-0"},"Actualmente existen dos tipos de pruebas de embarazo en sangre una es la com\xfan que todos conocemos y que se realiza durante las cuatro semanas posteriores a la \xfaltima regla sin embargo hay una prueba m\xe1s espec\xedfica que es la prueba de HCG cuantificada y que mide con exactitud la cantidad de hormona que hay, es \xfatil para detectar embarazos tempranos, embarazos molares o abortos.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(44),alt:"Features split 03",width:528,height:396})))))))};Q.defaultProps=K;var J=Q,V=Object(L.a)({},A.defaults),Y=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(I,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};Y.defaultProps=V;var X=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(c.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};X.defaultProps={children:null,labelHidden:!1,id:null};var $=X,Z=function(e){var t=e.children,a=e.className,i=e.status,l=Object(c.a)(e,["children","className","status"]),n=g()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};Z.defaultProps={children:null,status:!1};var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement($,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:N},r.a.createElement(w,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===n?h:null})),a),f&&r.a.createElement(ee,{status:o},f))};te.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ae=te,ie=Object(L.a)({},H.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(ae,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};re.defaultProps=ie;var le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{className:"illustration-section-01"}),r.a.createElement(U,null),r.a.createElement(J,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ne=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(h,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(m,{path:"*",component:le,layout:k}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45),a(46);var se=Object(o.a)();n.a.render(r.a.createElement(s.b,{history:se},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0aa6054d.chunk.js.map