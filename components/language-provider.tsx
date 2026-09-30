"use client";
import {createContext,useContext,useEffect,useState} from "react";
import {copy,Lang} from "@/lib/i18n";
type Ctx={lang:Lang;setLang:(l:Lang)=>void;t:(typeof copy)[Lang]};
const LanguageContext=createContext<Ctx|null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){const[lang,setLangState]=useState<Lang>("en");useEffect(()=>{const saved=localStorage.getItem("iggoulfane-lang") as Lang|null;if(saved&&copy[saved])setLangState(saved)},[]);const setLang=(l:Lang)=>{setLangState(l);localStorage.setItem("iggoulfane-lang",l)};useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr"},[lang]);return <LanguageContext.Provider value={{lang,setLang,t:copy[lang]}}>{children}</LanguageContext.Provider>}
export function useLanguage(){const c=useContext(LanguageContext);if(!c)throw new Error("useLanguage must be used inside LanguageProvider");return c}