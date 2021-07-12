const createFooter=()=>{

const footer = document.createElement('footer');
footer.textContent=  "© 2021 Laboratoria SCL017 Daniela Mendez & Maria Parra";
footer.className='footer';
footer.style.display="block";
footer.setAttribute('id','footer');



return  footer;

};
export default createFooter;
