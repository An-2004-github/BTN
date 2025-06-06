document.addEventListener("DOMContentLoaded", function() {

    // --- SỬA LỖI QUAN TRỌNG TẠI ĐÂY ---
    // Thêm "../" để đi ra thư mục gốc, nơi chứa file header.html và footer.html
    const basePath = "../";

    // ----- TẢI HEADER -----
    // Lưu ý: Bạn cần thêm <header id="header-placeholder"></header> vào file HTML nếu muốn tải header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        // Đường dẫn đúng là: ../header.html
        fetch(`${basePath}header.html`) 
            .then(response => {
                // Kiểm tra xem file có tồn tại không
                if (!response.ok) {
                    throw new Error(`Không tìm thấy file tại đường dẫn: ${response.url}`);
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Lỗi nghiêm trọng khi tải header:', error);
                headerPlaceholder.innerHTML = '<p style="color:red; text-align:center;">Lỗi: Không tải được header. Vui lòng kiểm tra đường dẫn file trong Console (F12).</p>';
            });
    }

    // ----- TẢI FOOTER -----
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        // Đường dẫn đúng là: ../footer.html
        fetch(`${basePath}footer.html`)
            .then(response => {
                // Kiểm tra xem file có tồn tại không
                if (!response.ok) {
                    throw new Error(`Không tìm thấy file tại đường dẫn: ${response.url}`);
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Lỗi nghiêm trọng khi tải footer:', error);
                footerPlaceholder.innerHTML = '<p style="color:red; text-align:center;">Lỗi: Không tải được footer. Vui lòng kiểm tra đường dẫn file trong Console (F12).</p>';
            });
    }
});