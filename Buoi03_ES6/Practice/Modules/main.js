let greet = "Xin chào CODEGYM ONLINE!";
const LESSON = "Sử dụng Module trong ES6";

function greeting(name, content) {
    return name + " " + content;
}

const mainObj = {
    name: "Tung"
}

// Xuất các biến và hàm
export { greet, LESSON, greeting };
export default mainObj