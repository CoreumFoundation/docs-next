interface CardImageProps {
  type: 'features' | 'validators' | 'developers' | 'community';
}

export const CardImage: React.FC<CardImageProps> = ({ type }) => {
  switch (type) {
    case 'features':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="24" rx="8.24999" ry="8.25" fill="#336955"/>
          <circle cx="5.775" cy="5.775" r="5.775" transform="matrix(0.707106 -0.707107 0.707106 0.707107 15.833 24)" fill="url(#paint0_linear_11942_64430)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.9386 5.93509C6.17144 5.7039 6.5082 5.61127 6.82652 5.69085L23.8779 9.9537C23.9575 9.9736 24.0408 9.9736 24.1204 9.9537L41.1718 5.69085C41.4901 5.61127 41.8268 5.7039 42.0597 5.93509C42.2925 6.16627 42.3875 6.50236 42.3102 6.82124L38.045 24.4154C38.0256 24.4953 38.0262 24.5786 38.0468 24.6582L42.3069 41.1661C42.3895 41.4862 42.2974 41.8262 42.0645 42.0608C41.8317 42.2954 41.4925 42.3901 41.1718 42.3099L24.1204 38.0471C24.0408 38.0272 23.9575 38.0272 23.8779 38.0471L6.82652 42.3099C6.50581 42.3901 6.16659 42.2954 5.93372 42.0608C5.70086 41.8262 5.60878 41.4862 5.69138 41.1661L9.9515 24.6582C9.97202 24.5786 9.97264 24.4953 9.95328 24.4154L5.68803 6.82124C5.61073 6.50236 5.70576 6.16627 5.9386 5.93509ZM8.67736 8.08627C8.31269 7.9951 7.9816 8.32383 8.07016 8.68914L11.8602 24.3233C11.8965 24.4729 11.8954 24.6293 11.8569 24.7784L8.11074 39.2948C8.016 39.6619 8.34833 39.9967 8.71614 39.9048L23.7718 36.1409C23.921 36.1036 24.0772 36.1036 24.2265 36.1409L39.2821 39.9048C39.6499 39.9967 39.9823 39.6619 39.8875 39.2948L36.1414 24.7784C36.1029 24.6293 36.1017 24.4729 36.138 24.3233L39.9281 8.68914C40.0167 8.32383 39.6856 7.9951 39.3209 8.08627L24.2265 11.8599C24.0772 11.8972 23.921 11.8972 23.7718 11.8599L8.67736 8.08627Z" fill="url(#paint1_linear_11942_64430)" fillOpacity="0.5"/>
          <g filter="url(#filter0_b_11942_64430)">
            <ellipse cx="6.6" cy="6.6" rx="4.35" ry="4.35" fill="url(#paint2_linear_11942_64430)"/>
          </g>
          <g filter="url(#filter1_b_11942_64430)">
            <ellipse cx="6.6" cy="41.3996" rx="4.35" ry="4.35" fill="url(#paint3_linear_11942_64430)"/>
          </g>
          <g filter="url(#filter2_b_11942_64430)">
            <ellipse cx="41.3993" cy="6.6" rx="4.35" ry="4.35" fill="url(#paint4_linear_11942_64430)"/>
          </g>
          <g filter="url(#filter3_b_11942_64430)">
            <ellipse cx="41.3993" cy="41.3996" rx="4.35" ry="4.35" fill="url(#paint5_linear_11942_64430)"/>
          </g>
          <defs>
            <filter id="filter0_b_11942_64430" x="-29.75" y="-29.75" width="72.7002" height="72.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64430"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64430" result="shape"/>
            </filter>
            <filter id="filter1_b_11942_64430" x="-29.75" y="5.04956" width="72.7002" height="72.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64430"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64430" result="shape"/>
            </filter>
            <filter id="filter2_b_11942_64430" x="5.04932" y="-29.75" width="72.7002" height="72.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64430"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64430" result="shape"/>
            </filter>
            <filter id="filter3_b_11942_64430" x="5.04932" y="5.04956" width="72.7002" height="72.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64430"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64430" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_11942_64430" x1="11.55" y1="0" x2="0" y2="11.55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25D695"/>
              <stop offset="1" stopColor="#179B69"/>
            </linearGradient>
            <linearGradient id="paint1_linear_11942_64430" x1="42.3356" y1="42.5775" x2="19.6233" y2="-11.0282" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint2_linear_11942_64430" x1="11.4723" y1="24.5065" x2="-4.26948" y2="17.9836" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint3_linear_11942_64430" x1="11.4723" y1="59.306" x2="-4.26948" y2="52.7832" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint4_linear_11942_64430" x1="46.2716" y1="24.5065" x2="30.5298" y2="17.9836" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint5_linear_11942_64430" x1="46.2716" y1="59.306" x2="30.5298" y2="52.7832" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'validators':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.6645 15.3362C18.9469 15.0999 18.9842 14.6795 18.748 14.3971L12.6415 7.09871C12.4053 6.81632 11.9848 6.77894 11.7024 7.0152L11.6705 7.04193C11.3881 7.2782 11.3507 7.69865 11.587 7.98104L17.6934 15.2794C17.9297 15.5618 18.3501 15.5992 18.6325 15.3629L18.6645 15.3362ZM34.7141 9.21353C34.4537 8.95318 34.0316 8.95318 33.7712 9.21353L28.4284 14.5564C28.1681 14.8167 28.1681 15.2388 28.4284 15.4992L28.4579 15.5286C28.7182 15.789 29.1403 15.789 29.4007 15.5286L34.7435 10.1858C35.0039 9.92544 35.0039 9.50333 34.7435 9.24298L34.7141 9.21353ZM19.6264 27.1429C19.315 26.9465 18.9033 27.0397 18.7069 27.3511L14.6759 33.742C14.4795 34.0535 14.5727 34.4651 14.8842 34.6616L14.9194 34.6838C15.2308 34.8802 15.6425 34.787 15.8389 34.4756L19.8699 28.0847C20.0663 27.7732 19.9731 27.3616 19.6616 27.1651L19.6264 27.1429ZM28.7727 23.6232C29.0238 23.3539 29.4457 23.3392 29.7149 23.5903L36.6745 30.0803C36.9437 30.3314 36.9585 30.7533 36.7074 31.0225L36.679 31.053C36.4279 31.3223 36.006 31.337 35.7367 31.0859L28.7772 24.5959C28.5079 24.3448 28.4932 23.923 28.7443 23.6537L28.7727 23.6232Z" fill="url(#paint0_linear_11942_64439)" fillOpacity="0.5"/>
          <ellipse cx="23.4165" cy="21.1714" rx="8.17136" ry="8.17136" fill="#336955"/>
          <circle cx="23.4144" cy="21.1707" r="5.71995" transform="rotate(-45 23.4144 21.1707)" fill="url(#paint1_linear_11942_64439)"/>
          <g filter="url(#filter0_b_11942_64439)">
            <ellipse cx="37.2421" cy="6.40006" rx="3.7714" ry="3.7714" fill="url(#paint2_linear_11942_64439)"/>
          </g>
          <g filter="url(#filter1_b_11942_64439)">
            <ellipse cx="40.0715" cy="34.0568" rx="5.02853" ry="5.02853" fill="url(#paint3_linear_11942_64439)"/>
          </g>
          <g filter="url(#filter2_b_11942_64439)">
            <circle cx="11.7857" cy="39.7146" r="6.28566" fill="url(#paint4_linear_11942_64439)"/>
          </g>
          <g filter="url(#filter3_b_11942_64439)">
            <ellipse cx="10.3713" cy="5.14283" rx="3.14283" ry="3.14283" fill="url(#paint5_linear_11942_64439)"/>
          </g>
          <defs>
            <filter id="filter0_b_11942_64439" x="-9.19596" y="-40.038" width="92.8763" height="92.8761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="21.3333"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64439"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64439" result="shape"/>
            </filter>
            <filter id="filter1_b_11942_64439" x="-7.6237" y="-13.6383" width="95.3905" height="95.3905" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="21.3333"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64439"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64439" result="shape"/>
            </filter>
            <filter id="filter2_b_11942_64439" x="-37.1667" y="-9.23771" width="97.9046" height="97.9046" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="21.3333"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64439"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64439" result="shape"/>
            </filter>
            <filter id="filter3_b_11942_64439" x="-35.4382" y="-40.6667" width="91.619" height="91.619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="21.3333"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64439"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64439" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_11942_64439" x1="37.1613" y1="35.2253" x2="18.4437" y2="-5.14925" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint1_linear_11942_64439" x1="29.1344" y1="15.4507" x2="17.6945" y2="26.8906" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25D695"/>
              <stop offset="1" stopColor="#179B69"/>
            </linearGradient>
            <linearGradient id="paint2_linear_11942_64439" x1="41.4664" y1="21.9247" x2="27.8184" y2="16.2695" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint3_linear_11942_64439" x1="45.7038" y1="54.7564" x2="27.5066" y2="47.2161" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint4_linear_11942_64439" x1="18.8261" y1="65.5891" x2="-3.9205" y2="56.1637" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint5_linear_11942_64439" x1="13.8916" y1="18.0801" x2="2.51826" y2="13.3673" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'developers':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_11942_64448)">
            <path d="M19.4394 10.9616C19.4394 10.9615 19.4394 10.9614 19.4393 10.9614C18.9551 10.9615 18.5625 11.3528 18.5625 11.8352C18.5625 12.3177 18.9552 12.709 19.4395 12.709C31.0554 12.709 43.9963 15.942 43.9963 20.573C43.9963 23.7947 36.9468 26.9227 27.2345 28.0114C26.7909 28.0613 26.4558 28.435 26.4558 28.8801V40.2262C26.4562 40.2652 26.4589 40.3046 26.4636 40.3433C26.5157 40.7829 26.8892 41.1144 27.3336 41.1148C27.3669 41.1148 27.3998 41.1133 27.4327 41.1098C38.5584 39.8619 45.75 36.2603 45.75 31.9324V20.5733C45.75 14.5563 32.3732 10.9618 19.4394 10.9617C19.4393 10.9617 19.4393 10.9616 19.4394 10.9616Z" fill="url(#paint0_linear_11942_64448)" fillOpacity="0.5"/>
          </g>
          <g filter="url(#filter1_b_11942_64448)">
            <path d="M33.7393 25.7491C30.2271 24.6387 26.1202 24.1184 20.5479 24.0681C19.8976 24.038 19.1443 24.1489 19.0625 23.3294C18.989 22.5928 19.5207 22.3278 20.0435 22.3298C26.0641 22.353 30.4708 22.8978 34.2667 24.0982C34.725 24.2432 34.9784 24.7303 34.8327 25.1862C34.6873 25.642 34.1976 25.8941 33.7393 25.7491Z" fill="url(#paint1_linear_11942_64448)"/>
          </g>
          <ellipse cx="13.125" cy="18.375" rx="10.875" ry="10.875" fill="#336955"/>
          <circle cx="13.1256" cy="18.375" r="7.6125" transform="rotate(-45 13.1256 18.375)" fill="url(#paint2_linear_11942_64448)"/>
          <defs>
            <filter id="filter0_b_11942_64448" x="-13.4375" y="-21.0386" width="91.1875" height="94.1533" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64448"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64448" result="shape"/>
            </filter>
            <filter id="filter1_b_11942_64448" x="-12.9443" y="-9.67017" width="79.8184" height="67.4602" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64448"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64448" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_11942_64448" x1="45.7492" y1="41.3118" x2="25.7393" y2="-1.27047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint1_linear_11942_64448" x1="35.8236" y1="31.1818" x2="28.5144" y2="17.3364" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint2_linear_11942_64448" x1="20.7381" y1="10.7625" x2="5.51306" y2="25.9875" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25D695"/>
              <stop offset="1" stopColor="#179B69"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'community':
      return (
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_11942_64457)">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.9496 45.1611C35.0837 45.1611 44.1096 36.1352 44.1096 25.0011C44.1096 13.8671 35.0837 4.84112 23.9496 4.84112C12.8155 4.84112 3.78961 13.8671 3.78961 25.0011C3.78961 36.1352 12.8155 45.1611 23.9496 45.1611ZM23.9496 46.6011C35.879 46.6011 45.5496 36.9305 45.5496 25.0011C45.5496 13.0718 35.879 3.40112 23.9496 3.40112C12.0203 3.40112 2.34961 13.0718 2.34961 25.0011C2.34961 36.9305 12.0203 46.6011 23.9496 46.6011Z" fill="url(#paint0_linear_11942_64457)" fillOpacity="0.5"/>
          </g>
          <ellipse cx="23.9496" cy="25.0006" rx="9.6" ry="9.6" fill="#336955"/>
          <circle cx="23.9498" cy="25.0012" r="6.72" transform="rotate(-45 23.9498 25.0012)" fill="url(#paint1_linear_11942_64457)"/>
          <g filter="url(#filter1_b_11942_64457)">
            <circle cx="6.19014" cy="34.6016" r="5.04" transform="rotate(-45 6.19014 34.6016)" fill="url(#paint2_linear_11942_64457)"/>
          </g>
          <g filter="url(#filter2_b_11942_64457)">
            <circle cx="23.9511" cy="4.36157" r="4.032" transform="rotate(-45 23.9511 4.36157)" fill="url(#paint3_linear_11942_64457)"/>
          </g>
          <g filter="url(#filter3_b_11942_64457)">
            <circle cx="39.3098" cy="39.8779" r="3.024" transform="rotate(-45 39.3098 39.8779)" fill="url(#paint4_linear_11942_64457)"/>
          </g>
          <defs>
            <filter id="filter0_b_11942_64457" x="-29.6504" y="-28.5989" width="107.2" height="107.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64457"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64457" result="shape"/>
            </filter>
            <filter id="filter1_b_11942_64457" x="-30.8501" y="-2.43848" width="74.0801" height="74.0801" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64457"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64457" result="shape"/>
            </filter>
            <filter id="filter2_b_11942_64457" x="-12.0811" y="-31.6704" width="72.064" height="72.064" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64457"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64457" result="shape"/>
            </filter>
            <filter id="filter3_b_11942_64457" x="4.28564" y="4.854" width="70.0483" height="70.0479" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11942_64457"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11942_64457" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_11942_64457" x1="45.5484" y1="46.8833" x2="18.7953" y2="-16.2595" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint1_linear_11942_64457" x1="30.6698" y1="18.2812" x2="17.2298" y2="31.7212" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25D695"/>
              <stop offset="1" stopColor="#179B69"/>
            </linearGradient>
            <linearGradient id="paint2_linear_11942_64457" x1="11.8353" y1="55.3484" x2="-6.40346" y2="47.7908" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint3_linear_11942_64457" x1="28.4673" y1="20.959" x2="13.8763" y2="14.913" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
            <linearGradient id="paint4_linear_11942_64457" x1="42.6969" y1="52.326" x2="31.7536" y2="47.7915" gradientUnits="userSpaceOnUse">
              <stop stopColor="#767676" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#767676" stopOpacity="0.65"/>
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};
