import{c as r,a as e,b as i}from"./index.esm-npaVDFqd.js";import{s as n,p as o,k as c}from"./index-yv5lShvE.js";const d=o(!1),p=r({name:e().required("name is required").min(3),email:e().required("email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),password:e().required("password is required").matches(/^[A-Za-z][A-Za-z0-9]{5,8}$/,`must be
    * Start with a letter (either uppercase or lowercase).
    * Be between 6 and 9 characters in total.
    * Can only contain letters (A-Z or a-z) and numbers (0-9)
    `),rePassword:e().required("re-Password is required").oneOf([i("password")],"re-Password pattern is inavalid"),phone:e().required("phone is required").matches(/^01[0-2,5]{1}[0-9]{8}$/,"invalid Phone")}),l=r({email:e().required("email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"This email is not registered. Please check and try again."),password:e().required("password is required").matches(/^[A-Za-z][A-Za-z0-9]{5,8}$/)}),q=n(()=>d.value?r({password:e().required("password is required").matches(/^[A-Za-z][A-Za-z0-9]{5,8}$/,`must be
    * Be between 6 and 9 characters in total.
    `)}):r({phone:e().required("phone is required").test("true",async function(s){const a=await c(s),t=localStorage.getItem("phone");return a===t?!0:this.createError({message:"This phone is not registered. Please check and try again."})})}));export{d as i,l,p as r,q as u};
