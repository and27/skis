(this.webpackJsonpskis=this.webpackJsonpskis||[]).push([[0],{11:function(e,t,A){},12:function(e,t,A){},14:function(e,t,A){"use strict";A.r(t);var i=A(1),c=A.n(i),a=A(6),o=A.n(a),r=(A(11),A(12),A.p+"static/media/back.8588f653.webp"),s=A(2),n=A(4),m=A.p+"static/media/map.409976cd.png",d=A.p+"static/media/home.c487b9d1.png",g=A.p+"static/media/serp_ornatisimus.d75eae23.png",p=A.p+"static/media/serp_guentheri.eec82de5.png",l=A.p+"static/media/serp_hyoprora.939e497b.png",j=A.p+"static/media/laga_dicrus.49247e2d.png",u=A.p+"static/media/laga_ortonii.8034b9fc.png",x=A.p+"static/media/laga_fuscoauratus.66a37b8a.png",E=A.p+"static/media/laga_ecpleopus.7c7b3d3a.png",I=A.p+"static/media/rana_pristimantis.d9623f3e.png",b=A.p+"static/media/rana_bokermanni.ab5c83ec.png",V=A.p+"static/media/rana_lacrimosus.73abedc8.png",R=A.p+"static/media/rana_punctata.efa28056.png",Q=A.p+"static/media/flora1.b34e906e.png",q=A.p+"static/media/flora2.85f531a4.png",z=A(0),B=function(e){var t=e.position,A=e.image,c=e.title,a=e.description,o=e.menuSelected,r=e.category,n=Object(i.useState)(),m=Object(s.a)(n,2),d=m[0],g=m[1];return Object(z.jsx)(z.Fragment,{children:o[r]&&Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{className:d?"imgIcon enableCircle":"imgIcon not-enableCircle",style:{zIndex:d?10:0,backgroundImage:"url(".concat(A,")"),backgroundSize:"cover",width:"4rem",height:"4rem",position:"absolute",top:"".concat(t.top,"%"),left:"".concat(t.left,"%"),borderRadius:"50%",boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"},onClick:function(){g(!d)}}),Object(z.jsxs)("div",{className:d?"enable":"not-enable",style:{zIndex:d?9:-1,backgroundColor:"#ffffffa6",width:"10rem",position:"absolute",top:"".concat(t.top,"%"),left:"".concat(t.left+4,"%"),borderRadius:"3% 3% 3% 3%",boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)",paddingLeft:"2rem",paddingRight:"1.5rem",paddingBottom:"0.5rem"},children:[Object(z.jsx)("h4",{style:{margin:"0.3rem 0rem"},children:c}),Object(z.jsx)("p",{style:{margin:0},children:a})]})]})})},C=function(e){var t=e.menuSelected;return Object(z.jsx)(n.b,{children:Object(z.jsx)("div",{style:{position:"relative",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(z.jsxs)(n.a,{children:[Object(z.jsx)("img",{src:m,style:{width:"85vw",zIndex:"-1",margin:"auto"}}),Object(z.jsx)(B,{position:{top:60,left:50},image:d,category:"buildings",title:"Main building",description:"description",menuSelected:t}),Object(z.jsx)(B,{position:{top:70,left:70},image:g,category:"serpientes",title:"Micrurus ornatissimus",description:"ELAPIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:10,left:50},image:p,category:"serpientes",title:"Erythrolamprus guentheri",description:"COLUBRIDAE-DIPSADINAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:60,left:10},image:l,category:"serpientes",title:"Main building",description:"description",menuSelected:t}),Object(z.jsx)(B,{position:{top:60,left:20},image:j,category:"lagartijas",title:"Pholidobolus dicrus",description:"GYMNOPHTHALMIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:40,left:70},image:u,category:"lagartijas",title:"Anolis ortonii",description:"IGUANIDAE DACTYLOINAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:40,left:20},image:x,category:"lagartijas",title:"Anolis fuscoauratus",description:"IGUANIDAE DACTYLOINAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:20,left:20},image:E,category:"lagartijas",title:"Potamites ecpleopus complex",description:"GYMNOPHTHALMIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:20,left:30},image:I,category:"ranas",title:"Pristimantis enigmaticus",description:"STRABOMANTIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:35,left:25},image:V,category:"ranas",title:"Pristimantis lacrimosus",description:"STRABOMANTIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:30,left:45},image:R,category:"ranas",title:"Pristimantis punctata",description:"STRABOMANTIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:20,left:85},image:b,category:"ranas",title:"Dendropsophus bokermanni",description:"HYLIDAE",menuSelected:t}),Object(z.jsx)(B,{position:{top:28,left:75},image:Q,category:"flora",title:"Flora",description:"description",menuSelected:t}),Object(z.jsx)(B,{position:{top:50,left:15},image:q,category:"flora",title:"Flora",description:"description",menuSelected:t})]})})})},h=A(5),N=function(e){var t=e.title,A=e.img,c=e.menuSelected,a=e.setMenuSelected,o=Object(i.useState)(!0),r=Object(s.a)(o,2),n=r[0],m=r[1],d=t.toLowerCase();Object(i.useEffect)((function(){console.log(c),console.log(d)}),[c]);var g={};return g[d]=!c[d],Object(z.jsxs)("div",{style:{position:"relative"},onClick:function(){m(!n),a(Object(h.a)(Object(h.a)({},c),g))},children:[Object(z.jsx)("div",{style:{backgroundColor:"#bf5830",backgroundImage:"url(".concat(A,") "),backgroundSize:"cover",padding:"2rem",borderRadius:"5px",width:"10rem",height:"4rem",margin:"0rem 0.2rem",boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)",color:"white",filter:n?"":"blur(2px) grayscale(100%)",top:0,left:0}}),Object(z.jsx)("h3",{style:{position:"absolute",bottom:"0.5rem",color:"white",left:0,right:0,margin:"auto"},children:t})]})},S=A.p+"static/media/rana.80676906.jpg",K=A.p+"static/media/others.2c03b538.webp",y=A.p+"static/media/flora2.85f531a4.png",F=function(e){var t=e.menuSelected,A=e.setMenuSelected;return Object(z.jsxs)("div",{style:{position:"absolute",flexDirection:"row",justifyContent:"center",display:"flex",bottom:0,left:0,right:0},children:[Object(z.jsx)(N,{title:"Serpientes",img:"data:image/jpeg;base64,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",setMenuSelected:A,menuSelected:t}),Object(z.jsx)(N,{title:"Ranas",img:S,setMenuSelected:A,menuSelected:t}),Object(z.jsx)(N,{title:"Lagartijas",img:"data:image/jpeg;base64,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",setMenuSelected:A,menuSelected:t}),Object(z.jsx)(N,{title:"Buildings",img:K,setMenuSelected:A,menuSelected:t}),Object(z.jsx)(N,{title:"Flora",img:y,setMenuSelected:A,menuSelected:t})]})},M=A.p+"static/media/logo.c0ff3e15.png",T=function(){var e=Object(i.useState)({serpientes:!0,ranas:!0,lagartijas:!0,buildings:!0,flora:!0}),t=Object(s.a)(e,2),A=t[0],c=t[1];return Object(z.jsxs)("div",{children:[Object(z.jsx)("img",{src:M,style:{width:"10rem",position:"absolute",zIndex:"100",left:40,top:-20}}),Object(z.jsx)("div",{style:{height:"2rem"}}),Object(z.jsx)(C,{menuSelected:A}),Object(z.jsx)(F,{setMenuSelected:c,menuSelected:A})]})};var D=function(){return Object(z.jsx)("div",{className:"App",style:{backgroundImage:"url(".concat(r,")"),height:"100vh",width:"100vw"},children:Object(z.jsx)(T,{})})},k=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,15)).then((function(t){var A=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;A(e),i(e),c(e),a(e),o(e)}))};o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(D,{})}),document.getElementById("root")),k()}},[[14,1,2]]]);
//# sourceMappingURL=main.a35fa2e8.chunk.js.map