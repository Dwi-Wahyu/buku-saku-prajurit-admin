export function hitungNilaiGarjasB3(
  jenis_kelamin: string,
  golongan: number,
  pushups: number
) {
  let garjas_b3;

  if (jenis_kelamin == "Pria") {
    if (golongan == 1) {
      if (pushups >= 43) {
        garjas_b3 = 100;
      } else if (pushups == 42) {
        garjas_b3 = 95;
      } else if (pushups == 41) {
        garjas_b3 = 90;
      } else if (pushups == 40) {
        garjas_b3 = 85;
      } else if (pushups == 39) {
        garjas_b3 = 80;
      } else if (pushups == 38) {
        garjas_b3 = 75;
      } else if (pushups == 37) {
        garjas_b3 = 70;
      } else if (pushups == 36) {
        garjas_b3 = 65;
      } else if (pushups == 35) {
        garjas_b3 = 60;
      } else if (pushups == 34) {
        garjas_b3 = 55;
      } else if (pushups == 33) {
        garjas_b3 = 52;
      } else if (pushups == 32) {
        garjas_b3 = 49;
      } else if (pushups == 31) {
        garjas_b3 = 46;
      } else if (pushups == 30) {
        garjas_b3 = 43;
      } else if (pushups == 29) {
        garjas_b3 = 40;
      } else if (pushups == 28) {
        garjas_b3 = 37;
      } else if (pushups == 27) {
        garjas_b3 = 34;
      } else if (pushups == 26) {
        garjas_b3 = 31;
      } else if (pushups == 25) {
        garjas_b3 = 28;
      } else if (pushups == 24) {
        garjas_b3 = 25;
      } else if (pushups == 23) {
        garjas_b3 = 22;
      } else if (pushups == 22) {
        garjas_b3 = 19;
      } else if (pushups == 21) {
        garjas_b3 = 16;
      } else if (pushups == 20) {
        garjas_b3 = 13;
      } else if (pushups == 19) {
        garjas_b3 = 10;
      } else if (pushups == 18) {
        garjas_b3 = 7;
      } else if (pushups == 17) {
        garjas_b3 = 4;
      } else if (pushups == 16) {
        garjas_b3 = 1;
      } else if (pushups == 15) {
        garjas_b3 = 0;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 2) {
      if (pushups >= 42) {
        garjas_b3 = 100;
      } else if (pushups == 41) {
        garjas_b3 = 95;
      } else if (pushups == 40) {
        garjas_b3 = 90;
      } else if (pushups == 39) {
        garjas_b3 = 85;
      } else if (pushups == 38) {
        garjas_b3 = 80;
      } else if (pushups == 37) {
        garjas_b3 = 75;
      } else if (pushups == 36) {
        garjas_b3 = 70;
      } else if (pushups == 35) {
        garjas_b3 = 65;
      } else if (pushups == 34) {
        garjas_b3 = 60;
      } else if (pushups == 33) {
        garjas_b3 = 57;
      } else if (pushups == 32) {
        garjas_b3 = 54;
      } else if (pushups == 31) {
        garjas_b3 = 51;
      } else if (pushups == 30) {
        garjas_b3 = 48;
      } else if (pushups == 29) {
        garjas_b3 = 45;
      } else if (pushups == 28) {
        garjas_b3 = 42;
      } else if (pushups == 27) {
        garjas_b3 = 39;
      } else if (pushups == 26) {
        garjas_b3 = 36;
      } else if (pushups == 25) {
        garjas_b3 = 33;
      } else if (pushups == 24) {
        garjas_b3 = 30;
      } else if (pushups == 23) {
        garjas_b3 = 27;
      } else if (pushups == 22) {
        garjas_b3 = 24;
      } else if (pushups == 21) {
        garjas_b3 = 21;
      } else if (pushups == 20) {
        garjas_b3 = 18;
      } else if (pushups == 19) {
        garjas_b3 = 15;
      } else if (pushups == 18) {
        garjas_b3 = 12;
      } else if (pushups == 17) {
        garjas_b3 = 9;
      } else if (pushups == 16) {
        garjas_b3 = 6;
      } else if (pushups == 15) {
        garjas_b3 = 3;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 3) {
      if (pushups >= 41) {
        garjas_b3 = 100;
      } else if (pushups == 40) {
        garjas_b3 = 95;
      } else if (pushups == 39) {
        garjas_b3 = 90;
      } else if (pushups == 38) {
        garjas_b3 = 85;
      } else if (pushups == 37) {
        garjas_b3 = 80;
      } else if (pushups == 36) {
        garjas_b3 = 75;
      } else if (pushups == 35) {
        garjas_b3 = 70;
      } else if (pushups == 34) {
        garjas_b3 = 65;
      } else if (pushups == 33) {
        garjas_b3 = 62;
      } else if (pushups == 32) {
        garjas_b3 = 59;
      } else if (pushups == 31) {
        garjas_b3 = 56;
      } else if (pushups == 30) {
        garjas_b3 = 53;
      } else if (pushups == 29) {
        garjas_b3 = 50;
      } else if (pushups == 28) {
        garjas_b3 = 47;
      } else if (pushups == 27) {
        garjas_b3 = 44;
      } else if (pushups == 26) {
        garjas_b3 = 41;
      } else if (pushups == 25) {
        garjas_b3 = 38;
      } else if (pushups == 24) {
        garjas_b3 = 35;
      } else if (pushups == 23) {
        garjas_b3 = 32;
      } else if (pushups == 22) {
        garjas_b3 = 29;
      } else if (pushups == 21) {
        garjas_b3 = 26;
      } else if (pushups == 20) {
        garjas_b3 = 23;
      } else if (pushups == 19) {
        garjas_b3 = 20;
      } else if (pushups == 18) {
        garjas_b3 = 17;
      } else if (pushups == 17) {
        garjas_b3 = 14;
      } else if (pushups == 16) {
        garjas_b3 = 11;
      } else if (pushups == 15) {
        garjas_b3 = 8;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 4) {
      if (pushups >= 40) {
        garjas_b3 = 100;
      } else if (pushups == 39) {
        garjas_b3 = 95;
      } else if (pushups == 38) {
        garjas_b3 = 90;
      } else if (pushups == 37) {
        garjas_b3 = 85;
      } else if (pushups == 36) {
        garjas_b3 = 80;
      } else if (pushups == 35) {
        garjas_b3 = 75;
      } else if (pushups == 34) {
        garjas_b3 = 70;
      } else if (pushups == 33) {
        garjas_b3 = 67;
      } else if (pushups == 32) {
        garjas_b3 = 64;
      } else if (pushups == 31) {
        garjas_b3 = 61;
      } else if (pushups == 30) {
        garjas_b3 = 58;
      } else if (pushups == 29) {
        garjas_b3 = 55;
      } else if (pushups == 28) {
        garjas_b3 = 52;
      } else if (pushups == 27) {
        garjas_b3 = 49;
      } else if (pushups == 26) {
        garjas_b3 = 46;
      } else if (pushups == 25) {
        garjas_b3 = 43;
      } else if (pushups == 24) {
        garjas_b3 = 40;
      } else if (pushups == 23) {
        garjas_b3 = 37;
      } else if (pushups == 22) {
        garjas_b3 = 34;
      } else if (pushups == 21) {
        garjas_b3 = 31;
      } else if (pushups == 20) {
        garjas_b3 = 28;
      } else if (pushups == 19) {
        garjas_b3 = 25;
      } else if (pushups == 18) {
        garjas_b3 = 22;
      } else if (pushups == 17) {
        garjas_b3 = 19;
      } else if (pushups == 16) {
        garjas_b3 = 16;
      } else if (pushups == 15) {
        garjas_b3 = 13;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 5) {
      if (pushups >= 39) {
        garjas_b3 = 100;
      } else if (pushups == 38) {
        garjas_b3 = 95;
      } else if (pushups == 37) {
        garjas_b3 = 90;
      } else if (pushups == 36) {
        garjas_b3 = 85;
      } else if (pushups == 35) {
        garjas_b3 = 80;
      } else if (pushups == 34) {
        garjas_b3 = 75;
      } else if (pushups == 33) {
        garjas_b3 = 72;
      } else if (pushups == 32) {
        garjas_b3 = 69;
      } else if (pushups == 31) {
        garjas_b3 = 66;
      } else if (pushups == 30) {
        garjas_b3 = 63;
      } else if (pushups == 29) {
        garjas_b3 = 60;
      } else if (pushups == 28) {
        garjas_b3 = 57;
      } else if (pushups == 27) {
        garjas_b3 = 54;
      } else if (pushups == 26) {
        garjas_b3 = 51;
      } else if (pushups == 25) {
        garjas_b3 = 48;
      } else if (pushups == 24) {
        garjas_b3 = 45;
      } else if (pushups == 23) {
        garjas_b3 = 42;
      } else if (pushups == 22) {
        garjas_b3 = 39;
      } else if (pushups == 21) {
        garjas_b3 = 36;
      } else if (pushups == 20) {
        garjas_b3 = 33;
      } else if (pushups == 19) {
        garjas_b3 = 30;
      } else if (pushups == 18) {
        garjas_b3 = 27;
      } else if (pushups == 17) {
        garjas_b3 = 24;
      } else if (pushups == 16) {
        garjas_b3 = 21;
      } else if (pushups == 15) {
        garjas_b3 = 18;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 6) {
      if (pushups >= 38) {
        garjas_b3 = 100;
      } else if (pushups == 37) {
        garjas_b3 = 95;
      } else if (pushups == 36) {
        garjas_b3 = 90;
      } else if (pushups == 35) {
        garjas_b3 = 85;
      } else if (pushups == 34) {
        garjas_b3 = 80;
      } else if (pushups == 33) {
        garjas_b3 = 77;
      } else if (pushups == 32) {
        garjas_b3 = 74;
      } else if (pushups == 31) {
        garjas_b3 = 71;
      } else if (pushups == 30) {
        garjas_b3 = 68;
      } else if (pushups == 29) {
        garjas_b3 = 65;
      } else if (pushups == 28) {
        garjas_b3 = 62;
      } else if (pushups == 27) {
        garjas_b3 = 59;
      } else if (pushups == 26) {
        garjas_b3 = 56;
      } else if (pushups == 25) {
        garjas_b3 = 53;
      } else if (pushups == 24) {
        garjas_b3 = 50;
      } else if (pushups == 23) {
        garjas_b3 = 47;
      } else if (pushups == 22) {
        garjas_b3 = 44;
      } else if (pushups == 21) {
        garjas_b3 = 41;
      } else if (pushups == 20) {
        garjas_b3 = 38;
      } else if (pushups == 19) {
        garjas_b3 = 35;
      } else if (pushups == 18) {
        garjas_b3 = 32;
      } else if (pushups == 17) {
        garjas_b3 = 29;
      } else if (pushups == 16) {
        garjas_b3 = 26;
      } else if (pushups == 15) {
        garjas_b3 = 23;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 7) {
      if (pushups >= 37) {
        garjas_b3 = 100;
      } else if (pushups == 36) {
        garjas_b3 = 95;
      } else if (pushups == 35) {
        garjas_b3 = 90;
      } else if (pushups == 34) {
        garjas_b3 = 85;
      } else if (pushups == 33) {
        garjas_b3 = 82;
      } else if (pushups == 32) {
        garjas_b3 = 79;
      } else if (pushups == 31) {
        garjas_b3 = 76;
      } else if (pushups == 30) {
        garjas_b3 = 73;
      } else if (pushups == 29) {
        garjas_b3 = 70;
      } else if (pushups == 28) {
        garjas_b3 = 67;
      } else if (pushups == 27) {
        garjas_b3 = 64;
      } else if (pushups == 26) {
        garjas_b3 = 61;
      } else if (pushups == 25) {
        garjas_b3 = 58;
      } else if (pushups == 24) {
        garjas_b3 = 55;
      } else if (pushups == 23) {
        garjas_b3 = 52;
      } else if (pushups == 22) {
        garjas_b3 = 49;
      } else if (pushups == 21) {
        garjas_b3 = 46;
      } else if (pushups == 20) {
        garjas_b3 = 43;
      } else if (pushups == 19) {
        garjas_b3 = 40;
      } else if (pushups == 18) {
        garjas_b3 = 37;
      } else if (pushups == 17) {
        garjas_b3 = 34;
      } else if (pushups == 16) {
        garjas_b3 = 31;
      } else if (pushups == 15) {
        garjas_b3 = 28;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 8) {
      if (pushups >= 36) {
        garjas_b3 = 100;
      } else if (pushups == 35) {
        garjas_b3 = 95;
      } else if (pushups == 34) {
        garjas_b3 = 90;
      } else if (pushups == 33) {
        garjas_b3 = 87;
      } else if (pushups == 32) {
        garjas_b3 = 84;
      } else if (pushups == 31) {
        garjas_b3 = 81;
      } else if (pushups == 30) {
        garjas_b3 = 78;
      } else if (pushups == 29) {
        garjas_b3 = 75;
      } else if (pushups == 28) {
        garjas_b3 = 72;
      } else if (pushups == 27) {
        garjas_b3 = 69;
      } else if (pushups == 26) {
        garjas_b3 = 66;
      } else if (pushups == 25) {
        garjas_b3 = 63;
      } else if (pushups == 24) {
        garjas_b3 = 60;
      } else if (pushups == 23) {
        garjas_b3 = 57;
      } else if (pushups == 22) {
        garjas_b3 = 54;
      } else if (pushups == 21) {
        garjas_b3 = 51;
      } else if (pushups == 20) {
        garjas_b3 = 48;
      } else if (pushups == 19) {
        garjas_b3 = 45;
      } else if (pushups == 18) {
        garjas_b3 = 42;
      } else if (pushups == 17) {
        garjas_b3 = 39;
      } else if (pushups == 16) {
        garjas_b3 = 36;
      } else if (pushups == 15) {
        garjas_b3 = 33;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 9) {
      if (pushups >= 35) {
        garjas_b3 = 100;
      } else if (pushups == 34) {
        garjas_b3 = 95;
      } else if (pushups == 33) {
        garjas_b3 = 92;
      } else if (pushups == 32) {
        garjas_b3 = 89;
      } else if (pushups == 31) {
        garjas_b3 = 86;
      } else if (pushups == 30) {
        garjas_b3 = 83;
      } else if (pushups == 29) {
        garjas_b3 = 80;
      } else if (pushups == 28) {
        garjas_b3 = 77;
      } else if (pushups == 27) {
        garjas_b3 = 74;
      } else if (pushups == 26) {
        garjas_b3 = 71;
      } else if (pushups == 25) {
        garjas_b3 = 68;
      } else if (pushups == 24) {
        garjas_b3 = 65;
      } else if (pushups == 23) {
        garjas_b3 = 62;
      } else if (pushups == 22) {
        garjas_b3 = 59;
      } else if (pushups == 21) {
        garjas_b3 = 56;
      } else if (pushups == 20) {
        garjas_b3 = 53;
      } else if (pushups == 19) {
        garjas_b3 = 50;
      } else if (pushups == 18) {
        garjas_b3 = 47;
      } else if (pushups == 17) {
        garjas_b3 = 44;
      } else if (pushups == 16) {
        garjas_b3 = 41;
      } else if (pushups == 15) {
        garjas_b3 = 38;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    } else if (golongan == 10) {
      if (pushups >= 34) {
        garjas_b3 = 100;
      } else if (pushups == 33) {
        garjas_b3 = 97;
      } else if (pushups == 32) {
        garjas_b3 = 94;
      } else if (pushups == 31) {
        garjas_b3 = 91;
      } else if (pushups == 30) {
        garjas_b3 = 88;
      } else if (pushups == 29) {
        garjas_b3 = 85;
      } else if (pushups == 28) {
        garjas_b3 = 82;
      } else if (pushups == 27) {
        garjas_b3 = 79;
      } else if (pushups == 26) {
        garjas_b3 = 76;
      } else if (pushups == 25) {
        garjas_b3 = 73;
      } else if (pushups == 24) {
        garjas_b3 = 70;
      } else if (pushups == 23) {
        garjas_b3 = 67;
      } else if (pushups == 22) {
        garjas_b3 = 64;
      } else if (pushups == 21) {
        garjas_b3 = 61;
      } else if (pushups == 20) {
        garjas_b3 = 58;
      } else if (pushups == 19) {
        garjas_b3 = 55;
      } else if (pushups == 18) {
        garjas_b3 = 52;
      } else if (pushups == 17) {
        garjas_b3 = 49;
      } else if (pushups == 16) {
        garjas_b3 = 46;
      } else if (pushups == 15) {
        garjas_b3 = 43;
      } else if (pushups < 15) {
        garjas_b3 = 0;
      }
    }
  }
  // Nilai pushups Wanita - GARJAS B4
  else if (jenis_kelamin == "Wanita") {
    if (golongan == 1) {
      if (pushups >= 28) {
        garjas_b3 = 100;
      } else if (pushups == 27) {
        garjas_b3 = 95;
      } else if (pushups == 26) {
        garjas_b3 = 90;
      } else if (pushups == 25) {
        garjas_b3 = 85;
      } else if (pushups == 24) {
        garjas_b3 = 80;
      } else if (pushups == 23) {
        garjas_b3 = 75;
      } else if (pushups == 22) {
        garjas_b3 = 70;
      } else if (pushups == 21) {
        garjas_b3 = 65;
      } else if (pushups == 20) {
        garjas_b3 = 60;
      } else if (pushups == 19) {
        garjas_b3 = 55;
      } else if (pushups == 18) {
        garjas_b3 = 51;
      } else if (pushups == 17) {
        garjas_b3 = 47;
      } else if (pushups == 16) {
        garjas_b3 = 42;
      } else if (pushups == 15) {
        garjas_b3 = 37;
      } else if (pushups == 14) {
        garjas_b3 = 32;
      } else if (pushups == 13) {
        garjas_b3 = 28;
      } else if (pushups == 12) {
        garjas_b3 = 23;
      } else if (pushups == 11) {
        garjas_b3 = 18;
      } else if (pushups == 10) {
        garjas_b3 = 13;
      } else if (pushups == 9) {
        garjas_b3 = 8;
      } else if (pushups == 8) {
        garjas_b3 = 3;
      } else if (pushups <= 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 2) {
      if (pushups >= 27) {
        garjas_b3 = 100;
      } else if (pushups == 26) {
        garjas_b3 = 95;
      } else if (pushups == 25) {
        garjas_b3 = 90;
      } else if (pushups == 24) {
        garjas_b3 = 85;
      } else if (pushups == 23) {
        garjas_b3 = 80;
      } else if (pushups == 22) {
        garjas_b3 = 75;
      } else if (pushups == 21) {
        garjas_b3 = 70;
      } else if (pushups == 20) {
        garjas_b3 = 65;
      } else if (pushups == 19) {
        garjas_b3 = 60;
      } else if (pushups == 18) {
        garjas_b3 = 56;
      } else if (pushups == 17) {
        garjas_b3 = 52;
      } else if (pushups == 16) {
        garjas_b3 = 47;
      } else if (pushups == 15) {
        garjas_b3 = 42;
      } else if (pushups == 14) {
        garjas_b3 = 37;
      } else if (pushups == 13) {
        garjas_b3 = 32;
      } else if (pushups == 12) {
        garjas_b3 = 28;
      } else if (pushups == 11) {
        garjas_b3 = 23;
      } else if (pushups == 10) {
        garjas_b3 = 18;
      } else if (pushups == 9) {
        garjas_b3 = 13;
      } else if (pushups == 8) {
        garjas_b3 = 8;
      } else if (pushups == 7) {
        garjas_b3 = 3;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 3) {
      if (pushups >= 26) {
        garjas_b3 = 100;
      } else if (pushups == 25) {
        garjas_b3 = 95;
      } else if (pushups == 24) {
        garjas_b3 = 90;
      } else if (pushups == 23) {
        garjas_b3 = 85;
      } else if (pushups == 22) {
        garjas_b3 = 80;
      } else if (pushups == 21) {
        garjas_b3 = 75;
      } else if (pushups == 20) {
        garjas_b3 = 70;
      } else if (pushups == 19) {
        garjas_b3 = 65;
      } else if (pushups == 18) {
        garjas_b3 = 61;
      } else if (pushups == 17) {
        garjas_b3 = 57;
      } else if (pushups == 16) {
        garjas_b3 = 52;
      } else if (pushups == 15) {
        garjas_b3 = 47;
      } else if (pushups == 14) {
        garjas_b3 = 42;
      } else if (pushups == 13) {
        garjas_b3 = 38;
      } else if (pushups == 12) {
        garjas_b3 = 33;
      } else if (pushups == 11) {
        garjas_b3 = 28;
      } else if (pushups == 10) {
        garjas_b3 = 23;
      } else if (pushups == 9) {
        garjas_b3 = 18;
      } else if (pushups == 8) {
        garjas_b3 = 13;
      } else if (pushups == 7) {
        garjas_b3 = 8;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 4) {
      if (pushups >= 25) {
        garjas_b3 = 100;
      } else if (pushups == 24) {
        garjas_b3 = 95;
      } else if (pushups == 23) {
        garjas_b3 = 90;
      } else if (pushups == 22) {
        garjas_b3 = 85;
      } else if (pushups == 21) {
        garjas_b3 = 80;
      } else if (pushups == 20) {
        garjas_b3 = 75;
      } else if (pushups == 19) {
        garjas_b3 = 70;
      } else if (pushups == 18) {
        garjas_b3 = 66;
      } else if (pushups == 17) {
        garjas_b3 = 62;
      } else if (pushups == 16) {
        garjas_b3 = 57;
      } else if (pushups == 15) {
        garjas_b3 = 52;
      } else if (pushups == 14) {
        garjas_b3 = 47;
      } else if (pushups == 13) {
        garjas_b3 = 43;
      } else if (pushups == 12) {
        garjas_b3 = 38;
      } else if (pushups == 11) {
        garjas_b3 = 33;
      } else if (pushups == 10) {
        garjas_b3 = 28;
      } else if (pushups == 9) {
        garjas_b3 = 23;
      } else if (pushups == 8) {
        garjas_b3 = 18;
      } else if (pushups == 7) {
        garjas_b3 = 13;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 5) {
      if (pushups >= 24) {
        garjas_b3 = 100;
      } else if (pushups == 23) {
        garjas_b3 = 95;
      } else if (pushups == 22) {
        garjas_b3 = 90;
      } else if (pushups == 21) {
        garjas_b3 = 85;
      } else if (pushups == 20) {
        garjas_b3 = 80;
      } else if (pushups == 19) {
        garjas_b3 = 75;
      } else if (pushups == 18) {
        garjas_b3 = 71;
      } else if (pushups == 17) {
        garjas_b3 = 67;
      } else if (pushups == 16) {
        garjas_b3 = 62;
      } else if (pushups == 15) {
        garjas_b3 = 57;
      } else if (pushups == 14) {
        garjas_b3 = 52;
      } else if (pushups == 13) {
        garjas_b3 = 48;
      } else if (pushups == 12) {
        garjas_b3 = 43;
      } else if (pushups == 11) {
        garjas_b3 = 38;
      } else if (pushups == 10) {
        garjas_b3 = 33;
      } else if (pushups == 9) {
        garjas_b3 = 28;
      } else if (pushups == 8) {
        garjas_b3 = 23;
      } else if (pushups == 7) {
        garjas_b3 = 18;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 6) {
      if (pushups >= 23) {
        garjas_b3 = 100;
      } else if (pushups == 22) {
        garjas_b3 = 95;
      } else if (pushups == 21) {
        garjas_b3 = 90;
      } else if (pushups == 20) {
        garjas_b3 = 85;
      } else if (pushups == 19) {
        garjas_b3 = 80;
      } else if (pushups == 18) {
        garjas_b3 = 76;
      } else if (pushups == 17) {
        garjas_b3 = 72;
      } else if (pushups == 16) {
        garjas_b3 = 67;
      } else if (pushups == 15) {
        garjas_b3 = 62;
      } else if (pushups == 14) {
        garjas_b3 = 57;
      } else if (pushups == 13) {
        garjas_b3 = 53;
      } else if (pushups == 12) {
        garjas_b3 = 48;
      } else if (pushups == 11) {
        garjas_b3 = 43;
      } else if (pushups == 10) {
        garjas_b3 = 38;
      } else if (pushups == 9) {
        garjas_b3 = 33;
      } else if (pushups == 8) {
        garjas_b3 = 28;
      } else if (pushups == 7) {
        garjas_b3 = 23;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 7) {
      if (pushups >= 22) {
        garjas_b3 = 100;
      } else if (pushups == 21) {
        garjas_b3 = 95;
      } else if (pushups == 20) {
        garjas_b3 = 90;
      } else if (pushups == 19) {
        garjas_b3 = 85;
      } else if (pushups == 18) {
        garjas_b3 = 81;
      } else if (pushups == 17) {
        garjas_b3 = 77;
      } else if (pushups == 16) {
        garjas_b3 = 72;
      } else if (pushups == 15) {
        garjas_b3 = 67;
      } else if (pushups == 14) {
        garjas_b3 = 62;
      } else if (pushups == 13) {
        garjas_b3 = 58;
      } else if (pushups == 12) {
        garjas_b3 = 53;
      } else if (pushups == 11) {
        garjas_b3 = 48;
      } else if (pushups == 10) {
        garjas_b3 = 43;
      } else if (pushups == 9) {
        garjas_b3 = 38;
      } else if (pushups == 8) {
        garjas_b3 = 33;
      } else if (pushups == 7) {
        garjas_b3 = 28;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 8) {
      if (pushups >= 21) {
        garjas_b3 = 100;
      } else if (pushups == 20) {
        garjas_b3 = 95;
      } else if (pushups == 19) {
        garjas_b3 = 90;
      } else if (pushups == 18) {
        garjas_b3 = 86;
      } else if (pushups == 17) {
        garjas_b3 = 82;
      } else if (pushups == 16) {
        garjas_b3 = 77;
      } else if (pushups == 15) {
        garjas_b3 = 72;
      } else if (pushups == 14) {
        garjas_b3 = 67;
      } else if (pushups == 13) {
        garjas_b3 = 63;
      } else if (pushups == 12) {
        garjas_b3 = 58;
      } else if (pushups == 11) {
        garjas_b3 = 53;
      } else if (pushups == 10) {
        garjas_b3 = 48;
      } else if (pushups == 9) {
        garjas_b3 = 43;
      } else if (pushups == 8) {
        garjas_b3 = 38;
      } else if (pushups == 7) {
        garjas_b3 = 33;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 9) {
      if (pushups >= 20) {
        garjas_b3 = 100;
      } else if (pushups == 19) {
        garjas_b3 = 95;
      } else if (pushups == 18) {
        garjas_b3 = 91;
      } else if (pushups == 17) {
        garjas_b3 = 87;
      } else if (pushups == 16) {
        garjas_b3 = 82;
      } else if (pushups == 15) {
        garjas_b3 = 77;
      } else if (pushups == 14) {
        garjas_b3 = 72;
      } else if (pushups == 13) {
        garjas_b3 = 68;
      } else if (pushups == 12) {
        garjas_b3 = 63;
      } else if (pushups == 11) {
        garjas_b3 = 58;
      } else if (pushups == 10) {
        garjas_b3 = 53;
      } else if (pushups == 9) {
        garjas_b3 = 48;
      } else if (pushups == 8) {
        garjas_b3 = 43;
      } else if (pushups == 7) {
        garjas_b3 = 38;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    } else if (golongan == 10) {
      if (pushups >= 19) {
        garjas_b3 = 100;
      } else if (pushups == 18) {
        garjas_b3 = 96;
      } else if (pushups == 17) {
        garjas_b3 = 92;
      } else if (pushups == 16) {
        garjas_b3 = 87;
      } else if (pushups == 15) {
        garjas_b3 = 82;
      } else if (pushups == 14) {
        garjas_b3 = 77;
      } else if (pushups == 13) {
        garjas_b3 = 73;
      } else if (pushups == 12) {
        garjas_b3 = 68;
      } else if (pushups == 11) {
        garjas_b3 = 63;
      } else if (pushups == 10) {
        garjas_b3 = 58;
      } else if (pushups == 9) {
        garjas_b3 = 53;
      } else if (pushups == 8) {
        garjas_b3 = 48;
      } else if (pushups == 7) {
        garjas_b3 = 43;
      } else if (pushups < 7) {
        garjas_b3 = 0;
      }
    }
  }

  return garjas_b3;
}
