export function tentukanTinggiBerat(tinggi: number, berat: number) {
  let kelompok;
  let bmi;
  let tinggiberat;

  if (tinggi >= 150.0 && tinggi < 150.5) {
    kelompok = 1;
  } else if (tinggi >= 150.5 && tinggi < 151.0) {
    kelompok = 2;
  } else if (tinggi >= 151.0 && tinggi < 151.5) {
    kelompok = 3;
  } else if (tinggi >= 151.5 && tinggi < 152.0) {
    kelompok = 4;
  } else if (tinggi >= 152.0 && tinggi < 152.5) {
    kelompok = 5;
  } else if (tinggi >= 152.5 && tinggi < 153.0) {
    kelompok = 6;
  } else if (tinggi >= 153.0 && tinggi < 153.5) {
    kelompok = 7;
  } else if (tinggi >= 153.5 && tinggi < 154.0) {
    kelompok = 8;
  } else if (tinggi >= 154.0 && tinggi < 154.5) {
    kelompok = 9;
  } else if (tinggi >= 154.5 && tinggi < 155.0) {
    kelompok = 10;
  } else if (tinggi >= 155.0 && tinggi < 155.5) {
    kelompok = 11;
  } else if (tinggi >= 155.5 && tinggi < 156.0) {
    kelompok = 12;
  } else if (tinggi >= 156.0 && tinggi < 156.5) {
    kelompok = 13;
  } else if (tinggi >= 156.5 && tinggi < 157.0) {
    kelompok = 14;
  } else if (tinggi >= 157.0 && tinggi < 157.5) {
    kelompok = 15;
  } else if (tinggi >= 157.5 && tinggi < 158.0) {
    kelompok = 16;
  } else if (tinggi >= 158.0 && tinggi < 158.5) {
    kelompok = 17;
  } else if (tinggi >= 158.5 && tinggi < 159.0) {
    kelompok = 18;
  } else if (tinggi >= 159.0 && tinggi < 159.5) {
    kelompok = 19;
  } else if (tinggi >= 159.5 && tinggi < 160.0) {
    kelompok = 20;
  } else if (tinggi >= 160.0 && tinggi < 160.5) {
    kelompok = 21;
  } else if (tinggi >= 160.5 && tinggi < 161.0) {
    kelompok = 22;
  } else if (tinggi >= 161.0 && tinggi < 161.5) {
    kelompok = 23;
  } else if (tinggi >= 161.5 && tinggi < 162.0) {
    kelompok = 24;
  } else if (tinggi >= 162.0 && tinggi < 162.5) {
    kelompok = 25;
  } else if (tinggi >= 162.5 && tinggi < 163.0) {
    kelompok = 26;
  } else if (tinggi >= 163.0 && tinggi < 163.5) {
    kelompok = 27;
  } else if (tinggi >= 163.5 && tinggi < 164.0) {
    kelompok = 28;
  } else if (tinggi >= 164.0 && tinggi < 164.5) {
    kelompok = 29;
  } else if (tinggi >= 164.5 && tinggi < 165.0) {
    kelompok = 30;
  } else if (tinggi >= 165.0 && tinggi < 165.5) {
    kelompok = 31;
  } else if (tinggi >= 165.5 && tinggi < 166.0) {
    kelompok = 32;
  } else if (tinggi >= 166.0 && tinggi < 166.5) {
    kelompok = 33;
  } else if (tinggi >= 166.5 && tinggi < 167.0) {
    kelompok = 34;
  } else if (tinggi >= 167.0 && tinggi < 167.5) {
    kelompok = 35;
  } else if (tinggi >= 167.5 && tinggi < 168.0) {
    kelompok = 36;
  } else if (tinggi >= 168.0 && tinggi < 168.5) {
    kelompok = 37;
  } else if (tinggi >= 168.5 && tinggi < 169.0) {
    kelompok = 38;
  } else if (tinggi >= 169.0 && tinggi < 169.5) {
    kelompok = 39;
  } else if (tinggi >= 169.5 && tinggi < 170.0) {
    kelompok = 40;
  } else if (tinggi >= 170.0 && tinggi < 170.5) {
    kelompok = 41;
  } else if (tinggi >= 170.5 && tinggi < 171.0) {
    kelompok = 42;
  } else if (tinggi >= 171.0 && tinggi < 171.5) {
    kelompok = 43;
  } else if (tinggi >= 171.5 && tinggi < 172.0) {
    kelompok = 44;
  } else if (tinggi >= 172.0 && tinggi < 172.5) {
    kelompok = 45;
  } else if (tinggi >= 172.5 && tinggi < 173.0) {
    kelompok = 46;
  } else if (tinggi >= 173.0 && tinggi < 173.5) {
    kelompok = 47;
  } else if (tinggi >= 173.5 && tinggi < 174.0) {
    kelompok = 48;
  } else if (tinggi >= 174.0 && tinggi < 174.5) {
    kelompok = 49;
  } else if (tinggi >= 174.5 && tinggi < 175.0) {
    kelompok = 50;
  } else if (tinggi >= 175.0 && tinggi < 175.5) {
    kelompok = 51;
  } else if (tinggi >= 175.5 && tinggi < 176.0) {
    kelompok = 52;
  } else if (tinggi >= 176.0 && tinggi < 176.5) {
    kelompok = 53;
  } else if (tinggi >= 176.5 && tinggi < 177.0) {
    kelompok = 54;
  } else if (tinggi >= 177.0 && tinggi < 177.5) {
    kelompok = 55;
  } else if (tinggi >= 177.5 && tinggi < 178.0) {
    kelompok = 56;
  } else if (tinggi >= 178.0 && tinggi < 178.5) {
    kelompok = 57;
  } else if (tinggi >= 178.5 && tinggi < 179.0) {
    kelompok = 58;
  } else if (tinggi >= 179.0 && tinggi < 179.5) {
    kelompok = 59;
  } else if (tinggi >= 179.5 && tinggi < 180.0) {
    kelompok = 60;
  } else if (tinggi >= 180.0 && tinggi < 180.5) {
    kelompok = 61;
  } else if (tinggi >= 180.5 && tinggi < 181.0) {
    kelompok = 62;
  } else if (tinggi >= 181.0 && tinggi < 181.5) {
    kelompok = 63;
  } else if (tinggi >= 181.5 && tinggi < 182.0) {
    kelompok = 64;
  } else if (tinggi >= 182.0 && tinggi < 182.5) {
    kelompok = 65;
  } else if (tinggi >= 182.5 && tinggi < 183.0) {
    kelompok = 66;
  } else if (tinggi >= 183.0 && tinggi < 183.5) {
    kelompok = 67;
  } else if (tinggi >= 183.5 && tinggi < 184.0) {
    kelompok = 68;
  } else if (tinggi >= 184.0 && tinggi < 184.5) {
    kelompok = 69;
  } else if (tinggi >= 184.5 && tinggi < 185.0) {
    kelompok = 70;
  } else if (tinggi >= 185.0 && tinggi < 185.5) {
    kelompok = 71;
  } else if (tinggi >= 185.5 && tinggi < 186.0) {
    kelompok = 72;
  } else if (tinggi >= 186.0 && tinggi < 186.5) {
    kelompok = 73;
  } else if (tinggi >= 186.5 && tinggi < 187.0) {
    kelompok = 74;
  } else if (tinggi >= 187.0 && tinggi < 187.5) {
    kelompok = 75;
  } else if (tinggi >= 187.5 && tinggi < 188.0) {
    kelompok = 76;
  } else if (tinggi >= 188.0 && tinggi < 188.5) {
    kelompok = 77;
  } else if (tinggi >= 188.5 && tinggi < 189.0) {
    kelompok = 78;
  } else if (tinggi >= 189.0 && tinggi < 189.5) {
    kelompok = 79;
  } else if (tinggi >= 189.5 && tinggi < 190.0) {
    kelompok = 80;
  } else if (tinggi >= 190.0 && tinggi < 190.5) {
    kelompok = 81;
  } else if (tinggi >= 190.5 && tinggi < 191.0) {
    kelompok = 82;
  } else if (tinggi >= 191.0 && tinggi < 191.5) {
    kelompok = 83;
  } else if (tinggi >= 191.5 && tinggi < 192.0) {
    kelompok = 84;
  } else if (tinggi >= 192.0 && tinggi < 192.5) {
    kelompok = 85;
  } else if (tinggi >= 192.5 && tinggi < 193.0) {
    kelompok = 86;
  } else if (tinggi >= 193.0 && tinggi < 193.5) {
    kelompok = 87;
  } else if (tinggi >= 193.5 && tinggi < 194.0) {
    kelompok = 88;
  } else if (tinggi >= 194.0 && tinggi < 194.5) {
    kelompok = 89;
  } else if (tinggi >= 194.5 && tinggi < 195.0) {
    kelompok = 90;
  } else if (tinggi >= 195.0 && tinggi < 195.5) {
    kelompok = 91;
  } else if (tinggi >= 195.5 && tinggi < 196.0) {
    kelompok = 92;
  } else if (tinggi >= 196.0 && tinggi < 196.5) {
    kelompok = 93;
  } else if (tinggi >= 196.5 && tinggi < 197.0) {
    kelompok = 94;
  } else if (tinggi >= 197.0 && tinggi < 197.5) {
    kelompok = 95;
  } else if (tinggi >= 197.5 && tinggi < 198.0) {
    kelompok = 96;
  } else if (tinggi >= 198.0 && tinggi < 198.5) {
    kelompok = 97;
  } else if (tinggi >= 198.5 && tinggi < 199.0) {
    kelompok = 98;
  } else if (tinggi >= 199.0 && tinggi < 199.5) {
    kelompok = 99;
  } else if (tinggi >= 199.5 && tinggi < 200.0) {
    kelompok = 100;
  } else if (tinggi == 200.0) {
    kelompok = 101;
  }
  // LLB (Luar Limit Bawah)
  // LB (Limit Bawah)
  // NB (Normal Bawah)
  // HB (Harmonis Bawah)
  // IB (Ideal Bawah)
  // IA (Ideal Atas)
  // HA (Harmonis Atas)
  // NA (Normal Atas)
  // LA (Limit Atas)
  // LLA (Luar Limit Atas)
  if (kelompok == 1) {
    if (berat > 0 && berat <= 44.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 44.1 && berat <= 45.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 45.9 && berat <= 47.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 47.7 && berat <= 50.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 50.6 && berat <= 53.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 53.5 && berat <= 56.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 56.4 && berat <= 59.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 59.1 && berat <= 61.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 61.2 && berat <= 63.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 63.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 2) {
    if (berat > 0 && berat <= 44.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 44.3 && berat <= 46.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 46.2 && berat <= 47.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 48.0 && berat <= 50.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 50.9 && berat <= 53.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 53.9 && berat <= 56.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 56.8 && berat <= 59.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 59.5 && berat <= 61.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 61.6 && berat <= 63.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 63.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 3) {
    if (berat > 0 && berat <= 44.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 44.6 && berat <= 46.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 46.5 && berat <= 48.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 48.3 && berat <= 51.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 51.3 && berat <= 54.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 54.2 && berat <= 57.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 57.2 && berat <= 59.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 59.9 && berat <= 61.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 62.0 && berat <= 64.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 64.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 4) {
    if (berat > 0 && berat <= 44.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 44.9 && berat <= 46.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 46.8 && berat <= 48.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 48.6 && berat <= 51.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 51.6 && berat <= 54.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 54.6 && berat <= 57.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 57.6 && berat <= 60.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 60.3 && berat <= 62.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 62.4 && berat <= 64.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 64.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 5) {
    if (berat > 0 && berat <= 45.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 45.2 && berat <= 47.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 47.1 && berat <= 48.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 48.9 && berat <= 51.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 51.9 && berat <= 54.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 54.9 && berat <= 57.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 57.9 && berat <= 60.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 60.7 && berat <= 62.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 62.8 && berat <= 65.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 65.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 6) {
    if (berat > 0 && berat <= 45.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 45.5 && berat <= 47.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 47.4 && berat <= 49.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 49.3 && berat <= 52.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 52.3 && berat <= 55.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 55.3 && berat <= 58.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 58.3 && berat <= 61.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 51.1 && berat <= 63.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 63.2 && berat <= 65.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 65.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 7) {
    if (berat > 0 && berat <= 45.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 45.8 && berat <= 47.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 47.7 && berat <= 49.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 49.6 && berat <= 52.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 52.6 && berat <= 55.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 55.7 && berat <= 58.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 58.7 && berat <= 61.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 61.5 && berat <= 63.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 63.6 && berat <= 66.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 66.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 8) {
    if (berat > 0 && berat <= 46.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 46.1 && berat <= 47.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 48.0 && berat <= 49.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 49.9 && berat <= 52.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 53.0 && berat <= 55.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 56.0 && berat <= 59.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 59.1 && berat <= 61.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 61.9 && berat <= 63.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 64.0 && berat <= 66.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 66.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 9) {
    if (berat > 0 && berat <= 46.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 46.4 && berat <= 48.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 48.3 && berat <= 51.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 51.1 && berat <= 53.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 53.3 && berat <= 56.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 56.4 && berat <= 59.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 59.5 && berat <= 62.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 62.3 && berat <= 64.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 64.5 && berat <= 66.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 66.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 10) {
    if (berat > 0 && berat <= 46.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 46.7 && berat <= 48.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 48.6 && berat <= 50.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 50.6 && berat <= 53.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 53.7 && berat <= 56.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 56.8 && berat <= 59.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 59.9 && berat <= 62.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 62.7 && berat <= 64.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 64.9 && berat <= 67.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 67.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 11) {
    if (berat > 0 && berat <= 46.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 47.0 && berat <= 48.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 49.0 && berat <= 50.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 50.9 && berat <= 53.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 54.0 && berat <= 57.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 57.1 && berat <= 60.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 60.3 && berat <= 63.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 63.1 && berat <= 65.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 65.3 && berat <= 67.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 67.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 12) {
    if (berat > 0 && berat <= 47.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 47.3 && berat <= 49.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 49.3 && berat <= 51.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 51.2 && berat <= 54.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 54.4 && berat <= 57.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 57.5 && berat <= 60.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 60.6 && berat <= 63.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 63.5 && berat <= 65.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 65.7 && berat <= 68.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 68.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 13) {
    if (berat > 0 && berat <= 47.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 47.6 && berat <= 49.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 49.6 && berat <= 51.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 51.5 && berat <= 54.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 54.7 && berat <= 57.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 57.9 && berat <= 60.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 61.0 && berat <= 63.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 64.0 && berat <= 66.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 66.1 && berat <= 68.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 68.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 14) {
    if (berat > 0 && berat <= 47.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 48.0 && berat <= 49.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 49.9 && berat <= 51.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 51.9 && berat <= 55.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 55.1 && berat <= 58.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 58.2 && berat <= 61.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 61.4 && berat <= 64.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 64.4 && berat <= 66.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 66.6 && berat <= 69.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 69.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 15) {
    if (berat > 0 && berat <= 48.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 48.3 && berat <= 50.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 50.2 && berat <= 52.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 52.2 && berat <= 55.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 55.4 && berat <= 58.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 58.6 && berat <= 61.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 61.8 && berat <= 64.7) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 64.8 && berat <= 66.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 67.0 && berat <= 69.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 69.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 16) {
    if (berat > 0 && berat <= 48.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 48.6 && berat <= 50.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 50.6 && berat <= 52.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 52.5 && berat <= 55.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 55.8 && berat <= 58.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 59.0 && berat <= 62.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 62.2 && berat <= 65.1) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 65.2 && berat <= 67.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 67.4 && berat <= 69.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 69.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 17) {
    if (berat > 0 && berat <= 48.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 48.9 && berat <= 50.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 50.9 && berat <= 52.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 52.9 && berat <= 56.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 56.1 && berat <= 59.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 59.4 && berat <= 62.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 62.6 && berat <= 65.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 65.6 && berat <= 67.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 67.9 && berat <= 70.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 70.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 18) {
    if (berat > 0 && berat <= 49.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 49.2 && berat <= 51.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 51.2 && berat <= 53.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 53.2 && berat <= 56.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 56.5 && berat <= 59.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 59.7 && berat <= 62.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 63.0 && berat <= 65.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 66.0 && berat <= 68.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 68.3 && berat <= 70.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 70.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 19) {
    if (berat > 0 && berat <= 49.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 49.5 && berat <= 51.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 51.5 && berat <= 53.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 53.5 && berat <= 56.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 56.8 && berat <= 60.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 60.1 && berat <= 63.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 63.4 && berat <= 66.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 66.4 && berat <= 68.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 68.7 && berat <= 71.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 71.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 20) {
    if (berat > 0 && berat <= 49.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 49.8 && berat <= 51.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 51.8 && berat <= 53.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 53.9 && berat <= 57.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 57.2 && berat <= 60.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 60.5 && berat <= 63.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 63.8 && berat <= 66.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 66.9 && berat <= 69.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 69.1 && berat <= 71.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 71.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 21) {
    if (berat > 0 && berat <= 50.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 50.1 && berat <= 52.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 52.2 && berat <= 54.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 54.2 && berat <= 57.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 57.5 && berat <= 60.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 60.9 && berat <= 64.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 64.2 && berat <= 67.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 67.3 && berat <= 69.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 69.6 && berat <= 72.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 72.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 22) {
    if (berat > 0 && berat <= 50.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 50.4 && berat <= 52.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 52.5 && berat <= 54.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 54.6 && berat <= 57.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 57.9 && berat <= 61.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 61.3 && berat <= 64.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 64.6 && berat <= 67.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 67.7 && berat <= 69.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 70.0 && berat <= 72.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 72.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 23) {
    if (berat > 0 && berat <= 50.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 50.8 && berat <= 52.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 52.8 && berat <= 54.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 54.9 && berat <= 58.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 58.3 && berat <= 61.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 61.6 && berat <= 64.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 65.0 && berat <= 68.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 68.1 && berat <= 70.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 70.5 && berat <= 73.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 73.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 24) {
    if (berat > 0 && berat <= 51.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 51.1 && berat <= 53.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 53.2 && berat <= 55.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 55.2 && berat <= 58.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 58.6 && berat <= 61.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 62.0 && berat <= 65.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 65.4 && berat <= 68.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 68.5 && berat <= 70.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 70.9 && berat <= 73.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 73.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 25) {
    if (berat > 0 && berat <= 51.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 51.4 && berat <= 53.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 53.5 && berat <= 55.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 55.6 && berat <= 58.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 59.0 && berat <= 62.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 62.4 && berat <= 65.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 65.8 && berat <= 68.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 69.0 && berat <= 71.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 71.3 && berat <= 74.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 74.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 26) {
    if (berat > 0 && berat <= 51.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 51.7 && berat <= 53.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 53.8 && berat <= 55.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 55.9 && berat <= 59.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 59.4 && berat <= 62.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 62.8 && berat <= 66.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 66.2 && berat <= 69.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 69.4 && berat <= 71.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 71.8 && berat <= 74.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 74.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 27) {
    if (berat > 0 && berat <= 51.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 52.0 && berat <= 54.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 54.2 && berat <= 56.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 56.3 && berat <= 59.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 59.7 && berat <= 63.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 63.2 && berat <= 66.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 66.6 && berat <= 69.7) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 69.8 && berat <= 72.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 72.2 && berat <= 74.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 74.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 28) {
    if (berat > 0 && berat <= 52.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 52.3 && berat <= 54.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 54.5 && berat <= 56.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 56.6 && berat <= 60.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 60.1 && berat <= 63.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 63.6 && berat <= 66.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 67.0 && berat <= 70.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 70.3 && berat <= 72.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 72.7 && berat <= 75.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 75.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 29) {
    if (berat > 0 && berat <= 52.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 52.7 && berat <= 54.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 54.8 && berat <= 56.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 57.0 && berat <= 60.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 60.5 && berat <= 63.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 64.0 && berat <= 67.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 67.5 && berat <= 70.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 70.7 && berat <= 73.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 73.1 && berat <= 75.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 75.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 30) {
    if (berat > 0 && berat <= 52.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 53.0 && berat <= 55.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 55.2 && berat <= 57.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 57.3 && berat <= 60.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 60.8 && berat <= 64.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 64.4 && berat <= 67.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 67.9 && berat <= 71.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 71.1 && berat <= 73.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 73.6 && berat <= 76.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 76.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 31) {
    if (berat > 0 && berat <= 53.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 53.3 && berat <= 55.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 55.5 && berat <= 57.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 57.7 && berat <= 61.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 61.2 && berat <= 64.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 64.7 && berat <= 68.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 68.3 && berat <= 71.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 71.6 && berat <= 73.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 74.0 && berat <= 76.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 76.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 32) {
    if (berat > 0 && berat <= 53.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 53.6 && berat <= 55.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 55.8 && berat <= 57.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 58.0 && berat <= 61.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 61.6 && berat <= 65.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 65.1 && berat <= 68.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 68.7 && berat <= 71.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 72.0 && berat <= 74.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 74.5 && berat <= 77.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 77.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 33) {
    if (berat > 0 && berat <= 53.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 54.0 && berat <= 56.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 56.2 && berat <= 58.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 58.4 && berat <= 61.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 62.0 && berat <= 65.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 65.5 && berat <= 69.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 69.1 && berat <= 72.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 72.4 && berat <= 74.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 74.9 && berat <= 77.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 77.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 34) {
    if (berat > 0 && berat <= 54.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 54.3 && berat <= 56.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 56.5 && berat <= 58.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 58.7 && berat <= 62.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 62.3 && berat <= 65.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 65.9 && berat <= 69.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 69.5 && berat <= 72.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 72.9 && berat <= 75.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 75.4 && berat <= 78.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 78.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 35) {
    if (berat > 0 && berat <= 54.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 54.6 && berat <= 56.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 56.8 && berat <= 59.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 59.1 && berat <= 62.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 62.7 && berat <= 66.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 66.3 && berat <= 69.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 70.0 && berat <= 73.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 73.3 && berat <= 75.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 75.8 && berat <= 78.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 78.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 36) {
    if (berat > 0 && berat <= 54.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 74.9 && berat <= 57.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 57.2 && berat <= 59.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 59.4 && berat <= 63.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 63.1 && berat <= 66.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 66.7 && berat <= 70.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 70.4 && berat <= 73.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 73.7 && berat <= 76.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 76.3 && berat <= 79.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 79.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 37) {
    if (berat > 0 && berat <= 55.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 55.3 && berat <= 57.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 57.5 && berat <= 59.7) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 59.8 && berat <= 63.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 63.5 && berat <= 67.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 67.1 && berat <= 70.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 70.8 && berat <= 74.1) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 74.2 && berat <= 76.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 76.7 && berat <= 79.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 79.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 38) {
    if (berat > 0 && berat <= 55.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 55.6 && berat <= 57.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 57.9 && berat <= 60.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 60.1 && berat <= 63.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 63.8 && berat <= 67.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 67.5 && berat <= 71.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 71.2 && berat <= 74.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 74.6 && berat <= 77.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 77.2 && berat <= 80.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 80.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 39) {
    if (berat > 0 && berat <= 55.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 55.9 && berat <= 58.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 58.2 && berat <= 60.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 60.5 && berat <= 64.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 64.2 && berat <= 67.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 67.9 && berat <= 71.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 71.6 && berat <= 75.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 75.1 && berat <= 77.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 77.6 && berat <= 80.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 80.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 40) {
    if (berat > 0 && berat <= 56.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 56.3 && berat <= 58.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 58.6 && berat <= 60.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 60.9 && berat <= 64.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 64.6 && berat <= 68.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 68.3 && berat <= 72.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 72.1 && berat <= 75.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 75.5 && berat <= 78.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 78.1 && berat <= 81.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 81.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 41) {
    if (berat > 0 && berat <= 56.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 56.6 && berat <= 58.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 58.9 && berat <= 61.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 61.2 && berat <= 64.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 65.0 && berat <= 68.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 68.7 && berat <= 72.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 72.5 && berat <= 75.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 76.0 && berat <= 78.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 78.6 && berat <= 81.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 81.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 42) {
    if (berat > 0 && berat <= 56.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 56.9 && berat <= 59.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 59.3 && berat <= 61.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 61.6 && berat <= 65.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 65.4 && berat <= 69.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 69.1 && berat <= 72.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 72.9 && berat <= 76.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 76.4 && berat <= 78.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 79.0 && berat <= 81.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 81.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 43) {
    if (berat > 0 && berat <= 57.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 57.3 && berat <= 59.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 59.6 && berat <= 61.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 61.9 && berat <= 65.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 65.7 && berat <= 69.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 69.5 && berat <= 73.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 73.3 && berat <= 76.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 76.9 && berat <= 79.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 79.5 && berat <= 82.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 82.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 44) {
    if (berat > 0 && berat <= 57.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 57.6 && berat <= 59.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 60.0 && berat <= 62.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 62.3 && berat <= 66.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 66.1 && berat <= 69.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 70.0 && berat <= 73.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 73.8 && berat <= 77.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 77.3 && berat <= 79.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 80.0 && berat <= 82.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 82.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 45) {
    if (berat > 0 && berat <= 57.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 57.9 && berat <= 60.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 60.3 && berat <= 62.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 62.7 && berat <= 66.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 66.5 && berat <= 70.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 70.4 && berat <= 74.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 74.2 && berat <= 77.7) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 80.4 && berat <= 80.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 83.5 && berat <= 83.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 83.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 46) {
    if (berat > 0 && berat <= 58.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 58.3 && berat <= 60.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 60.7 && berat <= 62.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 63.0 && berat <= 66.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 66.9 && berat <= 70.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 70.8 && berat <= 74.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 74.6 && berat <= 78.1) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 78.2 && berat <= 80.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 80.9 && berat <= 83.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 83.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 47) {
    if (berat > 0 && berat <= 58.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 58.6 && berat <= 60.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 61.0 && berat <= 63.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 63.4 && berat <= 67.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 67.3 && berat <= 71.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 71.2 && berat <= 75.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 75.1 && berat <= 78.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 78.7 && berat <= 81.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 81.4 && berat <= 84.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 84.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 48) {
    if (berat > 0 && berat <= 58.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 59.0 && berat <= 61.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 61.4 && berat <= 63.7) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 63.8 && berat <= 67.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 67.7 && berat <= 71.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 71.6 && berat <= 75.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 75.5 && berat <= 79.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 79.1 && berat <= 81.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 81.8 && berat <= 84.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 84.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 49) {
    if (berat > 0 && berat <= 59.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 59.3 && berat <= 61.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 61.7 && berat <= 64.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 64.1 && berat <= 68.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 68.1 && berat <= 71.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 72.0 && berat <= 75.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 75.9 && berat <= 79.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 79.6 && berat <= 82.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 82.3 && berat <= 85.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 85.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 50) {
    if (berat > 0 && berat <= 59.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 59.6 && berat <= 62.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 62.1 && berat <= 64.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 64.5 && berat <= 68.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 68.5 && berat <= 72.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 72.4 && berat <= 76.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 76.4 && berat <= 79.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 80.0 && berat <= 82.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 82.8 && berat <= 85.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 85.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 51) {
    if (berat > 0 && berat <= 59.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 60.0 && berat <= 62.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 62.4 && berat <= 64.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 64.9 && berat <= 68.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 68.9 && berat <= 72.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 72.8 && berat <= 76.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 76.8 && berat <= 80.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 80.5 && berat <= 83.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 83.2 && berat <= 86.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 86.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 52) {
    if (berat > 0 && berat <= 60.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 60.3 && berat <= 62.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 62.8 && berat <= 65.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 65.2 && berat <= 69.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 69.3 && berat <= 73.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 73.3 && berat <= 77.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 77.3 && berat <= 80.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 81.0 && berat <= 83.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 83.7 && berat <= 86.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 86.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 53) {
    if (berat > 0 && berat <= 60.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 60.7 && berat <= 63.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 63.1 && berat <= 65.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 65.6 && berat <= 69.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 69.6 && berat <= 73.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 73.7 && berat <= 77.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 77.7 && berat <= 81.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 81.4 && berat <= 84.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 84.2 && berat <= 87.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 87.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 54) {
    if (berat > 0 && berat <= 60.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 61.0 && berat <= 63.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 63.5 && berat <= 65.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 66.0 && berat <= 69.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 70.0 && berat <= 74.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 74.1 && berat <= 78.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 78.1 && berat <= 81.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 81.9 && berat <= 84.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 84.7 && berat <= 87.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 87.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 55) {
    if (berat > 0 && berat <= 61.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 61.4 && berat <= 63.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 63.9 && berat <= 66.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 66.4 && berat <= 70.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 70.4 && berat <= 74.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 74.5 && berat <= 78.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 78.6 && berat <= 82.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 82.3 && berat <= 85.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 85.2 && berat <= 88.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 88.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 56) {
    if (berat > 0 && berat <= 61.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 61.7 && berat <= 64.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 64.2 && berat <= 66.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 66.7 && berat <= 70.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 70.8 && berat <= 74.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 74.9 && berat <= 78.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 79.0 && berat <= 82.7) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 82.8 && berat <= 85.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 85.6 && berat <= 88.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 88.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 57) {
    if (berat > 0 && berat <= 62.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 62.1 && berat <= 64.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 64.6 && berat <= 67.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 67.1 && berat <= 71.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 71.2 && berat <= 75.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 75.4 && berat <= 79.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 79.5 && berat <= 83.2) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 83.3 && berat <= 86.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 86.1 && berat <= 89.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 89.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 58) {
    if (berat > 0 && berat <= 62.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 62.4 && berat <= 64.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 64.9 && berat <= 67.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 67.5 && berat <= 71.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 71.6 && berat <= 75.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 75.8 && berat <= 79.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 79.9 && berat <= 83.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 83.7 && berat <= 86.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 86.6 && berat <= 89.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 89.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 59) {
    if (berat > 0 && berat <= 62.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 62.8 && berat <= 65.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 65.3 && berat <= 67.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 67.9 && berat <= 71.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 72.0 && berat <= 76.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 76.2 && berat <= 80.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 80.4 && berat <= 84.1) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 84.2 && berat <= 87.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 87.1 && berat <= 90.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 90.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 60) {
    if (berat > 0 && berat <= 63.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 63.1 && berat <= 65.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 65.7 && berat <= 68.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 68.3 && berat <= 72.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 72.4 && berat <= 76.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 76.6 && berat <= 80.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 80.8 && berat <= 84.6) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 84.7 && berat <= 87.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 87.6 && berat <= 90.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 90.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 61) {
    if (berat > 0 && berat <= 63.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 63.5 && berat <= 65.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 66.0 && berat <= 68.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 68.6 && berat <= 72.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 72.8 && berat <= 77.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 77.1 && berat <= 81.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 81.3 && berat <= 85.1) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 85.2 && berat <= 88.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 88.1 && berat <= 91.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 91.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 62) {
    if (berat > 0 && berat <= 63.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 63.8 && berat <= 66.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 66.4 && berat <= 68.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 69.0 && berat <= 73.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 73.3 && berat <= 77.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 77.5 && berat <= 81.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 81.7 && berat <= 85.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 85.6 && berat <= 88.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 88.6 && berat <= 91.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 91.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 63) {
    if (berat > 0 && berat <= 64.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 64.2 && berat <= 66.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 66.8 && berat <= 69.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 69.4 && berat <= 73.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 73.7 && berat <= 77.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 77.9 && berat <= 82.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 82.2 && berat <= 86.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 86.1 && berat <= 89.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 89.1 && berat <= 92.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 92.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 64) {
    if (berat > 0 && berat <= 64.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 64.5 && berat <= 67.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 67.2 && berat <= 69.7) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 69.8 && berat <= 74.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 74.1 && berat <= 78.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 78.4 && berat <= 82.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 82.6 && berat <= 86.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 86.6 && berat <= 89.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 89.6 && berat <= 92.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 92.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 65) {
    if (berat > 0 && berat <= 64.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 64.9 && berat <= 67.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 67.5 && berat <= 70.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 70.2 && berat <= 74.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 74.5 && berat <= 78.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 78.8 && berat <= 83.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 83.1 && berat <= 87.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 87.1 && berat <= 89.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 90.0 && berat <= 93.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 93.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 66) {
    if (berat > 0 && berat <= 65.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 65.2 && berat <= 67.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 67.9 && berat <= 70.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 70.6 && berat <= 74.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 74.9 && berat <= 79.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 79.2 && berat <= 83.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 83.5 && berat <= 87.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 87.5 && berat <= 90.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 90.5 && berat <= 93.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 94.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 67) {
    if (berat > 0 && berat <= 65.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 65.6 && berat <= 68.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 68.3 && berat <= 70.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 70.9 && berat <= 75.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 75.3 && berat <= 79.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 79.7 && berat <= 83.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 84.0 && berat <= 87.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 88.0 && berat <= 90.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 91.0 && berat <= 94.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 94.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 68) {
    if (berat > 0 && berat <= 65.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 65.9 && berat <= 68.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 68.6 && berat <= 71.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 71.3 && berat <= 75.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 75.7 && berat <= 80.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 80.1 && berat <= 84.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 84.5 && berat <= 88.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 88.5 && berat <= 91.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 91.5 && berat <= 94.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 95.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 69) {
    if (berat > 0 && berat <= 66.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 66.3 && berat <= 68.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 69.0 && berat <= 71.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 71.7 && berat <= 76.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 76.1 && berat <= 80.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 80.5 && berat <= 84.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 84.9 && berat <= 88.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 89.0 && berat <= 91.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 92.0 && berat <= 95.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 95.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 70) {
    if (berat > 0 && berat <= 66.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 66.7 && berat <= 69.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 69.4 && berat <= 72.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 72.1 && berat <= 76.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 76.5 && berat <= 80.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 81.0 && berat <= 85.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 85.4 && berat <= 89.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 89.5 && berat <= 92.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 92.5 && berat <= 95.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 96.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 71) {
    if (berat > 0 && berat <= 66.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 67.0 && berat <= 69.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 69.8 && berat <= 72.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 72.5 && berat <= 76.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 77.0 && berat <= 81.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 81.4 && berat <= 85.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 85.9 && berat <= 89.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 90.0 && berat <= 92.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 93.0 && berat <= 96.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 96.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 72) {
    if (berat > 0 && berat <= 67.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 67.4 && berat <= 70.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 70.1 && berat <= 72.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 72.9 && berat <= 77.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 77.4 && berat <= 81.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 81.8 && berat <= 86.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 86.3 && berat <= 90.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 90.4 && berat <= 93.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 93.5 && berat <= 97.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 97.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 73) {
    if (berat > 0 && berat <= 67.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 67.8 && berat <= 70.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 70.5 && berat <= 73.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 73.3 && berat <= 77.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 77.8 && berat <= 82.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 82.3 && berat <= 86.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 86.8 && berat <= 90.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 90.9 && berat <= 94.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 94.1 && berat <= 97.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 97.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 74) {
    if (berat > 0 && berat <= 68.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 68.1 && berat <= 70.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 70.9 && berat <= 73.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 73.7 && berat <= 78.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 78.2 && berat <= 82.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 82.7 && berat <= 87.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 87.3 && berat <= 91.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 91.4 && berat <= 94.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 94.6 && berat <= 98.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 98.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 75) {
    if (berat > 0 && berat <= 68.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 68.5 && berat <= 71.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 71.3 && berat <= 74.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 74.1 && berat <= 78.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 78.6 && berat <= 83.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 83.2 && berat <= 87.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 87.7 && berat <= 91.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 91.9 && berat <= 95.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 95.1 && berat <= 98.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 98.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 76) {
    if (berat > 0 && berat <= 68.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 68.9 && berat <= 71.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 71.7 && berat <= 74.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 74.5 && berat <= 79.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 79.1 && berat <= 83.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 83.6 && berat <= 88.1) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 88.2 && berat <= 92.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 92.4 && berat <= 95.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 95.6 && berat <= 99.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 99.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 77) {
    if (berat > 0 && berat <= 69.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 69.2 && berat <= 72.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 72.1 && berat <= 74.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 74.9 && berat <= 79.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 79.5 && berat <= 84.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 84.1 && berat <= 88.6) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 88.7 && berat <= 92.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 92.9 && berat <= 96.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 96.1 && berat <= 99.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 99.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 78) {
    if (berat > 0 && berat <= 69.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 69.6 && berat <= 72.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 72.4 && berat <= 75.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 75.3 && berat <= 79.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 79.9 && berat <= 84.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 84.5 && berat <= 89.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 89.1 && berat <= 93.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 93.4 && berat <= 96.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 96.6 && berat <= 100.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 100.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 79) {
    if (berat > 0 && berat <= 69.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 70.0 && berat <= 72.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 72.8 && berat <= 75.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 75.7 && berat <= 80.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 80.3 && berat <= 84.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 85.0 && berat <= 89.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 89.6 && berat <= 93.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 93.9 && berat <= 97.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 97.1 && berat <= 100.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 100.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 80) {
    if (berat > 0 && berat <= 70.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 70.3 && berat <= 73.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 73.2 && berat <= 76.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 76.1 && berat <= 80.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 80.7 && berat <= 85.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 85.4 && berat <= 90.0) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 90.1 && berat <= 94.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 94.4 && berat <= 97.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 97.6 && berat <= 101.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 101.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 81) {
    if (berat > 0 && berat <= 70.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 70.7 && berat <= 73.5) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 73.6 && berat <= 76.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 76.5 && berat <= 81.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 81.2 && berat <= 85.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 85.9 && berat <= 90.5) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 90.6 && berat <= 94.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 94.9 && berat <= 98.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 98.1 && berat <= 101.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 101.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 82) {
    if (berat > 0 && berat <= 71.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 71.1 && berat <= 73.9) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 74.0 && berat <= 76.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 76.9 && berat <= 81.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 81.6 && berat <= 86.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 86.3 && berat <= 90.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 91.0 && berat <= 95.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 95.4 && berat <= 98.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 98.7 && berat <= 102.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 102.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 83) {
    if (berat > 0 && berat <= 71.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 71.5 && berat <= 74.3) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 74.4 && berat <= 77.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 77.3 && berat <= 81.9) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 82.0 && berat <= 86.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 86.8 && berat <= 91.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 91.5 && berat <= 95.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 95.9 && berat <= 99.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 99.2 && berat <= 102.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 102.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 84) {
    if (berat > 0 && berat <= 71.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 71.8 && berat <= 74.7) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 74.8 && berat <= 77.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 77.7 && berat <= 82.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 82.5 && berat <= 87.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 87.2 && berat <= 91.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 92.0 && berat <= 96.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 96.4 && berat <= 99.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 99.7 && berat <= 103.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 103.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 85) {
    if (berat > 0 && berat <= 72.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 72.2 && berat <= 75.1) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 75.2 && berat <= 78.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 78.1 && berat <= 82.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 82.9 && berat <= 87.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 87.7 && berat <= 92.4) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 92.5 && berat <= 96.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 96.9 && berat <= 100.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 100.2 && berat <= 103.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 104.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 86) {
    if (berat > 0 && berat <= 72.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 72.6 && berat <= 75.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 75.5 && berat <= 78.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 78.5 && berat <= 83.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 83.3 && berat <= 88.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 88.1 && berat <= 92.9) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 93.0 && berat <= 97.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 97.4 && berat <= 100.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 100.7 && berat <= 104.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 104.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 87) {
    if (berat > 0 && berat <= 72.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 73.0 && berat <= 75.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 75.9 && berat <= 78.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 78.9 && berat <= 83.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 83.8 && berat <= 88.5) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 88.6 && berat <= 93.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 93.4 && berat <= 97.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 97.9 && berat <= 101.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 101.3 && berat <= 105.0) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 105.1) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 88) {
    if (berat > 0 && berat <= 73.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 73.3 && berat <= 76.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 76.3 && berat <= 79.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 79.3 && berat <= 84.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 84.2 && berat <= 89.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 89.1 && berat <= 93.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 93.9 && berat <= 98.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 98.4 && berat <= 101.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 101.8 && berat <= 105.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 105.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 89) {
    if (berat > 0 && berat <= 73.6) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 73.7 && berat <= 76.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 76.7 && berat <= 79.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 79.7 && berat <= 84.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 84.6 && berat <= 89.4) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 89.5 && berat <= 94.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 94.4 && berat <= 98.8) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 98.9 && berat <= 102.2) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 102.3 && berat <= 106.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 106.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 90) {
    if (berat > 0 && berat <= 74.0) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 74.1 && berat <= 77.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 77.1 && berat <= 80.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 80.2 && berat <= 85.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 85.1 && berat <= 89.9) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 90.0 && berat <= 94.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 94.9 && berat <= 99.3) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 99.4 && berat <= 102.7) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 102.8 && berat <= 106.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 106.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 91) {
    if (berat > 0 && berat <= 74.4) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 74.5 && berat <= 77.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 77.5 && berat <= 80.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 80.6 && berat <= 85.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 85.5 && berat <= 90.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 90.4 && berat <= 95.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 95.4 && berat <= 99.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 100.0 && berat <= 103.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 103.4 && berat <= 107.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 107.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 92) {
    if (berat > 0 && berat <= 74.8) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 74.9 && berat <= 77.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 77.9 && berat <= 80.9) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 81.0 && berat <= 85.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 85.9 && berat <= 90.8) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 90.9 && berat <= 95.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 95.9 && berat <= 100.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 100.5 && berat <= 103.8) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 103.9 && berat <= 107.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 107.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 93) {
    if (berat > 0 && berat <= 75.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 75.2 && berat <= 78.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 78.3 && berat <= 81.3) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 81.4 && berat <= 86.3) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 86.4 && berat <= 91.3) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 91.4 && berat <= 96.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 96.4 && berat <= 100.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 101.0 && berat <= 104.3) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 104.4 && berat <= 108.3) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 108.4) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 94) {
    if (berat > 0 && berat <= 75.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 75.6 && berat <= 78.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 78.7 && berat <= 81.7) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 81.8 && berat <= 86.7) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 86.8 && berat <= 91.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 91.8 && berat <= 96.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 96.9 && berat <= 101.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 101.5 && berat <= 104.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 105.0 && berat <= 108.8) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 108.9) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 95) {
    if (berat > 0 && berat <= 75.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 76.0 && berat <= 79.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 79.1 && berat <= 82.1) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 82.2 && berat <= 87.2) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 87.3 && berat <= 92.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 92.3 && berat <= 97.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 97.4 && berat <= 101.9) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 102.0 && berat <= 105.4) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 105.5 && berat <= 109.4) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 109.5) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 96) {
    if (berat > 0 && berat <= 76.3) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 76.4 && berat <= 79.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 79.5 && berat <= 82.5) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 82.6 && berat <= 87.6) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 87.7 && berat <= 92.7) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 92.8 && berat <= 97.8) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 97.9 && berat <= 102.4) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 102.5 && berat <= 105.9) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 106.0 && berat <= 109.9) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 110.0) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 97) {
    if (berat > 0 && berat <= 76.7) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 76.8 && berat <= 79.8) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 79.9 && berat <= 83.0) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 83.1 && berat <= 88.1) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 88.2 && berat <= 93.2) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 93.3 && berat <= 98.3) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 98.4 && berat <= 103.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 103.1 && berat <= 106.5) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 106.6 && berat <= 110.5) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 110.6) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 98) {
    if (berat > 0 && berat <= 77.1) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 77.2 && berat <= 80.2) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 80.3 && berat <= 83.4) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 83.5 && berat <= 88.5) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 88.6 && berat <= 93.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 93.7 && berat <= 98.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 98.8 && berat <= 103.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 103.6 && berat <= 107.0) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 107.1 && berat <= 111.1) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 111.2) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 99) {
    if (berat > 0 && berat <= 77.5) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 77.6 && berat <= 80.6) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 80.7 && berat <= 83.8) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 83.9 && berat <= 89.0) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 89.1 && berat <= 94.1) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 94.2 && berat <= 99.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 99.3 && berat <= 104.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 104.1 && berat <= 107.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 107.7 && berat <= 111.6) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 111.7) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 100) {
    if (berat > 0 && berat <= 77.9) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 78.0 && berat <= 81.0) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 81.1 && berat <= 84.2) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 84.3 && berat <= 89.4) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 89.5 && berat <= 94.6) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 94.7 && berat <= 99.7) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 99.8 && berat <= 104.5) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 104.6 && berat <= 108.1) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 108.2 && berat <= 112.2) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 112.3) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  } else if (kelompok == 101) {
    if (berat > 0 && berat <= 78.2) {
      tinggiberat = "LLB (Luar Limit Bawah)";
      bmi = "<= 19.5";
    } else if (berat >= 78.3 && berat <= 81.4) {
      tinggiberat = "LB (Limit Bawah)";
      bmi = "19.6 - 20.3";
    } else if (berat >= 81.5 && berat <= 84.6) {
      tinggiberat = "NB (Normal Bawah)";
      bmi = "20.4 - 21.1";
    } else if (berat >= 84.7 && berat <= 89.8) {
      tinggiberat = "HB (Harmonis Bawah)";
      bmi = "21.2 - 22.4";
    } else if (berat >= 89.9 && berat <= 95.0) {
      tinggiberat = "IB (Ideal Bawah)";
      bmi = "22.5 - 23.7";
    } else if (berat >= 95.1 && berat <= 100.2) {
      tinggiberat = "IA (Ideal Atas)";
      bmi = "23.8 - 25.0";
    } else if (berat >= 100.3 && berat <= 105.0) {
      tinggiberat = "HA (Harmonis Atas)";
      bmi = "25.1 - 26.2";
    } else if (berat >= 105.1 && berat <= 108.6) {
      tinggiberat = "NA (Normal Atas)";
      bmi = "26.3 - 27.1";
    } else if (berat >= 108.7 && berat <= 112.7) {
      tinggiberat = "LA (Limit Atas)";
      bmi = "27.2 - 28.2";
    } else if (berat > 112.8) {
      tinggiberat = "LLA (Luar Limit Atas)";
      bmi = ">= 28.3";
    }
  }

  return { nilai: tinggiberat, nilai_bmi: bmi };
}
