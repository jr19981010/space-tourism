
export function indicator(element, className) {
    const lists = document.querySelectorAll(element);
    lists.forEach((list) => {
        list.addEventListener('click', (event) => {
            lists.forEach((list) => {
                list.classList.remove(className);
            });
            event.target.classList.add(className);
        
        });
    });  

}

export function menuCtrl(button, div , data){
document.querySelector(button).addEventListener("click", () => {
    document.querySelector(div).style.display = data;       
});
}