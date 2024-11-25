customTT06 = new (function () {
  var dataMenuTraiTren = [
    { title: "Tất cả", icon: "apps" },
    { title: "Apartment", icon: "apartment" },
    { title: "Building", icon: "location_city" },
    { title: "Shopping", icon: "shopping_bag" },
    { title: "Complex", icon: "memory" },
  ];

  var dataMenuTrai = [
    {
      title: "I. Hệ thống Tòa nhà/ Màn hình",
      icon: "branding_watermark",
      f: function () {},
      subList: [
        {
          title: "1.1 Miền Bắc",
          icon: "",
          f: function () {},
          subList: [
            {
              title: "1.1.1 Miền Bắc",
              icon: "",
              f: function () {},
              subList: [
                {
                  title: "1.1.1.1 Miền Bắc",
                  icon: "",
                  f: function () {},
                },
              ],
            },
            {
              title: "1.1.2 Miền Trung",
              icon: "",
              f: function () {},
            },
            {
              title: "1.1.3 Miền Nam",
              icon: "",
              f: function () {},
            },
          ],
        },
        {
          title: "1.2 Miền Trung",
          icon: "",
          f: function () {},
        },
        {
          title: "1.3 Miền Nam",
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
          title: "2.1 Bản đồ dạng sóng",
          icon: "",
          f: function () {},
        },
        {
          title: "2.2 Bản đồ dạng khác",
          icon: "",
          f: function () {},
        },
      ],
    },
    {
      title: "III. Hệ thống quản trị Báo giá",
      icon: "group",
      f: function () {},
      subList: [
        {
          title: "3.1 Quản trị Gói bán hàng",
          icon: "",
          f: function () {},
        },
        {
          title: "3.2 Quản trị Nhu cầu booking",
          icon: "",
          f: function () {},
        },
        {
          title: "3.3 Quản trị Chương trình khuyến mại",
          icon: "",
          f: function () {},
        },
        {
          title: "3.4 Quản trị Thông tin khách hàng",
          icon: "",
          f: function () {},
        },
      ],
    },
    {
      title: "IV. Hệ thống quản trị Booking",
      icon: "host",
      f: function () {},
      subList: [
        {
          title: "4.1 Quản trị Kế hoạch Booking",
          icon: "",
          f: function () {},
        },
        {
          title: "4.2 QT Hợp đồng và thời lượng Booking",
          icon: "",
          f: function () {},
        },
        {
          title: "4.3 Quản trị Điều kiện Booking",
          icon: "",
          f: function () {},
        },
        {
          title: "4.4 Quản trị Kế hoạch phát",
          icon: "",
          f: function () {},
        },
        {
          title: "4.5 Quản trị Maket",
          icon: "",
          f: function () {},
        },
      ],
    },
    {
      title: "V. Hệ thống ERP (Lite)",
      icon: "dns",
      f: function () {},
      subList: [
        {
          title: "5.1 Quản trị Doanh thu - Chi phí",
          icon: "",
          f: function () {},
        },
        {
          title: "5.2 Quản trị Hợp đồng thuế địa điểm",
          icon: "",
          f: function () {},
        },
        {
          title: "5.3 Quản trị Tài sản",
          icon: "",
          f: function () {},
        },
      ],
    },
    {
      title: "VI. Hệ thống BI",
      icon: "body_system",
      f: function () {},
      subList: [
        {
          title: "6.1 Tổng quan",
          icon: "",
          f: function () {},
        },
        {
          title: "6.2 Báo cáo - Thống kê Màn hình",
          icon: "",
          f: function () {},
        },
        {
          title: "6.3 Báo cáo - Thống kê Tòa nhà",
          icon: "",
          f: function () {},
        },
        {
          title: "6.4 Báo cáo - Thống kê Hợp đồng",
          icon: "",
          f: function () {},
        },
        {
          title: "6.5 Báo cáo - Thống kê Doanh thu",
          icon: "",
          f: function () {},
        },
        {
          title: "6.6 Báo cáo - Thống kê Chi phí",
          icon: "",
          f: function () {},
        },
        {
          title: "6.7 Báo cáo - Thống kê Lợi nhuận",
          icon: "",
          f: function () {},
        },
        {
          title: "6.8 Báo cáo - Thống kê Khách hàng",
          icon: "",
          f: function () {},
        },
      ],
    },
    {
      title: "VII. Cài đặt chung",
      icon: "settings",
      f: function () {},
      subList: [
        {
          title: "7.1 Quản trị tài khoản",
          icon: "",
          f: function () {},
        },
        {
          title: "7.2 Quản trị đăng nhập",
          icon: "",
          f: function () {},
        },
        {
          title: "7.3 Cài đặt hiển thị",
          icon: "",
          f: function () {},
        },
      ],
    },
  ];

  var menuHeaderTop = [
    { title: "QT Hợp đồng", icon: "sticky_note_2" },
    { title: "Kế hoạch chạy", icon: "data_table" },
    { title: "Timeline", icon: "subject" },
  ];

  var listMenuPhu = [
    { title: "Tất cả" },
    { title: "Đã phát" },
    { title: "Đang phát" },
    { title: "Sắp phát" },
    { title: "Huỷ" },
  ];

  var listBookings = [
    { chữ: "145234", giáTrị: "145234" },
    { chữ: "145234", giáTrị: "145234" },
    { chữ: "145234", giáTrị: "145234" },
    { chữ: "145234", giáTrị: "145234" },
    { chữ: "145234", giáTrị: "145234" },
    { chữ: "145234", giáTrị: "145234" },
  ];

  var listClients = [
    { chữ: "KH1", giáTrị: "KH1" },
    { chữ: "KH2", giáTrị: "KH2" },
    { chữ: "KH3", giáTrị: "KH3" },
    { chữ: "KH4", giáTrị: "KH4" },
    { chữ: "KH5", giáTrị: "KH5" },
    { chữ: "KH6", giáTrị: "KH6" },
  ];

  var listMenuTableHeader = [
    {
      title: "Mã QC:",
      chữ: "QCF2109012",
      màu: "#9AB400",
    },
    {
      title: "Tổng số tòa:",
      chữ: "705",
      màu: "#009B05",
    },
    {
      title: "Tổng số màn:",
      chữ: "705",
      màu: "#020087",
    },
    {
      title: "Giá trị hợp đồng:",
      chữ: "313.053.072 VNĐ",
      màu: "#FE27E9",
    },
    {
      title: "Giá trị 1 giây: ",
      chữ: "1.95 VNĐ",
      màu: "#AA0101",
    },
    {
      title: "Kênh sản phẩm:",
      chữ: "LCD",
      màu: "#9AB400",
    },

    {
      title: "Tần suất xuất hiện/ngày:",
      chữ: "72 lần",
      màu: "#009B05",
    },

    {
      title: "Thời gian chạy: ",
      chữ: "15 Tuần",
      màu: "#020087",
    },

    {
      title: "Thời lượng: ",
      chữ: "30s",
      màu: "#FE27E9",
    },

    {
      title: "Khách hàng:",
      chữ: "Ân Nam",
      màu: "#AA0101",
    },
  ];

  this.cấuHình = function (K, I, W, d, P, D, T, O, c) {
    var T = $(this);
    var open = false;
    var openSideBar = false;
    var viewNgang = false;
    var H;
    T.hide();

    K.find(".chứa").before(
      $("<div>").append(
        $("<div>", {
          class: "h40 w1 df aic jcsb bgcf bbw5 bbss bss",
          style: "border-bottom-color: #DADADA ",
        }).append(
          $.icon("list: fs2 c0 ma5 bấmĐc").click(function () {
            cl(11111111, openSideBar);
            if (openSideBar == false) {
              // // Nếu đang mở, ẩn sidebar
              $("#cộtTrái").sửaLớp("-w16 w0 dn");
              $("#cộtTrái").find(".menuContent").sửaLớp("dn");
              $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
              $(".arrow_back").sửaLớp("dn");
              return (openSideBar = !openSideBar);
            } else {
              $("#cộtTrái").sửaLớp("w16 -w0 -dn");
              $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
              $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
              $(".arrow_back").sửaLớp("-dn");
              $(".arrow_back")
                .empty()
                .append($.icon("arrow_forward::fs16 fwb bấmĐc"));
              return (openSideBar = false);
            }
          }),
          $.icon("close: fs2 c0 ma5 bấmĐc").click(function () {
            $("#bảngb7c6d0346dc928517d84a2cdb2201051").trigger("đóng");
          })
        )
      )
    );

    H = W.find("#chứaBảng").find(".chứa").empty();
    W.find("#chứaBảng").sửaLớp("-oa");
    W.find("#chứaBảng").children("div").first().sửaLớp("dn");
    W.find("#cộtTrái").sửaLớp(
      "-dne -bgcfx -br1 -bsda pb35 pr br3 bss bc9 w16 koCuộn pt10 plr5"
    );
    W.find("#cộtTrái").css({
      "background-color":
        "linear-gradient(180deg, rgba(2,11,96,1) 0%, rgba(33,44,143,1) 100%)",
    });

    const menuTrai = function (menuCha, O = {}, index) {
      O.cấp = O.cấp || 0;

      // Kiểm tra nếu menuCha có subList và subList có phần tử
      const hasChildren =
        (menuCha &&
          menuCha.subList &&
          Array.isArray(menuCha.subList) &&
          menuCha.subList.length > 0) ||
        false;

      const result = $("<div>", { class: "menu-item" }).append(
        $("<div>", { class: `menuIcons dib dn ptb15 pr` }).append(
          O.cấp === 0 &&
            $.icon(`${menuCha.icon || ""}::fs25 cf pa3 ml10 tfs11h cpi`),
          $("<div>", {
            class: "menuContentHover dn pa z13 l1 t0 pl15",
          }).append(
            $("<div>", {
              class: `ptb15 plr5 fwb brr20 cf`,
              style: "width:260px",
            }).append(
              $("<div>", { class: "" }).append(
                $("<div>", {
                  class: "bgcf7h bra20 bấmĐc ptb7 plr10",
                  text: menuCha.title,
                }),
                hasChildren &&
                  !empty(menuCha.subList) &&
                  $("<div>", { class: `bgct subMenuHover pb40` }).append(
                    $.map(menuCha.subList, function (v) {
                      return menuTrai(v, { cấp: O.cấp + 1 });
                    })
                  )
              )
            )
          )
        ),
        $("<div>", {
          class: `menuContent mb10 ptb5 plr10 fwb df jcsb aic bấmĐc brr20 ${
            hasChildren ? "bgcf bgcyh" : "cf c0h bra25h bgcyh"
          }`,
        }).append(
          $("<div>", { class: "fs09", text: menuCha.title }),
          hasChildren &&
            $("<div>", { class: "cpi tfs14h" })
              .append($.icon("chevron_right:: fs16"))
              .click(function () {
                const subMenu = result.children(".subMenu");
                subMenu.slideToggle();

                // Điều chỉnh icon tùy thuộc vào trạng thái mở/đóng
                const icon = $(this);
                icon
                  .empty()
                  .append(
                    subMenu.is(":visible")
                      ? $.icon("expand_more:: fs16")
                      : $.icon("chevron_right:: fs16")
                  );
              })
        ),
        hasChildren &&
          $("<div>", { class: `mtb10 bgct pl5 subMenu dn` }).append(
            $.map(menuCha.subList, function (v) {
              return menuTrai(v, { cấp: O.cấp + 1 });
            })
          )
      );

      return result;
    };

    const menuTraiTren = function (item, index) {
      return $("<div>", {
        class: `ptb5 plr15 menuItemTop fwb fs09 c0 bgcyh bra10 db wfc bấmĐc mt5 ml-10 bóng `,

        style: `zIndex: "${index}"; background-color: ${
          index == 0 ? "#ED9718" : "#fff"
        }`,
      })
        .append(
          $.icon(`${item.icon}:: fs2 bấmĐc menuTraiTrenIcon dn`).tip(
            item.title
          ),
          $("<div>", { class: "menuTraiTrenText db", text: item.title })
        )
        .click(function () {
          $(".menuItemTop").sửaLớp("bgcf");
          $(".menuItemTop").css({ "background-color": "#fff" });
          $(this).css({ "background-color": "#ED9718" });
        });
    };

    const renderMenu = (data) => {
      const container = $("<div>", { class: "menu-container" });
      data.forEach((item, index) => {
        container.append(menuTrai(item, { cấp: 0 }, index));
      });
      return container;
    };

    W.find("#cộtTrái").append(
      $("<div>", { class: "df fww jcfe" }).append(
        dataMenuTraiTren.map(menuTraiTren)
      ),
      $("<div>", { class: "ptb15" }).append(renderMenu(dataMenuTrai))
    );

    H.bảng(
      I,
      {
        // tiêuĐề:
        //   "THEO DÕI KẾ HOẠCH CHẠY VÀ GIÁ TRỊ HỢP ĐỒNG (Giao diện xem 1 HĐ dạng dọc) ", // Tiêu đề bảng
        cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
        mới: true, // Bảng kiểu mới
        chân: false, // Chân bảng
        khung: true, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
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
      },
      function () {
        // cl("LOG", "Cấu hình xong bảng", $(this));koIn. wmxc
        H.find("#b7c6d0346dc928517d84a2cdb2201051").sửaLớp("wmxc");
        H.find("#b7c6d0346dc928517d84a2cdb2201051 > tfoot").sửaLớp("dn");
        H.find("#b7c6d0346dc928517d84a2cdb2201051 > tbody").css({
          "font-size": "14px",
        });
        H.find(".thêmDòng").after(
          $.icon(
            "library_add::ffi usn bra3 tac fsn wh1e oh bscb dfn thêmNhiềuDòng bấmĐc fs16 mlr5 fwb"
          ).tip("Thêm nhiều dòng")
        );
        H.find(".bộLọc").sửaLớp("dn");
        H.find(".trên").find(".sốTrang").parents().sửaLớp("w1");
        H.find(".trên")
          .find(".sốTrang")
          .before(
            $("<div>", { class: "cpi arrow_back ml10 col-xs-4" })
              .empty()
              .append($.icon("arrow_back::fs16 fwb bấmĐc"))
              .click(function () {
                if (!openSideBar) {
                  $(this)
                    .empty()
                    .append($.icon("arrow_forward::fs16 fwb bấmĐc"));
                  $("#cộtTrái").sửaLớp("-w16 w5");
                  $("#cộtTrái").find(".menuContent").sửaLớp("dn");
                  $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
                  $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("-dn db");
                  $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("-db dn");
                  $("#cộtTrái").find(".menuItemTop").sửaLớp("w1");
                  // return openSideBar == false
                } else {
                  $(this).empty().append($.icon("arrow_back::fs16 fwb bấmĐc"));
                  $("#cộtTrái").sửaLớp("-w5 w16 -dn");
                  $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
                  $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
                  $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("dn -db");
                  $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("db -dn");
                  $("#cộtTrái").find(".menuItemTop").sửaLớp("-w1");
                }
                return (openSideBar = !openSideBar);
              }),
            $("<div>", { class: "df col-xs-4" }).append(
              menuHeaderTop.map(function (item, index) {
                return $("<div>", {
                  class: `df aic bra5 plr10 ptb5 bấmĐc itemMenuHeaderTop ${
                    index == 0 ? `cf` : `c0`
                  }`,
                  style: `background-color: ${
                    index == 0 ? `#1E6AFF` : `#DEDEDE`
                  };`,
                })
                  .append(
                    $.icon(`${item.icon}:: fs09`),
                    $("<div>", { class: "fs09 ml5", text: item.title })
                  )
                  .click(function () {
                    $(".itemMenuHeaderTop").sửaLớp("-cf c0");
                    $(".itemMenuHeaderTop").css({
                      "background-color": "#DEDEDE",
                    });
                    $(this).sửaLớp("bgcb cf -c0");
                    $(this).css({ "background-color": "#1E6AFF" });
                  });
              })
            )
          );

        H.find(".checkCột").before(
          $("<div>", { class: "w1 df ml25" }).append(
            listMenuPhu.map(function (item, index) {
              return $("<div>", {
                class: "plr15 ptb5 bra15 fs09 mr5 db c0 bấmĐc listMenuPhuItem",
                text: item.title,
                style: `background-color: ${
                  index == 0 ? `#ED9718` : `#DEDEDE`
                } `,
              }).click(function () {
                $(".listMenuPhuItem").css({ "background-color": "#DEDEDE" });
                $(this).css({ "background-color": "#ED9718" });
              });
            })
          )
        );

        H.find(".trên").append(
          $("<div>", { class: "w1 pl40 df jcsb aic mb10" }).append(
            $("<div>", { class: "df jcsb fww w80" }).append(
              listMenuTableHeader.map(function (item, index) {
                return $("<div>", { class: "df fs09 w20 wsn" }).append(
                  $("<div>", { class: "", text: `${index + 1}. ` }),
                  $("<div>", { class: "", text: item.title }),
                  $("<div>", {
                    class: "fwb",
                    text: item.chữ,
                    style: `color: ${item.màu}`,
                  })
                );
              })
            ),
            $("<div>", { class: "df aic pr10" }).append(
              $("<div>", {
                class: "wfc plr10 ptb5 bóng fs07 c0 bgcgl bấmĐc bra5 mr5",
                text: "view ngang",
              }).click(function () {
                if (viewNgang) {
                  $(this).sửaLớp("bgcgl");
                } else {
                  $(this).sửaLớp("-bgcgl");
                }
                return (viewNgang = !viewNgang);
              }),
              $.icon("sticky_note_2:: fs2 bấmĐc mr5"),
              $.icon("download:: fs2 bấmĐc mr5"),
              $.icon("delete:: fs2 bấmĐc")
            )
          )
        );

        H.find(".nútTrái2").append(
          $("<div>", {
            class: "bấmĐc ml15 dib plr10 ptb5 fs09 tac c6 bcd bss bl1 w130",
            text: "Mã Booking",
          }).sổ(listBookings, {
            // nhãn: "Vui lòng chọn",
            sẵn: "", // Giá trị sẵn có
            ngay: true, // Đổi ngay giá trị
            gõ: true, // Tạo ô nhập tìm kiếm
            trống: false,
            bo: "-bsi -b1sd -bra3",
            đổi: function (á) {
              cl("LOG____ giá trị", á);
            },
          }),
          $("<div>", {
            class: "bấmĐc ml15 dib plr10 ptb5 fs09 tac c6 bcd bss bl1 w130",
            text: "Mã Khách Hàng",
          }).sổ(listClients, {
            // nhãn: "Vui lòng chọn",
            sẵn: "", // Giá trị sẵn có
            ngay: true, // Đổi ngay giá trị
            gõ: true, // Tạo ô nhập tìm kiếm
            trống: false,
            bo: "-bsi -b1sd -bra3",
            đổi: function (á) {
              cl("LOG____ giá trị", á);
            },
          }),
          $("<div>", {
            class: "ml15 df aic plr5 ptb5 fs09 tac c6 bcd bss bl1",
          }).append(
            $("<div>", { class: "fs1 c6 mlr15", text: "Date range    From" }),
            $("<div>", {
              class: "fs1 plr15 ptb5 bgcs bấmĐc bra10 cp",
            }).chọnNgày({
              nổi: true, //lựa chọn này thể hiện có cho làm nổi thời gian hay không
              ẩn: ["giờ", "phút", "giây"], // lựa chọn này để ẩn đi giờ phút giây, có thể cho ẩn đi để hiện giờ
              địnhDạng: "DD/MM/YYYY", //đây là chọn định dạng ngày/tháng/năm
              mặcĐịnh: now().u, //đây là nơi cho lựa chọn ngày mặc định hiển thị
              quáKhứ: true, //đây là nơi cho lựa chọn ngày trong quá khứ
            }),
            $("<div>", { class: "fs1 c6 mlr15", text: "To" }),
            $("<div>", {
              class: "fs1 plr15 ptb5 bgcs bấmĐc bra10 cp",
            }).chọnNgày({
              nổi: true, //lựa chọn này thể hiện có cho làm nổi thời gian hay không
              ẩn: ["giờ", "phút", "giây"], // lựa chọn này để ẩn đi giờ phút giây, có thể cho ẩn đi để hiện giờ
              địnhDạng: "DD/MM/YYYY", //đây là chọn định dạng ngày/tháng/năm
              mặcĐịnh: now().u, //đây là nơi cho lựa chọn ngày mặc định hiển thị
              quáKhứ: true, //đây là nơi cho lựa chọn ngày trong quá khứ
            })
          ),
          $.icon("search:: pa5 fs16 bra50i btn bấmĐc ml25")
        );
      }
    );
  };

  this.khởiTạo = function () {};
})();