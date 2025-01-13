const students = [
    { id: 1, name: "Nguyen Van Anh", age: 15, grade: "10", scores: { math: 85, english: 78, science: 92 } },
    { id: 2, name: "Tran Thi Binh", age: 16, grade: "11", scores: { math: 90, english: 88, science: 84 } },
    { id: 3, name: "Le Van Cuong", age: 14, grade: "9", scores: { math: 72, english: 65, science: 70 } },
    { id: 4, name: "Hoang Thi Dao", age: 15, grade: "10", scores: { math: 95, english: 92, science: 98 } },
    { id: 5, name: "Phan Van Em", age: 17, grade: "12", scores: { math: 67, english: 55, science: 60 } },
    { id: 6, name: "Vo Thi Hoa", age: 15, grade: "10", scores: { math: 78, english: 85, science: 80 } },
    { id: 7, name: "Dang Van Hieu", age: 16, grade: "11", scores: { math: 88, english: 75, science: 90 } },
    { id: 8, name: "Ngo Thi Lan", age: 14, grade: "9", scores: { math: 65, english: 60, science: 58 } },
    { id: 9, name: "Pham Van Minh", age: 17, grade: "12", scores: { math: 92, english: 85, science: 91 } },
    { id: 10, name: "Tran Thi Ngoc", age: 15, grade: "10", scores: { math: 81, english: 79, science: 85 } }
];
// 1. Viết một hàm tìm học sinh có điểm toán cao nhất trong danh sách.
function maxToan() {
    var max = students[0];

    students.map(e => {
        if (e.scores.math > max.scores.math) {
            max = e
        }

    })
    console.log(max);
}
// maxToan()
// Lọc danh sách học sinh thuộc lớp "10".
function lop10() {
    var a = students.filter(e => e.grade == "10")
    console.log(a)
}
// lop10 ()

// Sắp xếp danh sách học sinh theo thứ tự tăng dần của tuổi.
function soTuoi() {
    students.sort((a, b) => a.age - b.age)
    console.log(students);
}
// soTuoi()

// Tính điểm trung bình của mỗi học sinh dựa trên các môn học và thêm thuộc tính average vào từng đối tượng học sinh.
function diemTb() {

    return students.map(e => {
        var averageScore = (e.scores.math + e.scores.english + e.scores.science) / 3;
        e.average = averageScore.toFixed(2);
        return e;
    });
  

    
}


// Thêm thuộc tính rank cho mỗi học sinh dựa vào điểm trung bình:
function calculateAverageAndRank() {
    diemTb().forEach(student => {
        if (student.average >= 90) {
            student.rank = "Xuất sắc";
        } else if (student.average >= 75) {
            student.rank = "Giỏi";
        } else if (student.average >= 50) {
            student.rank = "Trung bình";
        } else {
            student.rank = "Yếu";
        }
    });
    console.log(students);

}

calculateAverageAndRank()

// Tính số lượng học sinh trong mỗi lớp (grade).

function countGrade() {
    var counts = {};

    students.forEach(student => {
        var grade = student.grade;
        if (counts[grade]) {
            counts[grade]++;
        } else {
            counts[grade] = 1;
        }
    });
    // console.log(counts);

}

// countGrade()

// Kiểm tra xem có học sinh nào có điểm môn bất kỳ < 40 không.
var score40 = students.some(
    e => Object.values(e.scores).some(score => score < 40
    )
)
if (score40) {
    console.log("Có ít nhất một học sinh có điểm môn học nhỏ hơn 40.");
} else {
    console.log("Không có học sinh nào có điểm môn học nhỏ hơn 40.");
}

// Lọc danh sách học sinh có điểm >= 80 ở tất cả các môn học.
var score80 = students.filter(
    e => Object.values(e.scores).every(score => score >= "80")
)
//  console.log(score80);

// Chia học sinh thành các nhóm dựa vào điểm Toán:

var chiaNhom = {
    group3: students.filter(e => e.scores.math < 75),
    group1: students.filter(e => e.scores.math >= 90),
    group2: students.filter(e => e.scores.math >= 75 && e.scores.math < 90)
};
//  console.log("nhom 1",chiaNhom.group1);
//  console.log("nhom 2",chiaNhom.group2);
//  console.log("nhom 3",chiaNhom.group3);

// Cập nhật tên học sinh trong danh sách sao cho mỗi tên đều được viết hoa chữ cái đầu.
function vietHoaTen() {
    students.forEach(e => {
        e.name = e.name.split(' ').map(f => f.charAt(0).toUpperCase() + f.slice(1).toLowerCase());

console.log(students);

    })
}
// vietHoaTen()

// Xóa các học sinh có tuổi nhỏ hơn 16 khỏi danh sách.
function lonHon16 () {
    var a= students.filter( e => e.age >= "16");
    console.log(a);
    
    
}
// lonHon16()

// Lọc danh sách các học sinh có tên chứa chữ "Anh"

function tenAnh () {
    const a = students.filter( e => e.name.includes("Anh"));
    console.log(a);    
}
// tenAnh()

// Tính tổng điểm Toán, Anh và Khoa học của tất cả học sinh trong danh sách.

function tongDiem () {
    var a = students.reduce( (tong, hocSinh) =>{
        tong.math += hocSinh.scores.math;
        tong.science += hocSinh.scores.science;
        tong.english += hocSinh.scores.english;
        return tong
    }, {math:0, english:0, science:0} )
    console.log("tong diem toan", a.math);
    console.log("tong diem tieng anh", a.english);
    console.log("tong diem khoa hoc", a.science);
    
    
    
}
// tongDiem()

// Tạo một mảng mới chỉ chứa id của các học sinh.
function maSo () {
    var a = students.map( e => e.id)
    console.log(a);
}
// maSo()

//Viết hàm để xáo trộn thứ tự ngẫu nhiên các học sinh trong danh sách.

// Tìm học sinh có tuổi nhỏ nhất trong danh sách.
 function lowAge () {
    var a = students.reduce((nhoNhat, hocSinh) => {
        return nhoNhat.age < hocSinh.age ? nhoNhat : hocSinh
    })
    console.log(a);
    
 }
//  lowAge()

// Thêm một đối tượng học sinh mới vào danh sách.
function themHs () {
    var a = { id: 11, name: "Nguyen Van Em", age: 18, grade: "10", scores: { math: 75, english: 88, science: 62 } }
    students.push(a)
    console.log(students);
    
}
// themHs()

// Kiểm tra xem có học sinh nào thuộc lớp "12" không.
function lop12 () {
    var a = students.some( e => e.grade === "12")
        if(a) {
            console.log("co hoc sinh thuoc lop 12");
        } else {
            console.log("khong co hoc sinh thuoc lop 12");
            
        }
}
// lop12()

// Tìm tất cả  học sinh có tên chứa chữ "Ngoc".
function tenNgoc () {
    var a = students.filter(
        e => e.name.includes("Ngoc")
    )
    console.log(a);
    
};

// tenNgoc()

// Cập nhật điểm tiếng Anh của học sinh có id = 4 thành 95.
function diemTa () {
    var idHs4 = students.find( e => e.id == 4);
    if  (idHs4){
        idHs4.scores.english = 95
        console.log(students);
        
    }else {console.log("no");}
  
}
//  diemTa()

// Xóa học sinh có id = 2 khỏi danh sách.

function xoaId2 () {
    var idHs2 = students.filter( e => e.id != 2);
    console.log(idHs2);
    
    
}
//  xoaId2()









