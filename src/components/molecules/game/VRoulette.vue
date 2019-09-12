<template>
  <transition :name="`slide-${direction}`">
    <div class="v-roulette">
      <!--<img src="../../../assets/img/roulette-test.png" v-if="1">-->
      <svg v-if="1" width="100vh" height="100vh" viewBox="175 155 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g filter="url(#filter0_d)">
          <path d="M259.763 458.239C183.307 590.665 157.545 752.122 200.16 911.163C242.85 1070.48 346.169 1197.35 478.239 1273.61C610.385 1350.14 771.917 1376.18 931.238 1333.49C1090.56 1290.8 1217.43 1187.48 1293.68 1055.41C1370.14 922.983 1395.9 761.526 1353.28 602.485C1310.59 443.164 1207.27 316.294 1075.2 240.043C942.778 163.587 781.321 137.825 622.28 180.44C462.809 222.57 336.219 325.814 259.763 458.239Z" fill="url(#paint0_linear)"/>
          <path d="M1063.57 259.364L1009.2 274.834C908.887 226.386 793.132 208.786 676.921 230.921L627.497 202.15L599.92 251.554C488.21 290.49 396.689 363.33 334.039 455.443L278.804 469.943L294.274 524.318C245.826 624.631 228.226 740.386 250.286 856.317L221.515 905.741L270.919 933.318C309.854 1045.03 382.694 1136.55 474.808 1199.2L489.308 1254.43L543.683 1238.96C643.995 1287.41 759.751 1305.01 875.962 1282.88L925.386 1311.65L952.963 1262.24C1064.67 1223.31 1156.19 1150.47 1218.84 1058.36L1274.08 1043.86L1258.61 989.48C1307.06 889.167 1324.66 773.412 1302.52 657.201L1331.29 607.777L1281.89 580.2C1242.95 468.49 1170.11 376.969 1078 314.32L1063.57 259.364Z" fill="url(#paint1_linear)"/>
          <path d="M519.85 1201.54L776.684 756.685L280.521 889.631C317.208 1026.55 406.166 1135.66 519.85 1201.54Z" fill="white"/>
          <path d="M1272.85 623.738L776.684 756.685L1221.53 1013.52C1287.33 899.555 1309.54 760.659 1272.85 623.738Z" fill="#ED1B24"/>
          <path d="M1033.52 311.834C919.554 246.036 780.658 223.833 643.737 260.52L776.684 756.684L1033.52 311.834Z" fill="#ED1B24"/>
          <path d="M519.85 1201.53C633.814 1267.33 772.71 1289.54 909.631 1252.85L776.684 756.684L519.85 1201.53Z" fill="#ED1B24"/>
          <path d="M776.684 756.684L1272.85 623.737C1236.16 486.816 1147.48 377.631 1033.52 311.833L776.684 756.684Z" fill="white"/>
          <path d="M776.684 756.684L643.737 260.52C506.816 297.208 397.631 385.885 331.833 499.849L776.684 756.684Z" fill="white"/>
          <path d="M280.52 889.631L776.684 756.684L331.833 499.849C266.316 613.739 243.832 752.71 280.52 889.631Z" fill="#ED1B24"/>
          <path d="M776.684 756.684L909.631 1252.85C1046.55 1216.16 1155.74 1127.48 1221.53 1013.52L776.684 756.684Z" fill="white"/>
          <g filter="url(#filter1_d)">
            <path d="M1335.18 813.808C1327.29 815.921 1322.61 824.027 1324.73 831.914C1326.84 839.801 1334.95 844.481 1342.83 842.368C1350.72 840.255 1355.4 832.148 1353.29 824.261C1351.17 816.375 1343.07 811.694 1335.18 813.808Z" fill="url(#paint2_radial)"/>
          </g>
          <!--<g filter="url(#filter2_d)">-->
          <!--<path d="M1329.05 790.912C1308.58 796.399 1296.42 817.448 1301.91 837.926C1307.4 858.403 1328.45 870.556 1348.93 865.069C1369.4 859.582 1381.56 838.533 1376.07 818.055C1370.58 797.577 1349.53 785.425 1329.05 790.912Z" fill="url(#paint3_radial)"/>-->
          <!--</g>-->
          <path d="M209.47 670.384C201.583 672.498 196.903 680.604 199.016 688.491C201.129 696.377 209.236 701.058 217.122 698.944C225.009 696.831 229.689 688.725 227.576 680.838C225.463 672.951 217.356 668.271 209.47 670.384Z" fill="url(#paint4_radial)"/>
          <path d="M1228.76 423.374C1232.68 422.324 1235.95 419.948 1237.72 416.473C1241.82 409.373 1239.34 400.133 1232.24 396.033C1228.69 393.983 1224.68 393.559 1221.04 394.534C1217.12 395.584 1213.85 397.96 1212.08 401.435C1207.98 408.536 1210.46 417.776 1217.56 421.875C1220.83 424 1224.84 424.425 1228.76 423.374Z" fill="url(#paint5_radial)"/>
          <path d="M323.539 1089.38C319.619 1090.43 316.354 1092.8 314.584 1096.28C310.484 1103.38 312.96 1112.62 320.061 1116.72C323.611 1118.77 327.626 1119.19 331.266 1118.22C335.186 1117.17 338.451 1114.79 340.221 1111.32C342.271 1107.77 342.695 1103.75 341.72 1100.11C340.67 1096.19 338.294 1092.93 334.819 1091.16C331.474 1088.75 327.459 1088.33 323.539 1089.38Z" fill="url(#paint6_radial)"/>
          <path d="M851.689 207.8C859.529 205.7 864.244 197.534 862.143 189.694C860.042 181.854 851.876 177.14 844.036 179.24C840.116 180.291 836.851 182.666 835.082 186.141C833.032 189.692 832.607 193.707 833.583 197.347C835.683 205.187 843.849 209.901 851.689 207.8Z" fill="url(#paint7_radial)"/>
          <path d="M700.614 1304.95C692.774 1307.05 688.059 1315.22 690.16 1323.06C692.261 1330.9 700.426 1335.61 708.266 1333.51C716.106 1331.41 720.821 1323.25 718.72 1315.41C716.619 1307.57 708.454 1302.85 700.614 1304.95Z" fill="url(#paint8_radial)"/>
          <path d="M432.771 322.15C436.691 321.099 439.956 318.724 441.725 315.249C443.775 311.698 444.2 307.683 443.224 304.043C442.174 300.123 439.799 296.858 436.323 295.088C432.773 293.039 428.758 292.614 425.118 293.589C421.198 294.64 417.933 297.015 416.163 300.49C412.064 307.591 414.54 316.831 421.64 320.931C424.761 322.495 428.851 323.2 432.771 322.15Z" fill="url(#paint9_radial)"/>
          <path d="M1110.65 1197.78C1106.55 1204.88 1109.03 1214.12 1116.13 1218.22C1119.68 1220.27 1123.69 1220.7 1127.33 1219.72C1131.25 1218.67 1134.52 1216.3 1136.29 1212.82C1140.39 1205.72 1137.91 1196.48 1130.81 1192.38C1127.26 1190.33 1123.25 1189.91 1119.61 1190.88C1115.69 1191.93 1112.7 1194.23 1110.65 1197.78Z" fill="url(#paint10_radial)"/>
          <path d="M678.781 926.668C724.224 952.904 777.077 959.75 827.477 946.245L828.752 951.005C776.952 964.885 722.55 957.855 676.041 931.003L678.781 926.668Z" fill="white"/>
          <path d="M582.362 808.752L587.122 807.477C600.702 858.157 633.057 900.506 678.425 926.463L678.78 926.668L677.27 928.873L676.041 931.003C629.532 904.151 596.317 860.833 582.362 808.752Z" fill="#ED1B24"/>
          <path d="M602.365 656.041L606.625 658.501C580.388 703.944 573.543 756.797 587.047 807.197L582.287 808.472C568.482 756.952 575.513 702.55 602.365 656.041Z" fill="white"/>
          <path d="M724.616 562.363L725.891 567.123C675.211 580.703 632.863 613.057 606.906 658.426L602.645 655.966C629.217 609.533 672.816 576.243 724.616 562.363Z" fill="#ED1B24"/>
          <path d="M724.615 562.363C776.416 548.483 830.818 555.514 877.327 582.366L874.867 586.626C829.423 560.389 776.571 553.543 726.171 567.048L724.895 562.288L724.615 562.363Z" fill="white"/>
          <path d="M877.327 582.365C923.836 609.217 957.405 652.741 971.285 704.541L966.525 705.816C952.945 655.136 920.591 612.788 875.222 586.831L877.327 582.365Z" fill="#FC003C"/>
          <path d="M966.245 705.892L971.005 704.616C984.885 756.417 977.855 810.819 951.003 857.328L946.742 854.868C972.699 809.499 979.825 756.572 966.245 705.892Z" fill="white"/>
          <path d="M946.742 854.867L951.002 857.327C924.151 903.836 880.832 937.051 828.752 951.005L827.476 946.245C878.157 932.666 920.43 900.031 946.742 854.867Z" fill="#FC003C"/>
          <path d="M621.004 175.68C776.126 134.115 938.212 155.507 1077.38 235.857C1216.55 316.208 1315.77 445.678 1357.61 600.724L1357.69 601.004C1399.25 756.126 1377.86 918.212 1297.51 1057.38C1217.16 1196.55 1087.48 1296.12 932.364 1337.69C777.243 1379.25 615.156 1357.86 475.985 1277.51C336.814 1197.16 237.244 1067.48 195.68 912.364L195.605 912.084C154.04 756.963 175.507 595.156 255.857 455.985C336.208 316.814 465.883 217.244 621.004 175.68ZM1349.36 603.535L1349.29 603.255C1308.32 450.374 1210.12 322.434 1073.08 243.313C936.038 164.192 776.136 143.115 623.255 184.08C470.374 225.044 342.434 323.248 263.313 460.289C184.192 597.33 163.115 757.232 204.08 910.113L204.155 910.393C245.119 1063.27 343.248 1190.93 480.289 1270.06C617.61 1349.1 777.232 1370.25 930.113 1329.29C1082.99 1288.32 1210.93 1190.12 1290.06 1053.08C1369.18 916.038 1390.33 756.416 1349.36 603.535Z" fill="url(#paint11_linear)"/>
          <path d="M621.004 175.68C776.126 134.115 938.212 155.507 1077.38 235.857C1216.55 316.208 1315.77 445.678 1357.61 600.724L1357.69 601.004C1399.25 756.126 1377.86 918.212 1297.51 1057.38C1217.16 1196.55 1087.48 1296.12 932.364 1337.69C777.243 1379.25 615.156 1357.86 475.985 1277.51C336.814 1197.16 237.244 1067.48 195.68 912.364L195.605 912.084C154.04 756.963 175.507 595.156 255.857 455.985C336.208 316.814 465.883 217.244 621.004 175.68ZM1349.36 603.535L1349.29 603.255C1308.32 450.374 1210.12 322.434 1073.08 243.313C936.038 164.192 776.136 143.115 623.255 184.08C470.374 225.044 342.434 323.248 263.313 460.289C184.192 597.33 163.115 757.232 204.08 910.113L204.155 910.393C245.119 1063.27 343.248 1190.93 480.289 1270.06C617.61 1349.1 777.232 1370.25 930.113 1329.29C1082.99 1288.32 1210.93 1190.12 1290.06 1053.08C1369.18 916.038 1390.33 756.416 1349.36 603.535Z" fill="url(#paint12_linear)"/>
          <g filter="url(#filter3_d)">
            <path d="M641.487 252.12C776.168 216.032 916.759 234.481 1037.82 304.378C1158.53 374.07 1245.16 486.805 1281.25 621.487C1317.34 756.168 1298.89 896.758 1228.99 1017.82C1159.3 1138.53 1046.84 1225.09 911.882 1261.25L911.602 1261.32C777.201 1297.34 636.61 1278.89 515.545 1208.99C394.836 1139.3 308.208 1026.56 272.12 891.882C236.033 757.2 254.481 616.61 324.378 495.545C394.07 374.835 506.601 288.563 640.927 252.27L641.487 252.12ZM909.836 1252.49C1042 1217.08 1152.79 1132.17 1221.18 1013.31C1289.85 894.379 1308.06 756.253 1272.57 623.812C1237.08 491.371 1152.17 380.575 1033.31 312.188C914.734 243.726 776.329 225.593 644.093 260.725L643.813 260.8C511.372 296.288 400.575 381.195 332.189 500.054C263.522 618.989 245.313 757.115 280.801 889.556C316.288 1022 401.195 1132.79 520.13 1201.46C638.709 1269.92 777.115 1288.06 909.556 1252.57L909.836 1252.49Z" fill="#E6E7E8"/>
          </g>
          <rect x="1092.45" y="425.229" width="141.455" height="141.455" transform="rotate(53.5769 1092.45 425.229)" fill="url(#pattern0)"/>
          <rect x="448.409" y="444.052" width="141.455" height="141.455" transform="rotate(-38.0383 448.409 444.052)" fill="url(#pattern1)"/>
          <rect x="454.763" y="1081.18" width="141.455" height="141.455" transform="rotate(-126.127 454.763 1081.18)" fill="url(#pattern2)"/>
          <rect x="1105.89" y="1068.74" width="141.455" height="141.455" transform="rotate(141.752 1105.89 1068.74)" fill="url(#pattern3)"/>
          <rect x="788.551" y="1213.85" width="141.268" height="141.268" transform="rotate(-172.147 788.551 1213.85)" fill="url(#pattern4)"/>
          <!--<g filter="url(#filter4_d)">-->
          <rect x="318.524" y="762.941" width="141.268" height="141.268" transform="rotate(-81.0036 318.524 762.941)" fill="url(#pattern5)"/>
          <!--</g>-->
          <rect x="764.568" y="302.727" width="141.268" height="141.268" transform="rotate(8.39184 764.568 302.727)" fill="url(#pattern6)"/>
          <rect x="1217.36" y="752.601" width="141.268" height="141.268" transform="rotate(98.3851 1217.36 752.601)" fill="url(#pattern7)"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="1533.37" height="1533.37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="-10" dy="10"/>
            <feGaussianBlur stdDeviation="15"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="filter1_d" x="1304.22" y="797.3" width="69.5751" height="69.5751" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="filter2_d" x="1280.59" y="773.594" width="116.792" height="116.792" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="filter3_d" x="126.923" y="111.923" width="1299.52" height="1299.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image1" transform="scale(0.0104167)"/>
          </pattern>
          <filter id="filter4_d" x="288.524" y="599.411" width="221.621" height="221.621" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="6"/>
            <feGaussianBlur stdDeviation="15"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.870588 0 0 0 0 0.580392 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image1" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image1" transform="scale(0.0104167)"/>
          </pattern>
          <pattern id="pattern7" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image1" transform="scale(0.0104167)"/>
          </pattern>
          <linearGradient id="paint0_linear" x1="358.531" y1="1206.84" x2="1308.87" y2="183.936" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F72226"/>
            <stop offset="0.0778883" stop-color="#EF1E24"/>
            <stop offset="0.2419" stop-color="#E21820"/>
            <stop offset="0.2635" stop-color="#E72321"/>
            <stop offset="0.3174" stop-color="#F23A23"/>
            <stop offset="0.3756" stop-color="#F94A25"/>
            <stop offset="0.4407" stop-color="#FE5426"/>
            <stop offset="0.5269" stop-color="#FF5726"/>
            <stop offset="0.5376" stop-color="#FD4726"/>
            <stop offset="0.554" stop-color="#FA3626"/>
            <stop offset="0.5744" stop-color="#F82B26"/>
            <stop offset="0.6031" stop-color="#F72426"/>
            <stop offset="0.6828" stop-color="#F72226"/>
            <stop offset="0.825" stop-color="#C41C22"/>
            <stop offset="0.9387" stop-color="#A11820"/>
            <stop offset="1" stop-color="#94171F"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="381.997" y1="1133.49" x2="1146.71" y2="403.398" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C3C1C2"/>
            <stop offset="0.4731" stop-color="white"/>
            <stop offset="1" stop-color="#DCDBDB"/>
          </linearGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1339.09 828.167) rotate(165) scale(14.8705)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1339.21 828.195) rotate(165) scale(38.6117)">
            <stop offset="0.00537634" stop-color="white"/>
            <stop offset="0.885417" stop-color="white" stop-opacity="0.05"/>
          </radialGradient>
          <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(213.267 684.708) rotate(165) scale(14.8705)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1224.94 409.118) rotate(165) scale(14.8668)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.423 1103.76) rotate(165) scale(14.8691)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(847.909 193.526) rotate(165) scale(14.8705)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(704.449 1319.35) rotate(165) scale(14.8705)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(428.863 307.682) rotate(165) scale(14.8691)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1123.5 1205.2) rotate(165) scale(14.8665)">
            <stop offset="0.00537634" stop-color="#FFFFBB"/>
            <stop offset="1" stop-color="#E1B141"/>
          </radialGradient>
          <linearGradient id="paint11_linear" x1="1297.57" y1="1057.41" x2="255.903" y2="456.008" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F72226"/>
            <stop offset="0.2128" stop-color="#F01E24"/>
            <stop offset="0.5328" stop-color="#DB141E"/>
            <stop offset="0.9187" stop-color="#B90315"/>
            <stop offset="0.9839" stop-color="#B30013"/>
          </linearGradient>
          <linearGradient id="paint12_linear" x1="1297.57" y1="1057.41" x2="255.903" y2="456.008" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C5E6F7"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
          <image id="image0" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABdUlEQVR42u3ZQUoCYRzG4VlEdgdbVktHXMzQLpTO1LKW7TqHiYfwBpJ0iwSNdPs1gm0iDQS/b9TnB/9tTu8jujDLJEmSJEmSpEiF0flDGDXC5rt43vlvv2RP1YUt90hgTwjGT4hg/IQIxk+IYPyECMZPiGD8hAjGT43wemb8miIYPyGC8RMiHP/4y7vyctErBl+94rO6EPO2fyk3QuznWW2w6JbD+X15HW386kWnCf7RugL83HTZvW3uHWD9zg8A/rhu0d87QIqPnYMB6BWzGAABwOYDAAAAAAAAAAAAAAAAAAAAAAA4JoDfTfI8xLx/foAPsZ8nSx0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALsBzE8YYFYHgOGpAry124PkAOM8v5m0Wh8nCDB973SukgOsEZrVA/VjfBzVAGC+eufXZnxJkiRJkiQdTN9CmYkZkC7DTwAAAABJRU5ErkJggg=="/>
          <image id="image1" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABYUlEQVR42u3ZMU4CURSG0SmMuAcs1S1aamnnOpCwCBbBEFpmSkmADTwfCTaawYSEd0fmfMltzfM/BAurSpIkSZIkSSpUmt8+p/kodd/d29k/+716zZdO3AuBCyEYPxDB+IEIxg9EMH4ggvEDEYwfiGD8aISPG+P3FMH4gQjGD0S4/vHbtr1vmmaab58vlbzTf5RHqfR7jhvM8j2WHH8T8Iv2FeD7DpuMLw5w/OQnAL9vvV5PSgDsAXTetgRAAtB9AAAAAAAAAAAAAAAAAAAAAAAA1wTws7quU8n74x/wqfR7qugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgPYDdggG0fAGZDBVgul9NwgPyIp/yYzwECbBaLxUM4wKHVajXOD5qU+DrqAcDu8MnvzfiSJEmSJEn6N30Ba+YgrE/unr0AAAAASUVORK5CYII="/>
        </defs>
      </svg>
      <!--<div class="v-roulette-pointer-wrap">-->
        <!--<span class="v-roulette-pointer"></span>-->
      <!--</div>-->
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['direction'],
  }
</script>
<style lang="scss">
  .v-roulette {
    position: absolute;
    &-pointer {
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #993C0B 14.53%, #FFE368 74.66%, #F8C448 85.31%);;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      &:after,
      &:before {
        content: '';
        position: absolute;
        display: block;
      }
      &:before {
        z-index: -1;
        width: 64px;
        height: 72px;
        left: 50px;
        top: 50%;
        transform: translate(-100%, -50%) rotate(-34deg) skew(20deg);
        background: linear-gradient(49deg, #F8C448 28.34%, #F8C64B 35.73%, #F9CD53 40.14%, #FAD961 43.77%, #FCEA75 46.96%, #FFFF8F 49.87%, #F8C448 64.93%, #DE9E37 77.19%, #C07424 93.15%, #AB5516 107.57%, #9E430E 119.83%, #993C0B 128.42%);
      }
      &:after {
        border-radius: 50%;
        width: 110px;
        height: 110px;
        background: radial-gradient(55.06px at 50% 50%, #FFFE8E 0%, #CE943D 100%);
      }
      &-wrap {
        position: absolute;
        z-index: 10;
        top: 50%;
        right: 0;
        width: 138px;
        height: 138px;
      }
    }
  }
</style>