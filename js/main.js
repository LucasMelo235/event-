const button = document.querySelector(".menu");
const menu = document.querySelector(".active")

const add = document.querySelectorAll(".add")


button.onclick = ()=>{
	menu.classList.toggle("active");
}


add.forEach((obj,index)=>{	
		obj.onclick = ()=>{
			let content =  (obj.innerHTML === "x") ? "+" : "x";  
			obj.innerHTML = content;	
			obj.classList.toggle("selection");
		}
	}
)

