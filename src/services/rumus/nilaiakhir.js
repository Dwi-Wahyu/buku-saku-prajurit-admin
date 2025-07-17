$(document).ready(function () {
  $("#hitungnilaiakhir").bind("click", function () {
    var garjasa = parseInt($("#nilai_a1").val());
    var garjassb = parseInt($("#garjasb").val());
    var nilaiakhir = (garjasa + garjassb) / 2;
    $("#nilaiakhir").val(nilaiakhir);
  });
});
