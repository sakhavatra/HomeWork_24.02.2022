
// inputun uzerinde  olanda Enter duymesini basanda button click olsun
var inp_enter = document.querySelector("#First .center #inp_text");
inp_enter.addEventListener("keyup", function (e) {

    if (e.keyCode === 13) {
        e.preventDefault();
        document.querySelector("#First .center #btn_add").click();
    }
});

//Click Edende inport etsin
let Add = document.querySelector("#First .center #btn_add")
Add.addEventListener("click", function () {

    var list_item = document.querySelector("#First .center #inp_text").value;
    if (!list_item.trim(' ')) {
        alert("boş olmaz")
    } else {
        var list = document.createElement("li");
        var btn = document.createElement("button")
        const listElement = document.querySelector('ul')
        list.innerText = list_item;
        btn.innerText = "X"
        list.className = "list-group-item list-group-item-secondary my-1"
        btn.className = "btn btn-danger"
        btn.onclick = function () {
            this.parentElement.remove();
        }
        document.getElementById("list_ul").appendChild(list);
        let dell_btn = document.querySelectorAll("#list_ul li")
        dell_btn.forEach(dell_btn => { dell_btn.appendChild(btn) })
        list_item = document.querySelector("#First .center #inp_text").value = ""
        document.querySelector("#First .center #inp_text").focus()
    }

})

//Butun siyahini silir
let Dell_All = document.querySelector("#First #btn_all_delete")
Dell_All.addEventListener("click", function () {
    let dell_all = document.querySelectorAll("#list_ul li")
    dell_all.forEach(function (item) {
        item.remove();
    });
})

//Tab Menu 
let btn_select = document.querySelectorAll("#Second .top .box")
for (let elem of btn_select) {
    elem.addEventListener("click", function () {
        document.querySelector("#Second .top .box.active").classList.remove("active")
        this.classList.add("active")

        let click_id = this.getAttribute("data-index")

        let menues = document.querySelectorAll("#Second .bottom .box")
        for (let menu of menues) {
            if (menu.getAttribute("data-index") == click_id) {
                document.querySelector("#Second .bottom .box.active-menu").classList.remove("active-menu")
                menu.classList.add("active-menu")
            }
        }
    })


}


