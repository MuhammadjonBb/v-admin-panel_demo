function r(e){const t=new Date(e),a=[];return a.push(`${t.getUTCDate().toString().padStart(2,"0")}.${(t.getUTCMonth()+1).toString().padStart(2,"0")}.${t.getUTCFullYear()}`),a.push(`${t.getUTCHours().toString().padStart(2,"0")}:${t.getUTCMinutes().toString().padStart(2,"0")}`),a}export{r as b};