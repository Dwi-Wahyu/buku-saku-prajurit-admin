export function hitungNilaiGarjasB2(
  jenis_kelamin: string,
  golongan: number,
  situps: number
) {
  let garjas_b2;

  if (jenis_kelamin == "Pria") {
    if (golongan == 1) {
      if (situps >= 41) {
        garjas_b2 = 100;
      } else if (situps == 40) {
        garjas_b2 = 95;
      } else if (situps == 39) {
        garjas_b2 = 90;
      } else if (situps == 38) {
        garjas_b2 = 85;
      } else if (situps == 37) {
        garjas_b2 = 80;
      } else if (situps == 36) {
        garjas_b2 = 75;
      } else if (situps == 35) {
        garjas_b2 = 70;
      } else if (situps == 34) {
        garjas_b2 = 65;
      } else if (situps == 33) {
        garjas_b2 = 60;
      } else if (situps == 32) {
        garjas_b2 = 55;
      } else if (situps == 31) {
        garjas_b2 = 52;
      } else if (situps == 30) {
        garjas_b2 = 49;
      } else if (situps == 29) {
        garjas_b2 = 46;
      } else if (situps == 28) {
        garjas_b2 = 43;
      } else if (situps == 27) {
        garjas_b2 = 40;
      } else if (situps == 26) {
        garjas_b2 = 37;
      } else if (situps == 25) {
        garjas_b2 = 34;
      } else if (situps == 24) {
        garjas_b2 = 31;
      } else if (situps == 23) {
        garjas_b2 = 28;
      } else if (situps == 22) {
        garjas_b2 = 25;
      } else if (situps == 21) {
        garjas_b2 = 22;
      } else if (situps == 20) {
        garjas_b2 = 19;
      } else if (situps == 19) {
        garjas_b2 = 16;
      } else if (situps == 18) {
        garjas_b2 = 13;
      } else if (situps == 17) {
        garjas_b2 = 10;
      } else if (situps == 16) {
        garjas_b2 = 7;
      } else if (situps == 15) {
        garjas_b2 = 4;
      } else if (situps == 14) {
        garjas_b2 = 1;
      } else if (situps <= 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 2) {
      if (situps >= 40) {
        garjas_b2 = 100;
      } else if (situps == 39) {
        garjas_b2 = 95;
      } else if (situps == 38) {
        garjas_b2 = 90;
      } else if (situps == 37) {
        garjas_b2 = 85;
      } else if (situps == 36) {
        garjas_b2 = 80;
      } else if (situps == 35) {
        garjas_b2 = 75;
      } else if (situps == 34) {
        garjas_b2 = 70;
      } else if (situps == 33) {
        garjas_b2 = 65;
      } else if (situps == 32) {
        garjas_b2 = 60;
      } else if (situps == 31) {
        garjas_b2 = 57;
      } else if (situps == 30) {
        garjas_b2 = 54;
      } else if (situps == 29) {
        garjas_b2 = 51;
      } else if (situps == 28) {
        garjas_b2 = 48;
      } else if (situps == 27) {
        garjas_b2 = 45;
      } else if (situps == 26) {
        garjas_b2 = 42;
      } else if (situps == 25) {
        garjas_b2 = 39;
      } else if (situps == 24) {
        garjas_b2 = 36;
      } else if (situps == 23) {
        garjas_b2 = 33;
      } else if (situps == 22) {
        garjas_b2 = 30;
      } else if (situps == 21) {
        garjas_b2 = 27;
      } else if (situps == 20) {
        garjas_b2 = 24;
      } else if (situps == 19) {
        garjas_b2 = 21;
      } else if (situps == 18) {
        garjas_b2 = 18;
      } else if (situps == 17) {
        garjas_b2 = 15;
      } else if (situps == 16) {
        garjas_b2 = 12;
      } else if (situps == 15) {
        garjas_b2 = 9;
      } else if (situps == 14) {
        garjas_b2 = 6;
      } else if (situps == 13) {
        garjas_b2 = 3;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 3) {
      if (situps >= 39) {
        garjas_b2 = 100;
      } else if (situps == 38) {
        garjas_b2 = 95;
      } else if (situps == 37) {
        garjas_b2 = 90;
      } else if (situps == 36) {
        garjas_b2 = 85;
      } else if (situps == 35) {
        garjas_b2 = 80;
      } else if (situps == 34) {
        garjas_b2 = 75;
      } else if (situps == 33) {
        garjas_b2 = 70;
      } else if (situps == 32) {
        garjas_b2 = 65;
      } else if (situps == 31) {
        garjas_b2 = 62;
      } else if (situps == 30) {
        garjas_b2 = 59;
      } else if (situps == 29) {
        garjas_b2 = 56;
      } else if (situps == 28) {
        garjas_b2 = 53;
      } else if (situps == 27) {
        garjas_b2 = 50;
      } else if (situps == 26) {
        garjas_b2 = 47;
      } else if (situps == 25) {
        garjas_b2 = 44;
      } else if (situps == 24) {
        garjas_b2 = 41;
      } else if (situps == 23) {
        garjas_b2 = 38;
      } else if (situps == 22) {
        garjas_b2 = 35;
      } else if (situps == 21) {
        garjas_b2 = 32;
      } else if (situps == 20) {
        garjas_b2 = 29;
      } else if (situps == 19) {
        garjas_b2 = 26;
      } else if (situps == 18) {
        garjas_b2 = 23;
      } else if (situps == 17) {
        garjas_b2 = 20;
      } else if (situps == 16) {
        garjas_b2 = 17;
      } else if (situps == 15) {
        garjas_b2 = 14;
      } else if (situps == 14) {
        garjas_b2 = 11;
      } else if (situps == 13) {
        garjas_b2 = 8;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 4) {
      if (situps >= 38) {
        garjas_b2 = 100;
      } else if (situps == 37) {
        garjas_b2 = 95;
      } else if (situps == 36) {
        garjas_b2 = 90;
      } else if (situps == 35) {
        garjas_b2 = 85;
      } else if (situps == 34) {
        garjas_b2 = 80;
      } else if (situps == 33) {
        garjas_b2 = 75;
      } else if (situps == 32) {
        garjas_b2 = 70;
      } else if (situps == 31) {
        garjas_b2 = 67;
      } else if (situps == 30) {
        garjas_b2 = 64;
      } else if (situps == 29) {
        garjas_b2 = 61;
      } else if (situps == 28) {
        garjas_b2 = 58;
      } else if (situps == 27) {
        garjas_b2 = 55;
      } else if (situps == 26) {
        garjas_b2 = 52;
      } else if (situps == 25) {
        garjas_b2 = 49;
      } else if (situps == 24) {
        garjas_b2 = 46;
      } else if (situps == 23) {
        garjas_b2 = 43;
      } else if (situps == 22) {
        garjas_b2 = 40;
      } else if (situps == 21) {
        garjas_b2 = 37;
      } else if (situps == 20) {
        garjas_b2 = 34;
      } else if (situps == 19) {
        garjas_b2 = 31;
      } else if (situps == 18) {
        garjas_b2 = 28;
      } else if (situps == 17) {
        garjas_b2 = 25;
      } else if (situps == 16) {
        garjas_b2 = 22;
      } else if (situps == 15) {
        garjas_b2 = 19;
      } else if (situps == 14) {
        garjas_b2 = 16;
      } else if (situps == 13) {
        garjas_b2 = 13;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 5) {
      if (situps >= 37) {
        garjas_b2 = 100;
      } else if (situps == 36) {
        garjas_b2 = 95;
      } else if (situps == 35) {
        garjas_b2 = 90;
      } else if (situps == 34) {
        garjas_b2 = 85;
      } else if (situps == 33) {
        garjas_b2 = 80;
      } else if (situps == 32) {
        garjas_b2 = 75;
      } else if (situps == 31) {
        garjas_b2 = 72;
      } else if (situps == 30) {
        garjas_b2 = 69;
      } else if (situps == 29) {
        garjas_b2 = 66;
      } else if (situps == 28) {
        garjas_b2 = 63;
      } else if (situps == 27) {
        garjas_b2 = 60;
      } else if (situps == 26) {
        garjas_b2 = 57;
      } else if (situps == 25) {
        garjas_b2 = 54;
      } else if (situps == 24) {
        garjas_b2 = 51;
      } else if (situps == 23) {
        garjas_b2 = 48;
      } else if (situps == 22) {
        garjas_b2 = 45;
      } else if (situps == 21) {
        garjas_b2 = 42;
      } else if (situps == 20) {
        garjas_b2 = 39;
      } else if (situps == 19) {
        garjas_b2 = 36;
      } else if (situps == 18) {
        garjas_b2 = 33;
      } else if (situps == 17) {
        garjas_b2 = 30;
      } else if (situps == 16) {
        garjas_b2 = 27;
      } else if (situps == 15) {
        garjas_b2 = 24;
      } else if (situps == 14) {
        garjas_b2 = 21;
      } else if (situps == 13) {
        garjas_b2 = 18;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 6) {
      if (situps >= 36) {
        garjas_b2 = 100;
      } else if (situps == 35) {
        garjas_b2 = 95;
      } else if (situps == 34) {
        garjas_b2 = 90;
      } else if (situps == 33) {
        garjas_b2 = 85;
      } else if (situps == 32) {
        garjas_b2 = 80;
      } else if (situps == 31) {
        garjas_b2 = 77;
      } else if (situps == 30) {
        garjas_b2 = 74;
      } else if (situps == 29) {
        garjas_b2 = 71;
      } else if (situps == 28) {
        garjas_b2 = 68;
      } else if (situps == 27) {
        garjas_b2 = 65;
      } else if (situps == 26) {
        garjas_b2 = 62;
      } else if (situps == 25) {
        garjas_b2 = 59;
      } else if (situps == 24) {
        garjas_b2 = 56;
      } else if (situps == 23) {
        garjas_b2 = 53;
      } else if (situps == 22) {
        garjas_b2 = 50;
      } else if (situps == 21) {
        garjas_b2 = 47;
      } else if (situps == 20) {
        garjas_b2 = 44;
      } else if (situps == 19) {
        garjas_b2 = 41;
      } else if (situps == 18) {
        garjas_b2 = 38;
      } else if (situps == 17) {
        garjas_b2 = 35;
      } else if (situps == 16) {
        garjas_b2 = 32;
      } else if (situps == 15) {
        garjas_b2 = 29;
      } else if (situps == 14) {
        garjas_b2 = 26;
      } else if (situps == 13) {
        garjas_b2 = 23;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 7) {
      if (situps >= 35) {
        garjas_b2 = 100;
      } else if (situps == 34) {
        garjas_b2 = 95;
      } else if (situps == 33) {
        garjas_b2 = 90;
      } else if (situps == 32) {
        garjas_b2 = 85;
      } else if (situps == 31) {
        garjas_b2 = 82;
      } else if (situps == 30) {
        garjas_b2 = 79;
      } else if (situps == 29) {
        garjas_b2 = 76;
      } else if (situps == 28) {
        garjas_b2 = 73;
      } else if (situps == 27) {
        garjas_b2 = 70;
      } else if (situps == 26) {
        garjas_b2 = 67;
      } else if (situps == 25) {
        garjas_b2 = 64;
      } else if (situps == 24) {
        garjas_b2 = 61;
      } else if (situps == 23) {
        garjas_b2 = 58;
      } else if (situps == 22) {
        garjas_b2 = 55;
      } else if (situps == 21) {
        garjas_b2 = 52;
      } else if (situps == 20) {
        garjas_b2 = 49;
      } else if (situps == 19) {
        garjas_b2 = 46;
      } else if (situps == 18) {
        garjas_b2 = 43;
      } else if (situps == 17) {
        garjas_b2 = 40;
      } else if (situps == 16) {
        garjas_b2 = 37;
      } else if (situps == 15) {
        garjas_b2 = 34;
      } else if (situps == 14) {
        garjas_b2 = 31;
      } else if (situps == 13) {
        garjas_b2 = 28;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 8) {
      if (situps >= 34) {
        garjas_b2 = 100;
      } else if (situps == 33) {
        garjas_b2 = 95;
      } else if (situps == 32) {
        garjas_b2 = 90;
      } else if (situps == 31) {
        garjas_b2 = 87;
      } else if (situps == 30) {
        garjas_b2 = 84;
      } else if (situps == 29) {
        garjas_b2 = 81;
      } else if (situps == 28) {
        garjas_b2 = 78;
      } else if (situps == 27) {
        garjas_b2 = 75;
      } else if (situps == 26) {
        garjas_b2 = 72;
      } else if (situps == 25) {
        garjas_b2 = 69;
      } else if (situps == 24) {
        garjas_b2 = 66;
      } else if (situps == 23) {
        garjas_b2 = 63;
      } else if (situps == 22) {
        garjas_b2 = 60;
      } else if (situps == 21) {
        garjas_b2 = 57;
      } else if (situps == 20) {
        garjas_b2 = 54;
      } else if (situps == 19) {
        garjas_b2 = 51;
      } else if (situps == 18) {
        garjas_b2 = 48;
      } else if (situps == 17) {
        garjas_b2 = 45;
      } else if (situps == 16) {
        garjas_b2 = 42;
      } else if (situps == 15) {
        garjas_b2 = 39;
      } else if (situps == 14) {
        garjas_b2 = 36;
      } else if (situps == 13) {
        garjas_b2 = 33;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 9) {
      if (situps >= 33) {
        garjas_b2 = 100;
      } else if (situps == 32) {
        garjas_b2 = 95;
      } else if (situps == 31) {
        garjas_b2 = 92;
      } else if (situps == 30) {
        garjas_b2 = 89;
      } else if (situps == 29) {
        garjas_b2 = 86;
      } else if (situps == 28) {
        garjas_b2 = 83;
      } else if (situps == 27) {
        garjas_b2 = 80;
      } else if (situps == 26) {
        garjas_b2 = 77;
      } else if (situps == 25) {
        garjas_b2 = 74;
      } else if (situps == 24) {
        garjas_b2 = 71;
      } else if (situps == 23) {
        garjas_b2 = 68;
      } else if (situps == 22) {
        garjas_b2 = 65;
      } else if (situps == 21) {
        garjas_b2 = 62;
      } else if (situps == 20) {
        garjas_b2 = 59;
      } else if (situps == 19) {
        garjas_b2 = 56;
      } else if (situps == 18) {
        garjas_b2 = 53;
      } else if (situps == 17) {
        garjas_b2 = 50;
      } else if (situps == 16) {
        garjas_b2 = 47;
      } else if (situps == 15) {
        garjas_b2 = 44;
      } else if (situps == 14) {
        garjas_b2 = 41;
      } else if (situps == 13) {
        garjas_b2 = 38;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 10) {
      if (situps >= 32) {
        garjas_b2 = 100;
      } else if (situps == 31) {
        garjas_b2 = 97;
      } else if (situps == 30) {
        garjas_b2 = 94;
      } else if (situps == 29) {
        garjas_b2 = 91;
      } else if (situps == 28) {
        garjas_b2 = 88;
      } else if (situps == 27) {
        garjas_b2 = 85;
      } else if (situps == 26) {
        garjas_b2 = 82;
      } else if (situps == 25) {
        garjas_b2 = 79;
      } else if (situps == 24) {
        garjas_b2 = 76;
      } else if (situps == 23) {
        garjas_b2 = 73;
      } else if (situps == 22) {
        garjas_b2 = 70;
      } else if (situps == 21) {
        garjas_b2 = 67;
      } else if (situps == 20) {
        garjas_b2 = 64;
      } else if (situps == 19) {
        garjas_b2 = 61;
      } else if (situps == 18) {
        garjas_b2 = 58;
      } else if (situps == 17) {
        garjas_b2 = 55;
      } else if (situps == 16) {
        garjas_b2 = 52;
      } else if (situps == 15) {
        garjas_b2 = 49;
      } else if (situps == 14) {
        garjas_b2 = 46;
      } else if (situps == 13) {
        garjas_b2 = 43;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    }
  }
  // Nilai Sit Ups Wanita - GARJAS B2
  else if (jenis_kelamin == "Wanita") {
    if (golongan == 1) {
      if (situps >= 36) {
        garjas_b2 = 100;
      } else if (situps == 35) {
        garjas_b2 = 95;
      } else if (situps == 34) {
        garjas_b2 = 90;
      } else if (situps == 33) {
        garjas_b2 = 85;
      } else if (situps == 32) {
        garjas_b2 = 80;
      } else if (situps == 31) {
        garjas_b2 = 75;
      } else if (situps == 30) {
        garjas_b2 = 70;
      } else if (situps == 29) {
        garjas_b2 = 65;
      } else if (situps == 28) {
        garjas_b2 = 60;
      } else if (situps == 27) {
        garjas_b2 = 55;
      } else if (situps == 26) {
        garjas_b2 = 51;
      } else if (situps == 25) {
        garjas_b2 = 47;
      } else if (situps == 24) {
        garjas_b2 = 43;
      } else if (situps == 23) {
        garjas_b2 = 39;
      } else if (situps == 22) {
        garjas_b2 = 35;
      } else if (situps == 21) {
        garjas_b2 = 31;
      } else if (situps == 20) {
        garjas_b2 = 27;
      } else if (situps == 19) {
        garjas_b2 = 23;
      } else if (situps == 18) {
        garjas_b2 = 19;
      } else if (situps == 17) {
        garjas_b2 = 15;
      } else if (situps == 16) {
        garjas_b2 = 11;
      } else if (situps == 15) {
        garjas_b2 = 7;
      } else if (situps == 14) {
        garjas_b2 = 3;
      } else if (situps == 13) {
        garjas_b2 = 0;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 2) {
      if (situps >= 35) {
        garjas_b2 = 100;
      } else if (situps == 34) {
        garjas_b2 = 95;
      } else if (situps == 33) {
        garjas_b2 = 90;
      } else if (situps == 32) {
        garjas_b2 = 85;
      } else if (situps == 31) {
        garjas_b2 = 80;
      } else if (situps == 30) {
        garjas_b2 = 75;
      } else if (situps == 29) {
        garjas_b2 = 70;
      } else if (situps == 28) {
        garjas_b2 = 65;
      } else if (situps == 27) {
        garjas_b2 = 60;
      } else if (situps == 26) {
        garjas_b2 = 56;
      } else if (situps == 25) {
        garjas_b2 = 52;
      } else if (situps == 24) {
        garjas_b2 = 48;
      } else if (situps == 23) {
        garjas_b2 = 44;
      } else if (situps == 22) {
        garjas_b2 = 40;
      } else if (situps == 21) {
        garjas_b2 = 36;
      } else if (situps == 20) {
        garjas_b2 = 32;
      } else if (situps == 19) {
        garjas_b2 = 28;
      } else if (situps == 18) {
        garjas_b2 = 24;
      } else if (situps == 17) {
        garjas_b2 = 20;
      } else if (situps == 16) {
        garjas_b2 = 16;
      } else if (situps == 15) {
        garjas_b2 = 12;
      } else if (situps == 14) {
        garjas_b2 = 8;
      } else if (situps == 13) {
        garjas_b2 = 4;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 3) {
      if (situps >= 34) {
        garjas_b2 = 100;
      } else if (situps == 33) {
        garjas_b2 = 95;
      } else if (situps == 32) {
        garjas_b2 = 90;
      } else if (situps == 31) {
        garjas_b2 = 85;
      } else if (situps == 30) {
        garjas_b2 = 80;
      } else if (situps == 29) {
        garjas_b2 = 75;
      } else if (situps == 28) {
        garjas_b2 = 70;
      } else if (situps == 27) {
        garjas_b2 = 65;
      } else if (situps == 26) {
        garjas_b2 = 61;
      } else if (situps == 25) {
        garjas_b2 = 57;
      } else if (situps == 24) {
        garjas_b2 = 53;
      } else if (situps == 23) {
        garjas_b2 = 49;
      } else if (situps == 22) {
        garjas_b2 = 45;
      } else if (situps == 21) {
        garjas_b2 = 41;
      } else if (situps == 20) {
        garjas_b2 = 37;
      } else if (situps == 19) {
        garjas_b2 = 33;
      } else if (situps == 18) {
        garjas_b2 = 29;
      } else if (situps == 17) {
        garjas_b2 = 25;
      } else if (situps == 16) {
        garjas_b2 = 21;
      } else if (situps == 15) {
        garjas_b2 = 17;
      } else if (situps == 14) {
        garjas_b2 = 13;
      } else if (situps == 13) {
        garjas_b2 = 9;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 4) {
      if (situps >= 33) {
        garjas_b2 = 100;
      } else if (situps == 32) {
        garjas_b2 = 95;
      } else if (situps == 31) {
        garjas_b2 = 90;
      } else if (situps == 30) {
        garjas_b2 = 85;
      } else if (situps == 29) {
        garjas_b2 = 80;
      } else if (situps == 28) {
        garjas_b2 = 75;
      } else if (situps == 27) {
        garjas_b2 = 70;
      } else if (situps == 26) {
        garjas_b2 = 66;
      } else if (situps == 25) {
        garjas_b2 = 62;
      } else if (situps == 24) {
        garjas_b2 = 58;
      } else if (situps == 23) {
        garjas_b2 = 54;
      } else if (situps == 22) {
        garjas_b2 = 50;
      } else if (situps == 21) {
        garjas_b2 = 46;
      } else if (situps == 20) {
        garjas_b2 = 42;
      } else if (situps == 19) {
        garjas_b2 = 38;
      } else if (situps == 18) {
        garjas_b2 = 34;
      } else if (situps == 17) {
        garjas_b2 = 30;
      } else if (situps == 16) {
        garjas_b2 = 26;
      } else if (situps == 15) {
        garjas_b2 = 22;
      } else if (situps == 14) {
        garjas_b2 = 18;
      } else if (situps == 13) {
        garjas_b2 = 14;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 5) {
      if (situps >= 32) {
        garjas_b2 = 100;
      } else if (situps == 31) {
        garjas_b2 = 95;
      } else if (situps == 30) {
        garjas_b2 = 90;
      } else if (situps == 29) {
        garjas_b2 = 85;
      } else if (situps == 28) {
        garjas_b2 = 80;
      } else if (situps == 27) {
        garjas_b2 = 75;
      } else if (situps == 26) {
        garjas_b2 = 71;
      } else if (situps == 25) {
        garjas_b2 = 67;
      } else if (situps == 24) {
        garjas_b2 = 63;
      } else if (situps == 23) {
        garjas_b2 = 59;
      } else if (situps == 22) {
        garjas_b2 = 55;
      } else if (situps == 21) {
        garjas_b2 = 51;
      } else if (situps == 20) {
        garjas_b2 = 47;
      } else if (situps == 19) {
        garjas_b2 = 43;
      } else if (situps == 18) {
        garjas_b2 = 39;
      } else if (situps == 17) {
        garjas_b2 = 35;
      } else if (situps == 16) {
        garjas_b2 = 31;
      } else if (situps == 15) {
        garjas_b2 = 27;
      } else if (situps == 14) {
        garjas_b2 = 23;
      } else if (situps == 13) {
        garjas_b2 = 19;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 6) {
      if (situps >= 31) {
        garjas_b2 = 100;
      } else if (situps == 30) {
        garjas_b2 = 95;
      } else if (situps == 29) {
        garjas_b2 = 90;
      } else if (situps == 28) {
        garjas_b2 = 85;
      } else if (situps == 27) {
        garjas_b2 = 80;
      } else if (situps == 26) {
        garjas_b2 = 76;
      } else if (situps == 25) {
        garjas_b2 = 72;
      } else if (situps == 24) {
        garjas_b2 = 68;
      } else if (situps == 23) {
        garjas_b2 = 64;
      } else if (situps == 22) {
        garjas_b2 = 60;
      } else if (situps == 21) {
        garjas_b2 = 56;
      } else if (situps == 20) {
        garjas_b2 = 52;
      } else if (situps == 19) {
        garjas_b2 = 48;
      } else if (situps == 18) {
        garjas_b2 = 44;
      } else if (situps == 17) {
        garjas_b2 = 40;
      } else if (situps == 16) {
        garjas_b2 = 36;
      } else if (situps == 15) {
        garjas_b2 = 32;
      } else if (situps == 14) {
        garjas_b2 = 28;
      } else if (situps == 13) {
        garjas_b2 = 24;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 7) {
      if (situps >= 30) {
        garjas_b2 = 100;
      } else if (situps == 29) {
        garjas_b2 = 95;
      } else if (situps == 28) {
        garjas_b2 = 90;
      } else if (situps == 27) {
        garjas_b2 = 85;
      } else if (situps == 26) {
        garjas_b2 = 81;
      } else if (situps == 25) {
        garjas_b2 = 77;
      } else if (situps == 24) {
        garjas_b2 = 73;
      } else if (situps == 23) {
        garjas_b2 = 69;
      } else if (situps == 22) {
        garjas_b2 = 65;
      } else if (situps == 21) {
        garjas_b2 = 61;
      } else if (situps == 20) {
        garjas_b2 = 57;
      } else if (situps == 19) {
        garjas_b2 = 53;
      } else if (situps == 18) {
        garjas_b2 = 49;
      } else if (situps == 17) {
        garjas_b2 = 45;
      } else if (situps == 16) {
        garjas_b2 = 41;
      } else if (situps == 15) {
        garjas_b2 = 37;
      } else if (situps == 14) {
        garjas_b2 = 33;
      } else if (situps == 13) {
        garjas_b2 = 29;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 8) {
      if (situps >= 29) {
        garjas_b2 = 100;
      } else if (situps == 28) {
        garjas_b2 = 95;
      } else if (situps == 27) {
        garjas_b2 = 90;
      } else if (situps == 26) {
        garjas_b2 = 86;
      } else if (situps == 25) {
        garjas_b2 = 82;
      } else if (situps == 24) {
        garjas_b2 = 78;
      } else if (situps == 23) {
        garjas_b2 = 74;
      } else if (situps == 22) {
        garjas_b2 = 70;
      } else if (situps == 21) {
        garjas_b2 = 66;
      } else if (situps == 20) {
        garjas_b2 = 62;
      } else if (situps == 19) {
        garjas_b2 = 58;
      } else if (situps == 18) {
        garjas_b2 = 54;
      } else if (situps == 17) {
        garjas_b2 = 50;
      } else if (situps == 16) {
        garjas_b2 = 46;
      } else if (situps == 15) {
        garjas_b2 = 42;
      } else if (situps == 14) {
        garjas_b2 = 38;
      } else if (situps == 13) {
        garjas_b2 = 34;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 9) {
      if (situps >= 28) {
        garjas_b2 = 100;
      } else if (situps == 27) {
        garjas_b2 = 95;
      } else if (situps == 26) {
        garjas_b2 = 91;
      } else if (situps == 25) {
        garjas_b2 = 87;
      } else if (situps == 24) {
        garjas_b2 = 83;
      } else if (situps == 23) {
        garjas_b2 = 79;
      } else if (situps == 22) {
        garjas_b2 = 75;
      } else if (situps == 21) {
        garjas_b2 = 71;
      } else if (situps == 20) {
        garjas_b2 = 67;
      } else if (situps == 19) {
        garjas_b2 = 63;
      } else if (situps == 18) {
        garjas_b2 = 59;
      } else if (situps == 17) {
        garjas_b2 = 55;
      } else if (situps == 16) {
        garjas_b2 = 51;
      } else if (situps == 15) {
        garjas_b2 = 47;
      } else if (situps == 14) {
        garjas_b2 = 43;
      } else if (situps == 13) {
        garjas_b2 = 39;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    } else if (golongan == 10) {
      if (situps >= 27) {
        garjas_b2 = 100;
      } else if (situps == 26) {
        garjas_b2 = 96;
      } else if (situps == 25) {
        garjas_b2 = 92;
      } else if (situps == 24) {
        garjas_b2 = 88;
      } else if (situps == 23) {
        garjas_b2 = 84;
      } else if (situps == 22) {
        garjas_b2 = 80;
      } else if (situps == 21) {
        garjas_b2 = 76;
      } else if (situps == 20) {
        garjas_b2 = 72;
      } else if (situps == 19) {
        garjas_b2 = 68;
      } else if (situps == 18) {
        garjas_b2 = 64;
      } else if (situps == 17) {
        garjas_b2 = 60;
      } else if (situps == 16) {
        garjas_b2 = 56;
      } else if (situps == 15) {
        garjas_b2 = 52;
      } else if (situps == 14) {
        garjas_b2 = 48;
      } else if (situps == 13) {
        garjas_b2 = 44;
      } else if (situps < 13) {
        garjas_b2 = 0;
      }
    }
  }

  return garjas_b2;
}
