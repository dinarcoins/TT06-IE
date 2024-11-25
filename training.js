trainingTT06 = new (function () {
  this.cấuHình = function (K, I, W, d, P, D, T, O, c) {
    var T = $(this);
    T.hide();
    var H;
    cl('loggggg')
    H = W.find("#chứaBảng");

    H.bảng(I, {
      tiêuĐề: " GIÁ TRỊ HỢP ĐỒNG (Giao diện xem 1 HĐ dạng dọc) ", // Tiêu đề bảng
      cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
      mới: true, // Bảng kiểu mới
      chân: false, // Chân bảng
      khung: false, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
      href: false, // Không hiển thị URL
      // cộtGộp: ộ, // Gộp đè cấu hình cột
      // cộts:$.gộp(["chọn","chứcNăng","stt"],$.map(ộ,r2).slice(1)), // Danh sách ID cột cần hiển thị
      nútBỏ: [], // Danh sách nút mặc định trên bảng cần loại bỏ
      // ẩnCột:true,
      ấ: {
        // Cấu hình chung khung chứa
      },
      bảng: {
        // Cấu hình bảng
        mãNguồn: 1,
        // { // Viết lại mã nguồn. hoặc xác định sử dụng mã nguồn
        //     1:function(){
        //         // Mã nguồn khởi tạo
        //     },
        //     // 2:function(){
        //     //     // Mã nguồn thực thi
        //     // },
        // }
        phânTrang: true, // Hiển thị phân trang
        nútBỏ: ["đóngKhung"],
        // sửaĐc:false,
        tảiDần: true, // Hiển thị tải dần
        trống: true,
        sửaLớp: {
          h400e: "lh13,-lh12",
          nútTrái2: "lh13,df,aic",
          tiêuĐềBảng: "-cl1,fs14,cb0,-ptb10",
          giữa: "mr25",
          dòng: "fs09",
        },
        ẩnCột: true,
      },
    },function() {

    });
  };
})();
