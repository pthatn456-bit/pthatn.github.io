# HỒ SƠ 2049 — Elon Musk

Website dự án Tin học 12: **Những con người làm thay đổi thế giới**.

## Chạy website

- Mở `index.html` bằng Chrome/Edge để xem bản tĩnh.
- Website dùng HTML + CSS + JavaScript thuần, không cần npm, không cần máy chủ.
- Hình ảnh và video được nhúng từ internet nên cần kết nối mạng.

## Đăng GitHub Pages

1. Đăng nhập GitHub và tạo một repository mới (ví dụ: `elon-musk-website`).
2. Giải nén ZIP. Mở thư mục `elon-musk-website`, chọn **toàn bộ tệp và thư mục bên trong** (không tải riêng thư mục bao ngoài), rồi tải chúng lên repository. Bảo đảm `index.html` nằm ngay ở thư mục gốc (root).
3. Vào **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main` và folder `/(root)`, sau đó bấm **Save**.
6. Đợi GitHub hoàn tất triển khai. Địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/`.

Nếu dùng repository kiểu `TEN-TAI-KHOAN.github.io`, địa chỉ thường là `https://TEN-TAI-KHOAN.github.io/`.

## Việc nhóm cần sửa trước khi nộp

- Mở `thuvien_nguon.html`, thay `[Điền họ tên]` bằng tên thành viên, điều chỉnh phần phân công đúng thực tế.
- Mở `disan_baihoc.html`, sửa ba đoạn cảm nhận mẫu thành suy nghĩ thật của từng thành viên; nếu nhóm có 2 người, xóa đoạn người thứ ba.
- Kiểm tra lại từng nguồn, ảnh và video, rồi xác nhận nội dung theo tài liệu gốc trước khi nộp.
- Đổi tên thư mục theo mẫu giáo viên yêu cầu nếu cần.

## Cấu trúc

- `index.html` — Trang chủ
- `cuocdoi.html` — Cuộc đời và bối cảnh
- `hanhtrinh.html` — Dòng thời gian
- `thanhtuu.html` — Thành tựu
- `thuthach.html` — Khó khăn, thất bại và tranh luận
- `tacdong.html` — Tác động, có đoạn phân tích giả định phản biện
- `disan_baihoc.html` — Di sản và cảm nhận thành viên
- `thuvien_nguon.html` — 08 hình, video nhúng, nguồn và bảng phân công
- `style.css` — Giao diện dùng chung và responsive
- `script.js` — Menu điện thoại và tiện ích nhỏ

## Lưu ý về hình ảnh / video

Hình ảnh sử dụng URL từ Wikimedia Commons. Trang thư viện ghi nguồn tệp để kiểm tra tác giả và điều kiện giấy phép. Các URL ảnh ngoài có thể thay đổi theo thời gian. Video nhúng sử dụng video chính thức của NASA: “Making History: NASA and SpaceX Launch Astronauts to Space!” (30/05/2020).

## Nguồn nội dung chính

- Encyclopaedia Britannica: https://www.britannica.com/money/Elon-Musk
- Tesla: https://www.tesla.com/elon-musk
- NASA Commercial Crew: https://www.nasa.gov/humans-in-space/commercial-space/commercial-crew-program/
- NASA SpaceX milestones PDF: https://www.nasa.gov/wp-content/uploads/2018/07/spacex_nasa_crs-7_presskit.pdf
- U.S. SEC (2018): https://www.sec.gov/newsroom/press-releases/2018-226

## Cách giải thích mã khi giáo viên hỏi

- **HTML** tạo cấu trúc và nội dung của từng trang.
- **CSS** điều khiển màu sắc, bố cục, font chữ, card, timeline, gallery và giao diện điện thoại.
- **JavaScript** đóng/mở menu trên màn hình nhỏ, cập nhật năm ở chân trang và thông báo khi ảnh ngoài không tải được.
- Liên kết nội bộ là đường dẫn tương đối như `cuocdoi.html`, vì vậy vẫn hoạt động khi đăng dưới một repository path trên GitHub Pages.
