import{j as l,R as a,a as d}from"./vendor.d9e2a5a4.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};p();const r=l.exports.jsx,i=l.exports.jsxs,u="My App (staging)";function f(){return console.log({VITE_APP_TITLE:"My App (staging)",BASE_URL:"/",MODE:"stage",DEV:!1,PROD:!0}),i("div",{className:"app",children:[i("div",{className:"app_nav",children:[r("img",{src:"/logo.svg",alt:"logo",className:"app_logo"}),r("h2",{className:"app_title",children:"Salinda's Profile"})]}),r("div",{children:u})]})}a.render(r(d.StrictMode,{children:r(f,{})}),document.getElementById("root"));
