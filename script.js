class Course{
    constructor(image,instructor,title){
        this.image=image;
        this.instructor=instructor;
        this.title=title;
    }
}
// bu class ı temiz kod olması adına fonksiyonları bir araya toplamak
// için yazıyoruz..
class UI{
}
UI.prototype.addCourseToList=function(course){
const list=document.querySelector("#table_body");
let html=
    `<tr>
    <td><img src="image/${course.image}"/></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><button class="btn_delete">delete</i></button></td>
    </tr> `;
list.innerHTML+=html;

};
UI.prototype.clear=function(){
    const image=document.getElementById("img").value="";
    const title=document.getElementById("title").value="";
    const instructor=document.getElementById("inst").value="";
};
UI.prototype.deleteCourse=function(target){
if(target.classList.contains ("btn_delete"))
{
    target.parentElement.parentElement.remove();
};

};

// bu kısmı daha sonra yapacağım..
class Storage{
    static addCourse(){}
    static deleteCourses(){}
    static getCourse(){}
    static showCourse(){}
}


document.getElementById("btn").addEventListener("click",(e)=>{
    
    const image=document.getElementById("img").value;
    const title=document.getElementById("title").value;
    const instructor=document.getElementById("inst").value;
   
    const course=new Course(image,instructor,title);
    const ui=new UI();
    
    if(image==""|| title=="" || instructor==""){
        alert("Please fill all form elements !");
        ui.clear();
    }else{
        ui.addCourseToList(course);
        ui.clear();
    }
   
    e.preventDefault();
});
document.getElementById("table_body").addEventListener("click",(e)=>{
    let ui=new UI();
    ui.deleteCourse(e.target);
});