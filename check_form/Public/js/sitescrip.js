// Bước 1 : lấy dữ liệu nhập
const username = document.querySelector("#username");
const getflogin = document.querySelector("#flogin");
const getpassword=document.querySelector("#password");
// Bước 2 : Viết lại sự kiện submit
username.addEventListener('submit', function(e){
    //kiem tra getflogin
if(validateflogin(getflogin.value) === false){
    setError(getflogin);
    //chan khong cho gui form đi
    e.preventDefault();
}
else{
    setSuccess(getflogin);
}
    //kiem tra getpassword
if(validatepassword(getpassword.value)===false){
    setError(getpassword);
    //chan khong cho gui form di
    e.preventDefault();
}
else{
    setSuccess(getpassword);
}
})

//Bước 3 : Viết hàm báo lỗi và hàm thành công
function setError(element){
    const parentElement=element.closest('.form-group');
    //Them class .error vao form-group
    parentElement.classList.add('error');
}

function setSuccess(element){
    const parentElement = element.closest('.form-group');
    //Xoa class .error vao form-group
    parentElement.classList.remove('error');
}
// Bước 4 : Viết hàm kiểm tra cho từng yêu cầu cụ thể, sử dụng Regex
//Ham kieu tra du lieu nhap vao username
function validateflogin(input) {
    //Username khong duoc de trong
    const regex=/^[a-zA-Z0-9]{5,}$/;
    return regex.test(input);
}
//Ham kieu tra du lieu nhap vao password
function validatepassword(input) {
    //Username khong duoc de trong
    const regex=/^(?=.*?[0-9])(?=.*?[A-Z]).{5,}$/;
    return regex.test(input);
}

// // Bước 4 : Viết hàm kiểm tra cho từng yêu cầu cụ thể, sử dụng Regex
// function validateflogin(input){
//     //user nam: bắt buộc nhập
//     if(input.length === 0){
//         return false;
//     }
//     return true;
// }