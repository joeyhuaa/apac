(this.webpackJsonpapac=this.webpackJsonpapac||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.e412b10f.png"},function(e,t,a){e.exports=a.p+"static/media/menu.7bb750a6.png"},function(e,t,a){e.exports=a.p+"static/media/art.805180e5.jpg"},function(e,t,a){e.exports=a.p+"static/media/mural.00cd2609.jpg"},function(e,t,a){e.exports=a.p+"static/media/heart.1ba468ff.png"},function(e,t,a){e.exports=a.p+"static/media/pic1.9ece69f8.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic2.8034f27c.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic3.48785c25.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic4.11a7f9f9.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic5.040cc7e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic6.0eeebab2.jpg"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(26),a(6)),c=a(10),m=a.n(c),s=(a(8),a(11)),u=a.n(s),d=function(){var e=Object(n.useState)("none"),t=Object(o.a)(e,2),a=t[0],r=t[1];return window.addEventListener("resize",(function(){window.innerWidth>=900&&r("none")})),i.a.createElement("div",null,i.a.createElement("div",{id:"nav"},i.a.createElement("img",{id:"logo",src:m.a,width:"15%"}),i.a.createElement("ul",{id:"navlist"},i.a.createElement("li",null,"HOME"),i.a.createElement("li",null,"ABOUT"),i.a.createElement("li",null,"GALLERY"),i.a.createElement("li",null,"EVENTS"),i.a.createElement("li",null,"DEPARTMENTS"),i.a.createElement("li",null,"CONTACT")),i.a.createElement("button",{id:"navicon",onClick:function(){return r("none"==a?"flex":"none")}},i.a.createElement("img",{src:u.a,width:"100%"}))),i.a.createElement("ul",{id:"navdrop",style:{display:a}},i.a.createElement("li",null,"HOME"),i.a.createElement("li",null,"ABOUT"),i.a.createElement("li",null,"GALLERY"),i.a.createElement("li",null,"EVENTS"),i.a.createElement("li",null,"DEPARTMENTS"),i.a.createElement("li",null,"CONTACT")))};function p(e){var t=e.imgsrc,a=e.title,r=e.name,l=e.email,c=e.blurb,m=Object(n.useState)((function(){return c.split(" ").slice(0,35).join(" ")+"..."})),s=Object(o.a)(m,2),u=(s[0],s[1]);return i.a.createElement("div",{className:"dept-card",onMouseOver:function(){return u(c)},onMouseLeave:function(){return u(c.split(" ").slice(0,30).join(" ")+"...")}},i.a.createElement("img",{src:t}),i.a.createElement("h4",{style:{fontFamily:"Poppins"}},a),i.a.createElement("h5",null,r),i.a.createElement("h6",{style:{color:"#FCBC1A"}},l),i.a.createElement("textarea",{readOnly:!0},c))}var E=a(28),g=a(29),h=a(30),f=[{title:"DIRECTOR",name:"Kinu Koide",email:"apac@asucd.ucdavis.edu",blurb:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos."},{title:"MARKETING",name:"Gennifer Hom",email:"grhom@ucdavis.edu",blurb:"Hello! My name is Gennifer Hom and I have strong interests in the arts which is why I decided to be a part of APAC. My interests started in high school where I studied fine arts and eventually grew interests in UI/UX design and Graphic design. I want to help contribute to the APAC group and create a platform where all arts can be welcomed and appreciated on campus."},{title:"SOCIAL MEDIA",name:"Laura Yien",email:"lnyien@ucdavis.edu",blurb:"Hello! I\u2019m a second-year design major from the Bay Area. I became a part of APAC because I\u2019m passionate about sharing meaningful work with others and highlighting artists in our community. My artistic roots are in traditional fine art, and I especially love painting and anything abstract or experimental!"},{title:"OUTREACH",name:"Natalie Lauerman",email:"nllauerman@ucdavis.edu",blurb:"Hello! I am a third-year Sustainable Environmental Design major from San Diego and my favorite art medium is ceramics. I joined APAC because I am passionate about art and outreach and wanted to be more involved at Davis; this committee is a great opportunity to leave a lasting impact on the Davis community and bring attention to important issues in a new and creative way."},{title:"OUTREACH",name:"Lucas Weiser",email:"lbwieser@ucdavis.edu",blurb:"Hello! I'm Lucas and I joined the APAC because I want to share relevant social messages within our community. By sharing these messages through public works of art we can  inform our community, and make it more beautiful at the same time. I like to work with many different types of art, including print, painting, and making music."},{title:"ART SHOWS",name:"Mickey Sanchez",email:"micsanchez@ucdavis.edu",blurb:"Hello! I\u2019m a third-year double major in Psychology and Art History. I joined APAC because I wanted to be part of a group that supports student artists and their endeavors. As the Art Show director, my job is to ensure a platform for Davis student artists to showcase their talents, progress, and work. My favorite medium is photography! Currently, I have been working with my 35mm film camera and disposables camera."}];function b(){return i.a.createElement(E.a,{fluid:!0,id:"depts"},i.a.createElement("h1",{style:{fontFamily:"Poppins semibold",marginBottom:"2em"}},"Our Departments"),i.a.createElement(g.a,null,f.map((function(e){return i.a.createElement(h.a,{sm:12,md:6,lg:4},i.a.createElement(p,{title:e.title,name:e.name,email:e.email,blurb:e.blurb}))}))))}function v(e){var t=e.background,a=e.title,n=e.text;return i.a.createElement("div",{className:"event-card",style:{backgroundImage:"url(".concat(t,")")}},i.a.createElement("div",{className:"inner-white translucent"},i.a.createElement("h4",{style:{fontFamily:"Poppins semibold",textAlign:"center",fontSize:30}},a),i.a.createElement("p",{style:{marginTop:"2em",fontSize:15}},n)))}var y=a(12),w=a.n(y),A=a(13),I=a.n(A);function T(){return i.a.createElement(E.a,{fluid:!0,id:"events"},i.a.createElement("h1",{style:{fontFamily:"Poppins semibold",marginBottom:"2em"}},"Upcoming Events"),i.a.createElement(g.a,null,i.a.createElement(h.a,null,i.a.createElement(v,{background:w.a,title:"Art Show",text:"lorem ipsum"})),i.a.createElement(h.a,null,i.a.createElement(v,{background:I.a,title:"Mural Painting",text:"lorem ipsum"}))))}var j=a(14),k=a.n(j);function x(e){var t=e.art,a=e.title;return i.a.createElement("div",{className:"gallery-card"},i.a.createElement("div",{className:"gallery-card-art",style:{backgroundImage:"url(".concat(t,")")}}),i.a.createElement("div",{className:"gallery-card-bar"},i.a.createElement("span",null,a),i.a.createElement("img",{src:k.a,width:"7%"})))}var C=a(15),L=a.n(C),O=a(16),S=a.n(O),M=a(17),N=a.n(M),P=a(18),H=a.n(P),B=a(19),D=a.n(B),R=a(20),G=a.n(R),U=[{art:L.a,title:"TITLE"},{art:S.a,title:"TITLE"},{art:N.a,title:"TITLE"},{art:H.a,title:"TITLE"},{art:D.a,title:"TITLE"},{art:G.a,title:"TITLE"}];function F(){return i.a.createElement(E.a,{fluid:!0,id:"gallery"},i.a.createElement("h1",{style:{fontFamily:"Poppins semibold",marginBottom:"2em"}},"Gallery"),i.a.createElement(g.a,null,U.map((function(e){return i.a.createElement(h.a,{sm:12,md:6,lg:4},i.a.createElement(x,{art:e.art,title:e.title}))}))))}var z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(T,null),i.a.createElement(F,null),i.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.c878fae8.chunk.js.map