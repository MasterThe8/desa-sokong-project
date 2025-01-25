$(function () {
    // Atur gambar sebagai latar belakang
    $(".img-w").each(function () {
      $(this).wrap("<div class='img-c'></div>");
      let imgSrc = $(this).find("img").attr("src");
      $(this).css("background-image", "url(" + imgSrc + ")");
    });
  
    // Tambahkan event klik untuk memperbesar gambar
    $(".img-c").click(function () {
      let w = $(this).outerWidth();
      let h = $(this).outerHeight();
      let x = $(this).offset().left;
      let y = $(this).offset().top;
  
      // Hapus elemen aktif lain
      $(".active").not($(this)).remove();
  
      // Salin elemen yang diklik
      let copy = $(this).clone();
      copy.insertAfter($(this))
        .height(h)
        .width(w)
        .addClass("active");
  
      // Atur posisi elemen aktif
      $(".active").css({
        top: y - 8,
        left: x - 8,
      });
  
      setTimeout(function () {
        copy.addClass("positioned");
      }, 0);
    });
  
    // Event untuk menutup gambar aktif
    $(document).on("click", ".img-c.active", function () {
      let copy = $(this);
      copy.removeClass("positioned active").addClass("postactive");
      setTimeout(function () {
        copy.remove();
      }, 500);
    });
  });
  