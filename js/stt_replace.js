document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các ô đầu tiên trong mỗi hàng (cột STT)
    const rows = document.querySelectorAll("table tr:not(:first-child)"); // Bỏ qua hàng tiêu đề
    let count = 1;

    rows.forEach(row => {
        // Cập nhật ô STT
        row.cells[0].textContent = count;
        count++;
    });
});
