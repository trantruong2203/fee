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
    console.log(a);

}
// lop10()

// Tính điểm trung bình của mỗi học sinh dựa trên các môn học và thêm thuộc tính average vào từng đối tượng học sinh.

function trungBinh() {
    var newStudents = students.map(e => {
        var diemTb = (e.scores.math + e.scores.english + e.scores.science) / 3;
        e.average = parseFloat(diemTb.toFixed(2));
        return e;
    })

    return newStudents;

}
// trungBinh()

// Sắp xếp danh sách học sinh theo thứ tự tăng dần của tuổi.

function soTuoi() {
    students.sort((a, b) => a.age - b.age)
    console.log(students);
}
soTuoi()

// Lọc danh sách học sinh có điểm trung bình lớn hơn 80.
function diem80() {
    var a = trungBinh().filter(e => e.average > 80)
    console.log(a);

}
// diem80()


// Thêm thuộc tính rank cho mỗi học sinh dựa vào điểm trung bình:
function hocLuc() {
    students.forEach(
    if (trungBinh() >= 90) {
        students.rank = "Xuất sắc"
    } else if (trungBinh() >= 75) {
        students.rank = "Giỏi"
    } else if (trungBinh() >= 50) {
        students.rank = "Trung bình"
    } else if (trungBinh() < 50) {
        students.rank = "Yếu"
    }
)

}
 hocLuc()

// Điểm trung bình >= 90: "Xuất sắc"
// Điểm trung bình từ 75 - 89: "Giỏi"
// Điểm trung bình từ 50 - 74: "Trung bình"
// Điểm trung bình < 50: "Yếu"

// Đếm số lượng học sinh theo lớp
// Tính số lượng học sinh trong mỗi lớp (grade).

// Kiểm tra học sinh có điểm kém
// Kiểm tra xem có học sinh nào có điểm môn bất kỳ < 40 không.

// Tìm học sinh giỏi tất cả các môn
// Lọc danh sách học sinh có điểm >= 80 ở tất cả các môn học.

// Tạo bảng phân loại điểm môn Toán
// Chia học sinh thành các nhóm dựa vào điểm Toán:

// Nhóm 1: >= 90
// Nhóm 2: Từ 75 - 89
// Nhóm 3: < 75

// Cập nhật tên học sinh
// Cập nhật tên học sinh trong danh sách sao cho mỗi tên đều được viết hoa chữ cái đầu.

// Xóa học sinh không đủ tuổi
// Xóa các học sinh có tuổi nhỏ hơn 14 khỏi danh sách.

// Tìm học sinh có tên chứa một từ cụ thể
// Lọc danh sách các học sinh có tên chứa chữ "Anh".

// Tổng điểm từng môn học
// Tính tổng điểm Toán, Anh và Khoa học của tất cả học sinh trong danh sách.

// Lấy danh sách ID
// Tạo một mảng mới chỉ chứa id của các học sinh.

// Xáo trộn danh sách học sinh
// Viết hàm để xáo trộn thứ tự ngẫu nhiên các học sinh trong danh sách.

// Tìm học sinh nhỏ tuổi nhất
// Tìm học sinh có tuổi nhỏ nhất trong danh sách.

// Thêm học sinh mới
// Thêm một đối tượng học sinh mới vào danh sách.

// Kiểm tra học sinh theo lớp
// Kiểm tra xem có học sinh nào thuộc lớp "12" không.