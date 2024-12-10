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
          subList: [
            {
              title: "2.1.1 Sóng dạng ngang",
              icon: "",
              f: function () {},
            },
            {
              title: "2.1.2 Sóng dạng dọc",
              icon: "",
              f: function () {},
            },
          ],
        },
        {
          title: "2.2 Bản đồ dạng khác",
          icon: "",
          f: function () {},
          subList: [
            {
              title: "2.2.1 Bản đồ dạng nến",
              icon: "",
              f: function () {},
            },
            {
              title: "2.2.2 Bản đồ dạng tròn",
              icon: "",
              f: function () {},
            },
          ],
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

  this.cấuHình = function (K, I, W) {
    // K: khung bảng chứa
    // I: id của bảng, là mã md5
    // W: bảngChứa
    // i là 1 hoặc nhiều id đối tượng. i có thể là 1234, i → [1234,2346,3567]
    var openSideBar = false;
    var viewNgang = false;

    $("#đầu").sửaLớp("-bg1g1").css({
      background: "rgb(4,8,149)",
      background:
        "linear-gradient(90deg, rgba(4,8,149,1) 0%, rgba(66,95,250,1) 100%)",
    });

    $("#đầu").find(".bgcf").sửaLớp("w20");

    K.find(".chứa").before(
      $("<div>").append(
        $("<div>", {
          class: "h40 w1 df aic jcsb bgcf bbw5 bbss bss",
          style: "border-bottom-color: #DADADA ",
        }).append(
          $.icon("list: fs2 ma5 bấmĐc")
            .css({
              color: "#001793",
            })
            .click(function () {
              if (openSideBar == false) {
                // // Nếu đang mở, ẩn sidebar
                $("#cộtTrái").sửaLớp("-w16 w0 dn");
                $("#cộtTrái").find(".menuContent").sửaLớp("dn");
                $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
                K.find(".arrowBtn").empty();
                $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("-dn db");
                $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("-db dn");
                $("#cộtTrái").find(".menuItemTop").sửaLớp("df w1 -db jcc aic");
                return (openSideBar = !openSideBar);
              } else {
                $("#cộtTrái").sửaLớp("w16 -w0 -dn");
                $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
                $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
                $(".arrow_back").sửaLớp("-dn");
                $(".arrow_back")
                  .empty()
                  .append($.icon("arrow_forward::fs16 fwb bấmĐc"));
                K.find(".arrowBtn")
                  .empty()
                  .append($.icon(`arrow_back::fs16 fwb`));
                $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("dn -db");
                $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("db -dn");
                $("#cộtTrái")
                  .find(".menuItemTop")
                  .sửaLớp("-w1 -df db -jcc -aic");
                return (openSideBar = false);
              }
            }),
          $.icon("close: fs2 c0 ma5 bấmĐc").click(function () {
            $("#bảngb7c6d0346dc928517d84a2cdb2201051").trigger("đóng");
          })
        )
      )
    );
    W.find("#chứaBảng").sửaLớp("-oa");
    W.find("#chứaBảng").children("div").first().sửaLớp("dn");
    W.find("#chứaBảng").find(".nútPhải").sửaLớp("dn");
    W.find("#chứaBảng").find(".bộLọc").sửaLớp("dn");
    W.find(`tfoot`).sửaLớp("dn");
    W.find("#" + I)
      .find("td")
      .sửaLớp("fwn fs12p -fs14p -ptb10")
      .css({
        paddingTop: "15px",
        paddingBottom: "15px",
        color: "#575B64",
      });
    W.find("#chứaBảng").find(".tiêuĐềBảng").sửaLớp("-cl1 -fs11 fs14").css({
      color: "#0F53BA",
    });
    W.find("#cộtTrái").sửaLớp(
      "-dne -bgcfx -br1 -bsda pb35 pr br3 bss bc9 w16 koCuộn pt10 plr5"
    );
    W.find("#cộtTrái").css({
      background: "rgb(2,11,96)",
      background:
        "linear-gradient(180deg, rgba(2,11,96,1) 0%, rgba(33,44,143,1) 100%)",
    });

    W.find("#chứaBảng").find(".dưới").sửaLớp("dn");

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
          class: `menuContent mb5 ptb5 plr10 fwb df jcsb aic brr20 ${
            hasChildren ? "bgcf bgcyh" : "cf c0h bra25h bgcyh"
          } ${O.cấp === 0 && "mb15"}`,
        }).append(
          $("<div>", { class: "fs09", text: menuCha.title }),
          hasChildren &&
            $("<div>", { class: "cpi tfs14h bấmĐc" })
              .append($.icon("chevron_right:: fs16"))
              .click(function () {
                const subMenu = result.children(".subMenu");
                const icon = $(this);
                subMenu.slideToggle(300, function () {
                  icon.empty().append(
                    subMenu.is(":visible")
                      ? $.icon("expand_more:: fs16") // Icon mở rộng
                      : $.icon("chevron_right:: fs16") // Icon đóng lại
                  );
                });
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
        class: `ptb5 plr15 menuItemTop fwb fs09 c0 bgcyh bra10 df jcc aic bấmĐc mt5 ml-10 bóng tac`,
        style: `z-index: ${index}; background-color: ${
          index == 0 ? "#ED9718" : "#fff"
        }`,
      })
        .tip(item.title)
        .append(
          $.icon(`${item.icon}:: fs2 menuTraiTrenIcon dn`),
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
      $("<div>", { class: "df fww jcfe mb15" }).append(
        dataMenuTraiTren.map(menuTraiTren)
      ),
      renderMenu(dataMenuTrai)
    );

    W.find(".thêmDòng").after(
      $.icon(
        "library_add::ffi usn bra3 tac fsn wh1e oh bscb dfn thêmNhiềuDòng bấmĐc fs16 mlr5 fwb"
      ).tip("Thêm nhiều dòng")
    );

    W.find(".trên").append(
      $("<div>", { class: "w1 pl5 df jcsb aic mb10 mt15 fww" }).append(
        $("<div>", { class: "df jcsb fww col-ld-9 col-xs-12" }).append(
          listMenuTableHeader.map(function (item, index) {
            return $("<div>", {
              class: "df fs09 col-xs-3 col-lg-2 wsn mr15 mt5",
            }).append(
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
          $.icon("sticky_note_2:: fs2 bấmĐc mr5").tip("Nhân bản"),
          $.icon("download:: fs2 bấmĐc mr5").tip("Tải xuống"),
          $.icon("delete:: fs2 bấmĐc").tip("Xoá bảng")
        )
      )
    );

    W.find(".checkCột").before(
      $("<div>", { class: "w1 df ml25" }).append(
        listMenuPhu.map(function (item, index) {
          return $("<div>", {
            class: "plr15 ptb5 bra15 fs09 mr5 db bấmĐc listMenuPhuItem",
            text: item.title,
            style: `background-color: ${index == 0 ? `#ED9718` : `#DEDEDE`};
            color: ${index == 0 ? "#FFF" : "#5B5B5B"} 
            `,
          }).click(function () {
            $(".listMenuPhuItem").css({
              backgroundColor: "#DEDEDE",
              color: "#5B5B5B",
            });
            $(this).css({
              backgroundColor: "#ED9718",
              color: "#FFF",
            });
          });
        })
      )
    );

    W.find(".trên")
      .find(".sốTrang")
      .before(
        $("<div>", { class: "col-xs-4" })
          .empty()
          .append(
            $("<div>", { class: "bấmĐc db arrowBtn wfc" })
              .append($.icon(`arrow_back::fs16 fwb`))
              .click(function () {
                if (!openSideBar) {
                  $(this).empty().append($.icon(`arrow_forward::fs16 fwb`));
                  $("#cộtTrái").sửaLớp("-w16 w5");
                  $("#cộtTrái").find(".menuContent").sửaLớp("dn");
                  $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
                  $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("-dn db");
                  $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("-db dn");
                  $("#cộtTrái")
                    .find(".menuItemTop")
                    .sửaLớp("df w1 -db jcc aic");
                  $("#cộtTrái").find(".subMenu").slideUp();
                  // return openSideBar == false
                } else {
                  $(this).empty().append($.icon("arrow_back::fs16 fwb bấmĐc"));
                  $("#cộtTrái").sửaLớp("-w5 w16 -dn");
                  $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
                  $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
                  $("#cộtTrái").find(".menuTraiTrenIcon").sửaLớp("dn -db");
                  $("#cộtTrái").find(".menuTraiTrenText").sửaLớp("db -dn");
                  $("#cộtTrái")
                    .find(".menuItemTop")
                    .sửaLớp("-w1 -df db -jcc -aic");
                }
                return (openSideBar = !openSideBar);
              })
          ),
        $("<div>", { class: "df col-xs-4" }).append(
          menuHeaderTop.map(function (item, index) {
            return $("<div>", {
              class: `df aic jcsb bra5 plr10 ptb5 bấmĐc itemMenuHeaderTop ${
                index == 0 ? `cf` : `c0`
              }`,
              style: `background-color: ${index == 0 ? `#1E6AFF` : `#DEDEDE`};`,
            })
              .append(
                $.icon(`${item.icon}:: fs09 iconMenuHeaderTop`),
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

    W.find(".nútTrái2")
      .sửaLớp("df")
      .append(
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
          $("<input>", {
            class: "fs1 plr15 bấmĐc bra10 cp w100 bni",
            placeholder: "Từ ngày",
            contenteditable: true,
            style: "color: #9E0101; background: #DEDEDE",
          }).chọnNgày({
            nổi: true, //lựa chọn này thể hiện có cho làm nổi thời gian hay không
            cuối: true,
            ẩn: ["giờ", "phút", "giây"], // lựa chọn này để ẩn đi giờ phút giây, có thể cho ẩn đi để hiện giờ
            địnhDạng: "DD/MM/YYYY", //đây là chọn định dạng ngày/tháng/năm
            // mặcĐịnh: now().u, //đây là nơi cho lựa chọn ngày mặc định hiển thị
            quáKhứ: true, //đây là nơi cho lựa chọn ngày trong quá khứ
          }),
          $("<div>", { class: "fs1 c6 mlr15", text: "To" }),
          $("<input>", {
            class: "fs1 plr15 bấmĐc bra10 cp w100 bni",
            placeholder: "Đến ngày",
            contenteditable: true,
            style: "color: #9E0101; background: #DEDEDE",
          }).chọnNgày({
            cuối: true,

            nổi: true, //lựa chọn này thể hiện có cho làm nổi thời gian hay không
            ẩn: ["giờ", "phút", "giây"], // lựa chọn này để ẩn đi giờ phút giây, có thể cho ẩn đi để hiện giờ
            địnhDạng: "DD/MM/YYYY", //đây là chọn định dạng ngày/tháng/năm
            // mặcĐịnh: now().u, //đây là nơi cho lựa chọn ngày mặc định hiển thị
            quáKhứ: true, //đây là nơi cho lựa chọn ngày trong quá khứ
          })
        ),
        $.icon("search:: pa5 fs16 bra50i btn bấmĐc ml25")
      );
    // debugger;

    W.find(".header")
      .children("td:nth-child(2)")
      .append(
        $("<div>", {
          class: "bấmĐc vamc bra5 pr boChọn",
        }).append(
          $.icon(
            "check_box_outline_blank:: ffi usn bra3 tac fsn notranslate wh1e oh bscb dfn fs16 O vam mt-1"
          ),
          $("<input>", {
            type: "checkbox",
            class: "chọnDòng chọnTất chọnHếtDòng iCheck o0 ol bấmĐc",
          }).tip("Chọn/Bỏ chọn tất cả dòng")
        )
      );

    // H.bảng(
    //   I,
    //   {
    //     // tiêuĐề:
    //     //   "THEO DÕI KẾ HOẠCH CHẠY VÀ GIÁ TRỊ HỢP ĐỒNG (Giao diện xem 1 HĐ dạng dọc) ", // Tiêu đề bảng
    //     cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
    //     mới: true, // Bảng kiểu mới
    //     chân: false, // Chân bảng
    //     khung: true, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
    //     href: false, // Không hiển thị URL
    //     // cộtGộp: ộ, // Gộp đè cấu hình cột
    //     // cộts:$.gộp(["chọn","chứcNăng","stt"],$.map(ộ,r2).slice(1)), // Danh sách ID cột cần hiển thị
    //     nútBỏ: ["đóngKhung"], // Danh sách nút mặc định trên bảng cần loại bỏ
    //     // ẩnCột:true,
    //     ấ: {
    //       // Cấu hình chung khung chứa
    //     },
    //     bảng: {
    //       // Cấu hình bảng
    //       mãNguồn: 1,
    //       // { // Viết lại mã nguồn. hoặc xác định sử dụng mã nguồn
    //       //     1:function(){
    //       //         // Mã nguồn khởi tạo
    //       //     },
    //       //     // 2:function(){
    //       //     //     // Mã nguồn thực thi
    //       //     // },
    //       // }
    //       phânTrang: false, // Hiển thị phân trang
    //       nútBỏ: ["đóngKhung"],
    //       // sửaĐc:false,
    //       tảiDần: true, // Hiển thị tải dần
    //       trống: true,
    //       chân: false,
    //       sửaLớp: {
    //         h400e: "lh13,-lh12",
    //         nútTrái2: "lh13,df,aic",
    //         tiêuĐềBảng: "-cl1,cb0",
    //         giữa: "mr25",
    //         dòng: "fs09",
    //         bộLọc: "dn",
    //       },
    //       ẩnCột: true,
    //     },
    //   },
    //   function () {
    //     cl(111, H)
    //     H.find("#" + I).sửaLớp("wmxc");
    //     H.find(`#${I} > tbody`).css({
    //       "font-size": "14px",
    //     });
    //     H.find(".trên").find(".sốTrang").closest(".df").sửaLớp("w1 plr15");
    //   }
    // );
  };

  this.khởiTạo = function () {};
})();
