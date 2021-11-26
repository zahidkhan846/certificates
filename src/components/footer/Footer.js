import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <svg
        width="156"
        height="33"
        viewBox="0 0 156 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.54296 24.7469C5.47474 24.7469 4.52435 24.5035 3.69177 24.0165C2.8749 23.5295 2.23869 22.8383 1.78313 21.9429C1.34328 21.0475 1.12335 20.0107 1.12335 18.8325C1.12335 17.6543 1.35113 16.6097 1.80669 15.6986C2.27796 14.7874 2.92988 14.0805 3.76246 13.5778C4.59504 13.0752 5.55329 12.8238 6.63721 12.8238C7.23415 12.8238 7.82324 12.9102 8.40447 13.083C9.00141 13.2401 9.51981 13.4757 9.95966 13.7899C10.2424 13.9784 10.4388 14.1669 10.5487 14.3554C10.6744 14.5282 10.7373 14.7246 10.7373 14.9445C10.7373 15.1645 10.6744 15.3451 10.5487 15.4865C10.4388 15.6279 10.2896 15.6986 10.101 15.6986C9.99108 15.6986 9.87326 15.6671 9.74759 15.6043C9.62192 15.5415 9.51196 15.4786 9.4177 15.4158C9.33916 15.353 9.28418 15.3137 9.25276 15.298C8.84432 15.0309 8.4516 14.8189 8.07458 14.6618C7.71328 14.5047 7.26557 14.4261 6.73146 14.4261C5.58471 14.4261 4.68929 14.8189 4.04522 15.6043C3.41686 16.374 3.10268 17.4501 3.10268 18.8325C3.10268 20.2149 3.41686 21.2831 4.04522 22.0371C4.68929 22.7912 5.58471 23.1682 6.73146 23.1682C7.26557 23.1682 7.72113 23.0896 8.09815 22.9326C8.49087 22.7755 8.8836 22.5634 9.27632 22.2963C9.44912 22.1864 9.61406 22.0921 9.77115 22.0136C9.92824 21.935 10.0618 21.8958 10.1717 21.8958C10.3445 21.8958 10.4859 21.9665 10.5959 22.1078C10.7215 22.2492 10.7844 22.4299 10.7844 22.6498C10.7844 22.854 10.7294 23.0425 10.6194 23.2153C10.5095 23.3724 10.3053 23.5531 10.0068 23.7573C9.56694 24.0557 9.03283 24.2992 8.40447 24.4877C7.79182 24.6605 7.17131 24.7469 6.54296 24.7469ZM17.842 24.7469C16.7581 24.7469 15.7999 24.5035 14.9673 24.0165C14.1504 23.5295 13.5142 22.8383 13.0586 21.9429C12.6188 21.0318 12.3989 19.9793 12.3989 18.7854C12.3989 17.5915 12.6188 16.5468 13.0586 15.6514C13.5142 14.7403 14.1504 14.0413 14.9673 13.5543C15.7999 13.0673 16.7581 12.8238 17.842 12.8238C18.9259 12.8238 19.8842 13.0673 20.7168 13.5543C21.5493 14.0413 22.1856 14.7403 22.6254 15.6514C23.081 16.5468 23.3088 17.5915 23.3088 18.7854C23.3088 19.9793 23.081 21.0318 22.6254 21.9429C22.1856 22.8383 21.5493 23.5295 20.7168 24.0165C19.8842 24.5035 18.9259 24.7469 17.842 24.7469ZM17.842 23.1682C18.9731 23.1682 19.8371 22.799 20.434 22.0607C21.0467 21.3067 21.353 20.2149 21.353 18.7854C21.353 17.3873 21.0467 16.3112 20.434 15.5572C19.8214 14.7874 18.9574 14.4026 17.842 14.4026C16.7267 14.4026 15.8627 14.7874 15.25 15.5572C14.6374 16.3112 14.3311 17.3873 14.3311 18.7854C14.3311 20.1992 14.6295 21.2831 15.2265 22.0371C15.8391 22.7912 16.711 23.1682 17.842 23.1682ZM35.3659 7.85192C35.6644 7.85192 35.9 7.93831 36.0728 8.11111C36.2456 8.28391 36.332 8.50384 36.332 8.77089V23.7573C36.332 24.04 36.2456 24.2678 36.0728 24.4406C35.9 24.6134 35.6644 24.6998 35.3659 24.6998C35.0674 24.6998 34.8318 24.6134 34.659 24.4406C34.5019 24.2678 34.4234 24.04 34.4234 23.7573V22.4848C34.0778 23.2075 33.5672 23.7651 32.8917 24.1579C32.232 24.5506 31.4544 24.7469 30.5589 24.7469C29.5536 24.7469 28.666 24.4956 27.8963 23.9929C27.1265 23.4902 26.5296 22.7912 26.1054 21.8958C25.6813 20.9846 25.4692 19.9321 25.4692 18.7383C25.4692 17.5601 25.6813 16.5233 26.1054 15.6279C26.5296 14.7325 27.1265 14.0413 27.8963 13.5543C28.666 13.0673 29.5536 12.8238 30.5589 12.8238C31.4544 12.8238 32.232 13.0202 32.8917 13.4129C33.5672 13.8056 34.0778 14.3633 34.4234 15.0859V8.77089C34.4234 8.48813 34.5019 8.2682 34.659 8.11111C34.8318 7.93831 35.0674 7.85192 35.3659 7.85192ZM30.936 23.1682C32.0513 23.1682 32.9074 22.7912 33.5044 22.0371C34.117 21.2674 34.4234 20.1835 34.4234 18.7854C34.4234 17.3873 34.117 16.3112 33.5044 15.5572C32.9074 14.8031 32.0513 14.4261 30.936 14.4261C29.8206 14.4261 28.9488 14.8031 28.3204 15.5572C27.7078 16.3112 27.4014 17.3716 27.4014 18.7383C27.4014 20.1364 27.7078 21.2281 28.3204 22.0136C28.9488 22.7833 29.8206 23.1682 30.936 23.1682ZM48.7507 21.9193C48.9235 21.9193 49.0727 21.99 49.1984 22.1314C49.3241 22.2728 49.3869 22.4534 49.3869 22.6734C49.3869 23.0661 49.112 23.4274 48.5622 23.7573C47.9967 24.0872 47.3997 24.3385 46.7714 24.5113C46.143 24.6684 45.5304 24.7469 44.9334 24.7469C43.1583 24.7469 41.7523 24.2207 40.7156 23.1682C39.6945 22.1157 39.1839 20.6626 39.1839 18.8089C39.1839 17.6308 39.4117 16.594 39.8673 15.6986C40.3228 14.7874 40.959 14.0805 41.7759 13.5778C42.6085 13.0752 43.551 12.8238 44.6035 12.8238C46.0959 12.8238 47.2819 13.3108 48.1616 14.2848C49.0413 15.2587 49.4812 16.5783 49.4812 18.2434C49.4812 18.5576 49.4183 18.7854 49.2927 18.9268C49.167 19.0681 48.9628 19.1388 48.68 19.1388H41.0926C41.2339 21.8408 42.5142 23.1918 44.9334 23.1918C45.5461 23.1918 46.0723 23.1132 46.5122 22.9561C46.952 22.7833 47.4233 22.5555 47.926 22.2728C48.3344 22.0371 48.6093 21.9193 48.7507 21.9193ZM44.6271 14.3083C43.6217 14.3083 42.8127 14.6225 42.2001 15.2509C41.6031 15.8792 41.2497 16.7668 41.1397 17.9135H47.8082C47.7767 16.7511 47.4861 15.8635 46.9363 15.2509C46.3865 14.6225 45.6168 14.3083 44.6271 14.3083ZM67.8486 13.4836C68.0056 13.1066 68.2648 12.9181 68.6262 12.9181C68.8618 12.9181 69.0739 12.9966 69.2624 13.1537C69.4509 13.3108 69.5451 13.5072 69.5451 13.7428C69.5451 13.8528 69.5216 13.9706 69.4744 14.0962L65.5629 23.9929C65.4686 24.1971 65.3273 24.3621 65.1388 24.4877C64.966 24.5977 64.7696 24.6527 64.5497 24.6527C64.3454 24.6527 64.1491 24.5977 63.9606 24.4877C63.7878 24.3621 63.6543 24.1971 63.56 23.9929L60.3082 15.7221L57.08 23.9929C57.0015 24.1971 56.868 24.3621 56.6795 24.4877C56.4909 24.5977 56.2867 24.6527 56.0668 24.6527C55.8626 24.6527 55.6662 24.5977 55.4777 24.4877C55.2892 24.3621 55.1478 24.1971 55.0536 23.9929L51.142 14.1198C51.0949 13.9941 51.0713 13.8842 51.0713 13.7899C51.0713 13.5386 51.1735 13.3265 51.3777 13.1537C51.5976 12.9809 51.8332 12.8945 52.0846 12.8945C52.4616 12.8945 52.7286 13.083 52.8857 13.46L56.1139 22.155L59.4364 13.5307C59.5306 13.3265 59.6563 13.1694 59.8134 13.0594C59.9862 12.9495 60.1669 12.8945 60.3554 12.8945C60.5596 12.8945 60.7402 12.9495 60.8973 13.0594C61.0701 13.1694 61.1958 13.3265 61.2743 13.5307L64.5968 22.1314L67.8486 13.4836ZM73.2562 24.6998C72.9734 24.6998 72.7378 24.6213 72.5493 24.4642C72.3765 24.2914 72.2901 24.0557 72.2901 23.7573V13.8135C72.2901 13.515 72.3765 13.2872 72.5493 13.1301C72.7378 12.9573 72.9734 12.8709 73.2562 12.8709C73.539 12.8709 73.7667 12.9573 73.9395 13.1301C74.1123 13.2872 74.1987 13.515 74.1987 13.8135V23.7573C74.1987 24.0715 74.1123 24.3071 73.9395 24.4642C73.7667 24.6213 73.539 24.6998 73.2562 24.6998ZM73.2562 10.3968C72.8792 10.3968 72.5729 10.2868 72.3372 10.0669C72.1016 9.84696 71.9838 9.55634 71.9838 9.19503C71.9838 8.84944 72.1016 8.56668 72.3372 8.34675C72.5729 8.12682 72.8792 8.01686 73.2562 8.01686C73.6332 8.01686 73.9395 8.12682 74.1752 8.34675C74.4108 8.56668 74.5286 8.84944 74.5286 9.19503C74.5286 9.55634 74.4108 9.84696 74.1752 10.0669C73.9395 10.2868 73.6332 10.3968 73.2562 10.3968ZM83.2526 23.1918C83.8025 23.2389 84.0774 23.4902 84.0774 23.9458C84.0774 24.2128 83.9753 24.4171 83.771 24.5584C83.5825 24.6841 83.2919 24.7312 82.8992 24.6998L82.263 24.6527C81.0062 24.5584 80.0794 24.1814 79.4825 23.5216C78.8855 22.8619 78.5871 21.8643 78.5871 20.5291V14.6146H77.0083C76.7413 14.6146 76.5292 14.5518 76.3721 14.4261C76.2307 14.2848 76.16 14.1041 76.16 13.8842C76.16 13.6485 76.2307 13.46 76.3721 13.3186C76.5292 13.1773 76.7413 13.1066 77.0083 13.1066H78.5871V10.4439C78.5871 10.1454 78.6735 9.91765 78.8463 9.76056C79.0191 9.58776 79.2547 9.50136 79.5532 9.50136C79.8359 9.50136 80.0637 9.58776 80.2365 9.76056C80.4093 9.91765 80.4957 10.1454 80.4957 10.4439V13.1066H83.1113C83.3626 13.1066 83.559 13.1773 83.7003 13.3186C83.8574 13.46 83.936 13.6485 83.936 13.8842C83.936 14.1041 83.8574 14.2848 83.7003 14.4261C83.559 14.5518 83.3626 14.6146 83.1113 14.6146H80.4957V20.6233C80.4957 21.4873 80.6685 22.1157 81.0141 22.5084C81.3754 22.8854 81.9095 23.0975 82.6164 23.1446L83.2526 23.1918ZM91.7554 12.8238C93.1064 12.8238 94.1274 13.2087 94.8186 13.9784C95.5098 14.7325 95.8554 15.8635 95.8554 17.3716V23.7573C95.8554 24.0557 95.769 24.2914 95.5962 24.4642C95.4234 24.6213 95.1957 24.6998 94.9129 24.6998C94.6144 24.6998 94.3788 24.6213 94.206 24.4642C94.0332 24.2914 93.9468 24.0557 93.9468 23.7573V17.4187C93.9468 16.3976 93.7347 15.6436 93.3106 15.1566C92.9021 14.6696 92.2424 14.4261 91.3312 14.4261C90.2787 14.4261 89.4383 14.7482 88.8099 15.3922C88.1816 16.0363 87.8674 16.9082 87.8674 18.0078V23.7573C87.8674 24.0557 87.781 24.2914 87.6082 24.4642C87.4511 24.6213 87.2233 24.6998 86.9249 24.6998C86.6264 24.6998 86.3908 24.6213 86.218 24.4642C86.0452 24.2914 85.9588 24.0557 85.9588 23.7573V8.77089C85.9588 8.50384 86.0452 8.28391 86.218 8.11111C86.4065 7.93831 86.6421 7.85192 86.9249 7.85192C87.2233 7.85192 87.4511 7.93831 87.6082 8.11111C87.781 8.2682 87.8674 8.48813 87.8674 8.77089V14.9445C88.2444 14.2533 88.7707 13.7271 89.4462 13.3658C90.1216 13.0045 90.8914 12.8238 91.7554 12.8238Z"
          fill="#676662"
        />
        <path
          d="M107.787 23.0739C108.054 23.0739 108.258 23.1446 108.4 23.286C108.541 23.4117 108.612 23.5923 108.612 23.828C108.612 24.0636 108.541 24.2521 108.4 24.3935C108.258 24.5192 108.054 24.582 107.787 24.582H99.5398C99.2727 24.582 99.0528 24.5035 98.88 24.3464C98.7072 24.1736 98.6208 23.9693 98.6208 23.7337C98.6208 23.4824 98.7151 23.2389 98.9036 23.0032L105.878 14.6146H99.422C99.1549 14.6146 98.9429 14.5518 98.7858 14.4261C98.6444 14.2848 98.5737 14.1041 98.5737 13.8842C98.5737 13.6485 98.6444 13.46 98.7858 13.3186C98.9429 13.1773 99.1549 13.1066 99.422 13.1066H107.41C107.693 13.1066 107.921 13.193 108.093 13.3658C108.266 13.5229 108.353 13.7192 108.353 13.9549C108.353 14.2062 108.258 14.4497 108.07 14.6853L101.071 23.0739H107.787ZM115.776 12.8238C118.651 12.8238 120.088 14.3319 120.088 17.348V23.7573C120.088 24.04 120.002 24.2678 119.829 24.4406C119.672 24.6134 119.452 24.6998 119.169 24.6998C118.887 24.6998 118.659 24.6134 118.486 24.4406C118.313 24.2678 118.227 24.04 118.227 23.7573V22.6262C117.928 23.3017 117.473 23.828 116.86 24.205C116.247 24.5663 115.541 24.7469 114.739 24.7469C114.001 24.7469 113.318 24.5977 112.689 24.2992C112.077 24.0008 111.59 23.5845 111.228 23.0504C110.867 22.5163 110.686 21.9272 110.686 21.2831C110.686 20.4191 110.906 19.7515 111.346 19.2802C111.786 18.7932 112.509 18.4476 113.514 18.2434C114.519 18.0235 115.918 17.9135 117.708 17.9135H118.227V17.1359C118.227 16.1934 118.03 15.5022 117.638 15.0623C117.261 14.6225 116.64 14.4026 115.776 14.4026C114.708 14.4026 113.624 14.6932 112.524 15.2744C112.1 15.5415 111.802 15.675 111.629 15.675C111.44 15.675 111.283 15.6043 111.158 15.4629C111.032 15.3215 110.969 15.1409 110.969 14.921C110.969 14.701 111.032 14.5125 111.158 14.3554C111.299 14.1826 111.519 14.0098 111.817 13.837C112.367 13.5229 112.988 13.2794 113.679 13.1066C114.386 12.9181 115.085 12.8238 115.776 12.8238ZM114.999 23.2389C115.941 23.2389 116.711 22.9247 117.308 22.2963C117.92 21.6523 118.227 20.8275 118.227 19.8222V19.1388H117.803C116.42 19.1388 115.368 19.2017 114.645 19.3273C113.923 19.4373 113.404 19.6337 113.09 19.9164C112.791 20.1835 112.642 20.5841 112.642 21.1182C112.642 21.7308 112.862 22.2414 113.302 22.6498C113.758 23.0425 114.323 23.2389 114.999 23.2389ZM129.379 12.8238C130.73 12.8238 131.751 13.2087 132.442 13.9784C133.133 14.7325 133.479 15.8635 133.479 17.3716V23.7573C133.479 24.0557 133.392 24.2914 133.22 24.4642C133.047 24.6213 132.819 24.6998 132.536 24.6998C132.238 24.6998 132.002 24.6213 131.829 24.4642C131.657 24.2914 131.57 24.0557 131.57 23.7573V17.4187C131.57 16.3976 131.358 15.6436 130.934 15.1566C130.525 14.6696 129.866 14.4261 128.955 14.4261C127.902 14.4261 127.062 14.7482 126.433 15.3922C125.805 16.0363 125.491 16.9082 125.491 18.0078V23.7573C125.491 24.0557 125.404 24.2914 125.232 24.4642C125.074 24.6213 124.847 24.6998 124.548 24.6998C124.25 24.6998 124.014 24.6213 123.841 24.4642C123.669 24.2914 123.582 24.0557 123.582 23.7573V8.77089C123.582 8.50384 123.669 8.28391 123.841 8.11111C124.03 7.93831 124.265 7.85192 124.548 7.85192C124.847 7.85192 125.074 7.93831 125.232 8.11111C125.404 8.2682 125.491 8.48813 125.491 8.77089V14.9445C125.868 14.2533 126.394 13.7271 127.07 13.3658C127.745 13.0045 128.515 12.8238 129.379 12.8238ZM137.941 24.6998C137.658 24.6998 137.422 24.6213 137.234 24.4642C137.061 24.2914 136.975 24.0557 136.975 23.7573V13.8135C136.975 13.515 137.061 13.2872 137.234 13.1301C137.422 12.9573 137.658 12.8709 137.941 12.8709C138.224 12.8709 138.451 12.9573 138.624 13.1301C138.797 13.2872 138.883 13.515 138.883 13.8135V23.7573C138.883 24.0715 138.797 24.3071 138.624 24.4642C138.451 24.6213 138.224 24.6998 137.941 24.6998ZM137.941 10.3968C137.564 10.3968 137.257 10.2868 137.022 10.0669C136.786 9.84696 136.668 9.55634 136.668 9.19503C136.668 8.84944 136.786 8.56668 137.022 8.34675C137.257 8.12682 137.564 8.01686 137.941 8.01686C138.318 8.01686 138.624 8.12682 138.86 8.34675C139.095 8.56668 139.213 8.84944 139.213 9.19503C139.213 9.55634 139.095 9.84696 138.86 10.0669C138.624 10.2868 138.318 10.3968 137.941 10.3968ZM151.665 7.85192C151.963 7.85192 152.199 7.93831 152.372 8.11111C152.544 8.28391 152.631 8.50384 152.631 8.77089V23.7573C152.631 24.04 152.544 24.2678 152.372 24.4406C152.199 24.6134 151.963 24.6998 151.665 24.6998C151.366 24.6998 151.131 24.6134 150.958 24.4406C150.801 24.2678 150.722 24.04 150.722 23.7573V22.4848C150.377 23.2075 149.866 23.7651 149.19 24.1579C148.531 24.5506 147.753 24.7469 146.858 24.7469C145.852 24.7469 144.965 24.4956 144.195 23.9929C143.425 23.4902 142.828 22.7912 142.404 21.8958C141.98 20.9846 141.768 19.9321 141.768 18.7383C141.768 17.5601 141.98 16.5233 142.404 15.6279C142.828 14.7325 143.425 14.0413 144.195 13.5543C144.965 13.0673 145.852 12.8238 146.858 12.8238C147.753 12.8238 148.531 13.0202 149.19 13.4129C149.866 13.8056 150.377 14.3633 150.722 15.0859V8.77089C150.722 8.48813 150.801 8.2682 150.958 8.11111C151.131 7.93831 151.366 7.85192 151.665 7.85192ZM147.235 23.1682C148.35 23.1682 149.206 22.7912 149.803 22.0371C150.416 21.2674 150.722 20.1835 150.722 18.7854C150.722 17.3873 150.416 16.3112 149.803 15.5572C149.206 14.8031 148.35 14.4261 147.235 14.4261C146.119 14.4261 145.248 14.8031 144.619 15.5572C144.007 16.3112 143.7 17.3716 143.7 18.7383C143.7 20.1364 144.007 21.2281 144.619 22.0136C145.248 22.7833 146.119 23.1682 147.235 23.1682Z"
          fill="#8B0881"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 147.629 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 155.961 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 139.158 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 147.631 31.8235)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 139.08 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 130.609 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 130.531 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 122.06 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 121.982 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 113.511 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 112.775 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 104.304 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="5.8981"
          y2="-0.730651"
          transform="matrix(-0.668987 -0.743274 0.963522 -0.267629 104.226 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
        <line
          y1="-0.730651"
          x2="6.17934"
          y2="-0.730651"
          transform="matrix(0.732387 -0.680888 0.949077 0.315043 95.7547 32)"
          stroke="#ED3B3B"
          strokeOpacity="0.53"
          strokeWidth="1.4613"
        />
      </svg>
      <p className={styles.footerContent}>
        &copy; codewithzahid | {new Date().getFullYear()},{" "}
        <span>all rights reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;
