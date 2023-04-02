<template>
    <footer>
        <div class="footer">
            <div class="row flex">
                <a href="https://www.linkedin.com/in/romain-camerlynck-b974a6177/" target="_blank">
                    <svg width="54px" height="54px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="24" cy="24" r="20" fill="#0077B5"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
                                fill="white"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
                                fill="white"></path>
                        </g>
                    </svg>
                </a>
                <a href="https://github.com/ParvaCamer" target="_blank">
                    <svg width="48px" height="48px" viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>Github-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs> </defs>
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
                                    <path
                                        d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                                        id="Github"> </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>

            <div class="row">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">My Resume</a></li>
                    <li><a href="#">My Projects</a></li>
                </ul>
            </div>

            <div class="row">
                Designed By : Camerlynck Romain - {{ getFullYear }}
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        getFullYear() {
            const date = new Date();
            return date.getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    background: #000;
    padding: 30px 0px;
    font-family: 'Play', sans-serif;
    text-align: center;

    .row {
        width: 100%;
        margin: 1% 0%;
        padding: 0.6% 0%;
        color: gray;
        font-size: 0.8em;

        &.flex {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        a {
            text-decoration: none;
            color: gray;
            transition: 0.5s;

            &:hover {
                color: #fff;
            }

            img {
                width: 70px;
            }
        }

        ul {
            width: 100%;
            padding: 0;

            li {
                display: inline-block;
                margin: 0px 30px;
            }
        }
    }
}

@media (max-width:720px) {
    .footer {
        text-align: left;
        padding: 5%;
    }

    .footer .row ul li {
        display: block;
        margin: 10px 0px;
        text-align: left;
    }

    .footer .row a i {
        margin: 0% 3%;
    }
}</style>