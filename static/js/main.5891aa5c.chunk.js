(this["webpackJsonpsearch-movies-react-hooks"]=this["webpackJsonpsearch-movies-react-hooks"]||[]).push([[0],{19:function(e,t,o){"use strict";let i;o.d(t,"a",(function(){return i})),function(e){e.SEARCH_REQUEST="@@movies/SEARCH_REQUEST",e.SEARCH_SUCCESS="@@movies/SEARCH_SUCCESS",e.SEARCH_ERROR="@@movies/SEARCH_ERROR"}(i||(i={}))},20:function(e,t){},21:function(e,t){},22:function(e,t){},44:function(e,t,o){"use strict";o.r(t);var i=o(2),n=o(12),r=o.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=o(7),a=o(30),s=o(24),d=o(6),l=o(15),u=o(8);const b=e=>Object(l.action)(u.MoviesActionTypes.SEARCH_ERROR,e),j=Object({NODE_ENV:"production",PUBLIC_URL:"/search-movies-react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT||"https://www.omdbapi.com/",m=Object({NODE_ENV:"production",PUBLIC_URL:"/search-movies-react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY;function h(...e){return async function(e,t,o){return(await fetch(t,{method:e,headers:{Accept:"application/json"},body:JSON.stringify(o)})).json()}("get",function(e,...t){return`${e}?${t.join("&")}`}(j,`apiKey=${m}`,...e))}function*f(e){try{const o=yield Object(d.b)(h,`s=${e.payload}`);o.Error?yield Object(d.d)(b(o.Error)):0===o.Search.length?yield Object(d.d)(b("There are no movies found. Try another search request.")):yield Object(d.d)((t=o.Search,Object(l.action)(u.MoviesActionTypes.SEARCH_SUCCESS,t)))}catch(o){o instanceof Error&&o.stack?yield Object(d.d)(b(o.stack)):yield Object(d.d)(b("An unknown error occurred"))}var t}function*p(){yield Object(d.e)(u.MoviesActionTypes.SEARCH_REQUEST,f)}var v=function*(){yield Object(d.a)([Object(d.c)(p)])};const O={data:void 0,error:void 0,loading:!1},x=(e=O,t)=>{switch(t.type){case u.MoviesActionTypes.SEARCH_REQUEST:return{...e,loading:!0};case u.MoviesActionTypes.SEARCH_SUCCESS:return{...e,loading:!1,data:t.payload,error:void 0};case u.MoviesActionTypes.SEARCH_ERROR:return{...e,loading:!1,error:t.payload};default:return e}};function*g(){yield Object(d.a)([Object(d.c)(v)])}var S=o(9),y=o(4);const E=y.default.header`
  padding: 0.5rem 1.5rem;
  background-color: deepskyblue;
  color: whitesmoke;
`,R=y.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_=y.default.div`
  padding-right: 1rem;
`,w=y.default.h2`
  margin: 0;
  font-weight: 500;
`;function A({appName:e}){return Object(i.jsx)(E,{children:Object(i.jsx)(R,{children:Object(i.jsx)(_,{children:Object(i.jsx)(w,{children:e})})})})}const T=y.default.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;var C=o(1);const k=y.default.form`
  display: flex;
  justify-content: center;
`,N=y.default.button`
  border: 2px solid deepskyblue;
  font-size: 20px;
  padding: 0.3em 0.5em;
  margin-left: 0.3em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: deepskyblue;
    color: whitesmoke;
  }
`,H=y.default.input`
  border: 2px solid deepskyblue;
  width: 400px;
  max-width: 50%;
  font-size: 20px;
  padding: 0 0.3em;

  &:focus {
    outline: none;
  }
`;function P({className:e,searchRequest:t,placeholder:o}){const[n,r]=Object(C.useState)(""),c=()=>n.length>0;return Object(i.jsxs)(k,{className:e,onSubmit:e=>{e.preventDefault(),c()&&t(n)},children:[Object(i.jsx)(H,{type:"text",placeholder:o,value:n,onChange:e=>r(e.target.value)}),Object(i.jsx)(N,{disabled:!c(),children:"Search"})]})}P.defaultProps={className:void 0,placeholder:void 0};var M=P;const U={searchRequest:e=>(e=>Object(l.action)(u.MoviesActionTypes.SEARCH_REQUEST,e))(e)};var D=Object(S.b)(void 0,U)(M);var I=y.default.div`
  font-size: 50px;
  padding: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;const W=y.default.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  margin: 0;
  padding: 0.1em;
  list-style: none;
`;function z({className:e,itemComponent:t,data:o}){return Object(i.jsx)(W,{className:e,children:o.map((e=>Object(i.jsx)("li",{children:C.createElement(t,{item:e})},e.id)))})}z.defaultProps={className:void 0};var K=z;const $=y.default.div`
  height: 100%;
`,L=y.default.div`
  position: relative;
  margin: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: darkslategrey url(${({imageSrc:e})=>e}) no-repeat center
    top;
  background-size: cover;
`,F=y.default.div`
  position: absolute;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.7em 0;
  bottom: 0;
  color: whitesmoke;
`;function Q({movie:e}){return Object(i.jsx)($,{children:Object(i.jsx)(L,{imageSrc:e.Poster,children:Object(i.jsxs)(F,{children:[e.Title,", ",e.Year]})})})}function B({item:e}){return Object(i.jsx)(Q,{movie:e})}function q({className:e,movies:t}){return Object(i.jsx)(K,{className:e,itemComponent:B,data:t})}q.defaultProps={className:void 0};var J=Object(y.default)(q)`
  grid-auto-rows: 250px;
`;function G({className:e,movies:t,errorMessage:o}){return o?Object(i.jsx)(I,{className:e,children:o}):t?Object(i.jsx)(J,{className:e,movies:t}):null}G.defaultProps={className:void 0,errorMessage:void 0};var V=Object(S.b)((e=>{var t;return{movies:null===(t=e.movies.data)||void 0===t?void 0:t.map((e=>({id:e.imdbID,...e}))),errorMessage:e.movies.error}}))(G);const Y=y.keyframes`
  0% {
    top: 8px;
    height: 64px;
  }

  50%, 100% {
    top: 24px;
    height: 32px;
  }
`,X=y.default.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: deepskyblue;
    animation: ${Y} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  & > div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  & > div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  & > div:nth-child(3) {
    left: 56px;
    animation-delay: 0s;
  }
`;function Z(){return Object(i.jsxs)(X,{children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})}const ee=Object(y.default)((function({className:e,children:t}){return Object(i.jsx)(T,{className:e,children:t})}))`
  flex: 1;
`,te=Object(y.default)(D)`
  margin: 1em;
  padding: 0.5em 0;
  flex: 0 0 auto;
`,oe=Object(y.default)(V)`
  margin: 0 2% 2%;
  flex: 1;
`,ie=y.default.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;var ne=Object(S.b)((e=>({moviesAreLoading:e.movies.loading})))((function({moviesAreLoading:e}){const t=Object(i.jsx)(ie,{children:Object(i.jsx)(Z,{})});return Object(i.jsxs)(ee,{children:[Object(i.jsx)(te,{placeholder:"Enter Movies or Series name"}),e?t:Object(i.jsx)(oe,{})]})}));const re=y.default.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;function ce(){return Object(i.jsxs)(re,{children:[Object(i.jsx)(A,{appName:"Search Movies (with react hooks)"}),Object(i.jsx)(ne,{})]})}var ae=o(29);const se=y.createGlobalStyle`
  ${ae.normalize}
 
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;var de=y.createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    width: 100%;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    background-color: black;
    color: white;
  }
`;function le(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(se,{}),Object(i.jsx)(de,{})]})}var ue=function({store:e}){return Object(i.jsxs)(S.a,{store:e,children:[Object(i.jsx)(le,{}),Object(i.jsx)(ce,{})]})};const be=function(e){const t=Object(s.composeWithDevTools)({}),o=Object(a.a)(),i=Object(c.createStore)(Object(c.combineReducers)({movies:x}),e,t(Object(c.applyMiddleware)(o)));return o.run(g),i}(window.INITIAL_REDUX_STATE);r.a.render(Object(i.jsx)(ue,{store:be}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},8:function(e,t,o){"use strict";var i=o(19);o.d(t,"MoviesActionTypes",(function(){return i.a}));o(20),o(21),o(22)}},[[44,1,2]]]);
//# sourceMappingURL=main.5891aa5c.chunk.js.map