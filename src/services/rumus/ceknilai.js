$(document).ready(function () {
  $("#ceknilai").click(function () {
    var user = $("#noak").val();
    var periode = $("#periode").val();
    $.ajax({
      url: "ceknilai.php",
      type: "GET",
      data: {
        username: user,
        idperiode: periode,
      },
      success: function (data) {
        var datane = JSON.parse(data);
        if (!Object.keys(datane).length) {
          alert("Tidak ada Nilai di periode ini, Silahkan di isi..");
          $("#umur").val(0);
          $("#tinggi").val(0);
          $("#berat").val(0);
          $("#lari12menit").val(0);
          $("#pullups").val(0);
          $("#situps").val(0);
          $("#pushups").val(0);
          $("#shuttlerun").val(0);
          $("#nilai_a1").val(0);
          $("#nilai_garjas_b1").val(0);
          $("#nilai_garjas_b2").val(0);
          $("#nilai_garjas_b3").val(0);
          $("#nilai_garjas_b4").val(0);
          $("#garjasb").val(0);
          $("#nilaiakhir").val(0);
        } else {
          $("#umur").val(datane.umur);
          $("#tinggi").val(datane.tinggi);
          $("#berat").val(datane.berat);
          $("#tinggiberat").val(datane.tinggiberat);
          $("#nilaibmi").val(datane.nilaibmi);
          $("#lari12menit").val(datane.lari12menit);
          $("#pullups").val(datane.pullups);
          $("#situps").val(datane.situps);
          $("#pushups").val(datane.pushups);
          $("#shuttlerun").val(datane.shuttlerun);
          $("#nilai_a1").val(datane.garjas_a);
          $("#nilai_garjas_b1").val(datane.garjas_b1);
          $("#nilai_garjas_b2").val(datane.garjas_b2);
          $("#nilai_garjas_b3").val(datane.garjas_b3);
          $("#nilai_garjas_b4").val(datane.garjas_b4);
          $("#garjasb").val(datane.garjas_b);
          $("#nilaiakhir").val(datane.nilaigarjas);
          //alert(datane.umur);
        }
      },
      error: function (xhr) {
        alert("Gagal Proses, Silahkan Ulangi");
      },
    });
  });
});
