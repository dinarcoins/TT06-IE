bangQuanTri = new (function () {
 this.cấuHình = function (W, I) {
  // K là khung ngoài
  // I là id bảng này
  // W là khung cuộn bảng này, khung bảng chứa cột trái, cột giữa, khung cuộn, cột phải
  // d là cấu hình khai báo cột /456/
  // P body hiển thị phụ
  // D cấu hình khởi tạo khung chứa khung bảng, id, tiêu đề, bảng, .....
  // T là bảng gốc
  // O Cấu hình khởi tạo bảng có khung, dòng, số dòng, số cột,.....
  // c cấu hình hiển thị cột
  // $.fn.bảng → $().bảng
  // Hiển thị bảng vào trong 1 thẻ được chỉ định
  // I → ID bảng
  // ả dòng hiển thị sẵn. Nếu k muốn hiển thị sẵn thì bỏ qua tham số này
  var T = $(this);
  T.hide(); // Ẩn đi bảng gốc
  // Menu icon
  T.closest(".động").before(
   $("<div>").append(
    $("<div>", {
     class: "h40 w1 bgcf",
    }).append(
     $.icon("list: fs2 ma5 cgd bấmĐc").click(function () {
      $("#cộtTrái").sửaLớp("-w5  w20 -dn");
      $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
      $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
      $(".arrow_back").sửaLớp("-dn");
      $(".arrow_back").empty().append($.icon("arrow_back::fs16 fwb cgd bấmĐc"));
     })
    )
   )
  );
  // data sidebar
  var dataMenuTrai = [
   {
    title: "I. Diễn đàn thảo luận",
    icon: "forum",
    f: function () {},
    subList: [
     {
      title: "1.1 Diễn đàn doanh nghiệp",
      icon: "",
      f: function () {},
      subList: [
       {
        title: "1.1.1 Diễn đàn doanh nghiệp",
        icon: "",
        f: function () {},
       },
       {
        title: "1.1.2 Diễn đàn cá nhân",
        icon: "",
        f: function () {},
       },
      ],
     },
     {
      title: "1.2 Diễn đàn cá nhân",
      icon: "",
      f: function () {},
     },
    ],
   },
   {
    title: "II. Bản đồ hóa thị trường",
    icon: "map",
    f: function () {},
    subList: [
     {
      title: "2.1 Bản đồ doanh nghiệp",
      icon: "",
      f: function () {},
     },
     {
      title: "2.2 Bản đồ cá nhân",
      icon: "",
      f: function () {},
     },
    ],
   },
   {
    title: "III. Quản trị thành viên hiệp hội",
    icon: "group",
    f: function () {},
   },
   {
    title: "IV. Quản trị hội viên Mạng lưới",
    icon: "public",
    f: function () {},
    subList: [
     {
      title: "4.1 Quản trị thông tin Thành viên",
      icon: "",
      f: function () {},
     },
     {
      title: "4.2 Quản trị danh mục Sản phẩm",
      icon: "",
      f: function () {},
     },
    ],
   },
   {
    title: "V. Quản trị tài khoản Mạng lưới",
    icon: "account_circle",
    f: function () {},
   },
   {
    title: "VI. Quản trị phí Hội viên",
    icon: "monetization_on",
    f: function () {},
    subList: [
     {
      title: "6.1 Tình trạng nộp phí Hội viên",
      icon: "",
      f: function () {},
     },
     {
      title: "6.2 Lịch sử Thanh toán",
      icon: "",
      f: function () {},
     },
     {
      title: "6.3 Quản trị Phí hội viên",
      icon: "",
      f: function () {},
     },
    ],
   },
   {
    title: "VII. Quản trị Hoạt động & Sự kiện",
    icon: "event",
    f: function () {},
    subList: [
     {
      title: "7.1 Quản trị Hoạt động & Sự kiện",
      icon: "",
      f: function () {},
     },
     {
      title: "7.2 Quản trị Danh sách đăng ký",
      icon: "",
      f: function () {},
     },
     {
      title: "7.3 Hoạt động đăng ký",
      icon: "",
      f: function () {},
     },
    ],
   },
   {
    title: "VIII. Hệ thống BI",
    icon: "dns",
    f: function () {},
   },
   {
    title: "IX. Cài đặt chung",
    icon: "settings",
    f: function () {},
    subList: [
     {
      title: "9.1 Tài khoản",
      icon: "",
      f: function () {},
     },
     {
      title: "9.2 Mật khẩu",
      icon: "",
      f: function () {},
     },
     {
      title: "9.3 Hoạt động",
      icon: "",
      f: function () {},
     },
    ],
   },
  ];
  function getValuesByKey(obj, key) {
   let result = [];
   for (let prop in obj) {
    result.push(obj[prop][key]);
   }
   return result;
  }
  var valuesTìmKiếm = ["tấtCảHĐ"];
  var hoạtĐộngData = config("bảng." + I + ".5697179.á"),
   phânLoạiData = config("bảng." + I + ".5697938.á"),
   loạiDNData = config("bảng." + I + ".5697942.á"),
   arrHoạtĐộng = getValuesByKey(hoạtĐộngData, "chữ"),
   arrLoạiDN = Object.entries(loạiDNData).map(([key, value]) => ({ chữ: value.chữ, giáTrị: key })),
   arrKeyHoạtĐộng = Object.keys(hoạtĐộngData),
   arrKeyPhânLoại = Object.keys(phânLoạiData),
   arrKeyLoạiDN = Object.keys(loạiDNData),
   arrPhânLoại = Object.entries(phânLoạiData).map(([key, value]) => ({ chữ: value.chữ, giáTrị: key }));
  function modifyArray(array2, v) {
   let found = false;
   for (let i = 0; i < valuesTìmKiếm.length; i++) {
    if (array2.includes(valuesTìmKiếm[i])) {
     valuesTìmKiếm[i] = v;
     found = true;
    }
   }
   if (!found) {
    valuesTìmKiếm.push(v);
   }
  }
  // var tieuDeDuoi = ["Tất cả", "Chờ gia nhập", "Đang hoạt động", "Từ chối", "Dừng hoạt động"];
  var open = false;
  var arrow = false;
  var H;
  W.find("#chứaBảng").append((H = $("<div>", { class: "hiểnThị pb40" })));
  W.find("#cộtTrái").sửaLớp("-dne -bgcfx -br1 -bsda pb35 pr br3 bss bc9 w20");
  W.find("#cộtTrái").css({
   "background-image": "linear-gradient(to bottom,rgba(0,102,52,1),rgba(0,102,60,0.7))",
  });
  const menuTrai = function (menuCha, O) {
   var result = $("<div>", { class: "" }).append(
    $("<div>", { class: `menuIcons dib  dn ptb15  pr` })
     .append(
      !O.cấp && $.icon(`${!empty(menuCha.icon) && menuCha.icon}::fs25 cf pa3 ml10 tfs11h cpi`),
      $("<div>", { class: "menuContentHover dn pa z13 l1 t0 pl15" }).append(
       $("<div>", {
        class: `ptb15 plr5  fwb   brr20 cf`,
        style: "width:260px",
       }).append(
        $("<div>", { class: "" }).append(
         $("<div>", { class: "bgcf7h cgdh bra20 bấmĐc ptb7 plr10", text: menuCha.title }),
         !empty(menuCha.subList) &&
          $("<div>", { class: ` bgct subMenuHover pb40` }).append(
           $.map(menuCha.subList, function (v, ind) {
            return menuTrai(v, {
             cấp: O.cấp ? O.cấp + 1 : 1,
            });
           })
          )
        )
       )
      )
     )
     .hover(
      function () {
       if (!O.cấp) {
        $("#cộtTrái").sửaLớp("-w5  w25");
        $(this).find(".menuContentHover").sửaLớp("-dn");
       }
      },
      function () {
       // $("#cộtTrái").find(".menuContent").sửaLớp("dn");
       // $(".menuContentHover").sửaLớp("dn");
       if (!O.cấp) {
        $("#cộtTrái").sửaLớp("-w25  w5");
        $(this).find(".menuContentHover").sửaLớp("dn");
       }
      }
     ),
    $("<div>", {
     class: `menuContent mt30 mb10 ptb7 plr10  fwb w90  df jcsb aic  ${empty(menuCha.subList) && O.cấp ? "bgcf5h cgdh cf bra20 bấmĐc" : "bgcf bgcr4h cyh brr20 "}`,
    }).append(
     $("<div>", { class: "fs09", text: menuCha.title }),
     !empty(menuCha.subList) &&
      $("<div>", { class: "cpi tfs14h" })
       .append($.icon("expand_more:: fs16"))
       .click(function () {
        result.find(".subMenu:first").slideToggle();
        $(this)
         .empty()
         .append(open ? $.icon("expand_more:: fs16") : $.icon("expand_less:: fs16"));
        open = !open;
       })
    ),
    !empty(menuCha.subList) &&
     $("<div>", { class: `mtb10 bgct pl5 w90 subMenu dn` }).append(
      $.map(menuCha.subList, function (v, ind) {
       return menuTrai(v, {
        cấp: O.cấp ? O.cấp + 1 : 1,
       });
      })
     )
   );
   return result;
  };
  W.find("#cộtTrái").append(
   $("<div>", { class: "ptb15" }).append(dataMenuTrai.map(menuTrai)),
   $("<div>", { class: "pa t0 l0 pa5" })
    .append($.icon("close:: fs16 cy bấmĐc"))
    .click(function () {
     $("#cộtTrái").sửaLớp("dn");
     $(".arrow_back").sửaLớp("dn");
    })
  );
  // W.find("#cộtTrái").append(
  //   $("<div>", { class: "ptb15" }).append(
  //     dataMenuTrai.map(function (item, index) {
  //       return $("<div>", { class: "" }).append(
  //         $("<div>", { class: "mt30 mb10 ptb5 plr7 bgcf fwb w90 brr20 df jcsb aic bgcr4h cyh" }).append(
  //           $("<div>", { class: "", text: item.title }),
  //           !empty(item.subList) &&
  //             $("<div>", { class: "cpi tfs14h" })
  //               .append($.icon("expand_more:: fs16"))
  //               .click(function () {
  //                 cl("aaaaaaaaaaaaa", index);
  //                 $(".subMenu" + index).slideToggle();
  //                 $(this)
  //                   .empty()
  //                   .append(open ? $.icon("expand_more:: fs16") : $.icon("expand_less:: fs16"));
  //                 open = !open;
  //               })
  //         ),
  //         !empty(item.subList) &&
  //           $("<div>", { class: `mtb10 bgct pl5 w90 ${"subMenu" + index} dn` }).append(
  //             item.subList.map(function (subItem, subIndex) {
  //               return $("<div>", {
  //                 class: "mb3 ptb5 plr7 cf bra20 bgcf7h cgdh cpi",
  //                 text: index + 1 + "." + (subIndex + 1) + " " + subItem,
  //               });
  //             })
  //           )
  //       );
  //     })
  //   )
  // );
  H.bảng(
   I,
   {
    tiêuĐề: "Quản trị thông tin tổ chức/doanh nghiệp", // Tiêu đề bảng
    cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
    mới: true, // Bảng kiểu mới
    chân: false, // Chân bảng
    khung: false, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
    href: false, // Không hiển thị URL
    // cộtGộp: ộ, // Gộp đè cấu hình cột
    // cộts:$.gộp(["chọn","chứcNăng","stt"],$.map(ộ,r2).slice(1)), // Danh sách ID cột cần hiển thị
    // nútBỏ: [], // Danh sách nút mặc định trên bảng cần loại bỏ
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
      nútTrái2: "lh13",
      tiêuĐềBảng: "-cl1 cgd fs14",
     },
     ẩnCột: true,
    },
   },
   function () {
    cl("LOG", "Cấu hình xong bảng", $(this));
    H.find(".tiêuĐềBảng").before(
     $("<div>", { class: "w1" }).append(
      $("<div>", { class: "w1 df jcfe" }).append($("<div>", { class: "plr35 fs13 cf bgco mr25 bra20", text: "02" })),
      $("<div>", { class: "w1 df mb15" }).append(
       $("<div>", { class: "cpi tfs12h arrow_back ml10" })
        .empty()
        .append($.icon("arrow_back::fs16 fwb cgd bấmĐc"))
        .click(function () {
         // $(this).sửaLớp("dn");
         if (!arrow) {
          $(this).empty().append($.icon("arrow_forward::fs16 fwb cgd bấmĐc"));
          $("#cộtTrái").sửaLớp("-w20 w5");
          $("#cộtTrái").find(".menuContent").sửaLớp("dn");
          $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
         } else {
          $(this).empty().append($.icon("arrow_back::fs16 fwb cgd bấmĐc"));
          $("#cộtTrái").sửaLớp("-w5  w20 -dn");
          $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
          $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
         }
         arrow = !arrow;
        }),
       $("<div>", { class: "f1 df jcsc" }).append(
        ["Tổ chức/Doanh nghiệp", "Chuyên gia/Cá nhân"].map(function (item, index) {
         return $("<div>", {
          class: `df aic bra5 plr10 ptb5 mr15 cpi ${index ? "" : "bgcbl"}`,
          style: "color: rgb(0,102,60)",
         })
          .append($.icon("apartment:: fs2"), $("<div>", { class: "fs14 fwb ml5", text: item }))
          .click(function () {
           $(".bgcbl").addClass("o03");
           $(".bgcbl").removeClass("bgcbl");
           $(this).addClass("bgcbl");
           $(this).removeClass("o03");
           if (index) {
            H.find(".tiêuĐềBảng").text("Quản trị thông tin Chuyên gia/Cá nhân");
           } else {
            H.find(".tiêuĐềBảng").text("Quản trị thông tin tổ chức/doanh nghiệp");
           }
          });
        })
       )
      )
     )
    );
    H.find(".tiêuĐềBảng").after(
     $("<div>", { class: "w1 mt25 pl10" }).append(
      $("<div>", { class: "w1 df hoatDong " }).iRadio({
       chọn: ["Tất cả", ...arrHoạtĐộng], // Phần chữ hiển thị của lựa chọn
       giáTrị: ["tấtCảHĐ", ...arrKeyHoạtĐộng], // Giá trị lựa chọn
       cỡ: "dn", // Class thẻ icon
       loại: "grid",
       bo: "bra10 bw2 bss bcd c6 ptb5 plr15 mr15 fwbh bcg3h", // Thêm class cho các thẻ lựa chọn
       boChọn: "bgcg3 fwb cf", // Thêm class cho thẻ được lựa chọn
       màu: "cf",
       sẵn: true,
       ngay: true,
       trống: true, // Đc phép không chọn
       đổi: function (v) {
        // Call back thay đổi lựa chọn
        // v là giá trị của lựa chọn
        // cl("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", valuesTìmKiếm[0], v);
        // if (valuesTìmKiếm[0] != v && v != false) {
        //   valuesTìmKiếm[0] = v;
        // }
        modifyArray(["tấtCảHĐ", ...arrKeyHoạtĐộng], v);
       },
      })
     )
    );
    H.find(".nútTrái2").append(
     $("<div>", {
      class: "bấmĐc ml15 dib plr10  ptb5 tac bss b1s bcc c6  cgdh fwbh",
      text: config("bảng." + I + ".5697938.ê"),
     }).sổ(arrPhânLoại, {
      // nhãn: "Vui lòng chọn",
      sẵn: "", // Giá trị sẵn có
      ngay: true, // Đổi ngay giá trị
      gõ: true, // Tạo ô nhập tìm kiếm
      trống: true,
      đổi: function (á) {
       cl("LOG____ giá trị", á);
       modifyArray(arrKeyPhânLoại, á);
      },
     }),
     $("<div>", {
      class: "ml25 bấmĐc dib plr10  ptb5 tac bss b1s bcc c6  cgdh fwbh",
      text: config("bảng." + I + ".5697942.ê"),
     }).sổ(arrLoạiDN, {
      // nhãn: "Vui lòng chọn",
      sẵn: "", // Giá trị sẵn có
      ngay: true, // Đổi ngay giá trị
      gõ: true, // Tạo ô nhập tìm kiếm
      trống: true,
      đổi: function (á) {
       cl("LOG____ giá trị", á);
       modifyArray(arrKeyLoạiDN, á);
      },
     }),
     $("<div>", { class: "mlr25 bl2 bss bcc dib cpi cgdh c6" }).append(
      $("<input>", {
       class: "dib on bni bgct fsi wmn2 inputSearch",
       placeholder: "Tìm kiếm theo tên, Mã số thuế,...",
      })
     ),
     $("<div>", { class: "bgcg3h c6 fwb dib bấmĐc ptb5 plr10 bra10 cfh" })
      .append($.icon("search:: fs16"), $("<span>", { class: "", text: "Tìm kiếm" }))
      .click(function () {
       var valueInput = $(".inputSearch").iVal();
       var isInput = [...arrKeyHoạtĐộng, ...arrKeyPhânLoại, ...arrKeyLoạiDN, "tấtCảHĐ"].includes(valuesTìmKiếm[valuesTìmKiếm.length - 1]);
       if (isInput && !empty(valueInput)) {
        valuesTìmKiếm.push(valueInput);
       } else if (!isInput && !empty(valueInput)) {
        valuesTìmKiếm[valuesTìmKiếm.length - 1] = valueInput;
       }
       cl("TÌM KIẾM:___________", valuesTìmKiếm);
      })
    );
   }
  );
 };
 this.khởiTạo = function () {};
})();
// bangQuanTri.cấuHình()
//--------- menu sidebar
// bổ sung thêm icon cho các menu con cấp dưới
// hoàn thiện menuTrái với hàm đệ quy
// --------- lưu các giá trị của bộ lọc và tìm kiếm bằng các object để tối ưu việc lưu và truy xuất sử dụng
// --------- tìm hiểu $.map() thay cho object.entries()
// --------- Chú ý đến dữ liệu, kiểu dữ liệu, để làm giao diện tối ưu hơn cho việc sử dụng dữ liệu
