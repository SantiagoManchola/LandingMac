const Header = () => {
    return(
        <>
            <header className="font-OP w-[1280px] bg-black text-white z-50 h-[107px] justify-between flex items-center px-[100px]">
                <div className="w-[289px] h-[54px] my-0 flex justify-between items-center">
                    <svg width="156" height="37" viewBox="0 0 156 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M59.2576 16.0291C58.4023 20.074 57.1104 22.836 54.1881 22.836C51.3459 22.836 51.1499 20.083 52.0141 16.0291C53.1189 10.8259 54.6514 8.84798 57.1639 8.84798C59.7298 8.84798 60.3713 10.8348 59.2576 16.0291ZM61.9572 15.254C63.0531 10.0597 61.8414 6.77204 57.6004 6.77204C53.3595 6.77204 50.7401 10.0597 49.6353 15.254C48.0583 22.6846 50.0273 24.903 53.7426 24.903C57.5292 24.903 60.3802 22.7113 61.9572 15.254ZM44.5123 8.84798C46.8377 8.84798 46.9268 10.7724 46.5526 12.6524H48.8423C49.5462 9.47165 48.4503 6.77204 44.9845 6.77204C39.7189 6.77204 37.9637 11.8594 37.0728 16.0558C36.1194 20.5195 35.9323 24.903 41.1979 24.903C45.029 24.903 46.9446 21.758 47.7375 18.4347H45.421C44.8508 20.5373 44.1113 22.836 41.4474 22.836C38.329 22.836 39.015 18.8356 39.4962 16.5815C40.0218 14.1314 40.9484 8.84798 44.5123 8.84798ZM35.0325 22.6489C34.685 22.6846 34.3019 22.7113 33.9811 22.6222C33.5446 22.3727 33.7406 21.758 33.8297 21.3214L35.9234 11.4585C36.0125 11.0486 37.349 6.78095 32.2349 6.78095C28.7779 6.78095 26.6842 8.33122 26.0427 11.8951H28.2434C28.6443 9.88149 29.1611 8.85688 31.3884 8.85688C33.3664 8.85688 33.9544 9.60529 33.5446 11.5476C33.3575 12.4474 33.2773 13.1246 32.6536 13.5255C32.2883 13.7839 28.5552 15.0758 27.0228 15.6816C24.4122 16.7419 23.8064 19.2187 23.6638 19.8691C23.0045 23.0053 23.5837 24.9119 27.0228 24.9119C28.6621 24.9119 30.5153 23.6468 31.4152 22.1322C31.2281 24.4843 31.9676 24.6625 34.0613 24.5734C34.2573 24.5199 34.4444 24.4843 34.6404 24.4576L35.0325 22.6489ZM31.7181 19.3435C31.1212 22.1232 28.9205 22.836 27.9939 22.836C26.0249 22.836 25.82 21.7134 26.1853 19.9849C26.4347 18.8089 27.0762 17.5437 28.3325 17.0181C29.7669 16.3944 31.237 15.8776 32.6002 15.1738L31.7181 19.3435ZM21.4988 7.23534H19.1556L15.5027 24.4486H17.9439L20.1624 14.0155C20.8217 10.8972 23.1025 8.91034 26.1407 9.46274L26.6575 7.04824C24.136 6.84332 22.4789 7.80556 20.9732 10.0597L21.4988 7.23534ZM2.57487 24.4486L4.67753 14.6036H6.21889C7.98298 14.6036 10.6113 14.6036 12.3665 13.9264C15.1196 12.7771 16.4204 10.2646 16.9727 7.69864C17.3737 5.84545 17.2489 4.04571 16.1352 2.74491C15.0483 1.45303 12.8387 1.23029 11.039 1.23029H4.93591L0 24.4486H2.57487ZM7.01184 3.56459H9.6758C12.8209 3.50223 15.0928 4.01898 14.2999 7.77883C13.4802 11.7614 11.2083 12.2514 7.68006 12.2871H5.15865L7.01184 3.56459Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M140.228 24.4486L145.164 1.2392H150.082L145.155 24.4486H140.228ZM131.113 19.9226C131.007 20.9115 131.292 21.4372 132.316 21.4372C133.332 21.4372 133.849 20.9026 134.152 19.9226L135.8 12.1802C136.049 11.0754 135.853 10.1755 134.713 10.1755C133.564 10.1755 132.993 11.0665 132.762 12.1802L131.113 19.9226ZM127.763 12.5633C128.699 8.09957 131.657 6.62058 135.461 6.62058C139.791 6.62058 141.466 8.66978 140.638 12.5633L139.15 19.6107C138.063 23.5488 135.31 25.001 131.559 25.001C128.031 25.001 125.42 23.5755 126.267 19.6107L127.763 12.5633ZM121.803 13.5522L121.839 13.2493C121.874 12.5989 122.052 11.9129 122.061 11.2714C121.999 10.5586 121.705 10.1933 120.965 10.1933C119.7 10.1933 119.273 11.1823 119.032 12.2871L117.517 19.4326C117.286 20.5284 117.402 21.455 118.667 21.455C120.502 21.455 120.761 18.7376 121.037 17.4279H125.803C125.59 18.4436 125.002 20.6086 124.529 21.5441C123.416 23.7092 121.349 24.6981 119.166 24.9119C118.685 24.9476 118.248 25.01 117.509 25.01C113.98 25.01 111.717 23.5844 112.546 19.6197L114.043 12.5722C114.987 8.10848 117.598 6.62949 121.402 6.62949C126.24 6.70077 127.719 8.80343 126.427 13.5611H121.803V13.5522ZM105.917 22.8984C104.394 24.2615 103.173 25.001 101.231 25.001C98.4421 25.001 97.1145 23.1211 97.6937 20.3592C98.5312 16.43 100.928 15.1916 103.244 14.4788C105.543 13.775 107.717 13.5433 108.109 11.6812C108.314 10.7279 107.931 9.8904 106.942 9.8904C105.142 9.8904 104.884 11.1288 104.483 12.5811H99.5647C100.269 8.25103 103.521 6.60276 107.485 6.60276C112.341 6.60276 113.793 8.08175 112.982 11.8951L110.728 22.5064C110.586 23.1568 110.639 23.8161 110.719 24.4308H105.926L105.917 22.8984ZM107.191 16.0291C106.095 16.5548 105.169 16.822 104.447 17.2943C103.734 17.7308 103.075 18.3456 102.826 19.5217C102.594 20.6086 103.084 21.3838 104.26 21.3838C105.712 21.3838 106.354 19.8691 106.621 18.7554L107.191 16.0291ZM91.6262 24.4486L91.9826 22.444C90.7353 24.1012 89.0603 25.01 87.608 25.01C84.0442 24.8852 84.0531 21.5174 84.6768 18.5683L85.9508 12.5633C86.521 9.83694 88.1693 6.62058 91.4213 6.62058C92.7221 6.62058 93.8714 7.18188 94.6288 8.69651L96.2147 1.23029H101.142L96.2147 24.4397H91.6262V24.4486ZM89.6839 18.1941C89.4612 19.2187 89.087 20.9828 90.5125 20.9828C91.8401 20.9828 92.3123 19.6553 92.6687 17.9714L93.5329 13.8908C93.8447 12.4029 94.014 10.6121 92.8023 10.6388C91.2253 10.6388 90.8689 12.59 90.6284 13.7037L89.6839 18.1941ZM81.0149 5.40888L81.897 1.23029H86.824L85.933 5.40888H81.0149ZM76.9611 24.4486L80.6496 7.11952H85.5677L81.8881 24.4486H76.9611ZM67.214 20.2701C70.8224 20.5195 71.1698 19.0316 71.7222 15.94L73.3349 8.34904C73.8873 5.62271 73.0141 5.47125 70.368 5.40888L67.214 20.2701ZM60.8882 24.4486L65.8152 1.2392H71.7311C73.7091 1.2392 76.0879 1.30156 77.6293 2.32616C79.4736 3.5646 79.3399 5.82763 78.8588 8.04611L76.676 18.3456C76.1503 20.671 75.0811 22.3727 73.2903 23.3617C71.6599 24.2883 69.9047 24.4397 68.2297 24.4397H60.8882V24.4486Z" fill="white"/>
                        <path d="M153.833 3.43095C153.129 3.43095 152.559 2.86074 152.559 2.15688C152.559 1.45302 153.129 0.882812 153.833 0.882812C154.537 0.882812 155.107 1.45302 155.107 2.15688C155.116 2.85183 154.537 3.43095 153.833 3.43095ZM153.833 1.1501C153.28 1.1501 152.835 1.59558 152.835 2.14797C152.835 2.70037 153.28 3.14585 153.833 3.14585C154.385 3.14585 154.831 2.70037 154.831 2.14797C154.831 1.60449 154.385 1.1501 153.833 1.1501Z" fill="white"/>
                        <path d="M154.091 2.71818L153.86 2.38853C153.842 2.38853 153.833 2.38853 153.815 2.38853H153.557V2.71818H153.343V1.57776H153.806C154.109 1.57776 154.287 1.72922 154.287 1.97869C154.287 2.14797 154.198 2.28162 154.047 2.33507L154.305 2.70928H154.091V2.71818ZM153.806 1.76486H153.557V2.21925H153.806C153.993 2.21925 154.091 2.13906 154.091 1.9876C154.091 1.83614 153.993 1.76486 153.806 1.76486Z" fill="white"/>
                        <path d="M64.7904 35.6391C63.7479 35.6391 62.857 35.2827 62.1175 34.57C61.378 33.8572 61.0127 33.0019 61.0127 31.9862C61.0127 30.9705 61.378 30.1063 62.0997 29.4024C62.8302 28.6896 63.7034 28.3333 64.7369 28.3333C65.5031 28.3333 66.1981 28.5293 66.8217 28.9302C67.4454 29.3311 67.8998 29.8657 68.176 30.5339H66.6079C66.4119 30.231 66.1535 29.9904 65.815 29.8122C65.4764 29.6341 65.12 29.545 64.7458 29.545C64.0687 29.545 63.4985 29.7855 63.0263 30.2577C62.554 30.7299 62.3224 31.3091 62.3224 31.9951C62.3224 32.6722 62.563 33.2513 63.0352 33.7235C63.5074 34.1958 64.0865 34.4363 64.7636 34.4363C65.4408 34.4363 66.0021 34.2047 66.4475 33.7325C66.6257 33.5454 66.7683 33.3404 66.8752 33.1266H63.9439V31.9149H68.5146V31.9862C68.5146 32.993 68.1493 33.8572 67.4276 34.57C66.7059 35.2827 65.8328 35.6391 64.7904 35.6391Z" fill="white"/>
                        <path d="M69.2719 30.231H69.8599H70.4479V30.6319L70.5103 30.5517C70.7419 30.2221 71.1072 30.0617 71.5973 30.0617H71.6774V31.2645C71.3211 31.2912 71.0538 31.3803 70.8578 31.5407C70.635 31.7367 70.5281 32.0307 70.5281 32.4495V35.4965H69.8955H69.2629V30.231H69.2719Z" fill="white"/>
                        <path d="M73.2547 33.0464C73.2547 33.5275 73.3438 33.8928 73.5219 34.1512C73.7001 34.4006 73.9674 34.5254 74.306 34.5254C74.6713 34.5254 74.9475 34.4006 75.1346 34.1423C75.3217 33.8928 75.4108 33.5097 75.4108 33.0018V30.231H76.0434H76.6759V35.4965H76.0879H75.4999V35.0332C75.0989 35.4609 74.6089 35.6747 74.0298 35.6747C73.4061 35.6747 72.9072 35.4609 72.5419 35.0421C72.1766 34.6234 71.9895 34.0532 71.9895 33.3315V30.231H72.6221H73.2547V33.0464Z" fill="white"/>
                        <path d="M77.4688 30.231H78.0479H78.6359V30.7834C79.1348 30.2933 79.714 30.0439 80.4 30.0528C81.1217 30.0528 81.7364 30.329 82.2443 30.8725C82.7521 31.4249 83.0016 32.0842 83.0016 32.8682C83.0016 33.6433 82.7521 34.3116 82.2443 34.855C81.7364 35.3985 81.1217 35.6747 80.3911 35.6747C79.7674 35.6747 79.215 35.4609 78.7339 35.0511V37.2606H78.1013H77.4688V30.231ZM80.1951 34.5343C80.6317 34.5343 80.9969 34.3739 81.291 34.0532C81.585 33.7324 81.7364 33.3404 81.7364 32.8682C81.7364 32.396 81.5939 31.9951 81.2999 31.6743C80.9969 31.3625 80.6317 31.2021 80.1951 31.2021C79.7585 31.2021 79.3932 31.3625 79.0992 31.6832C78.8052 32.004 78.6626 32.396 78.6626 32.8682C78.6626 33.3404 78.8052 33.7324 79.0992 34.0532C79.3932 34.3739 79.7585 34.5343 80.1951 34.5343Z" fill="white"/>
                        <path d="M84.16 34.8551C83.6165 34.3116 83.3403 33.6434 83.3403 32.8682C83.3403 32.0931 83.6165 31.4249 84.16 30.8814C84.7035 30.329 85.3628 30.0617 86.1379 30.0617C86.9131 30.0617 87.5813 30.3379 88.1248 30.8814C88.6683 31.4338 88.9445 32.0931 88.9445 32.8682C88.9445 33.6434 88.6683 34.3116 88.1248 34.8551C87.5813 35.3985 86.9131 35.6747 86.1379 35.6747C85.3628 35.6747 84.7035 35.4075 84.16 34.8551ZM87.2338 34.0532C87.5278 33.7414 87.6704 33.3493 87.6704 32.8771C87.6704 32.4049 87.5189 32.0129 87.2338 31.6922C86.9398 31.3714 86.5745 31.211 86.1379 31.211C85.7014 31.211 85.345 31.3714 85.051 31.6922C84.757 32.0129 84.6144 32.4049 84.6144 32.8771C84.6144 33.3493 84.757 33.7414 85.051 34.0532C85.345 34.365 85.7103 34.5254 86.1379 34.5254C86.5745 34.5254 86.9398 34.365 87.2338 34.0532Z" fill="white"/>
                        <path d="M104.527 28.4758H105.169H105.819V35.5054H105.169H104.527V28.4758Z" fill="white"/>
                        <path d="M106.826 30.2309H107.414H108.002V30.6853C108.412 30.2666 108.902 30.0527 109.463 30.0527C110.087 30.0527 110.586 30.2666 110.951 30.6853C111.316 31.1041 111.503 31.6743 111.503 32.396V35.4965H110.871H110.238V32.6811C110.238 32.1999 110.149 31.8347 109.971 31.5852C109.793 31.3357 109.534 31.211 109.187 31.211C108.821 31.211 108.545 31.3357 108.367 31.5941C108.189 31.8436 108.091 32.2267 108.091 32.7345V35.5054H107.458H106.826V30.2309Z" fill="white"/>
                        <path d="M117.589 33.7859C117.41 34.365 117.09 34.8194 116.608 35.1669C116.127 35.5055 115.584 35.6836 114.96 35.6836C114.185 35.6836 113.526 35.4075 112.991 34.864C112.448 34.3205 112.18 33.6523 112.18 32.8771C112.18 32.102 112.448 31.4338 112.991 30.8814C113.535 30.329 114.194 30.0617 114.96 30.0617C115.584 30.0617 116.145 30.2399 116.626 30.5874C117.107 30.9348 117.437 31.3981 117.615 31.9773H116.208C116.083 31.7278 115.922 31.5407 115.709 31.4071C115.495 31.2734 115.245 31.211 114.951 31.211C114.533 31.211 114.176 31.3714 113.891 31.6832C113.597 31.9951 113.454 32.3782 113.454 32.8326C113.454 33.3137 113.606 33.7146 113.9 34.0354C114.203 34.3561 114.568 34.5165 115.014 34.5165C115.254 34.5165 115.486 34.4541 115.7 34.3205C115.914 34.1868 116.074 34.0087 116.19 33.7859H117.589Z" fill="white"/>
                        <path d="M118.221 28.4758H118.854H119.486V30.6052C119.878 30.231 120.333 30.0528 120.858 30.0617C121.482 30.0617 121.972 30.2755 122.337 30.6943C122.703 31.113 122.89 31.6832 122.89 32.4049V35.5143H122.257H121.625V32.69C121.625 32.2089 121.536 31.8436 121.357 31.5941C121.179 31.3447 120.921 31.2199 120.573 31.2199C120.208 31.2199 119.932 31.3447 119.754 31.603C119.575 31.8525 119.486 32.2356 119.486 32.7435V35.5143H118.854H118.221V28.4758Z" fill="white"/>
                        <path d="M128.984 33.7859C128.806 34.365 128.485 34.8194 128.004 35.1669C127.523 35.5055 126.979 35.6836 126.356 35.6836C125.581 35.6836 124.921 35.4075 124.387 34.864C123.843 34.3205 123.576 33.6523 123.576 32.8771C123.576 32.102 123.843 31.4338 124.387 30.8814C124.93 30.329 125.59 30.0617 126.356 30.0617C126.979 30.0617 127.541 30.2399 128.022 30.5874C128.503 30.9348 128.833 31.3981 129.011 31.9773H127.603C127.478 31.7278 127.318 31.5407 127.104 31.4071C126.89 31.2734 126.641 31.211 126.347 31.211C125.928 31.211 125.572 31.3714 125.287 31.6832C124.993 31.9951 124.85 32.3782 124.85 32.8326C124.85 33.3137 125.001 33.7146 125.295 34.0354C125.598 34.3561 125.964 34.5165 126.409 34.5165C126.65 34.5165 126.881 34.4541 127.095 34.3205C127.309 34.1868 127.469 34.0087 127.585 33.7859H128.984Z" fill="white"/>
                        <path d="M131.978 35.6747C131.256 35.6747 130.641 35.3985 130.124 34.8551C129.617 34.3116 129.358 33.6434 129.358 32.8682C129.358 32.0931 129.617 31.4249 130.124 30.8814C130.632 30.329 131.256 30.0617 131.978 30.0617C132.681 30.0617 133.278 30.3112 133.759 30.819V30.2399H134.927V35.5055H134.348H133.759V34.9263C133.269 35.4253 132.673 35.6747 131.978 35.6747ZM132.182 31.2021C131.737 31.2021 131.372 31.3625 131.078 31.6832C130.784 32.004 130.632 32.396 130.632 32.8682C130.632 33.3404 130.784 33.7325 131.078 34.0532C131.372 34.3739 131.746 34.5343 132.182 34.5343C132.628 34.5343 132.993 34.3739 133.296 34.0532C133.59 33.7325 133.742 33.3404 133.742 32.8682C133.742 32.396 133.59 32.004 133.296 31.6832C132.993 31.3625 132.628 31.2021 132.182 31.2021Z" fill="white"/>
                        <path d="M135.63 30.231H136.21H136.798V30.7834C137.296 30.2933 137.876 30.0439 138.562 30.0528C139.283 30.0528 139.898 30.329 140.406 30.8725C140.914 31.4249 141.163 32.0842 141.163 32.8682C141.163 33.6433 140.914 34.3116 140.406 34.855C139.898 35.3985 139.283 35.6747 138.553 35.6747C137.929 35.6747 137.377 35.4609 136.896 35.0511V37.2606H136.263H135.63V30.231ZM138.348 34.5343C138.784 34.5343 139.15 34.3739 139.444 34.0532C139.738 33.7324 139.889 33.3404 139.889 32.8682C139.889 32.396 139.747 31.9951 139.453 31.6743C139.159 31.3536 138.793 31.1932 138.357 31.1932C137.92 31.1932 137.555 31.3536 137.261 31.6743C136.967 31.9951 136.824 32.3871 136.824 32.8593C136.824 33.3315 136.967 33.7235 137.261 34.0443C137.555 34.3739 137.92 34.5343 138.348 34.5343Z" fill="white"/>
                        <path d="M144.299 35.6747C143.542 35.6747 142.892 35.3985 142.357 34.855C141.822 34.3115 141.555 33.6433 141.555 32.8682C141.555 32.093 141.822 31.4248 142.357 30.8724C142.892 30.32 143.542 30.0527 144.299 30.0527C145.066 30.0527 145.716 30.3289 146.251 30.8724C146.785 31.4248 147.052 32.0841 147.052 32.8682C147.052 33.0553 147.035 33.2424 147.008 33.4206H142.901C142.972 33.6522 143.088 33.8571 143.257 34.0442C143.542 34.3561 143.907 34.5164 144.335 34.5164C144.602 34.5164 144.843 34.4541 145.066 34.3293C145.288 34.2046 145.449 34.0442 145.556 33.8304H146.892C146.723 34.3917 146.402 34.8372 145.93 35.1668C145.458 35.5143 144.914 35.6747 144.299 35.6747ZM145.734 32.4138C145.671 32.1376 145.547 31.897 145.36 31.6832C145.074 31.3624 144.727 31.2021 144.299 31.2021C143.881 31.2021 143.524 31.3624 143.239 31.6832C143.052 31.897 142.927 32.1376 142.856 32.4138H145.734Z" fill="white"/>
                        <path d="M98.7627 29.2954L97.3371 29.7766C97.3371 29.7766 96.8649 29.046 95.7156 28.3243C95.7156 28.3243 97.3728 28.3065 98.7627 29.2954Z" fill="white"/>
                        <path d="M96.6332 37.3764C96.5085 37.3764 96.4194 37.3675 96.3481 37.3675H96.2858C93.7465 37.0557 91.8488 34.9352 91.8577 32.4316C91.8577 29.6964 94.0851 27.469 96.8203 27.469C99.5556 27.469 101.783 29.6964 101.783 32.4316C101.783 33.4473 101.462 34.4452 100.865 35.3183H100.856C100.723 35.55 100.215 36.04 99.912 36.2806C99.6269 36.5033 99.3239 36.6993 98.9408 36.8864C98.5221 37.0913 98.0588 37.2339 97.5866 37.3052C97.1856 37.3586 96.856 37.3764 96.6332 37.3764ZM96.8203 27.7808C94.2544 27.7808 92.1695 29.8657 92.1695 32.4316C92.1695 34.7838 93.9514 36.7706 96.3125 37.0646H96.3659C96.5352 37.0735 96.9451 37.0913 97.542 36.9933C97.9786 36.9221 98.4152 36.7884 98.8072 36.6013C99.1636 36.4231 99.4576 36.2449 99.7159 36.04C100.277 35.5945 100.58 35.1847 100.607 35.158C100.607 35.158 100.607 35.158 100.607 35.1491C101.177 34.3294 101.471 33.385 101.471 32.4316C101.48 29.8657 99.3863 27.7808 96.8203 27.7808Z" fill="white"/>
                        <path d="M100.705 35.2114C100.705 35.2114 100.42 35.6747 99.8138 36.1558C99.5377 36.3786 99.2436 36.5568 98.8694 36.7439C98.415 36.9666 97.9607 37.0913 97.5597 37.1537C96.8559 37.2606 96.3391 37.1894 96.3391 37.1894C96.3391 37.1894 98.4329 35.7015 98.4329 32.9751C98.4418 32.3247 98.219 31.1754 97.8092 30.5428L99.5109 29.9637C99.5109 29.9637 100.58 31.0863 100.874 32.8147C100.874 32.8058 101.097 34.1779 100.705 35.2114Z" fill="white"/>
                    </svg>

                    <svg width="3" height="55" viewBox="0 0 3 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.45455 0H0.164795V54.2504H2.45455V0Z" fill="white"/>
                    </svg>


                    <svg width="94" height="46" viewBox="0 0 94 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87.3446 44.1919C87.3446 43.9246 87.1308 43.7108 86.8546 43.7108H85.9102V45.1541H86.1685V44.6819H86.6942L87.0595 45.1541H87.3891L86.9971 44.6552C87.202 44.5839 87.3446 44.4146 87.3446 44.1919ZM86.1774 44.4235V43.9602H86.8635C86.9882 43.9602 87.0951 44.0582 87.0951 44.1919C87.0951 44.3166 86.9971 44.4235 86.8635 44.4235H86.1774Z" fill="white"/>
                        <path d="M86.5694 42.7842C85.6606 42.7842 84.9211 43.5237 84.9211 44.4325C84.9211 45.3412 85.6606 46.0807 86.5694 46.0807C87.4782 46.0807 88.2177 45.3412 88.2177 44.4325C88.2177 43.5237 87.4782 42.7842 86.5694 42.7842ZM86.5694 45.8223C85.8032 45.8223 85.1795 45.1987 85.1795 44.4325C85.1795 43.6662 85.8032 43.0426 86.5694 43.0426C87.3356 43.0426 87.9593 43.6662 87.9593 44.4325C87.9593 45.1987 87.3356 45.8223 86.5694 45.8223Z" fill="white"/>
                        <path d="M21.3601 37.4028H15.3818C15.2303 37.4028 15.0343 37.5008 14.9452 37.6166L11.2121 42.5347C11.123 42.6505 10.9716 42.6505 10.8825 42.5347L7.15826 37.6166C7.06916 37.5008 6.87316 37.4028 6.7217 37.4028H0.752283C0.60082 37.4028 0.476074 37.5275 0.476074 37.6701V45.7154C0.476074 45.8669 0.60082 45.9827 0.752283 45.9827H5.01996C5.17143 45.9827 5.29616 45.858 5.29616 45.7154V41.3764C5.29616 41.225 5.36744 41.2072 5.45654 41.323L8.83326 45.7778C8.92236 45.9025 9.11837 45.9916 9.26984 45.9916H12.8426C12.994 45.9916 13.1901 45.8936 13.2791 45.7778L16.6559 41.323C16.745 41.2072 16.8163 41.225 16.8163 41.3764V45.7154C16.8163 45.8669 16.941 45.9827 17.0835 45.9827H21.3601C21.5116 45.9827 21.6274 45.858 21.6274 45.7154V37.6701C21.6274 37.5275 21.5116 37.4028 21.3601 37.4028Z" fill="white"/>
                        <path d="M62.879 37.4028H47.0467C46.8952 37.4028 46.6992 37.5008 46.6101 37.6166L45.9597 38.463C45.8706 38.5788 45.7993 38.8016 45.7993 38.953V44.4324C45.7993 44.5839 45.8706 44.7977 45.9597 44.9225L46.6101 45.7689C46.6992 45.8847 46.8952 45.9827 47.0467 45.9827H62.879C63.0305 45.9827 63.1463 45.858 63.1463 45.7065V43.5504C63.1463 43.3989 63.0215 43.2831 62.879 43.2831H50.86C50.7085 43.2831 50.5838 43.1584 50.5838 43.0069V40.3697C50.5838 40.2182 50.7085 40.1024 50.86 40.1024H62.879C63.0305 40.1024 63.1463 39.9776 63.1463 39.8351V37.679C63.1552 37.5275 63.0305 37.4028 62.879 37.4028Z" fill="white"/>
                        <path d="M77.8111 40.7528C77.6953 40.6548 77.7042 40.5211 77.8378 40.4498L83.3796 37.5275C83.5132 37.4562 83.4954 37.4028 83.3529 37.4028H76.8845C76.733 37.4028 76.5014 37.4562 76.3766 37.5275L70.5141 40.6191C70.3805 40.6904 70.2736 40.6191 70.2736 40.4766V37.679C70.2736 37.5275 70.1488 37.4117 70.0063 37.4117H65.7297C65.5782 37.4117 65.4624 37.5275 65.4624 37.679V45.7332C65.4624 45.8847 65.5872 46.0005 65.7297 46.0005H70.0063C70.1578 46.0005 70.2736 45.8758 70.2736 45.7332V44.7264C70.2736 44.575 70.3805 44.3968 70.5141 44.3255L73.8641 42.5614C73.9978 42.4901 74.1938 42.5169 74.3185 42.606L78.2566 45.8312C78.3724 45.9292 78.5862 46.0005 78.7377 46.0005H83.9498C84.1012 46.0005 84.128 45.9203 84.0122 45.8312L77.8111 40.7528Z" fill="white"/>
                        <path d="M38.1368 37.6166C38.0477 37.5008 37.8517 37.4028 37.7002 37.4028H30.1093C29.9578 37.4028 29.7618 37.5008 29.6727 37.6166L23.4894 45.7689C23.4003 45.8847 23.4449 45.9827 23.5964 45.9827H28.3006C28.4521 45.9827 28.6481 45.8847 28.7372 45.7689L29.5836 44.6552C29.6727 44.5393 29.8687 44.4413 30.0202 44.4413H37.7893C37.9408 44.4413 38.1368 44.5393 38.2259 44.6552L39.0634 45.7689C39.1525 45.8847 39.3485 45.9827 39.5 45.9827H44.2042C44.3557 45.9827 44.4002 45.8847 44.3111 45.7689L38.1368 37.6166ZM36.2034 42.0714H31.6417C31.4902 42.0714 31.4457 41.9734 31.5348 41.8576L32.9425 39.9865C33.0316 39.8707 33.2276 39.7727 33.3791 39.7727H34.466C34.6175 39.7727 34.8135 39.8707 34.9026 39.9865L36.3103 41.8576C36.3994 41.9734 36.3549 42.0714 36.2034 42.0714Z" fill="white"/>
                        <path d="M76.3321 11.0393H79.6732C79.7623 11.0393 79.8692 10.9681 79.896 10.879L80.5374 8.90995C80.5642 8.82086 80.6711 8.74958 80.7602 8.74958H83.54C83.638 8.74958 83.7805 8.77631 83.8696 8.81195L84.6626 9.1416C84.7517 9.17724 84.8764 9.15942 84.9477 9.08814L86.9791 7.21713C87.0503 7.15477 87.0325 7.06567 86.9434 7.03003L84.5556 6.03216C84.4666 5.99652 84.3864 5.88961 84.3686 5.7916L83.9676 3.22564C83.9498 3.13655 84.0122 3.092 84.1013 3.11873L86.6227 4.17897C86.7118 4.2146 86.7652 4.17006 86.7563 4.08096L86.3732 1.66647C86.3554 1.56846 86.3999 1.44373 86.4623 1.37245L87.0414 0.766598C87.1038 0.695321 87.0949 0.606225 87.0147 0.552768L86.4267 0.205294C86.3465 0.160746 86.2039 0.142927 86.1148 0.178566L82.8361 1.47045C82.747 1.50609 82.6045 1.50609 82.5154 1.46154L81.4908 1.03389C81.4017 0.998247 81.3037 1.04279 81.2769 1.13189L81.1789 1.43482C81.1522 1.52391 81.1878 1.63974 81.2591 1.7021L81.8472 2.12976C81.9273 2.18322 81.9362 2.28123 81.865 2.3525L81.3571 2.86035C81.2947 2.92272 81.1611 2.94944 81.072 2.91381L79.789 2.37923C79.7 2.34359 79.6554 2.23668 79.6821 2.14758L80.1632 0.677502C80.19 0.588406 80.1454 0.481491 80.0563 0.445853L79.5307 0.223113C79.4416 0.187475 79.3436 0.232023 79.3168 0.321119L78.6932 2.23668C78.6664 2.32577 78.6575 2.47724 78.6842 2.56633L79.0852 4.09878C79.1119 4.18788 79.103 4.33934 79.0763 4.42843L77.6775 8.70503C77.6507 8.79413 77.5438 8.87431 77.4547 8.87431H76.6974C76.5994 8.87431 76.5103 8.9545 76.4925 9.0436L76.1628 10.8701C76.1718 10.9681 76.2341 11.0393 76.3321 11.0393Z" fill="white"/>
                        <path d="M87.8879 2.59305L88.5116 2.24557C88.5918 2.20103 88.6096 2.10302 88.5561 2.03174L87.9414 1.28334C87.879 1.21206 87.781 1.20315 87.7097 1.27443L87.6652 1.31898C87.5939 1.38135 87.5583 1.51499 87.5761 1.61299L87.7186 2.51286C87.7275 2.60196 87.8077 2.6376 87.8879 2.59305Z" fill="white"/>
                        <path d="M87.879 3.56423L88.0483 4.62447C88.0572 4.72247 88.1463 4.82939 88.2354 4.86502L90.0797 5.64016C90.1688 5.6758 90.2668 5.78271 90.3024 5.87181L90.4806 6.32619C90.5163 6.41529 90.6232 6.47766 90.7123 6.47766L90.9529 6.45984C91.0509 6.45093 91.1489 6.37965 91.1756 6.29056L91.7191 4.61556C91.7547 4.52646 91.7102 4.40173 91.6389 4.34827L90.8281 3.71569C90.7568 3.65332 90.6856 3.52859 90.6767 3.43949L90.543 2.11196C90.5341 2.01396 90.4539 1.97832 90.3737 2.02287L88.0038 3.33258C87.9236 3.3593 87.8612 3.47513 87.879 3.56423Z" fill="white"/>
                        <path d="M93.8573 3.84932L91.7903 2.64653C91.7101 2.60198 91.6477 2.63762 91.6655 2.73562L91.6923 2.96727C91.7012 3.06528 91.7725 3.19001 91.8437 3.24347L92.9663 4.1077C93.0465 4.16115 93.0822 4.28589 93.0554 4.37498L92.0843 7.35078C92.0576 7.43988 91.9506 7.52006 91.8615 7.52897L88.859 7.70717C88.761 7.71608 88.6452 7.78735 88.6006 7.86754L87.2553 10.0415C87.2107 10.1217 87.2375 10.2197 87.3266 10.2553L87.9591 10.5226C88.0482 10.5582 88.0928 10.6651 88.0661 10.7542L87.3978 12.7856C87.3711 12.8747 87.2731 12.9193 87.184 12.8836L85.6426 12.2332C85.5536 12.1976 85.4021 12.162 85.313 12.162H84.5379C84.4399 12.162 84.3775 12.2421 84.3953 12.3312L84.9299 15.7436C84.9477 15.8416 85.019 15.9574 85.0992 16.002L87.6829 17.6146C87.7631 17.6681 87.7542 17.7126 87.6562 17.7126L85.3665 17.8463C85.2684 17.8552 85.1615 17.9265 85.1259 18.0155L82.9876 22.9336C82.952 23.0227 82.8985 23.1653 82.8807 23.2633L80.6533 32.7609C80.6355 32.85 80.6533 32.9925 80.7068 33.0727L81.2859 33.937C81.3393 34.0172 81.3037 34.0795 81.2146 34.0795H80.386C80.288 34.0795 80.1722 34.0172 80.1187 33.937L79.6732 33.2777C79.6198 33.1975 79.5931 33.0638 79.6109 32.9658L81.7492 23.3078C81.767 23.2187 81.7492 23.0673 81.7046 22.9871L80.6444 20.9201C80.5998 20.8399 80.6177 20.7062 80.68 20.635L83.7984 17.0266C83.8608 16.9553 83.8964 16.8217 83.8875 16.7237L83.2014 12.3669C83.1836 12.2778 83.0945 12.1976 83.0054 12.1976L76.3143 12.153C76.2163 12.153 76.145 12.2332 76.145 12.3223V12.4114C76.145 12.5094 76.0916 12.6342 76.0203 12.7054L64.9635 22.9604C64.8922 23.0227 64.7586 23.0762 64.6695 23.0762H63.2261C63.1281 23.0762 62.9945 23.1296 62.9321 23.192L62.2907 23.78C62.2194 23.8424 62.2015 23.9671 62.255 24.0473L63.6627 26.4796C63.7073 26.5598 63.7251 26.7024 63.6895 26.7915L61.2126 33.9013C61.1859 33.9904 61.1948 34.133 61.2482 34.2132L61.667 34.9348C61.7115 35.015 61.8363 35.0863 61.9254 35.0863H66.5762C66.6742 35.0863 66.7633 35.0061 66.7811 34.917L66.8613 34.5161C66.8791 34.427 66.8435 34.2934 66.7811 34.2221L65.2219 32.6005C65.1595 32.5293 65.1774 32.4491 65.2664 32.4223L71.9397 30.4088C72.0288 30.382 72.0556 30.3019 71.9843 30.2395L70.3093 28.5467C70.2469 28.4843 70.1222 28.4665 70.042 28.511L64.6695 31.7987C64.5893 31.8521 64.4824 31.959 64.4379 32.0392L63.4222 33.9013C63.3776 33.9815 63.2618 34.0528 63.1727 34.0528H62.4599C62.3619 34.0528 62.3174 33.9815 62.3619 33.8924L64.7319 28.5823C64.7675 28.4932 64.8744 28.413 64.9724 28.3952L69.2401 27.6646C69.3292 27.6468 69.4272 27.5577 69.445 27.4686L70.434 22.8891C70.4518 22.8 70.4073 22.6663 70.3449 22.604L69.3738 21.7398C69.3025 21.6774 69.2579 21.5527 69.2847 21.4546L69.454 20.5726C69.4718 20.4746 69.543 20.4568 69.6143 20.5191L71.5299 22.2209C71.6012 22.2832 71.6724 22.408 71.6902 22.506L72.8307 29.3218C72.8485 29.4109 72.8931 29.4198 72.9376 29.3396L74.5057 26.2836C74.5502 26.1945 74.666 26.1411 74.7551 26.1589L76.84 26.5153C76.9291 26.5331 77.036 26.4707 77.0716 26.3816L77.6864 24.9116C77.722 24.8225 77.7398 24.6799 77.7309 24.5819L76.2876 15.7792C76.2698 15.6812 76.3143 15.6723 76.3767 15.7436L79.9049 19.9311C79.9672 20.0024 79.9851 20.136 79.9494 20.2251L78.8446 23.0584C78.809 23.1475 78.809 23.29 78.8536 23.3791L79.9049 25.8916C79.9405 25.9807 79.9494 26.1233 79.9316 26.2213L78.3012 33.8924C78.2833 33.9815 78.3012 34.1241 78.3546 34.2132L78.7734 34.9348C78.8179 35.015 78.9338 35.0863 79.0318 35.0863H83.6647C83.7627 35.0863 83.8607 35.015 83.8964 34.917L84.03 34.4983C84.0567 34.4092 84.03 34.2844 83.9676 34.2132L81.8561 32.0214C81.7937 31.9501 81.7759 31.8254 81.8115 31.7452L84.2706 26.5598C84.3062 26.4707 84.3508 26.3282 84.3686 26.2302L84.8051 22.6753C84.8141 22.5862 84.8764 22.4436 84.9388 22.3723L88.4937 18.1403C88.5561 18.069 88.6006 17.9354 88.6006 17.8374L88.4848 14.0151C88.4848 13.9171 88.4314 13.7746 88.3779 13.7033L88.1195 13.3469C88.0661 13.2667 88.0393 13.1331 88.075 13.044L88.6987 11.1374C88.7254 11.0483 88.7165 10.9057 88.6719 10.8255L88.2799 10.1395C88.2354 10.0593 88.2621 9.96129 88.3512 9.92565L92.5565 8.06355C92.6456 8.02791 92.7347 7.921 92.7703 7.8319L93.9998 4.08988C93.9731 4.00969 93.9375 3.89387 93.8573 3.84932Z" fill="white"/>
                        <path d="M83.7895 9.70294H81.4641C81.3661 9.70294 81.2681 9.77422 81.2414 9.86331L80.9117 10.8701C80.8761 10.9592 80.9295 11.0305 81.0275 11.0305H84.0033C84.1013 11.0305 84.1637 10.9503 84.1459 10.8612L83.9855 9.86331C83.9766 9.78313 83.8875 9.70294 83.7895 9.70294Z" fill="white"/>
                    </svg>
                </div>

                <div className="flex max-w-[543px] gap-[121px] uppercase items-center justify-center">
                    <div className="text-sm font-extrabold h-[19px] w-[95]">
                        Regístrate
                    </div>
                    <div className="flex justify-between gap-[10px]">
                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] h-[34px]" >
                            <svg width="9.36" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.8104 18.1654V9.94758H9.58277L9.99486 6.73003H6.8104V4.68059C6.8104 3.75212 7.06909 3.11643 8.40163 3.11643H10.0901V0.247808C9.26857 0.159765 8.44279 0.117254 7.61655 0.12047C5.16604 0.12047 3.48357 1.61644 3.48357 4.36274V6.72402H0.729248V9.94156H3.48958V18.1654H6.8104Z" fill="#84754E"/>
                            </svg>
                        </button>

                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] h-[34px]" >
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73127 0.174436C6.6934 0.130143 7.00017 0.1203 9.45102 0.1203C11.9019 0.1203 12.2086 0.130963 13.17 0.174436C14.1313 0.217908 14.7875 0.371291 15.3616 0.593574C15.9628 0.820779 16.5083 1.17594 16.9594 1.63527C17.4188 2.08558 17.7731 2.63021 17.9995 3.23226C18.2226 3.80642 18.3752 4.46261 18.4194 5.42228C18.4637 6.38606 18.4736 6.69282 18.4736 9.14286C18.4736 11.5937 18.4629 11.9005 18.4194 12.8626C18.376 13.8223 18.2226 14.4785 17.9995 15.0526C17.7731 15.6548 17.4182 16.2003 16.9594 16.6513C16.5083 17.1106 15.9628 17.4649 15.3616 17.6913C14.7875 17.9144 14.1313 18.067 13.1716 18.1113C12.2086 18.1556 11.9019 18.1654 9.45102 18.1654C7.00017 18.1654 6.6934 18.1548 5.73127 18.1113C4.7716 18.0678 4.11541 17.9144 3.54125 17.6913C2.93913 17.4649 2.3936 17.11 1.94262 16.6513C1.4836 16.2007 1.12838 15.6554 0.901741 15.0535C0.679458 14.4793 0.526895 13.8231 0.482602 12.8634C0.43831 11.8997 0.428467 11.5929 0.428467 9.14286C0.428467 6.692 0.43913 6.38524 0.482602 5.42392C0.526074 4.46261 0.679458 3.80642 0.901741 3.23226C1.12872 2.63028 1.4842 2.08501 1.94344 1.63445C2.39378 1.17553 2.93877 0.820322 3.54043 0.593574C4.11459 0.371291 4.77078 0.218728 5.73045 0.174436H5.73127ZM13.097 1.7985C12.1455 1.75502 11.86 1.746 9.45102 1.746C7.042 1.746 6.75656 1.75502 5.80509 1.7985C4.92498 1.83869 4.44761 1.98551 4.12936 2.10936C3.70858 2.27341 3.40755 2.46781 3.09176 2.7836C2.79241 3.07482 2.56204 3.42935 2.41753 3.82119C2.29368 4.13944 2.14685 4.61681 2.10666 5.49692C2.06319 6.44839 2.05417 6.73383 2.05417 9.14286C2.05417 11.5519 2.06319 11.8373 2.10666 12.7888C2.14685 13.6689 2.29368 14.1463 2.41753 14.4645C2.56189 14.8558 2.79238 15.2109 3.09176 15.5021C3.38294 15.8015 3.7381 16.032 4.12936 16.1763C4.44761 16.3002 4.92498 16.447 5.80509 16.4872C6.75656 16.5307 7.04118 16.5397 9.45102 16.5397C11.8609 16.5397 12.1455 16.5307 13.097 16.4872C13.9771 16.447 14.4544 16.3002 14.7727 16.1763C15.1935 16.0123 15.4945 15.8179 15.8103 15.5021C16.1097 15.2109 16.3402 14.8558 16.4845 14.4645C16.6084 14.1463 16.7552 13.6689 16.7954 12.7888C16.8389 11.8373 16.8479 11.5519 16.8479 9.14286C16.8479 6.73383 16.8389 6.44839 16.7954 5.49692C16.7552 4.61681 16.6084 4.13944 16.4845 3.82119C16.3205 3.40041 16.1261 3.09938 15.8103 2.7836C15.519 2.48427 15.1645 2.2539 14.7727 2.10936C14.4544 1.98551 13.9771 1.83869 13.097 1.7985ZM8.2986 11.9243C8.9422 12.1922 9.65885 12.2283 10.3262 12.0266C10.9935 11.8248 11.57 11.3976 11.9573 10.818C12.3447 10.2383 12.5187 9.5422 12.4498 8.84848C12.3809 8.15475 12.0733 7.50647 11.5795 7.01435C11.2648 6.69978 10.8841 6.4589 10.4651 6.30907C10.0461 6.15925 9.59902 6.10419 9.15615 6.14787C8.71327 6.19155 8.2856 6.33289 7.9039 6.56169C7.52221 6.7905 7.19599 7.10109 6.94874 7.4711C6.70149 7.84111 6.53935 8.26134 6.474 8.70154C6.40865 9.14174 6.44171 9.59094 6.57081 10.0168C6.6999 10.4427 6.92182 10.8347 7.22058 11.1645C7.51934 11.4943 7.88752 11.7538 8.2986 11.9243ZM6.17173 5.86357C6.60238 5.43293 7.11362 5.09132 7.67628 4.85826C8.23895 4.6252 8.842 4.50524 9.45102 4.50524C10.06 4.50524 10.6631 4.6252 11.2258 4.85826C11.7884 5.09132 12.2997 5.43293 12.7303 5.86357C13.161 6.29421 13.5026 6.80546 13.7356 7.36812C13.9687 7.93078 14.0886 8.53384 14.0886 9.14286C14.0886 9.75188 13.9687 10.3549 13.7356 10.9176C13.5026 11.4803 13.161 11.9915 12.7303 12.4221C11.8606 13.2919 10.681 13.7805 9.45102 13.7805C8.22105 13.7805 7.04146 13.2919 6.17173 12.4221C5.30201 11.5524 4.81341 10.3728 4.81341 9.14286C4.81341 7.91288 5.30201 6.73329 6.17173 5.86357ZM15.1172 5.1959C15.2239 5.09523 15.3093 4.97417 15.3684 4.8399C15.4275 4.70562 15.4591 4.56085 15.4612 4.41416C15.4633 4.26747 15.436 4.12184 15.3809 3.9859C15.3257 3.84996 15.2439 3.72646 15.1401 3.62272C15.0364 3.51899 14.9129 3.43712 14.7769 3.38197C14.641 3.32682 14.4954 3.2995 14.3487 3.30164C14.202 3.30378 14.0572 3.33533 13.923 3.39442C13.7887 3.45351 13.6676 3.53894 13.5669 3.64566C13.3712 3.8532 13.264 4.12888 13.2681 4.41416C13.2723 4.69944 13.3875 4.97188 13.5892 5.17362C13.791 5.37537 14.0634 5.49055 14.3487 5.49471C14.634 5.49887 14.9096 5.39168 15.1172 5.1959Z" fill="#84754E"/>
                            </svg>
                        </button>

                        <button className="flex rounded-full border-2 border-[#84754E] items-center justify-center w-[34px] h-[34px]" >
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.81746 0.924805H9.91784C10.845 0.928188 15.5426 0.962025 16.8092 1.30265C17.1922 1.4066 17.5411 1.60923 17.8211 1.89029C18.1012 2.17134 18.3026 2.52098 18.4052 2.90425C18.5191 3.33285 18.5992 3.90018 18.6534 4.48555L18.6646 4.60285L18.6894 4.89611L18.6985 5.01341C18.7718 6.0443 18.7808 7.00977 18.7819 7.22069V7.30528C18.7808 7.52409 18.7707 8.55498 18.6894 9.62873L18.6804 9.74716L18.6703 9.86446C18.6139 10.5096 18.5304 11.1503 18.4052 11.6217C18.3029 12.0051 18.1016 12.3549 17.8215 12.636C17.5414 12.9171 17.1923 13.1197 16.8092 13.2233C15.5009 13.5752 10.528 13.6 9.83889 13.6012H9.67873C9.33021 13.6012 7.88877 13.5944 6.37739 13.5425L6.18565 13.5357L6.08753 13.5312L5.89466 13.5233L5.70179 13.5154C4.44983 13.4602 3.25765 13.3711 2.70837 13.2222C2.32544 13.1186 1.97644 12.9163 1.69634 12.6354C1.41624 12.3545 1.21487 12.0049 1.1124 11.6217C0.987208 11.1514 0.903744 10.5096 0.84735 9.86446L0.838327 9.74603L0.829303 9.62873C0.773639 8.86447 0.742794 8.09861 0.736816 7.33235L0.736816 7.19362C0.739072 6.95112 0.748095 6.1131 0.809001 5.18823L0.816897 5.07206L0.82028 5.01341L0.829303 4.89611L0.854117 4.60285L0.865396 4.48555C0.919535 3.90018 0.999615 3.33172 1.11353 2.90425C1.21582 2.52082 1.41712 2.17102 1.69723 1.88992C1.97734 1.60882 2.32643 1.40629 2.7095 1.30265C3.25878 1.15602 4.45096 1.06579 5.70292 1.0094L5.89466 1.0015L6.08865 0.994734L6.18565 0.99135L6.37852 0.983455C7.45194 0.948913 8.52581 0.929737 9.59978 0.925933H9.81746V0.924805ZM7.95531 4.54533V9.97951L12.644 7.26355L7.95531 4.54533Z" fill="#84754E"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
